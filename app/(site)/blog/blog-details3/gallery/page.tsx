"use client";

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
import { useState } from "react";

const GalleryPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Images for blog-details3 gallery from /images/kidgarden
  const galleryImages = [
    "/images/kidgarden/DJI_20250519161702_0598_D.jpg",
    "/images/kidgarden/DJI_20250519161815_0603_D.jpg",
    "/images/kidgarden/DJI_20250519161908_0607_D.jpg",
    "/images/kidgarden/DJI_20250519162150_0616_D.jpg",
    "/images/kidgarden/DJI_20250519162412_0621_D.jpg",
    "/images/kidgarden/DJI_20250519162630_0626_D.jpg",
    "/images/kidgarden/DSC01463.jpg",
    "/images/kidgarden/DSC01467.jpg",
    "/images/kidgarden/DSC01468.jpg",
    "/images/kidgarden/DSC01472.jpg",
    "/images/kidgarden/DSC01475.jpg",
    "/images/kidgarden/DSC01477.jpg",
    "/images/kidgarden/DSC01484.jpg",
    "/images/kidgarden/DSC01485.jpg",
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length,
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
      <div className="container mx-auto px-4 py-8 pt-32">
        <Link
          href="/blog/blog-details3"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FiArrowLeft className="mr-2" />
          {t("common.back")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          {t("blogSix.galleryTitle")}
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

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
                className="relative h-[90vh] w-[90vw] max-w-7xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
