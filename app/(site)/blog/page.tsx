"use client";
import useBlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const BlogData = useBlogData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
      <section className="bg-white pb-16 pt-48 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-6xl font-bold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-white md:text-7xl lg:text-7xl">
            {t("blog.ourwork")}
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-white pb-32 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((post, index) => (
              <BlogItem key={index} blog={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
