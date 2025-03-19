"use client";

import { useTranslation } from "react-i18next";
import SidebarLink from "@/components/Docs/SidebarLink";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <p className="animate-fadeIn text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("about.companyName")}
                  </span>{" "}
                  {t("about.experienceYears")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("about.sectors")}
                  </span>
                </p>

                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("about.supportClients")}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("about.strategy")}
                </p>
                <span className="text-blue-600 dark:text-blue-400">
                  {t("about.focusQuality")}
                </span>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("about.techBase")}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("about.professionalTeam")}
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("about.mainDirections")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🚧 {t("about.roadConstruction")}</li>
                  <li>🏢 {t("about.buildings")}</li>
                  <li>🏨 {t("about.hotels")}</li>
                  <li>🏠 {t("about.residential")}</li>
                  <li>💧 {t("about.waterSystems")}</li>
                  <li>🌉 {t("about.bridges")}</li>
                  <li>🏗️ {t("about.retainingWalls")}</li>
                  <li>🏗️ {t("about.concreteWorks")}</li>
                  <li>🌊 {t("about.shoreReinforcement")}</li>
                  <li>🚰 {t("about.sewageSystems")}</li>
                </ul>
              </div>

              <h1 className="mt-10 text-center text-3xl font-bold text-blue-700 dark:text-blue-400">
                {t("about.missionAndGoals")}
              </h1>
              <div className="mt-6 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {t("about.mission")}
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    {t("about.missionDescription")}
                  </p>
                </div>
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {t("about.goal")}
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    {t("about.goalDescription")}
                  </p>
                </div>
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {t("about.values")}
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    {t("about.valuesDescription")}
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
