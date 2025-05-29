import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AraliGroup – Sign Up",
  description: "Create your AraliGroup account",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
