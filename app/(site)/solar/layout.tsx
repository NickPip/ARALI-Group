import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Solar Solutions",
  description:
    "Sustainable solar energy solutions and installations by AraliGroup",
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
