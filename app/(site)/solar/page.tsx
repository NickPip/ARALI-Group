"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Feature from "@/components/Features";
import {
  FaSun,
  FaBatteryFull,
  FaHome,
  FaTools,
  FaChartBar,
  FaCheckCircle,
  FaBolt,
  FaLeaf,
  FaWrench,
  FaLightbulb,
} from "react-icons/fa";

export default function SolarPanelsPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/blog/solar.png')" }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/60">
          <div className="px-4 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              {t("solarPanels.companyName")}
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              {t("solarPanels.title")}
            </p>
          </div>
        </div>
      </section>
      {/* Intro */}
      <section className="flex justify-center bg-white pb-16 pt-20 dark:bg-blacksection md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-gray-100 p-8 text-left shadow-lg dark:bg-gray-800"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {t("solarPanels.companyName")}
              </span>{" "}
              {t("solarPanels.introduction")}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("solarPanels.description")}
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("solarPanels.servicesTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaSun className="text-2xl text-blue-600" />
                <span>{t("solarPanels.service1")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaBatteryFull className="text-2xl text-blue-600" />
                <span>{t("solarPanels.service2")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaHome className="text-2xl text-blue-600" />
                <span>{t("solarPanels.service3")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaTools className="text-2xl text-blue-600" />
                <span>{t("solarPanels.service4")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaChartBar className="text-2xl text-blue-600" />
                <span>{t("solarPanels.service5")}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/solar/solar1.png"
                alt={t("solarPanels.image1")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/solar/solar2.png"
                alt={t("solarPanels.image2")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/solar/solar3.png"
                alt={t("solarPanels.image3")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("solarPanels.whyChooseUsTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-2xl text-blue-600" />
                <span>{t("solarPanels.whyChooseUs1")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaBolt className="text-2xl text-blue-600" />
                <span>{t("solarPanels.whyChooseUs2")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLeaf className="text-2xl text-blue-600" />
                <span>{t("solarPanels.whyChooseUs3")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWrench className="text-2xl text-blue-600" />
                <span>{t("solarPanels.whyChooseUs4")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLightbulb className="text-2xl text-blue-600" />
                <span>{t("solarPanels.whyChooseUs5")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Feature />
    </>
  );
}
