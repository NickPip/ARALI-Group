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
  const [loading, setLoading] = useState(true);

  const galleryImages = [
    // Regular photos
    {
      src: "/images/blog7/DSC02311.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 1",
    },
    {
      src: "/images/blog7/DSC02308.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 2",
    },
    {
      src: "/images/blog7/DSC02294.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 3",
    },
    {
      src: "/images/blog7/DSC02292.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 4",
    },
    {
      src: "/images/blog7/DSC02286.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 5",
    },
    {
      src: "/images/blog7/DSC02285.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 6",
    },
    {
      src: "/images/blog7/DSC02279.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 7",
    },
    {
      src: "/images/blog7/DSC02277.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 8",
    },
    {
      src: "/images/blog7/DSC02275.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 9",
    },
    {
      src: "/images/blog7/DSC02272.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 10",
    },
    {
      src: "/images/blog7/DSC02266.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 11",
    },
    {
      src: "/images/blog7/DSC02258.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 12",
    },
    {
      src: "/images/blog7/DSC02229.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 13",
    },
    {
      src: "/images/blog7/DSC02226.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 14",
    },
    {
      src: "/images/blog7/DSC02217.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 15",
    },
    {
      src: "/images/blog7/DSC02211.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 16",
    },
    // Drone photos
    {
      src: "/images/blog7/DJI_20250522170600_0714_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 1",
    },
    {
      src: "/images/blog7/DJI_20250522170506_0712_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 2",
    },
    {
      src: "/images/blog7/DJI_20250522170415_0709_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 3",
    },
    {
      src: "/images/blog7/DJI_20250522165528_0705_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 4",
    },
    {
      src: "/images/blog7/DJI_20250522165423_0702_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 5",
    },
    {
      src: "/images/blog7/DJI_20250522165347_0700_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 6",
    },
    {
      src: "/images/blog7/DJI_20250522163854_0694_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 7",
    },
    {
      src: "/images/blog7/DJI_20250522163719_0689_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 8",
    },
    {
      src: "/images/blog7/DJI_20250522160933_0674_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 9",
    },
    {
      src: "/images/blog7/DJI_20250522154939_0656_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 10",
    },
    {
      src: "/images/blog7/DJI_20250522154908_0654_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 11",
    },
    {
      src: "/images/blog7/DJI_20250522153959_0647_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 12",
    },
    {
      src: "/images/blog7/DJI_20250522153845_0645_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 13",
    },
    {
      src: "/images/blog7/DJI_20250522153830_0643_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 14",
    },
    {
      src: "/images/blog7/DJI_20250522153649_0641_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 15",
    },
    {
      src: "/images/blog7/DJI_20250522153544_0640_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 16",
    },
    {
      src: "/images/blog7/DJI_20250522153509_0639_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 17",
    },
    {
      src: "/images/blog7/DJI_20250522153346_0636_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 18",
    },
    {
      src: "/images/blog7/DJI_20250522153207_0633_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 19",
    },
    {
      src: "/images/blog7/DJI_20250522153024_0627_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 20",
    },
    {
      src: "/images/blog7/DJI_20250522153019_0626_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 21",
    },
    {
      src: "/images/blog7/DJI_20250522152929_0623_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 22",
    },
    {
      src: "/images/blog7/DJI_20250522152659_0621_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 23",
    },
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
          href="/ongoing/blog-details7"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FiArrowLeft className="mr-2" />
          {t("common.back")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          {t("blogSeven.galleryTitle")}
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
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                loading={index < 6 ? "eager" : "lazy"}
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
              {/* Blurred background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/blog7/DJI_20250522152659_0621_D.jpg"
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
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
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
    </div>
  );
};

export default GalleryPage;
