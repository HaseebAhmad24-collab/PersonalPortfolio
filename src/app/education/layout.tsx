import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - Haseeb Ahmad",
  description: "Academic background, degrees & certifications of Haseeb Ahmad.",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
