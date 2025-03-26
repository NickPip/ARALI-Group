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
        {/* ვერტიკალური ხაზი */}
        <div className="mt-1 h-14 w-1 bg-blue-600" />

        {/* ტექსტის ნაწილი */}
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
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section
        ref={ref}
        className="bg-white px-4 py-20 dark:bg-blacksection md:px-8 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[2fr_1fr]">
          {/* მარცხენა ნაწილი */}
          <div>
            <h2 className="mb-10 text-7xl font-bold leading-tight text-black dark:text-white">
              <span className="text-blue-700">Arali Group</span> Stands Out for
              Reliability
            </h2>

            <p className="mb-10 text-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              With 20 years of operation, the company has built a strong
              reputation, trust, and respect. Our partners feel secure and
              confident when working with us.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700">
                Contact Us
              </button>
              <button className="rounded-md border border-transparent bg-blue-700 px-10 py-4 font-semibold text-white transition hover:border-blue-700 hover:bg-white hover:text-blue-700">
                Our Work
              </button>
            </div>
          </div>

          {/* მარჯვენა სტატისტიკა */}
          <div className="border- -4 grid gap-14 pl-10">
            <CounterBox end={1540} label="Completed Projects" />
            <CounterBox end={800} label="Partner Companies" />
            <CounterBox end={10} label="Ongoing Projects" />
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
