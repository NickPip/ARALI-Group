"use client";
import { useTranslation } from "react-i18next";

export default function CivilConstructionPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {t("civilConstruction.title")}
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("civilConstruction.companyName")}
                  </span>{" "}
                  – {t("civilConstruction.experience")}.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("civilConstruction.infrastructure")}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("civilConstruction.regulations")}
                  </span>{" "}
                  {t("civilConstruction.priority")}.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("civilConstruction.mainDirections")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🏗️ {t("civilConstruction.residentialCommercial")}</li>
                  <li>🏥 {t("civilConstruction.healthcare")}</li>
                  <li>🏨 {t("civilConstruction.hospitality")}</li>
                  <li>🏛️ {t("civilConstruction.publicBuildings")}</li>
                  <li>🚧 {t("civilConstruction.renovation")}</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/building1.jpg"
                    alt={t("civilConstruction.image1")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/building2.jpg"
                    alt={t("civilConstruction.image2")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/buildings/feature1:1.jpg"
                    alt={t("civilConstruction.image3")}
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("civilConstruction.expertise")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>📑 {t("civilConstruction.tenderManagement")}</li>
                  <li>🛠️ {t("civilConstruction.supervision")}</li>
                  <li>🏗️ {t("civilConstruction.constructionAdmin")}</li>
                  <li>⚙️ {t("civilConstruction.operation")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
