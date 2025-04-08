"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathUrl = usePathname();
  const isHome = pathUrl === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1280;
      setIsMobile(isNowMobile);

      // თუ გადავიდა დესკტოპზე, დახუროს მენიუ
      if (!isNowMobile) {
        setNavigationOpen(false);
      }
    };

    handleResize(); // პირველივე ჩატვირთვისას
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleStickyMenu = () => {
      if (window.scrollY > 0) {
        setStickyMenu(true);
        setIsScrolled(true);
      } else {
        setStickyMenu(false);
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth < 1280) {
      setNavigationOpen(false);
    }
  };

  const headerIsWhite = navigationOpen || stickyMenu || isHovered;

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || navigationOpen
          ? "bg-white backdrop-blur-md dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={
                headerIsWhite
                  ? "/images/logo/arali_logo_high_res.png"
                  : "/images/logo/arali_logo_fully_white.png"
              }
              alt="logo"
              width={40}
              height={40}
            />
            <span
              className={`text-2xl font-extrabold tracking-tight ${
                headerIsWhite ? "text-blue-800 dark:text-white" : "text-white"
              }`}
            >
              AraliGroup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center xl:flex">
            <nav className="mr-6">
              <ul className="flex items-center gap-16">
                {menuData.map((menuItem, idx) => {
                  if (idx === 3) return null;

                  const linkColor = headerIsWhite
                    ? "text-blue-400 hover:text-blue-400 drop-shadow dark:text-blue-400 dark:hover:text-blue-400"
                    : "text-white hover:text-white drop-shadow-sm dark:text-white dark:hover:text-white";

                  return (
                    <li
                      key={idx}
                      className={menuItem.submenu ? "relative" : ""}
                    >
                      {menuItem.submenu ? (
                        <>
                          <button
                            onClick={() => setDropdownToggler(!dropdownToggler)}
                            className={`flex w-full items-center justify-between gap-3 transition-all duration-200 ease-in-out ${linkColor}`}
                          >
                            {t(menuItem.title)}
                            <span>
                              <svg
                                className={`h-3 w-3 ${
                                  headerIsWhite
                                    ? "fill-black dark:fill-white"
                                    : "fill-white"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                              </svg>
                            </span>
                          </button>

                          <ul
                            className={`mt-2 flex-col gap-2 pl-4 ${
                              dropdownToggler ? "flex" : "hidden"
                            }`}
                          >
                            <ThemeToggler />
                            {menuItem.submenu.map((item, key) => (
                              <li key={key}>
                                <Link
                                  href={item.path || "#"}
                                  onClick={handleMenuClick}
                                  className={linkColor}
                                >
                                  {t(item.title)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={menuItem.path!}
                          onClick={handleMenuClick}
                          className={`block transition-colors duration-300 ease-in-out ${linkColor}`}
                        >
                          {t(menuItem.title)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <div>
                <a
                  href="https://www.facebook.com/araliconstruction"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={
                      headerIsWhite
                        ? "/images/icon/facebook.png"
                        : "/images/icon/facebook-logo-white.png"
                    }
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                </a>
              </div>

              <div>
                <LanguageSwitcher />
              </div>

              <div className="flex items-center">
                <ThemeToggler />
              </div>

              <div
                className={`border-4 px-2 py-0.5 text-sm font-extrabold uppercase tracking-wide transition-all duration-300
                  ${
                    headerIsWhite
                      ? "border-blue-800 text-blue-800 dark:border-white dark:text-white"
                      : "border-white text-white"
                  }`}
              >
                SINCE 2004
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            aria-label="hamburger toggler"
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="flex items-center justify-center xl:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative flex h-6 w-6 items-center justify-center">
              <motion.span
                className="absolute h-0.5 w-6 transform rounded-sm bg-current"
                animate={{
                  rotate: navigationOpen ? 45 : 0,
                  y: navigationOpen ? 0 : -8,
                  backgroundColor: navigationOpen ? "#3b82f6" : "currentColor",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 transform rounded-sm bg-current"
                animate={{
                  opacity: navigationOpen ? 0 : 1,
                  scale: navigationOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 transform rounded-sm bg-current"
                animate={{
                  rotate: navigationOpen ? -45 : 0,
                  y: navigationOpen ? 0 : 8,
                  backgroundColor: navigationOpen ? "#3b82f6" : "currentColor",
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navigationOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
                onClick={() => setNavigationOpen(false)}
              />
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  mass: 0.5,
                }}
                className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-900 xl:hidden"
              >
                <nav className="py-4">
                  <ul className="flex flex-col gap-4 px-4">
                    {menuData.map((menuItem, idx) => {
                      if (idx === 3) return null;

                      const linkColor =
                        "text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400";

                      return (
                        <motion.li
                          key={idx}
                          className={menuItem.submenu ? "relative" : ""}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ x: 5 }}
                        >
                          {menuItem.submenu ? (
                            <>
                              <motion.button
                                onClick={() =>
                                  setDropdownToggler(!dropdownToggler)
                                }
                                className={`flex w-full items-center justify-between gap-3 ${linkColor}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {t(menuItem.title)}
                                <motion.span
                                  animate={{
                                    rotate: dropdownToggler ? 180 : 0,
                                    scale: dropdownToggler ? 1.2 : 1,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                >
                                  <svg
                                    className="h-3 w-3 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                  </svg>
                                </motion.span>
                              </motion.button>

                              <AnimatePresence>
                                {dropdownToggler && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                      duration: 0.4,
                                      type: "spring",
                                      stiffness: 200,
                                    }}
                                    className="mt-2 flex-col gap-2 pl-4"
                                  >
                                    {menuItem.submenu.map((item, key) => (
                                      <motion.li
                                        key={key}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          duration: 0.3,
                                          delay: key * 0.1,
                                          type: "spring",
                                          stiffness: 200,
                                        }}
                                        whileHover={{ x: 5 }}
                                      >
                                        <Link
                                          href={item.path || "#"}
                                          onClick={handleMenuClick}
                                          className={linkColor}
                                        >
                                          {t(item.title)}
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <motion.div
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                href={menuItem.path!}
                                onClick={handleMenuClick}
                                className={linkColor}
                              >
                                {t(menuItem.title)}
                              </Link>
                            </motion.div>
                          )}
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex items-center justify-between gap-6 border-t border-gray-200 px-4 py-4 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="https://www.facebook.com/araliconstruction"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image
                        src="/images/icon/facebook.png"
                        width={24}
                        height={24}
                        alt="Facebook"
                      />
                    </motion.a>
                    <LanguageSwitcher />
                    <ThemeToggler />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-4 border-blue-800 px-2 py-0.5 text-sm font-extrabold uppercase tracking-wide text-blue-800 dark:border-white dark:text-white"
                  >
                    SINCE 2004
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
