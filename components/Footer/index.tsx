"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Footer Content */}
        <div className="flex flex-wrap items-center justify-between py-10 lg:py-15">
          {/* Logo Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-auto"
          >
            <a href="/" className="relative">
              <Image
                width={60}
                height={80}
                src="/images/logo/arali_logo_high_res.png"
                alt="Logo"
                className="dark:hidden"
              />
              <Image
                width={60}
                height={80}
                src="/images/logo/arali_logo_high_res.png"
                alt="Logo"
                className="hidden dark:block"
              />
            </a>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
              {t("contact.title")}
            </p>
            <p className="text-itemtitle font-medium text-black dark:text-white">
              info@araligroup.ge
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:gap-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full text-center lg:w-auto"
          >
            <p>{t("footer.copyright")}</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top flex items-center gap-5"
          ></motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
