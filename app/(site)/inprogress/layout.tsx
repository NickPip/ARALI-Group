import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Projects - ARALI Group",
  description: "View our completed projects and achievements",
};

export default function CompletedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
