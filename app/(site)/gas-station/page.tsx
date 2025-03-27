"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaGasPump,
  FaGlobe,
  FaWrench,
  FaTools,
  FaWind,
  FaShieldAlt,
  FaSearch,
  FaBolt,
  FaLightbulb,
} from "react-icons/fa";
import Feature from "@/components/Features";

export default function GasStationPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-fixed bg-center text-white"
        style={{ backgroundImage: "url('/images/blog/gas.png')" }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/60">
          <div className="px-4 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              {t("gasStation.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              {t("gasStation.companyName")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-white pb-16 pt-20 dark:bg-blacksection md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-gray-100 p-8 text-left shadow-lg dark:bg-gray-800"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {t("gasStation.companyName")}
              </span>{" "}
              {t("gasStation.introduction")}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("gasStation.description")}
            </p>
          </motion.div>

          {/* Offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("gasStation.offersTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaGasPump className="text-2xl text-blue-600" />
                <span>{t("gasStation.offer1")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-2xl text-blue-600" />
                <span>{t("gasStation.offer2")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWrench className="text-2xl text-blue-600" />
                <span>{t("gasStation.offer3")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaTools className="text-2xl text-blue-600" />
                <span>{t("gasStation.offer4")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWind className="text-2xl text-blue-600" />
                <span>{t("gasStation.offer5")}</span>
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
                src="/images/gas/gas1.png"
                alt={t("gasStation.image1")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/gas/gas2.png"
                alt={t("gasStation.image2")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/gas/gas3.png"
                alt={t("gasStation.image3")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Safety */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("gasStation.safetyTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
                <span>{t("gasStation.safety1")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaSearch className="text-2xl text-blue-600" />
                <span>{t("gasStation.safety2")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaBolt className="text-2xl text-blue-600" />
                <span>{t("gasStation.safety3")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLightbulb className="text-2xl text-blue-600" />
                <span>{t("gasStation.safety4")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Feature />
    </>
  );
}
