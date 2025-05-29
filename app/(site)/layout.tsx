"use client";

import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "../lib/i18n";
import "../globals.css";

import { Oswald } from "next/font/google";
import ToasterContext from "@/app/context/ToastContext";
import DynamicGlassHeader from "@/components/HeaderVariants/DynamicGlassHeader";
import { LoadingProvider } from "@/app/context/LoadingContext";
import ConstructionLoader from "@/components/Loading/ConstructionLoader";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${oswald.className}`}>
        {isLoading ? (
          <ConstructionLoader />
        ) : (
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <LoadingProvider>
              <Lines />
              <DynamicGlassHeader />
              <ToasterContext />
              {children}
              <Footer />
              <ScrollToTop />
            </LoadingProvider>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
