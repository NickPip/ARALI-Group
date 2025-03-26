"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      {/* Footer Bottom */}
      <div className="flex flex-col flex-wrap items-center justify-between gap-3 border-t border-stroke py-4 dark:border-strokedark lg:flex-row lg:gap-0">
        <div className="w-full text-center">
          <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
