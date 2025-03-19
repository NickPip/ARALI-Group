import { Feature } from "@/types/feature";
import { useTranslation } from "react-i18next";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "features.roadConstruction.title",
    description: "features.roadConstruction.description",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "features.civilConstruction.title",
    description: "features.civilConstruction.description",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "features.concreteProduction.title",
    description: "features.concreteProduction.description",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "features.quarries.title",
    description: "features.quarries.description",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "features.gasFillingStation.title",
    description: "features.gasFillingStation.description",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "features.energy.title",
    description: "features.energy.description",
  },
];

export default featuresData;
