"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "../lib/i18n";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "@/app/context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1-second delay for smoother transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        {isLoading ? (
          // Loading Screen
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black text-lg text-white transition-opacity duration-500">
            <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-white"></div>
          </div>
        ) : (
          // Main Content
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
