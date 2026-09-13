"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/work", label: "WORK" },
  { href: "/education", label: "EDUCATION" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { contact } = portfolioData.personalInfo;
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 w-full px-5 sm:px-8 md:px-14 py-5 sm:py-7 flex items-center justify-between bg-[#edf5ff] border-b border-blue-900/10">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full border border-[#0f172a]/80 group-hover:border-blue-600 group-hover:bg-blue-50 flex items-center justify-center text-xs transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
            >
              H
            </div>
            <span
              className="text-xs tracking-[0.2em] text-[#0f172a] uppercase group-hover:text-blue-600 transition-colors hidden xs:block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              HASEEB AHMAD
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-xs tracking-[0.18em] transition-colors uppercase cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-[#475569] hover:text-[#0f172a]"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2 rounded-full border border-[#0f172a]/25 bg-white/90 hover:bg-white text-[#0f172a] uppercase shadow-sm hover:shadow-md transition-all text-[11px] tracking-widest font-normal"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LET&apos;S TALK
          </a>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg border border-[#0f172a]/15 bg-white/80 hover:bg-white transition-colors"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#0f172a] transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0f172a] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0f172a] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden relative z-20 bg-[#edf5ff] border-b border-blue-900/10 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-0">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 py-3.5 border-b border-blue-900/8 text-xs tracking-[0.2em] uppercase transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-[#475569] hover:text-[#0f172a]"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
                )}
                {label}
              </Link>
            );
          })}
          {/* Mobile CTA */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 mb-1 inline-flex self-start px-5 py-2 rounded-full border border-[#0f172a]/25 bg-white/90 text-[#0f172a] uppercase text-[11px] tracking-widest font-normal"
            style={{ fontFamily: "var(--font-mono)" }}
            onClick={() => setOpen(false)}
          >
            LET&apos;S TALK
          </a>
        </nav>
      </div>
    </>
  );
}
