"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConstructionLoaderProps {
  companyName?: string;
}

const ConstructionLoader: React.FC<ConstructionLoaderProps> = ({
  companyName = "ARALI Group",
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (textRef.current) {
      setLineWidth(textRef.current.offsetWidth);
    }
  }, [companyName]);

  const verticalMargin = "8vh";

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black"
        style={{
          minHeight: "100dvh",
          minWidth: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          {/* Top Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: lineWidth || "70vw" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[3px] rounded bg-white"
            style={{
              maxWidth: "90vw",
              marginTop: verticalMargin,
              marginBottom: "3rem",
            }}
          />

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              ref={textRef}
              className="px-2 text-2xl font-bold tracking-widest text-white md:text-4xl"
            >
              {companyName}
            </h1>
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: lineWidth || "70vw" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="h-[3px] rounded bg-white"
            style={{
              maxWidth: "90vw",
              marginBottom: verticalMargin,
              marginTop: "3rem",
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConstructionLoader;
