"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const BlogItem = ({ blog, index }: { blog: Blog; index: number }) => {
  const { t } = useTranslation();
  const {
    mainImage = "/images/blog/default.jpg",
    title,
    metadata,
    location,
  } = blog;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={`/blog/blog-details${index === 0 ? "" : index}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={mainImage}
            alt={t(title)}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="mt-8">
          <h2 className="mb-3 text-[28px] font-bold uppercase leading-tight tracking-wide text-[#1a1a1a] dark:text-white">
            {title}
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            {location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
