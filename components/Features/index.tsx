"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const { t } = useTranslation();

  // Define specific navigation paths for each feature
  const featureRoutes = {
    1: "/road-construction",
    2: "/buildings",
    3: "/concrete-production",
    4: "/quarries",
    5: "/gas-station",
    6: "/solar",
  };

  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: t("features.title"),
              subtitle: t("features.subtitle"),
              description: t("features.description"),
            }}
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {featuresData.map((feature, key) => (
              <Link
                key={key}
                href={featureRoutes[feature.id] || `/features/${feature.id}`} // Default route if not in the map
                passHref
              >
                <div className="cursor-pointer">
                  <SingleFeature feature={feature} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
