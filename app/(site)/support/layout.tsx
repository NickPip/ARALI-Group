import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Support",
  description:
    "Get help and support for all your AraliGroup services and projects",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
