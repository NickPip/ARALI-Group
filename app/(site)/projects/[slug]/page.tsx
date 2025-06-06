"use client";

import { useEffect, useState, use } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Feature from "@/components/Features";
import Link from "next/link";

interface ProjectDetail {
  id: string;
  title: string;
  executor: string;
  location: string;
  category: string;
  status: string;
  coverImage: {
    url: string;
  };
  intro: string;
  details: string;
  section1: string;
  section2: string;
  section3: string;
  section4: string;
  section5: string;
  gallery: Array<{
    image: {
      url: string;
    };
  }>;
  videos: Array<{
    videoUrl: string;
  }>;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Remove 'projects/' prefix from the slug if it exists
        const cleanSlug = slug.replace("projects/", "");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/project-details?where[slug][equals]=${cleanSlug}&locale=${i18n.language}`,
        );
        const data = await response.json();
        if (data.docs && data.docs.length > 0) {
          setProject(data.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, i18n.language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      {/* Cover Image */}
      <div className="relative h-[80vh] w-full">
        <Image
          src={project.coverImage.url}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <section className="relative bg-white pb-20 dark:bg-gray-900 lg:pb-25 xl:pb-30">
        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 mt-8 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {/* Project Specifications */}
            <ul className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.executor")}:
                </span>{" "}
                {project.executor}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.location")}:
                </span>{" "}
                {project.location}
              </li>
              <li className="ml-1">•</li>
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {t("blogSix.category")}:
                </span>{" "}
                {project.category}
              </li>
            </ul>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {project.intro}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.details}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.section1}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.section2}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.section3}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.section4}
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                {project.section5}
              </p>

              <div className="mt-12 flex justify-center gap-4">
                <Link
                  href={`/projects/${slug}/gallery`}
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSix.viewGallery")}
                </Link>
                <Link
                  href={`/projects/${slug}/videos`}
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t("blogSix.viewVideoGallery")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
    </>
  );
}
