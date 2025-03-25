"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // ახალი მდგომარეობა
  const pathUrl = usePathname();
  const isHome = pathUrl === "/";
  const onDark = isHome && !stickyMenu;

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
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

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group fixed left-0 top-0 z-99999 w-full transition-all duration-200 ${
        stickyMenu
          ? "bg-white !py-4 shadow dark:bg-black"
          : "bg-transparent py-7 hover:bg-white"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <div className="flex items-center gap-13">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-md px-4 py-1"
            >
              <Image
                src={
                  stickyMenu || isHovered
                    ? "/images/logo/arali_logo_high_res.png"
                    : "/images/logo/arali_logo_fully_white.png"
                }
                alt="logo"
                width={40}
                height={40}
              />
              <span
                className={`mt-2 text-2xl font-extrabold tracking-tight ${
                  stickyMenu || isHovered ? "text-black" : "text-white"
                }`}
              >
                ARALI GROUP
              </span>
            </Link>
          </div>

          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 text-lg xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li
                  key={key}
                  className={menuItem.submenu ? "group relative" : ""}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className={`flex cursor-pointer items-center justify-between gap-3 ${
                          isHovered
                            ? "text-blue-500"
                            : pathUrl === menuItem.path
                              ? "text-primary"
                              : onDark
                                ? "text-white hover:text-primary"
                                : "text-primary hover:text-primary"
                        }`}
                      >
                        {t(menuItem.title)}
                        <span>
                          <svg
                            className={`h-3 w-3 cursor-pointer ${
                              isHovered
                                ? "fill-blue-500"
                                : onDark
                                  ? "fill-white group-hover:fill-primary"
                                  : "fill-primary group-hover:fill-primary"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown absolute left-0 top-full mt-2 w-60 flex-col gap-2 rounded-md px-4 py-3 shadow-md ${
                          dropdownToggler ? "flex" : "hidden"
                        } ${
                          onDark
                            ? "bg-black/80 text-white"
                            : "bg-white text-primary"
                        }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link
                              href={item.path || "#"}
                              onClick={handleMenuClick}
                              className={
                                isHovered
                                  ? "text-blue-500 hover:text-blue-500"
                                  : ""
                              }
                            >
                              {t(item.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`${
                        isHovered
                          ? "text-blue-500 hover:text-blue-500"
                          : pathUrl === menuItem.path
                            ? "text-primary"
                            : onDark
                              ? "text-white hover:text-primary"
                              : "text-primary hover:text-primary"
                      }`}
                      onClick={handleMenuClick}
                    >
                      {t(menuItem.title)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <div>
              <a
                href="https://www.facebook.com/araliconstruction"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icon/facebook-logo-white.png"
                  width={24}
                  height={24}
                  alt="Facebook"
                />
              </a>
            </div>

            <div onClick={handleMenuClick}>
              <LanguageSwitcher />
            </div>
            <div onClick={handleMenuClick}>
              <ThemeToggler />
            </div>
            <div
              className={`border-4 px-2 py-0.5 text-sm font-extrabold uppercase tracking-wide ${
                stickyMenu
                  ? "border-black text-black dark:border-white dark:text-white"
                  : "border-white text-white"
              }`}
            >
              SINCE 2004
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
