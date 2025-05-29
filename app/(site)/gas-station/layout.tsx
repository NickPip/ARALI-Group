import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Gas Station Construction",
  description:
    "Professional gas station construction and development services by AraliGroup",
};

export default function GasStationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
