import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Quarries",
  description: "Expert quarry operations and management by AraliGroup",
};

export default function QuarriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
