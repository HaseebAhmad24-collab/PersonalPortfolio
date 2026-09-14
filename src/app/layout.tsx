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

const siteUrl = "https://www.haseebxdev.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haseeb Ahmad (haseebxdev) - DevOps & Cloud Platform Engineer",
    template: "%s | Haseeb Ahmad (haseebxdev)",
  },
  description: "Official portfolio of Haseeb Ahmad (haseebxdev) — DevOps & Cloud Platform Engineer specializing in CI/CD automation, Kubernetes, AWS infrastructure, and scalable production systems.",
  keywords: [
    "haseebxdev",
    "haseeb x dev",
    "Haseeb Ahmad",
    "Haseeb Ahmad DevOps",
    "haseebxdev portfolio",
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
    title: "Haseeb Ahmad (haseebxdev) - DevOps & Cloud Platform Engineer",
    description: "Official portfolio of Haseeb Ahmad (haseebxdev) — DevOps & Cloud Platform Engineer specializing in CI/CD automation, Kubernetes, AWS infrastructure, and scalable production systems.",
    siteName: "Haseeb Ahmad (haseebxdev)",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Haseeb Ahmad (haseebxdev) — DevOps & Cloud Platform Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haseeb Ahmad (haseebxdev) - DevOps & Cloud Platform Engineer",
    description: "Official portfolio of Haseeb Ahmad (haseebxdev) — DevOps & Cloud Platform Engineer.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "2R-y872MOHCAro8pAFzF8Trg9k5FLxg3Sn8ajz6D_FU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.haseebxdev.online/#person",
      "name": "Haseeb Ahmad",
      "alternateName": ["haseebxdev", "haseeb x dev"],
      "url": "https://www.haseebxdev.online",
      "image": "https://www.haseebxdev.online/profile_avatar.webp",
      "jobTitle": "DevOps & Cloud Platform Engineer",
      "sameAs": [
        "https://www.linkedin.com/in/haseebahmad/",
        "https://github.com/HaseebAhmad24-collab"
      ],
      "knowsAbout": [
        "DevOps",
        "Cloud Platform Engineering",
        "AWS Cloud Infrastructure",
        "Kubernetes & Docker",
        "CI/CD Automation",
        "Terraform & IaC",
        "Linux Administration"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.haseebxdev.online/#website",
      "url": "https://www.haseebxdev.online",
      "name": "Haseeb Ahmad (haseebxdev)",
      "description": "Official portfolio of Haseeb Ahmad (haseebxdev) — DevOps & Cloud Platform Engineer.",
      "publisher": {
        "@id": "https://www.haseebxdev.online/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${fragmentMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <CustomCursor />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
