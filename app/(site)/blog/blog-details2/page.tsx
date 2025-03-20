"use client";

import { useTranslation } from "react-i18next";
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
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/feature4.jpg"}
                      alt={t("blog-details2.coverImageAlt")}
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {t("blog-details2.title")}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details2.executor")}:
                    </span>{" "}
                    {t("blog-details2.executorName")}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details2.date")}:
                    </span>{" "}
                    {t("blog-details2.dateValue")}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      {t("blog-details2.category")}:
                    </span>{" "}
                    {t("blog-details2.categoryName")}
                  </li>
                </ul>

                <div className="blog-details">
                  <p>{t("blog-details2.introduction")}</p>
                  <p>{t("blog-details2.details")}</p>
                  <p>{t("blog-details2.section1")}</p>
                  <p>{t("blog-details2.section2")}</p>
                  <p>{t("blog-details2.section3")}</p>
                  <p>{t("blog-details2.section4")}</p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/truck-1-arali.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details2.image1")}
                    />
                    <Image
                      src={"/images/blog/truck-2-arali.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details2.image2")}
                    />
                    <Image
                      src={"/images/blog/truck-3-arali.png"}
                      width={350}
                      height={200}
                      alt={t("blog-details2.image3")}
                    />
                  </div>

                  <h3 className="pt-8">{t("blog-details2.accessibility")}</h3>
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
