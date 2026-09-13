import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Haseeb Ahmad",
  description: "DevOps & Cloud Engineering Experience of Haseeb Ahmad.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
