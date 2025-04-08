"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaGlobe, FaFacebook } from "react-icons/fa";
import ThemeToggler from "../Header/ThemeToggler";

const DynamicGlassHeader = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.dataset.scrollY = String(scrollY);
    } else {
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0"));
    }
  }, [isMenuOpen]);

  const menuItems = [
    { title: "menu.home", path: "/" },
    { title: "menu.about", path: "/docs" },
    { title: "menu.completedProjects", path: "/blog" },
    {
      title: "menu.directions",
      submenu: [
        { title: "menu.roadConstruction", path: "/road-construction" },
        { title: "menu.civilConstruction", path: "/buildings" },
        { title: "menu.concreteProduction", path: "/concrete-production" },
        { title: "menu.quarries", path: "/quarries" },
        { title: "menu.gasFillingStation", path: "/gas-station" },
        { title: "menu.energy", path: "/solar" },
      ],
    },
    { title: "menu.contact", path: "/support" },
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 shadow-lg backdrop-blur-xl dark:bg-black/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center space-x-4 lg:ml-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center"
              >
                <Image
                  src={
                    isScrolled
                      ? "/images/logo/arali_logo_high_res.png"
                      : "/images/logo/arali_logo_fully_white.png"
                  }
                  alt="AraliGroup"
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
                />
                <div className="ml-2 flex flex-col lg:ml-4">
                  <span
                    className={`text-lg font-bold tracking-wide transition-colors duration-300 lg:text-2xl ${
                      isScrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-white"
                    }`}
                  >
                    AraliGroup
                  </span>
                  <p
                    className={`hidden text-sm font-semibold tracking-widest transition-colors duration-300 lg:block ${
                      isScrolled
                        ? "text-gray-600 dark:text-gray-400"
                        : "text-white/90"
                    }`}
                  >
                    SINCE 2004
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center space-x-10 lg:flex">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.path || "#"}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isScrolled
                        ? pathname === item.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {t(item.title)}
                  </Link>
                  {item.submenu && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full w-56 rounded-lg bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-black/90"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.path}
                          className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-blue-900/50 dark:hover:text-blue-400"
                        >
                          {t(subItem.title)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="hidden items-center space-x-6 lg:flex">
                <ThemeToggler />
                <a
                  href="https://www.facebook.com/araliconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2.5 transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <button
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge")
                  }
                  className={`flex items-center space-x-2 rounded-full px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <FaGlobe className="h-5 w-5" />
                  <span>{i18n.language === "ge" ? "ქართული" : "English"}</span>
                </button>
              </div>

              {/* Hamburger (Only when menu is closed) */}
              {!isMenuOpen && (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className={`rounded-lg p-2.5 transition-colors duration-200 lg:hidden ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Open menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-lg dark:bg-gray-900">
            {/* Close Button */}
            <div className="flex justify-end border-b border-gray-200 p-4 dark:border-gray-700">
              <button
                onClick={() => {
                  console.log("close");
                  setIsMenuOpen(false);
                }}
                className="rounded-md p-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Add your mobile links, theme switch, etc. here */}
            <div className="space-y-4 p-4">
              {/* Theme / Language */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    {t("menu.theme")}
                  </span>
                  <ThemeToggler />
                </div>
                <button
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge")
                  }
                  className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-800 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
                >
                  <span>{t("menu.language")}</span>
                  <div className="flex items-center gap-2">
                    <span>
                      {i18n.language === "ge" ? "ქართული" : "English"}
                    </span>
                    <FaGlobe className="h-5 w-5" />
                  </div>
                </button>
              </div>

              {/* Navigation Items */}
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title,
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                      >
                        {t(item.title)}
                        <svg
                          className={`h-5 w-5 transform transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-2 py-2">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.path}
                                  className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {t(subItem.title)}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.title)}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicGlassHeader;
