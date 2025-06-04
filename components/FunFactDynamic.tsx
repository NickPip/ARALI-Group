"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface FunFactData {
  completedProjects: number;
  partnerCompanies: number;
  ongoingProjects: number;
}

const FunFactDynamic = () => {
  const { t } = useTranslation();
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [data, setData] = useState<FunFactData | null>(null);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  useEffect(() => {
    fetch("/api/globals/fun-fact")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const CounterBox = ({ end, label }: { end: number; label: string }) => {
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

  if (!data) return <div>Loading...</div>;

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
              onClick={() => (window.location.href = "/support")}
              className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              {t("hero.button_text")}
            </button>
            <button
              onClick={() => (window.location.href = "/blog")}
              className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              {t("hero.ctaProjects")}
            </button>
          </div>
        </div>
        <div className="grid gap-14 pl-10">
          <CounterBox
            end={data.completedProjects}
            label={t("funFact.completedProjects.label")}
          />
          <CounterBox
            end={data.partnerCompanies}
            label={t("funFact.partnerCompanies.label")}
          />
          <CounterBox
            end={data.ongoingProjects}
            label={t("funFact.ongoingProjects.label")}
          />
        </div>
      </div>
    </section>
  );
};

export default FunFactDynamic;
