"use client";

import { useTranslation } from "react-i18next";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-gradient-to-b from-white via-gray-50 to-white pb-20 pt-36 dark:from-black dark:via-gray-900 dark:to-black lg:pb-28 lg:pt-44 xl:pb-32 xl:pt-52">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center gap-10 xl:gap-16">
            <div className="w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-xl border border-stroke bg-white p-8 shadow-xl dark:border-strokedark dark:bg-blacksection md:p-12"
              >
                <div className="mb-10 w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/feature3.jpg"}
                      alt={t("blog-details1.coverImageAlt")}
                      fill
                      className="rounded-lg object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-6 mt-12 text-center text-4xl font-bold text-black dark:text-white 2xl:text-5xl">
                  {t("blog-details1.title")}
                </h2>

                <ul className="mb-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-semibold text-black dark:text-white">
                      {t("blog-details1.executor")}:
                    </span>{" "}
                    {t("blog-details1.executorName")}
                  </li>
                  <li>
                    <span className="font-semibold text-black dark:text-white">
                      {t("blog-details1.date")}:
                    </span>{" "}
                    {t("blog-details1.dateValue")}
                  </li>
                  <li>
                    <span className="font-semibold text-black dark:text-white">
                      {t("blog-details1.category")}:
                    </span>{" "}
                    {t("blog-details1.categoryName")}
                  </li>
                </ul>

                <div className="space-y-6 text-justify text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>{t("blog-details1.introduction")}</p>
                  <p>{t("blog-details1.details")}</p>
                  <p>{t("blog-details1.section1")}</p>
                  <p>{t("blog-details1.section2")}</p>
                  <p>{t("blog-details1.section3")}</p>
                  <p>{t("blog-details1.section4")}</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <Image
                    src={"/images/blog/road-1.png"}
                    width={350}
                    height={200}
                    alt={t("blog-details1.image1")}
                    className="rounded-md object-cover shadow-md"
                  />
                  <Image
                    src={"/images/blog/road2.png"}
                    width={350}
                    height={200}
                    alt={t("blog-details1.image2")}
                    className="rounded-md object-cover shadow-md"
                  />
                  <Image
                    src={"/images/blog/road3.png"}
                    width={350}
                    height={200}
                    alt={t("blog-details1.image3")}
                    className="rounded-md object-cover shadow-md"
                  />
                </div>

                <h3 className="pt-10 text-center text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  {t("blog-details1.accessibility")}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
