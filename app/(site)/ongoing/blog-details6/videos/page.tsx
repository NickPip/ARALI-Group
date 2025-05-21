"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { useState } from "react";

const VideoGalleryPage = () => {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoData = {
    thumbnail: "/images/blog6/DJI_20250517160053_0394_D.jpg",
    video: "/videos/ახალციხის სპორტკომპლექსი.mp4",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
      <div className="container mx-auto px-4 py-8 pt-32">
        <Link
          href="/ongoing/blog-details6"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FiArrowLeft className="mr-2" />
          {t("common.back")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          {t("blogSix.videoGalleryTitle")}
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image
              src={videoData.thumbnail}
              alt="Video thumbnail"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black/50 p-4">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Lightbox */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              className="absolute right-4 top-4 text-white hover:text-gray-300"
              onClick={() => setIsVideoOpen(false)}
            >
              <FiX size={32} />
            </button>

            <div
              className="relative h-[90vh] w-[90vw] max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoData.video}
                controls
                className="h-full w-full object-contain"
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
