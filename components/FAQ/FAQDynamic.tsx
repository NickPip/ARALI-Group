"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FAQItem from "./FAQItem";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  position: number;
}

const FAQDynamic = () => {
  const { t, i18n } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = i18n.language || "en";

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        setLoading(true);
        const apiUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/globals/faq?locale=${locale}`;
        console.log("Fetching FAQ from:", apiUrl);

        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log("FAQ API Response:", data);

        if (!data.items || !Array.isArray(data.items)) {
          console.error("Invalid FAQ data received:", data);
          setFaqItems([]);
          return;
        }

        // Sort items by position and filter out invalid items
        const sortedItems = data.items
          .filter((item: FAQItem) => {
            const isValid = item && item.question && item.answer;

            if (!isValid) {
              console.log("Filtered out invalid FAQ item:", item);
            }
            return isValid;
          })
          .sort((a: FAQItem, b: FAQItem) => a.position - b.position);

        console.log("Processed FAQ items:", sortedItems);
        setFaqItems(sortedItems);
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        setFaqItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, [locale]);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  console.log("Current state:", { loading, faqItems, locale });

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-800 lg:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-4 h-12 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-2 shadow-xl dark:bg-gray-800/50">
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="p-4">
                    <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (faqItems.length === 0) {
    console.log("No FAQ items to display");
    return null;
  }

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
              {faqItems.map((faq, key) => (
                <FAQItem
                  key={faq.id}
                  faqData={{
                    id: key,
                    activeFaq,
                    handleFaqToggle,
                    quest: faq.question,
                    ans: faq.answer,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQDynamic;
