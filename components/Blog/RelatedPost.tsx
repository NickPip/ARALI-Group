"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useBlogData from "./blogData";
import { useTranslation } from "react-i18next";

const RelatedPost = () => {
  const { t, i18n } = useTranslation();
  const BlogData = useBlogData();
  const currentLang = i18n.language;

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {t("blog.relatedPosts")}
        </h4>

        <div>
          {BlogData.slice(0, 3).map((post, key) => {
            const displayTitle =
              typeof post.title === "object"
                ? post.title[currentLang as keyof typeof post.title]
                : post.title;
            return (
              <div
                className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
                key={key}
              >
                <div className="relative h-18 w-45 max-w-45">
                  {post.mainImage ? (
                    <Image fill src={post.mainImage} alt={displayTitle} />
                  ) : (
                    t("blog.noImage")
                  )}
                </div>
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <Link href={`/blog/blog-details${key === 0 ? "" : key + 1}`}>
                    {displayTitle.length > 40
                      ? `${displayTitle.slice(0, 40)}...`
                      : displayTitle}
                  </Link>
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
