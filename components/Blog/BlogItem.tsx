"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface BlogItemProps {
  blog: Blog;
  index: number;
}

const BlogItem = ({ blog, index }: BlogItemProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const { mainImage, title, metadata, location, path } = blog;

  const displayTitle =
    typeof title === "object"
      ? title[currentLang as keyof typeof title]
      : title;
  const displayMetadata =
    typeof metadata === "object"
      ? metadata[currentLang as keyof typeof metadata]
      : metadata;
  const displayLocation =
    typeof location === "object"
      ? location[currentLang as keyof typeof location]
      : location;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={path || `/blog/blog-details${index === 0 ? "" : index}`}>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src={mainImage || "/images/blog1.jpg"}
            alt={displayTitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-2 text-xl font-semibold">{displayTitle}</h3>
            <p className="text-sm font-medium">{displayLocation}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
