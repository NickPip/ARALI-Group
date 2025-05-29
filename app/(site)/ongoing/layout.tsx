import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Ongoing Projects",
  description:
    "Explore our current construction and development projects at AraliGroup",
};

export default function OngoingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
