"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-5xl h-[92vh] max-h-[900px] flex flex-col bg-[#f8faff] rounded-2xl border border-blue-900/20 shadow-2xl overflow-hidden"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white border-b border-blue-900/15 select-none">
              {/* Left: Document Spec */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-xs sm:text-sm font-semibold text-[#0f172a] uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Haseeb_Ahmad_CV.pdf
                    </h3>
                    <span className="hidden xs:inline-block text-[10px] font-mono bg-blue-100/70 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                      DEVOPS ENGINEER
                    </span>
                  </div>
                  <p className="text-[10px] text-[#64748b] hidden sm:block">
                    Curriculum Vitae &middot; Production Infrastructure &amp; Cloud Architecture
                  </p>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Download Button */}
                <a
                  href="/Haseeb_Ahmad_CV.pdf"
                  download="Haseeb_Ahmad_CV.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-medium shadow-xs hover:shadow-sm transition-all"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">DOWNLOAD</span>
                </a>

                {/* Open in New Tab */}
                <a
                  href="/Haseeb_Ahmad_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:px-3 sm:py-1.5 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0f172a] text-xs font-mono font-medium transition-all flex items-center gap-1.5"
                  title="Open in new window"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
                  <span className="hidden md:inline">FULLSCREEN</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors ml-1"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Preview Body */}
            <div className="relative flex-1 w-full h-full bg-[#cbd5e1]/30 p-2 sm:p-4 overflow-hidden flex flex-col">
              <iframe
                src="/Haseeb_Ahmad_CV.pdf#view=FitH"
                title="Haseeb Ahmad Resume Preview"
                className="w-full h-full rounded-xl border border-slate-300/80 bg-white shadow-inner"
              />

              {/* Mobile Fallback bar */}
              <div className="md:hidden mt-2 py-1.5 text-center bg-white/80 rounded-lg border border-slate-200">
                <span className="text-[11px] text-[#64748b]">
                  PDF preview not loading properly?{" "}
                  <a
                    href="/Haseeb_Ahmad_CV.pdf"
                    download="Haseeb_Ahmad_CV.pdf"
                    className="text-blue-600 font-semibold underline"
                  >
                    Click here to download
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
