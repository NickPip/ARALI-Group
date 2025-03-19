"use client";
import { useTranslation } from "react-i18next";

export default function GasStationPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {t("gasStation.title")}
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    {t("gasStation.companyName")}
                  </span>{" "}
                  {t("gasStation.introduction")}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("gasStation.description")}
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("gasStation.offersTitle")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>⛽ {t("gasStation.offer1")}</li>
                  <li>🌍 {t("gasStation.offer2")}</li>
                  <li>🔧 {t("gasStation.offer3")}</li>
                  <li>🛠️ {t("gasStation.offer4")}</li>
                  <li>💨 {t("gasStation.offer5")}</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas1.png"
                    alt={t("gasStation.image1")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas2.png"
                    alt={t("gasStation.image2")}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas3.png"
                    alt={t("gasStation.image3")}
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("gasStation.safetyTitle")}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🛡️ {t("gasStation.safety1")}</li>
                  <li>🔍 {t("gasStation.safety2")}</li>
                  <li>⚡ {t("gasStation.safety3")}</li>
                  <li>💡 {t("gasStation.safety4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
