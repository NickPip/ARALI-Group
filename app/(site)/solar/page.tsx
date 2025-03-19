"use client";
import { useTranslation } from "react-i18next";

export default function SolarPanelsPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {t("solarPanels.title")}
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("solarPanels.companyName")}
                  </span>{" "}
                  {t("solarPanels.introduction")}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("solarPanels.description")}
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("solarPanels.servicesTitle")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🌞 {t("solarPanels.service1")}</li>
                  <li>🔋 {t("solarPanels.service2")}</li>
                  <li>🏡 {t("solarPanels.service3")}</li>
                  <li>🛠️ {t("solarPanels.service4")}</li>
                  <li>📊 {t("solarPanels.service5")}</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar1.png"
                    alt={t("solarPanels.image1")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar2.png"
                    alt={t("solarPanels.image2")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/solar/solar3.png"
                    alt={t("solarPanels.image3")}
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("solarPanels.whyChooseUsTitle")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🔍 {t("solarPanels.whyChooseUs1")}</li>
                  <li>⚡ {t("solarPanels.whyChooseUs2")}</li>
                  <li>🌿 {t("solarPanels.whyChooseUs3")}</li>
                  <li>🛠️ {t("solarPanels.whyChooseUs4")}</li>
                  <li>💡 {t("solarPanels.whyChooseUs5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
