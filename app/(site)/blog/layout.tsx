import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Completed Projects",
  description:
    "Stay updated with the latest news, insights, and updates from AraliGroup",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
