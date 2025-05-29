"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaRoad, FaCity, FaTrafficLight, FaTools } from "react-icons/fa";
import Feature from "@/components/Features";
import HeroImage from "@/components/Hero/HeroImage";

export default function RoadConstructionPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <HeroImage
        src="/images/blog/gzebi.png"
        alt="Road Construction"
        className="h-[60vh]"
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              {t("roadConstruction.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              {t("roadConstruction.leadership")}
            </p>
          </div>
        </div>
      </HeroImage>

      {/* Intro Section */}
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
                {t("roadConstruction.companyName")}
              </span>{" "}
              – {t("roadConstruction.experience")}{" "}
              {t("roadConstruction.location")}.<br />
              <br />
              {t("roadConstruction.completedRoads")}{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {t("roadConstruction.roadLength")}
              </span>
              , {t("roadConstruction.scale")}
              <br />
              <br />
              {t("roadConstruction.materialBase")}{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {t("roadConstruction.equipment")}
              </span>
              , {t("roadConstruction.qualityAssurance")}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                <CountUp end={12000} duration={3} />+ km
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("roadConstruction.roadLength")}
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600">20+</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("roadConstruction.experience")}
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600">300+</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("roadConstruction.completedRoads")}
              </p>
            </div>
          </div>

          {/* Main Directions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
              {t("roadConstruction.mainDirections")}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <FaRoad className="text-2xl text-blue-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("roadConstruction.highways")}
                </span>
              </div>
              <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <FaCity className="text-2xl text-blue-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("roadConstruction.innerRoads")}
                </span>
              </div>
              <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <FaTrafficLight className="text-2xl text-blue-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("roadConstruction.safetyInfrastructure")}
                </span>
              </div>
              <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <FaTools className="text-2xl text-blue-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {t("roadConstruction.asphaltConcrete")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/road/road1.jpg"
                alt={t("roadConstruction.image1")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/road/road2.jpg"
                alt={t("roadConstruction.image2")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/road/road3.jpg"
                alt={t("roadConstruction.image3")}
                className="h-64 w-full transform object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Call to Action */}
        </div>
      </section>
      <Feature />
    </>
  );
}
