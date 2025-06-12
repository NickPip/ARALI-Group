"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/Features";
import Link from "next/link";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Single Cover Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/kidgarden/DJI_20250519161702_0598_D.jpg"
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
              {t("blogFive.title")}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogFive.executor")}:
                </span>{" "}
                {t("blogFive.executorName")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogFive.date")}:
                </span>{" "}
                {t("blogFive.dateValue")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogFive.category")}:
                </span>{" "}
                {t("blogFive.categoryName")}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("blogFive.introduction")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogFive.details")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogFive.section1")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogFive.section2")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogFive.section3")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogFive.section4")}
              </p>

              {/* Gallery and Video Gallery Links */}
              <div className="mt-12 flex justify-center gap-4">
                <Link
                  href="/blog/blog-details3/gallery"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSix.viewGallery")}
                </Link>
                <Link
                  href="/blog/blog-details3/videos"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSix.viewVideoGallery")}
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
