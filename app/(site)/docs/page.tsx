"use client";

import { useTranslation } from "react-i18next";
import Feature from "@/components/Features";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

export default function AboutPage() {
  const { t } = useTranslation();
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero/development.png')" }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/50">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold uppercase tracking-wide">
              {t("about.heroTitle")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero Description Text Under Image */}
      <motion.section
        className="bg-gray-100 px-4 py-8 text-center dark:bg-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("about.heroSubtitle")}
          </p>
        </div>
      </motion.section>

      {/* Company Stats with CountUp */}
      <motion.section
        ref={ref}
        className="bg-white py-12 dark:bg-gray-900"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-4xl font-bold text-blue-600">
              {startCount ? <CountUp end={20} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t("about.stats.years")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-4xl font-bold text-blue-600">
              {startCount ? <CountUp end={800} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t("about.stats.projects")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-4xl font-bold text-blue-600">
              {startCount ? <CountUp end={1000} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t("about.stats.employees")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-4xl font-bold text-blue-600">
              {startCount ? <CountUp end={15} duration={2} /> : "0"}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t("about.stats.countries")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        className="bg-gray-50 py-16 dark:bg-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <motion.div
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {t("about.mission")}
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("about.missionDescription")}
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {t("about.goal")}
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("about.goalDescription")}
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {t("about.values")}
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("about.valuesDescription")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <Feature />
    </>
  );
}
