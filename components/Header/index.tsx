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
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathUrl = usePathname();
  const isHome = pathUrl === "/";

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
      setStickyMenu(window.scrollY >= 80);
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
      className={`fixed left-0 top-0 z-[99999] w-full transform transition-all duration-300 
        ${
          headerIsWhite
            ? "bg-white/20 py-4 shadow-none backdrop-blur-xl dark:bg-black/10"
            : "bg-transparent py-4"
        }
        ${!isMobile ? "hover:scale-105" : ""}
      `}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <div className="flex items-center gap-13">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-md px-10 py-1"
            >
              <Image
                className="-mt-1"
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
                className={`pt-1 text-2xl font-extrabold tracking-tight ${
                  headerIsWhite ? "text-blue-800 dark:text-white" : "text-white"
                }`}
              >
                AraliGroup
              </span>
            </Link>
          </div>

          <button
            aria-label="hamburger toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <div className="relative flex h-6 w-6 items-center justify-center">
              {/* Line 1 */}
              <span
                className={`absolute h-0.5 w-6 transform rounded-sm transition duration-300 ease-in-out
        ${navigationOpen ? "rotate-45 bg-black" : "-translate-y-2 bg-white"}`}
              />
              {/* Line 2 */}
              <span
                className={`absolute h-0.5 w-6 transform rounded-sm transition duration-300 ease-in-out
        ${navigationOpen ? "opacity-0" : "bg-white opacity-100"}`}
              />
              {/* Line 3 */}
              <span
                className={`absolute h-0.5 w-6 transform rounded-sm transition duration-300 ease-in-out
        ${navigationOpen ? "-rotate-45 bg-black" : "translate-y-2 bg-white"}`}
              />
            </div>
          </button>
        </div>

        <div
          className={`
    overflow-hidden transition-all duration-300 ease-in-out xl:overflow-visible
    ${navigationOpen ? "visible max-h-[500px] opacity-100" : "invisible max-h-0 opacity-0"}
    w-full items-center justify-between
    xl:visible xl:flex xl:max-h-none xl:opacity-100
  `}
        >
          <nav>
            <ul className="ml-6 mt-4 flex flex-col gap-5 pl-5 pt-6 text-left font-roboto text-sm font-bold xl:mt-0 xl:flex-row xl:items-center xl:gap-16 xl:pl-[80px] xl:pt-0 xl:text-center">
              {menuData.map((menuItem, idx) => {
                if (idx === 3) return null;

                const linkColor = headerIsWhite
                  ? "text-blue-800 hover:text-blue-800 drop-shadow dark:text-blue-400 dark:hover:text-blue-400"
                  : "text-white hover:text-white drop-shadow-sm dark:text-white dark:hover:text-white";

                return (
                  <li key={idx} className={menuItem.submenu ? "relative" : ""}>
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className={`flex cursor-pointer items-center justify-between gap-3 transition-all duration-200 ease-in-out ${linkColor} ${
                            !isMobile ? "hover:scale-105" : ""
                          }`}
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
                          className={`dropdown absolute left-0 top-full mt-2 w-60 flex-col gap-2 rounded-md px-4 py-3 shadow-md ${
                            dropdownToggler ? "flex" : "hidden"
                          } ${
                            headerIsWhite
                              ? "bg-white text-black dark:bg-black dark:text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key}>
                              <Link
                                href={item.path || "#"}
                                onClick={handleMenuClick}
                                className={`transition-all duration-200 ease-in-out ${
                                  !isMobile ? "hover:scale-105" : ""
                                }`}
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
                        className={`transition-colors duration-300 ease-in-out ${linkColor} ${
                          !isMobile ? "hover:scale-105" : ""
                        }`}
                      >
                        {t(menuItem.title)}
                      </Link>
                    )}
                  </li>
                );
              })}
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
            <ThemeToggler />
            <div onClick={handleMenuClick}>
              <LanguageSwitcher />
            </div>

            <div onClick={handleMenuClick}></div>

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
      </div>
    </header>
  );
};

export default Header;
