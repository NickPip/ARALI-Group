"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Feature from "@/components/Features";
import { useState } from "react";

const SingleBlogPage = () => {
  const { t } = useTranslation();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      {/* Cover Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/images/blog7/DJI_20250522152659_0621_D.jpg"
          alt="Project cover image"
          fill
          className="object-cover"
          priority
          quality={90}
          onLoadingComplete={() => setImageLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Loading State */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      <section className="relative bg-white pb-20 dark:bg-gray-900 lg:pb-25 xl:pb-30">
        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 mt-16 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
              {t("blogSeven.title")}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSeven.executor")}:
                </span>{" "}
                Arali Group
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSeven.location")}:
                </span>{" "}
                {t("blogSeven.locationValue")}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSeven.category")}:
                </span>{" "}
                {t("blogSeven.categoryValue")}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {t("blogSeven.intro")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSeven.details")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSeven.section1")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSeven.section2")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSeven.section3")}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {t("blogSeven.section4")}
              </p>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/ongoing/blog-details7/gallery"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSeven.viewGallery")}
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
