import type { Metadata } from "next";
import { Albert_Sans, Fragment_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Haseeb Ahmad | DevOps Engineer",
  description: "DevOps Engineer specializing in CI/CD automation, Kubernetes, AWS cloud infrastructure, and scalable production deployments.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
