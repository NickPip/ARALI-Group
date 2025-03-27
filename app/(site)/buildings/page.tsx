"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHospital,
  FaHotel,
  FaLandmark,
  FaTools,
  FaClipboardList,
  FaCogs,
  FaWrench,
  FaHardHat,
} from "react-icons/fa";
import Feature from "@/components/Features";

export default function CivilConstructionPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-fixed bg-center text-white"
        style={{ backgroundImage: "url('/images/features/slider.png')" }}
      >
        <div className="flex h-full w-full items-center justify-center bg-black/60">
          <div className="px-4 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              {t("civilConstruction.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              {t("civilConstruction.companyName")}
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
                {t("civilConstruction.companyName")}
              </span>{" "}
              – {t("civilConstruction.experience")}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {t("civilConstruction.infrastructure")}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {t("civilConstruction.regulations")}
              </span>{" "}
              {t("civilConstruction.priority")}
            </p>
          </motion.div>

          {/* Main Directions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("civilConstruction.mainDirections")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaBuilding className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.residentialCommercial")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaHospital className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.healthcare")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaHotel className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.hospitality")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLandmark className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.publicBuildings")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaTools className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.renovation")}</span>
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
                src="/images/buildings/building1.jpg"
                alt={t("civilConstruction.image1")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/buildings/building2.jpg"
                alt={t("civilConstruction.image2")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/buildings/feature1:1.jpg"
                alt={t("civilConstruction.image3")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {t("civilConstruction.expertise")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-4">
                <FaClipboardList className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.tenderManagement")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaWrench className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.supervision")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaHardHat className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.constructionAdmin")}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaCogs className="text-2xl text-blue-600" />
                <span>{t("civilConstruction.operation")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Feature />
    </>
  );
}
