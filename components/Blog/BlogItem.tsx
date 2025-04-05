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
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src={mainImage}
            alt={t(title)}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="mb-1 text-xl font-bold uppercase leading-tight tracking-wide text-white">
              {title}
            </h2>
            {location && (
              <p className="text-sm font-normal text-white/90">{location}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
