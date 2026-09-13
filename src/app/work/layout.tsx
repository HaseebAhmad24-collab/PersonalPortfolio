import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Haseeb Ahmad",
  description: "DevOps Projects, Deliveries & Infrastructure Built by Haseeb Ahmad.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
