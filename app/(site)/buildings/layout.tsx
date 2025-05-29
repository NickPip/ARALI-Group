import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Buildings",
  description:
    "Discover our expertise in building construction and development at AraliGroup",
};

export default function BuildingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
