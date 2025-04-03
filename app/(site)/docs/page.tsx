"use client";

import { useTranslation } from "react-i18next";
import Feature from "@/components/Features";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaRoad,
  FaBuilding,
  FaIndustry,
  FaGlobe,
  FaFlag,
  FaLightbulb,
  FaCrown,
} from "react-icons/fa";

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
      <section className="relative h-[90vh] w-full">
        <Image
          src="/images/hero/development.png"
          alt="AraliGroup Construction"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 via-black/70 to-black/90">
          <motion.div
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("about.heroTitle")}
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-3xl text-base text-gray-100 sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* {t("about.heroSubtitle")} */}
            </motion.p>
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
          <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base md:text-lg">
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
            <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
              {startCount ? <CountUp end={20} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base">
              {t("about.stats.years")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
              {startCount ? <CountUp end={800} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base">
              {t("about.stats.projects")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
              {startCount ? <CountUp end={1000} duration={2} /> : "0"}+
            </h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base">
              {t("about.stats.employees")}
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
              {startCount ? <CountUp end={15} duration={2} /> : "0"}
            </h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base">
              {t("about.stats.countries")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mb-16 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
            >
              {t("about.timeline.title")}
            </motion.h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-600 dark:bg-blue-500" />

              {/* Timeline Items */}
              {[
                {
                  year: "2003",
                  title: "about.timeline.founding.title",
                  description: "about.timeline.founding.description",
                  icon: FaFlag,
                },
                {
                  year: "2008",
                  title: "about.timeline.expansion.title",
                  description: "about.timeline.expansion.description",
                  icon: FaBuilding,
                },
                {
                  year: "2015",
                  title: "about.timeline.innovation.title",
                  description: "about.timeline.innovation.description",
                  icon: FaLightbulb,
                },
                {
                  year: "2020",
                  title: "about.timeline.leadership.title",
                  description: "about.timeline.leadership.description",
                  icon: FaCrown,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`relative mb-16 flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`relative w-5/12 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-900 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-blue-600 p-3 text-white dark:bg-blue-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="mb-2 text-xl font-bold text-blue-600 dark:text-blue-400 sm:text-2xl">
                      {item.year}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                      {t(item.title)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                      {t(item.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid gap-16 md:grid-cols-2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/blog/gzebi.png"
                alt="Company History"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-8 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
              >
                {t("about.overview.title")}
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base md:text-lg"
              >
                {t("about.overview.description")}
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: FaRoad, text: "about.overview.roadConstruction" },
                  {
                    icon: FaBuilding,
                    text: "about.overview.civilConstruction",
                  },
                  {
                    icon: FaIndustry,
                    text: "about.overview.concreteProduction",
                  },
                  {
                    icon: FaGlobe,
                    text: "about.overview.internationalProjects",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-4 shadow-md transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="text-2xl text-blue-600" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {t(item.text)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
              {t("about.mission")}
            </h2>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              {t("about.missionDescription")}
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
              {t("about.goal")}
            </h2>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              {t("about.goalDescription")}
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg bg-white p-6 shadow dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
              {t("about.values")}
            </h2>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
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
