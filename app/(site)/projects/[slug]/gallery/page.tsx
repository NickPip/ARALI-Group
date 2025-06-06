"use client";

import { useEffect, useState, use } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Feature from "@/components/Features";

interface ProjectDetail {
  id: string;
  title: string;
  gallery: Array<{
    image: {
      url: string;
    };
  }>;
}

export default function ProjectGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/project-details?where[slug][equals]=${slug}&locale=${i18n.language}`,
        );
        const data = await response.json();
        if (data.docs && data.docs.length > 0) {
          setProject(data.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching project gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, i18n.language]);

  const nextImage = () => {
    if (selectedImage !== null && project) {
      setSelectedImage((prev) => (prev! + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && project) {
      setSelectedImage(
        (prev) => (prev! - 1 + project.gallery.length) % project.gallery.length,
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
      <div className="container mx-auto px-4 py-8 pt-32">
        <Link
          href={`/projects/${slug}`}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FiArrowLeft className="mr-2" />
          {t("common.back")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          {t("blogSix.galleryTitle", "Gallery")} - {project.title}
        </h1>

        {project.gallery.length === 0 ? (
          <div className="mt-16 flex flex-col items-center">
            <p className="text-xl text-gray-500">
              {t("blogSix.noImages", "No images available for this project.")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={item.image.url}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              {/* Blurred background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={project.gallery[selectedImage].image.url}
                  alt="Background"
                  fill
                  className="object-cover blur-lg brightness-50"
                  priority
                />
              </div>
              <button
                className="absolute right-4 top-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={32} />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <FiChevronLeft size={32} />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <FiChevronRight size={32} />
              </button>

              <div
                className="relative mx-auto flex h-[80vh] w-[80vw] max-w-7xl items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.gallery[selectedImage].image.url}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Feature />
    </div>
  );
}
