"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const CorporateHeader = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
        {
          title: "menu.roadConstruction",
          path: "/road-construction",
          description: "Road construction and infrastructure development",
        },
        {
          title: "menu.civilConstruction",
          path: "/buildings",
          description: "Civil construction and building projects",
        },
        {
          title: "menu.concreteProduction",
          path: "/concrete-production",
          description: "Concrete production and supply",
        },
        {
          title: "menu.quarries",
          path: "/quarries",
          description: "Quarry operations and materials",
        },
        {
          title: "menu.gasFillingStation",
          path: "/gas-station",
          description: "Gas filling station services",
        },
        {
          title: "menu.energy",
          path: "/solar",
          description: "Energy solutions and solar projects",
        },
      ],
    },
    {
      title: "menu.contact",
      path: "/support",
    },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg dark:bg-gray-900"
          : "bg-white/95 dark:bg-gray-900/95"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo/arali_logo_high_res.png"
              alt="AraliGroup"
              width={48}
              height={48}
              className="transition-transform duration-300 hover:scale-105"
            />
            <div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                AraliGroup
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SINCE 2004
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.path || "#"}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  }`}
                >
                  {t(item.title)}
                </Link>

                {/* Mega Menu */}
                {item.submenu && activeMenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full w-[600px] rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.path}
                          className="group rounded-lg p-4 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                            {t(subItem.title)}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700">
              {t("menu.contact")}
            </button>
            <button className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CorporateHeader;
