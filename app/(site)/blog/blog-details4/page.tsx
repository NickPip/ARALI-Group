"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/Features";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SingleBlogPage = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/blog5/blog5-1.jpg",
    "/images/blog5/blog5-2.jpg",
    "/images/blog5/blog5-3.jpg",
    "/images/blog5/blog5-4.jpg",
    "/images/blog5/blog5-5.jpg",
    "/images/blog5/blog5-6.jpg",
    "/images/blog5/blog5-7.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  return (
    <>
      {/* Hero Image Carousel */}
      <div className="relative h-[80vh] w-full">
        <div className="relative h-full w-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute h-full w-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Project hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentSlide ? "w-6 bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="relative bg-white pb-20 dark:bg-gray-900 lg:pb-25 xl:pb-30">
        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 mt-8 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
              {t("blogThree.title")}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogThree.executor")}:
                </span>{" "}
                {t("blogThree.executorName")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogThree.date")}:
                </span>{" "}
                {t("blogThree.dateValue")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogThree.category")}:
                </span>{" "}
                {t("blogThree.categoryName")}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("blogThree.introduction")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogThree.details")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogThree.section1")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogThree.section2")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogThree.section3")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogThree.section4")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Feature />
    </>
  );
};

export default SingleBlogPage;
