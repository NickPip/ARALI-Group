"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FunFact = () => {
  const { t } = useTranslation();
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const CounterBox = ({ end, label }) => {
    const [hovered, setHovered] = useState(false);
    const shouldStart = startCount || hovered;

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        className="flex items-start gap-4"
      >
        <div className="mt-1 h-14 w-1 bg-blue-600" />

        <div className="cursor-pointer">
          <h3 className="text-5xl font-light text-gray-800 dark:text-white">
            {shouldStart ? <CountUp end={end} duration={4} /> : "0"}
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
            {label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className="bg-white px-4 py-20 dark:bg-black md:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2
            className="mb-10 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            dangerouslySetInnerHTML={{ __html: t("funFact.titleHtml") }}
          />

          <p className="mb-10 text-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {t("funFact.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => (window.location.href = "/support")} // ← change path as needed
              className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              {t("hero.button_text")}
            </button>
            <button
              onClick={() => (window.location.href = "/blog")} // ← change path as needed
              className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              {t("hero.ctaProjects")}
            </button>
          </div>
        </div>

        <div className="grid gap-14 pl-10">
          <CounterBox
            end={1540}
            label={`${t("funFact.completedProjects.number")} ${t(
              "funFact.completedProjects.label",
            )}`}
          />
          <CounterBox
            end={800}
            label={`${t("funFact.partnerCompanies.number")} ${t(
              "funFact.partnerCompanies.label",
            )}`}
          />
          <CounterBox
            end={10}
            label={`${t("funFact.ongoingProjects.number")} ${t(
              "funFact.ongoingProjects.label",
            )}`}
          />
        </div>
      </div>
    </section>
  );
};

export default FunFact;
