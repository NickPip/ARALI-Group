"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  FaHardHat,
  FaCog,
  FaRuler,
  FaTools,
  FaDrawPolygon,
  FaRegLightbulb,
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Original Loading Screen Component
const OriginalLoadingScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <div className="relative flex flex-col items-center">
        {/* Logo Container with Glow Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-lg" />
          <Image
            src="/images/logo/arali_logo_fully_white.png"
            alt="AraliGroup Logo"
            width={100}
            height={100}
            className="relative z-10"
            priority
          />
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-3xl font-bold text-white"
        >
          ARALI GROUP
        </motion.h1>

        {/* Loading Bar */}
        <div className="relative h-1.5 w-48 overflow-hidden rounded-full bg-blue-900/50">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"
          />
        </div>

        {/* Animated Icons */}
        <div className="mt-8 flex items-center gap-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="text-blue-400"
          >
            <FaCog size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-yellow-400"
          >
            <FaHardHat size={24} />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="text-blue-400"
          >
            <FaCog size={24} />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-sm font-medium text-blue-200"
        >
          {t("loading.message")}
        </motion.p>
      </div>
    </div>
  );
};

// Construction Progress Variant
const ConstructionProgressLoading = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900">
      <div className="relative flex flex-col items-center">
        {/* Construction Site Animation */}
        <motion.div className="mb-8 flex items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-400"
          >
            <FaTools size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-orange-400"
          >
            <FaRuler size={32} />
          </motion.div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-6 h-3 w-64 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 text-3xl font-bold text-white"
        >
          ARALI GROUP
        </motion.h1>

        {/* Loading Message */}
        <motion.p className="text-orange-200">
          {t("loading.message")} ({progress}%)
        </motion.p>
      </div>
    </div>
  );
};

// Engineering Blueprint Variant
const BlueprintLoadingScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="relative flex flex-col items-center">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Technical Icons */}
        <div className="mb-8 flex items-center gap-6">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-cyan-400"
          >
            <Image
              src="/images/logo/arali_logo_fully_white.png"
              alt="AraliGroup Logo"
              width={32}
              height={32}
              className="brightness-125 filter"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-cyan-300"
          >
            <FaRegLightbulb size={32} />
          </motion.div>
        </div>

        {/* Company Name with Technical Style */}
        <motion.div className="mb-6 flex gap-2">
          <div className="flex">
            {Array.from("ARALI").map((letter, index) => (
              <motion.span
                key={`arali-${index}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-3xl font-bold text-cyan-100"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex">
            {Array.from("GROUP").map((letter, index) => (
              <motion.span
                key={`group-${index}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-3xl font-bold text-cyan-100"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Technical Loading Indicator */}
        <div className="relative h-1 w-56 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="absolute h-full w-1/3 bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-500"
          />
        </div>

        {/* Loading Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="font-mono mt-6 text-sm text-cyan-300"
        >
          {t("loading.message")}
        </motion.p>
      </div>
    </div>
  );
};

// Main Loading Screen Component that randomly selects a variant
const LoadingScreen = () => {
  return <BlueprintLoadingScreen />;
};

export default LoadingScreen;
