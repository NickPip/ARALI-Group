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
    <section className="bg-[#5072A7] py-6">
      <div className="flex w-full flex-wrap justify-center gap-10 px-4 md:px-10">
        {featuresData.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1, // ამან გააკეთოს staggered appearance
              }}
              viewport={{ once: true }}
            >
              <Link href={featureRoutes[item.id] || "#"}>
                <div className="flex cursor-pointer flex-col items-center text-white transition-transform duration-200 hover:scale-110 hover:text-blue-200">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
                    <Icon size={20} />
                  </div>
                  <span className="mt-1 text-center text-sm font-semibold uppercase tracking-wide">
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
