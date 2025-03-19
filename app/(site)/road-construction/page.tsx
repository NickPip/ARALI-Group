"use client";
import { useTranslation } from "react-i18next";

export default function RoadConstructionPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {t("roadConstruction.title")}
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("roadConstruction.companyName")}
                  </span>{" "}
                  – {t("roadConstruction.experience")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("roadConstruction.leadership")}
                  </span>{" "}
                  {t("roadConstruction.location")}.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("roadConstruction.completedRoads")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("roadConstruction.roadLength")}
                  </span>
                  , {t("roadConstruction.scale")}.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("roadConstruction.materialBase")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("roadConstruction.equipment")}
                  </span>
                  , {t("roadConstruction.qualityAssurance")}.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("roadConstruction.mainDirections")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🚧 {t("roadConstruction.highways")}</li>
                  <li>🛣️ {t("roadConstruction.innerRoads")}</li>
                  <li>🌉 {t("roadConstruction.bridges")}</li>
                  <li>🚦 {t("roadConstruction.safetyInfrastructure")}</li>
                  <li>🏗️ {t("roadConstruction.asphaltConcrete")}</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road1.jpg"
                    alt={t("roadConstruction.image1")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road2.jpg"
                    alt={t("roadConstruction.image2")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/road/road3.jpg"
                    alt={t("roadConstruction.image3")}
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
