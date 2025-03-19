"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SidebarLink = () => {
  const { t } = useTranslation();

  return (
    <>
      <li className="block">
        <Link
          href={`/`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          {t("sidebar.companyAbout")}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
