import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Haseeb Ahmad",
  description: "Learn more about Haseeb Ahmad, DevOps & Cloud Engineer.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
