"use client";

import { useTranslation } from "react-i18next";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:ml-16 lg:flex-row xl:ml-24 xl:gap-12.5">
            <div className="lg:w-2/2.5">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/feature3.jpg"}
                      alt={t("blog-details1.coverImageAlt")}
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {t("blog-details1.title")}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details1.executor")}:
                    </span>{" "}
                    {t("blog-details1.executorName")}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details1.date")}:
                    </span>{" "}
                    {t("blog-details1.dateValue")}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details1.category")}:
                    </span>{" "}
                    {t("blog-details1.categoryName")}
                  </li>
                </ul>

                <div className="blog-details">
                  <p>{t("blog-details1.introduction")}</p>
                  <p>{t("blog-details1.details")}</p>
                  <p>{t("blog-details1.section1")}</p>
                  <p>{t("blog-details1.section2")}</p>
                  <p>{t("blog-details1.section3")}</p>
                  <p>{t("blog-details1.section4")}</p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/road-1.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details1.image1")}
                    />
                    <Image
                      src={"/images/blog/road2.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details1.image2")}
                    />
                    <Image
                      src={"/images/blog/road3.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details1.image3")}
                    />
                  </div>

                  <h3 className="pt-8">{t("blog-details1.accessibility")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
