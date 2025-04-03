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

  const menuItems = [
    {
      title: "menu.home",
      path: "/",
    },
    {
      title: "menu.about",
      path: "/docs",
    },
    {
      title: "menu.completedProjects",
      path: "/blog",
    },
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
    {
      title: "menu.contact",
      path: "/support",
    },
  ];

  return (
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
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={
                  isScrolled
                    ? "/images/logo/arali_logo_high_res.png"
                    : "/images/logo/arali_logo_fully_white.png"
                }
                alt="AraliGroup"
                width={60}
                height={60}
                className="h-[60px] w-[60px]"
              />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}
              >
                AraliGroup
              </span>
              <p
                className={`text-sm font-semibold tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-white/90"
                }`}
              >
                SINCE 2004
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                        className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-blue-900/50 dark:hover:text-blue-400"
                      >
                        {t(subItem.title)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions - only on desktop */}
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

          {/* Hamburger Button (always visible on mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div
              className={`space-y-1 px-4 pb-3 pt-3 ${
                isScrolled
                  ? "bg-white dark:bg-gray-900"
                  : "bg-black/80 backdrop-blur-xl"
              }`}
            >
              {/* Theme Toggler and Language Button (mobile only) */}
              <div className="flex items-center justify-between px-3 pb-2">
                {/* ენის გადამრთველი */}
                <button
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge")
                  }
                  className="flex items-center gap-2 text-sm font-medium 
             text-gray-800 hover:text-blue-600 
             dark:text-gray-300 dark:hover:text-white"
                >
                  <FaGlobe className="h-5 w-5" />
                  <span>{i18n.language === "ge" ? "ქართული" : "English"}</span>
                </button>

                {/* თემის გადამრთველი */}
                <div className="mr-5 rounded-full pb-4 transition-colors duration-200 hover:bg-white/10 dark:hover:bg-white/10">
                  <ThemeToggler />
                </div>
              </div>

              {/* Mobile Nav Items */}
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title,
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                          isScrolled
                            ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {t(item.title)}
                        <svg
                          className={`h-4 w-4 transform transition-transform duration-200 ${
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
                      {activeDropdown === item.title && (
                        <div className="ml-4 mt-1 space-y-0.5">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.path}
                              className={`block rounded-md px-3 py-1.5 text-xs ${
                                isScrolled
                                  ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                  : "text-white hover:bg-white/10"
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {t(subItem.title)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        isScrolled
                          ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.title)}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default DynamicGlassHeader;
