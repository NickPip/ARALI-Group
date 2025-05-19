"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/Features";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const SingleBlogPage = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/blog6/blog6-1.jpg",
    "/images/blog6/blog6-2.jpg",
    "/images/blog6/blog6-3.jpg",
    "/images/blog6/blog6-4.jpg",
    "/images/blog6/blog6-5.jpg",
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
      {/* Cover Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/blog6/DJI_20250517160324_0402_D.jpg"
          alt="Project cover image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <section className="relative bg-white pb-20 dark:bg-gray-900 lg:pb-25 xl:pb-30">
        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 mt-8 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
              {t("blogSix.title")}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.executor")}:
                </span>{" "}
                Arali Group
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.location")}:
                </span>{" "}
                {t("blogSix.locationValue")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.category")}:
                </span>{" "}
                {t("blogSix.categoryValue")}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("blogSix.intro")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.details")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.section1")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.section2")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.section3")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.section4")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSix.section5")}
              </p>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/ongoing/blog-details6/gallery"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSix.viewGallery")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </>
  );
};

export default SingleBlogPage;
