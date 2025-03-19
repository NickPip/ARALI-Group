"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden bg-gray-100 pb-20 pt-35 dark:bg-gray-900 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 xl:px-0">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
            {/* Left Section */}
            <div className="text-center lg:w-1/2 lg:text-left">
              <h4 className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                {t("hero.subtitle")}
              </h4>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-black dark:text-white">
                <span className="text-primary">{t("hero.title")}</span>{" "}
              </h1>
              <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                {t("hero.description")}
              </p>

              <div className="mt-10">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-wrap justify-center gap-4 lg:justify-start"
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder={t("hero.email_placeholder")}
                    className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="hover:bg-primary-dark rounded-full bg-primary px-7.5 py-3 font-semibold text-white transition"
                  >
                    {t("hero.button_text")}
                  </button>
                </form>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                  {t("hero.consultation_text")}
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex justify-center lg:w-1/2">
              <div className="relative w-full max-w-lg">
                <Image
                  className="rounded-lg shadow-lg"
                  src="/images/hero/mshenebloba.jpg"
                  alt={t("hero.image_alt")}
                  width={620}
                  height={644}
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={50}
                  height={50}
                  className="absolute bottom-4 right-4 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
