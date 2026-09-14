import type { Metadata } from "next";
import { Albert_Sans, Fragment_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

// Albert Sans — clean geometric sans for headings and body (matches reference site)
const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  weight: ["300", "400", "500", "600", "700"],
});

// Fragment Mono — technical monospace for labels, nav, badges (matches reference site)
const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

// Use the live production domain so OpenGraph image URLs never point to an unresolvable domain
const siteUrl = "https://haseebxdev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Visit My Portfolio | Haseeb Ahmad",
    template: "%s | Haseeb Ahmad",
  },
  description: "DevOps Engineer specializing in CI/CD automation, Kubernetes, AWS cloud infrastructure, and scalable production deployments.",
  keywords: [
    "Haseeb Ahmad",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Docker",
    "Linux",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Haseeb Ahmad" }],
  creator: "Haseeb Ahmad",
  publisher: "Haseeb Ahmad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Visit My Portfolio | Haseeb Ahmad",
    description: "DevOps Engineer specializing in multi-environment release automation, Kubernetes orchestrations, and cloud security in Lahore, Pakistan.",
    siteName: "Haseeb Ahmad — DevOps Engineer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Haseeb Ahmad — DevOps Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit My Portfolio | Haseeb Ahmad",
    description: "DevOps Engineer specializing in multi-environment release automation, Kubernetes orchestrations, and cloud security.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${fragmentMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <CustomCursor />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
