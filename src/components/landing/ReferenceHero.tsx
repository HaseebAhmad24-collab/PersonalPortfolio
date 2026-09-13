"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export default function ReferenceHero() {
  const { contact } = portfolioData.personalInfo;

  // Continuous Typewriter Animation for "DevOps Engineer"
  const fullText = "DevOps Engineer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Haseeb Ahmad | DevOps Engineer";
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isDeleting && displayText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 110);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400); // stay visible for 2.4s
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 55);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#edf5ff] text-[#0f172a] flex flex-col" style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}>
      
      {/* Profile Image — absolute, bottom anchored, right side, seamless bottom emergence */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/profile_cutout.png"
        alt="Haseeb Ahmad"
        className="select-none pointer-events-none"
        style={{
          position: 'absolute',
          bottom: '-28vh',
          right: '-4%',
          height: '115vh',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'bottom',
          zIndex: 5,
          maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.95) 22%, black 30%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.95) 22%, black 30%, black 100%)',
        }}
      />
      
      {/* 1. Ambient Lighting & Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, rgba(186, 220, 255, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 82% 75%, rgba(199, 226, 255, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(237, 245, 255, 1) 0%, rgba(220, 235, 255, 0.6) 100%)
          `
        }}
      />

      {/* Blueprint Grid Lines Pattern — tuned for clear, elegant visibility */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-85"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "76px 20vh"
        }}
      />

      {/* Blueprint Architectural Geometry Curves / Arcs */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large sweeping architectural circle arc centered on portrait */}
        <circle 
          cx="68%" 
          cy="52%" 
          r="420" 
          fill="none" 
          stroke="rgba(37, 99, 235, 0.28)" 
          strokeWidth="1.4" 
          strokeDasharray="5 5"
        />
        <circle 
          cx="68%" 
          cy="52%" 
          r="540" 
          fill="none" 
          stroke="rgba(37, 99, 235, 0.2)" 
          strokeWidth="1.2" 
        />
        <line 
          x1="8%" 
          y1="0%" 
          x2="55%" 
          y2="100%" 
          stroke="rgba(37, 99, 235, 0.16)" 
          strokeWidth="1" 
        />
      </svg>

      <header className="relative z-20 w-full px-8 md:px-14 py-8 flex items-center justify-between">
        {/* Left: Logo + Nav Links together */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#0f172a]/80 flex items-center justify-center text-xs" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>H</div>
            <span className="text-xs tracking-[0.2em] text-[#0f172a] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>HASEEB AHMAD</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/about" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] text-[#475569] hover:text-[#0f172a] transition-colors uppercase cursor-pointer" style={{ fontFamily: 'var(--font-mono)' }}>ABOUT</a>
            <a href="/experience" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] text-[#475569] hover:text-[#0f172a] transition-colors uppercase cursor-pointer" style={{ fontFamily: 'var(--font-mono)' }}>EXPERIENCE</a>
            <a href="/work" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] text-[#475569] hover:text-[#0f172a] transition-colors uppercase cursor-pointer" style={{ fontFamily: 'var(--font-mono)' }}>WORK</a>
            <a href="/education" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.18em] text-[#475569] hover:text-[#0f172a] transition-colors uppercase cursor-pointer" style={{ fontFamily: 'var(--font-mono)' }}>EDUCATION</a>
          </nav>
        </div>
        {/* Right: CTA */}
        <a 
          href={contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2.5 rounded-full border border-[#0f172a]/25 bg-white/80 hover:bg-white text-[#0f172a] uppercase shadow-sm hover:shadow-md transition-all cursor-pointer text-[11px] tracking-widest" 
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          LET'S TALK
        </a>
      </header>

      {/* 3. Hero Body Content (Exact 2-Column Split Viewport Layout) */}
      <main className="relative z-10 w-full flex-1 px-8 md:px-14 flex flex-col justify-between" style={{ paddingBottom: '28px', paddingTop: '8px', minHeight: 0 }}>
        
        {/* Upper Title Cluster */}
        <div className="w-full flex-1 flex items-center relative">
          {/* Left Typography Block — z-20 so it stays above the image */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-20 flex flex-col justify-center select-none max-w-xl"
          >
            <h1 style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 300 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#0f172a] leading-[1.05]">
              Haseeb Ahmad
            </h1>
            <h2 style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif', fontWeight: 500 }} className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0f172a] mt-2 flex items-center min-h-[1.25em]">
              <span>{displayText}</span>
              <span className="inline-block w-[2.5px] md:w-[3px] h-[0.82em] bg-blue-600 ml-1.5 animate-pulse rounded-full" />
            </h2>
            <p style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 400 }} className="text-xl sm:text-2xl md:text-[26px] text-[#64748b] mt-3 tracking-tight">
              Building Production&#8209;Ready Cloud Infrastructure
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar: Intro Micro-copy & Taglines */}
        <div className="w-full flex items-end justify-between pt-2 pb-4 z-20">
          
          {/* Bottom Left Micro-copy + CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start gap-3.5"
          >
            <p style={{ fontFamily: 'var(--font-albert)' }} className="text-sm md:text-[15px] text-[#334155] font-normal tracking-normal max-w-sm">
              Automating deployments, hardening pipelines, and scaling infrastructure that never sleeps.
            </p>

            <a 
              href="/work"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-[#0f172a]/25 bg-white/80 hover:bg-white text-[#0f172a] uppercase shadow-sm hover:shadow-md transition-all cursor-pointer text-[11px] tracking-widest font-normal inline-block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              EXPLORE MY WORK
            </a>
          </motion.div>

          {/* Bottom Right Monospaced Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right font-mono text-[10px] md:text-[11px] tracking-[0.18em] text-[#64748b] uppercase leading-tight select-none"
          >
            <div>THE ENGINEER</div>
            <div>BEHIND RELIABLE</div>
            <div>DEPLOYMENTS</div>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
