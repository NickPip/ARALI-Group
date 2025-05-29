import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  overlay?: boolean;
  children?: React.ReactNode;
}

const HeroImage = ({
  src,
  alt,
  className = "",
  priority = true,
  quality = 90,
  overlay = true,
  children,
}: HeroImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    setIsLoaded(false);
  }, [src]);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Skeleton Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-800"
          >
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoadingComplete={() => {
          setIsLoaded(true);
          setIsLoading(false);
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      )}

      {/* Content */}
      {children}
    </div>
  );
};

export default HeroImage;
