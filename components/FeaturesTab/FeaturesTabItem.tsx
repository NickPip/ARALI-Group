import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { t } = useTranslation();
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {t(title)}
          </h2>
          <p className="mb-5">{t(desc1)}</p>
          <p className="w-11/12">{t(desc2)}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={t(title)} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={t(title)}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
