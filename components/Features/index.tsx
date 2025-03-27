"use client";

import React from "react";
import Link from "next/link";
import featuresData from "./featuresData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const featureRoutes = {
  1: "/road-construction",
  2: "/buildings",
  3: "/concrete-production",
  4: "/quarries",
  5: "/gas-station",
  6: "/solar",
};

const FeatureIcons = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#e5ecf6] py-4 dark:bg-[#1f2a40]">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4 md:gap-10">
        {featuresData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <Link href={featureRoutes[item.id] || "#"}>
                <div className="group flex cursor-pointer flex-col items-center text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                  <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white transition group-hover:scale-105 group-hover:border-blue-400 dark:border-gray-700 dark:bg-zinc-800">
                    <Icon size={16} />
                  </div>
                  <span className="text-center text-[11px] font-medium uppercase tracking-wide">
                    {t(item.title)}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureIcons;
