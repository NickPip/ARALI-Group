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

import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";
import ToasterContext from "@/app/context/ToastContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${oswald.className}`}>
        {isLoading ? (
          // Logo Preloader
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white text-black transition-opacity duration-500">
            <Image
              src="/images/logo/arali_logo_high_res.png"
              alt="AraliGroup Logo"
              width={80}
              height={80}
              // className="animate-spin"
              priority
            />
          </div>
        ) : (
          // Main content
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
