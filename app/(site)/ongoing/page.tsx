"use client";
import useOngoingData from "@/components/Ongoing/ongoingData";
import BlogItem from "@/components/Blog/BlogItem";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OngoingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const OngoingData = useOngoingData();
  const { t, i18n } = useTranslation();

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

  const filteredOngoingData = OngoingData.filter((project) => {
    const title =
      typeof project.title === "object"
        ? project.title[i18n.language as keyof typeof project.title] ||
          project.title.en
        : project.title;
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      {/* Header Background Overlay - Shows when not scrolled */}
      <div
        className={`fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Title Section */}
      <section className="bg-white pb-8 pt-20 dark:bg-gray-900 sm:pb-12 sm:pt-28 md:pb-16 md:pt-32">
        <div className="container mx-auto flex flex-col items-center px-4">
          <h1 className="mb-2 text-center text-5xl font-extrabold tracking-tight text-black dark:text-white">
            {t("ongoing.title")}
          </h1>
          <p className="mb-8 max-w-2xl text-center text-lg text-black dark:text-white">
            {t("ongoing.description")}
          </p>
          {/* Search Bar */}
          <div className="my-8 flex w-full justify-center">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-white pb-16 dark:bg-gray-900 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          {filteredOngoingData.length === 0 ? (
            <div className="mt-16 flex flex-col items-center">
              <svg
                className="mb-4 h-16 w-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
              <p className="text-xl text-gray-500">{t("blog.noResults")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {filteredOngoingData.map((project, index) => (
                <BlogItem key={index} blog={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OngoingPage;
