"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: {
    en: string;
    ge: string;
  };
  subtitle: {
    en: string;
    ge: string;
  };
  description: {
    en: string;
    ge: string;
  };
  image: {
    url: string;
  };
  slug: string;
  date: string;
  position: number;
}

const BlogDynamic = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = i18n.language || "en";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/blog?locale=${locale}&limit=6&sort=position`,
        );
        const data = await res.json();

        // Transform the data to match the expected format
        const transformedBlogs = data.docs.map((blog: BlogPost) => ({
          id: blog.id,
          mainImage: blog.image?.url || "/images/blog1.jpg",
          title: blog.title,
          metadata: blog.subtitle,
          location: blog.description,
          path: `/blog/${blog.slug}`,
        }));

        setBlogs(transformedBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [locale]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: t("blog.ourwork"),
                subtitle: t("blog.subtitle"),
                description: t("blog.description"),
              }}
            />
          </div>
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-[400px] rounded-lg bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: t("blog.ourwork"),
              subtitle: t("blog.subtitle"),
              description: t("blog.description"),
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <motion.div
          className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogs.map((blog, key) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <BlogItem blog={blog} index={key} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDynamic;
