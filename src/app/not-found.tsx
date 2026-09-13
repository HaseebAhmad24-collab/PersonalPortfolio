"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, Terminal, Home, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen bg-[#edf5ff] text-[#0f172a] flex flex-col selection:bg-blue-600 selection:text-white"
      style={{ fontFamily: "var(--font-albert), Albert Sans, sans-serif" }}
    >
      {/* 1. Ambient Lighting Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(186, 220, 255, 0.65) 0%, transparent 55%),
            radial-gradient(circle at 80% 75%, rgba(199, 226, 255, 0.55) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(237, 245, 255, 1) 0%, rgba(220, 235, 255, 0.5) 100%)
          `,
        }}
      />

      {/* 2. Blueprint Grid Lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "76px 20vh",
        }}
      />

      {/* 3. Top Navigation Bar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* 4. Main 404 Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-8 py-12 md:py-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center select-none"
        >
          {/* Spec Tag Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-900/15 bg-white/90 text-blue-600 text-xs font-mono font-medium tracking-wider uppercase mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>HTTP 404 &middot; ENDPOINT NOT FOUND</span>
          </div>

          {/* Large Architectural 404 Heading */}
          <h1
            className="text-7xl xs:text-8xl sm:text-9xl md:text-[130px] font-light text-[#0f172a] tracking-tight leading-none"
            style={{ fontWeight: 300 }}
          >
            4<span className="text-blue-600 font-normal">0</span>4
          </h1>

          {/* Subtitle */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0f172a] tracking-tight mt-4 mb-3"
          >
            Pipeline Route Severed.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-md mx-auto leading-relaxed mb-8">
            The requested cluster path does not exist or has been deprovisioned. Verify the ingress URL or redirect to an active infrastructure node.
          </p>

          {/* DevOps Diagnostic Terminal Card */}
          <div className="w-full max-w-lg mb-8 rounded-xl border border-blue-900/15 bg-[#0f172a] text-left p-4 sm:p-5 shadow-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 text-slate-400 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                <span className="ml-1 text-slate-300">k8s-production-cluster</span>
              </div>
              <span>status: degraded (404)</span>
            </div>

            {/* Terminal Body */}
            <div className="pt-3 font-mono text-xs sm:text-[13px] leading-relaxed">
              <div className="text-slate-300 flex items-center gap-2">
                <span className="text-blue-400">$</span>
                <span>kubectl get ingress --namespace=production</span>
              </div>
              <div className="text-amber-400/90 mt-1.5 pl-3">
                Error from server (NotFound): the server could not find the requested route.
              </div>
              <div className="text-slate-400 mt-1 pl-3 text-[11px]">
                Target: 0 healthy replicas &middot; Ingress rules: [DEGRADED]
              </div>
              <div className="text-emerald-400 mt-2 flex items-center gap-2">
                <span className="text-blue-400">$</span>
                <span className="animate-pulse">re-routing to safe node...</span>
              </div>
            </div>
          </div>

          {/* Action Recovery Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-medium tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              href="/work"
              className="px-6 py-2.5 rounded-full border border-blue-900/20 bg-white/90 hover:bg-white text-[#0f172a] text-xs font-mono font-medium tracking-wider uppercase transition-all flex items-center gap-2 shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#64748b]" />
              <span>VIEW PROJECTS</span>
            </Link>

            <Link
              href="/resume"
              className="px-6 py-2.5 rounded-full border border-blue-600/30 bg-blue-50/70 hover:bg-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase transition-all flex items-center gap-2 shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>VIEW RESUME</span>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* 5. Architectural Blueprint Footer */}
      <footer className="relative z-10 w-full border-t border-blue-900/15 bg-[#edf5ff] py-6 px-5 sm:px-8 select-none">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#64748b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>CORE CLUSTER: ONLINE &middot; HASEEB AHMAD &middot; 2025</span>
          </div>
          <span className="text-[10px] tracking-widest uppercase">
            RESILIENT DEVOPS PLATFORM ARCHITECTURE
          </span>
        </div>
      </footer>
    </div>
  );
}
