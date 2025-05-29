import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Concrete Production",
  description: "High-quality concrete production services by AraliGroup",
};

export default function ConcreteProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
