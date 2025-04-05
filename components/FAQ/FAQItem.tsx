import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type FaqData = {
  activeFaq: number | null;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { t } = useTranslation();
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isActive = activeFaq === id;

  return (
    <div className="group">
      <button
        onClick={() => handleFaqToggle(id)}
        className="flex w-full items-center justify-between px-4 py-5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/80"
      >
        <span className="text-left text-lg font-medium text-gray-900 dark:text-white">
          {t(quest)}
        </span>
        <span
          className={`ml-6 flex h-7 items-center transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        >
          <svg
            className="h-6 w-6 text-blue-500 transition-colors group-hover:text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-0">
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {t(ans)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
