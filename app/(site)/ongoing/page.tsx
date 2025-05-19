"use client";
import useOngoingData from "@/components/Ongoing/ongoingData";
import BlogItem from "@/components/Blog/BlogItem";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OngoingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const OngoingData = useOngoingData();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Background Overlay - Shows when not scrolled */}
      <div
        className={`fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Title Section */}
      <section className="bg-white pb-8 pt-32 dark:bg-gray-900 sm:pb-12 sm:pt-40 md:pb-16 md:pt-48">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {t("ongoing.ourwork")}
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-white pb-16 dark:bg-gray-900 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {OngoingData.map((project, index) => (
              <BlogItem key={index} blog={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OngoingPage;
