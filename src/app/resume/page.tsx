"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Download, ExternalLink, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume / CV - Haseeb Ahmad | DevOps Engineer";
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#edf5ff] text-[#0f172a] flex flex-col selection:bg-blue-600 selection:text-white"
      style={{ fontFamily: "var(--font-albert), Albert Sans, sans-serif" }}
    >
      {/* Ambient Lighting Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 15%, rgba(186, 220, 255, 0.6) 0%, transparent 55%),
            radial-gradient(circle at 80% 70%, rgba(199, 226, 255, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% 40%, rgba(237, 245, 255, 1) 0%, rgba(220, 235, 255, 0.5) 100%)
          `,
        }}
      />

      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-10 flex flex-col">
        {/* Top Header & Action Ribbon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blue-900/15 select-none">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748b] hover:text-blue-600 mb-2 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h1 className="text-2xl sm:text-3xl font-normal text-[#0f172a] tracking-tight">
                Curriculum Vitae
              </h1>
            </div>
            <p
              className="text-xs font-mono text-[#64748b] tracking-wider uppercase mt-1"
            >
              Haseeb Ahmad &middot; DevOps &amp; Cloud Platform Engineer &middot; PDF
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/Haseeb_Ahmad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-[#0f172a]/20 hover:border-[#0f172a]/40 bg-white/80 hover:bg-white text-[#0f172a] text-xs font-mono tracking-wider transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
              <span>NEW TAB</span>
            </a>

            <a
              href="/Haseeb_Ahmad_CV.pdf"
              download="Haseeb_Ahmad_CV.pdf"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono tracking-wider transition-all flex items-center gap-2 shadow-sm hover:shadow-md font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="flex-1 mt-6 rounded-2xl border border-blue-900/15 bg-white/90 p-2 sm:p-4 shadow-sm flex flex-col min-h-[750px]">
          <iframe
            src="/Haseeb_Ahmad_CV.pdf#view=FitH"
            title="Haseeb Ahmad CV Preview"
            className="w-full flex-1 min-h-[720px] rounded-xl border border-slate-200 bg-white"
          />

          {/* Mobile Direct Download Helper */}
          <div className="md:hidden mt-3 py-2 px-3 text-center bg-blue-50/70 border border-blue-200/80 rounded-lg">
            <p className="text-xs text-[#334155]">
              Having trouble viewing on mobile?{" "}
              <a
                href="/Haseeb_Ahmad_CV.pdf"
                download="Haseeb_Ahmad_CV.pdf"
                className="text-blue-600 font-semibold underline inline-flex items-center gap-1"
              >
                Download PDF directly <Download className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full border-t border-blue-900/15 bg-[#edf5ff] py-6 px-5 sm:px-8 select-none mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#64748b]">
          <span>HASEEB AHMAD &middot; DEVOPS ARCHITECTURE &middot; 2025</span>
          <a
            href="/Haseeb_Ahmad_CV.pdf"
            download="Haseeb_Ahmad_CV.pdf"
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <Download className="w-3 h-3" /> Download Official Resume (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}
