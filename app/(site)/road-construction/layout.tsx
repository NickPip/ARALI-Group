import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Road Construction",
  description:
    "Comprehensive road construction and infrastructure development by AraliGroup",
};

export default function RoadConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
