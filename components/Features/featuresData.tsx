import { Feature } from "@/types/feature";
import {
  FaRoad,
  FaBuilding,
  FaIndustry,
  FaMountain,
  FaGasPump,
  FaSolarPanel,
} from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: FaRoad,
    title: "features.roadConstruction.title",
    description: "features.roadConstruction.description",
  },
  {
    id: 2,
    icon: FaBuilding,
    title: "features.civilConstruction.title",
    description: "features.civilConstruction.description",
  },
  {
    id: 3,
    icon: FaIndustry,
    title: "features.concreteProduction.title",
    description: "features.concreteProduction.description",
  },
  {
    id: 4,
    icon: FaMountain,
    title: "features.quarries.title",
    description: "features.quarries.description",
  },
  {
    id: 5,
    icon: FaGasPump,
    title: "features.gasFillingStation.title",
    description: "features.gasFillingStation.description",
  },
  {
    id: 6,
    icon: FaSolarPanel,
    title: "features.energy.title",
    description: "features.energy.description",
  },
];

export default featuresData;
