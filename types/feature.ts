import { IconType } from "react-icons";

export interface Feature {
  id: number;
  icon: IconType; // ✅ Use the correct type
  title: string;
  description: string;
}
