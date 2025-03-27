"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const BlogItem = ({ blog, index }: { blog: Blog; index: number }) => {
  const { t } = useTranslation();
  const { mainImage, title, metadata } = blog;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
    >
      <Link
        href={`/blog/blog-details${index === 0 ? "" : index}`}
        className="relative block aspect-[368/239] overflow-hidden rounded-t-xl"
      >
        <Image
          src={mainImage}
          alt={t(title)}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="px-4 py-5">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors hover:text-blue-700 dark:text-white dark:hover:text-blue-400">
          <Link href={`/blog/blog-details${index === 0 ? "" : index}`}>
            {`${t(title).slice(0, 40)}...`}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t(metadata || "")}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogItem;
