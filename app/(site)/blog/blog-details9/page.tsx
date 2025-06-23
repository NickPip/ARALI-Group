"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/Features";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Single Cover Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/blog/feature1.jpg"
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
              {t("blogNine.title")}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogNine.executor")}:
                </span>{" "}
                {t("blogNine.executorName")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogNine.date")}:
                </span>{" "}
                {t("blogNine.dateValue")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogNine.category")}:
                </span>{" "}
                {t("blogNine.categoryName")}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("blogNine.introduction")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogNine.details")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogNine.section1")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogNine.section2")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogNine.section3")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogNine.section4")}
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
