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
      src: "/blog9/DSC01514.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 1",
    },
    {
      src: "/blog9/DSC01517.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 2",
    },
    {
      src: "/blog9/DSC01520.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 3",
    },
    {
      src: "/blog9/DSC01521.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 4",
    },
    {
      src: "/blog9/DSC01526.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 5",
    },
    {
      src: "/blog9/DSC01529.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 6",
    },
    {
      src: "/blog9/DSC01531.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 7",
    },
    {
      src: "/blog9/DSC01534.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 8",
    },
    {
      src: "/blog9/DSC01537.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 9",
    },
    {
      src: "/blog9/DSC01540.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 10",
    },
    {
      src: "/blog9/DSC01541.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 11",
    },
    {
      src: "/blog9/DSC01545.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 12",
    },
    {
      src: "/blog9/DSC01552.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 13",
    },
    {
      src: "/blog9/DSC01591.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 14",
    },
    {
      src: "/blog9/DSC01602.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 15",
    },
    {
      src: "/blog9/DSC01605.jpg",
      width: 1920,
      height: 1440,
      alt: "Project photo 16",
    },
    // Drone photos
    {
      src: "/blog9/DJI_20250519170823_0629_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 1",
    },
    {
      src: "/blog9/DJI_20250519170936_0633_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 2",
    },
    {
      src: "/blog9/DJI_20250519171112_0638_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 3",
    },
    {
      src: "/blog9/DJI_20250519171142_0639_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 4",
    },
    {
      src: "/blog9/DJI_20250519171331_0646_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 5",
    },
    {
      src: "/blog9/DJI_20250519171401_0648_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 6",
    },
    {
      src: "/blog9/DJI_20250519172558_0650_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 7",
    },
    {
      src: "/blog9/DJI_20250519172751_0654_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 8",
    },
    {
      src: "/blog9/DJI_20250519172950_0658_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 9",
    },
    {
      src: "/blog9/DJI_20250519173527_0675_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 10",
    },
    {
      src: "/blog9/DJI_20250519174334_0690_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 11",
    },
    {
      src: "/blog9/DJI_20250519174451_0693_D-2.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 12",
    },
    {
      src: "/blog9/DJI_20250519174638_0697_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 13",
    },
    {
      src: "/blog9/DJI_20250519174754_0700_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 14",
    },
    {
      src: "/blog9/DJI_20250519174839_0702_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 15",
    },
    {
      src: "/blog9/DJI_20250519180513_0706_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 16",
    },
    {
      src: "/blog9/DJI_20250519180806_0714_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 17",
    },
    {
      src: "/blog9/DJI_20250519181028_0721_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 18",
    },
    {
      src: "/blog9/DJI_20250519181128_0724_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 19",
    },
    {
      src: "/blog9/DJI_20250519181219_0728_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 20",
    },
    {
      src: "/blog9/DJI_20250519182842_0742_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 21",
    },
    {
      src: "/blog9/DJI_20250519185100_0752_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 22",
    },
    {
      src: "/blog9/DJI_20250519185207_0754_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 23",
    },
    {
      src: "/blog9/DJI_20250519185417_0761_D.jpg",
      width: 1920,
      height: 1080,
      alt: "Drone photo 24",
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />

      <div className="container mx-auto px-4 py-8 pt-32">
        <Link
          href="/blog/blog-details9"
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FiArrowLeft className="mr-2" />
          {t("common.back")}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
          {t("blogNine.galleryTitle")}
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => setLoading(false)}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 p-2 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FiChevronRight size={32} />
            </button>

            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={galleryImages[selectedImage].width}
                height={galleryImages[selectedImage].height}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
