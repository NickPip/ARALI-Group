import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Authentication",
  description: "Secure authentication for AraliGroup services",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
