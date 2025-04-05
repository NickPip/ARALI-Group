"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-800 lg:py-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl dark:bg-blue-900/20" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
            FAQ
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-300 sm:text-5xl">
            {t("faq.title1")}
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-2 shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/10"
          >
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {faqData.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
