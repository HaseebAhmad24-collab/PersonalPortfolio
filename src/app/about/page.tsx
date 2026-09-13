"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  const { name, contact } = portfolioData.personalInfo;

  // Continuous Typewriter Cycling Animation for DevOps Core Disciplines
  const words = [
    "HIGH AVAILABILITY",
    "FAULT TOLERANCE",
    "ELASTIC SCALABILITY",
    "ZERO DOWNTIME",
    "INFRASTRUCTURE CODE"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "About - Haseeb Ahmad";
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 95);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200); // pause on full word for readability
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div 
      className="relative min-h-screen bg-[#edf5ff] text-[#0f172a] selection:bg-blue-600 selection:text-white"
      style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
    >
      {/* 1. Ambient Lighting Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 18% 15%, rgba(186, 220, 255, 0.65) 0%, transparent 55%),
            radial-gradient(circle at 85% 70%, rgba(199, 226, 255, 0.55) 0%, transparent 50%),
            radial-gradient(circle at 50% 40%, rgba(237, 245, 255, 1) 0%, rgba(220, 235, 255, 0.5) 100%)
          `
        }}
      />

      {/* 2. Top Navigation Bar */}
      <Navbar />

      {/* 3. Hero Header Section (Clean Awais-Style Minimalist Typography & Blueprint Grid) */}
      <section className="relative z-10 w-full border-b border-blue-900/15 overflow-hidden">
        
        {/* Blueprint Grid Lines Pattern — Starting strictly below nav inside section */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-75"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37, 99, 235, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37, 99, 235, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: "76px 20%"
          }}
        />



        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            
            {/* Left Column: Ultra-minimal typography matching Awais reference screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-8 flex flex-col justify-center select-none pr-0 md:pr-8"
            >
              {/* Bullet Spec Tag */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#64748b]/80 inline-block" />
                <span 
                  className="text-[11px] md:text-xs tracking-[0.25em] text-[#64748b] font-normal uppercase" 
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  CLOUD & DEVOPS PLATFORM ARCHITECTURE
                </span>
              </div>

              {/* Massive Architectural Running Typewriter Headline with Zero Shift & Clean Clearance */}
              <div className="min-h-[80px] sm:min-h-[110px] md:min-h-[155px] lg:min-h-[175px] flex items-start">
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-light tracking-tight text-[#0f172a] uppercase leading-[1.08]"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 300 }}
                >
                  <span>{displayText}</span><span aria-hidden="true" className="inline text-[#0f172a] font-light animate-pulse select-none ml-1">_</span>
                </h1>
              </div>

              {/* Sub-headline: PIPELINE TO PRODUCTION. (with light 'TO') */}
              <h2 
                className="text-xl sm:text-2xl md:text-4xl font-normal tracking-tight text-[#0f172a] mt-5 sm:mt-8 uppercase flex items-center gap-3 select-none"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                <span>PIPELINE</span>
                <span className="text-[#94a3b8] font-light">TO</span>
                <span>PRODUCTION.</span>
              </h2>
            </motion.div>

            {/* Right Column: Circular Avatar — shown first on mobile (order-first), right side on desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-4 flex flex-col items-center md:items-center text-center md:text-center pl-0 md:pl-6 select-none order-first md:order-last mb-6 md:mb-0"
            >
              {/* Circular Avatar Frame — Pure GPU Composited Animation */}
              <div className="relative group cursor-pointer">
                {/* Soft ambient blueprint glow aura */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/12 via-blue-400/5 to-transparent blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                {/* Native GPU Compositor Floating Container (Zero JS Latency) */}
                <div 
                  className="animate-float-gentle relative w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-b from-white/90 via-blue-100/60 to-blue-200/40 border border-blue-200/80 transition-all duration-500 shadow-[0_16px_32px_-8px_rgba(15,23,42,0.16),0_0_16px_rgba(37,99,235,0.08)] group-hover:shadow-[0_22px_44px_-8px_rgba(37,99,235,0.22),0_0_24px_rgba(37,99,235,0.15)] group-hover:scale-[1.025]"
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)"
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#eaf2ff] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/profile_avatar.png" 
                      alt="Haseeb Ahmad" 
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              {/* Persona Metadata Block */}
              <div className="mt-5 flex flex-col items-center text-center">
                <h3 
                  className="text-lg md:text-xl font-normal text-[#0f172a] tracking-tight text-center"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                >
                  Haseeb Ahmad
                </h3>
                <p 
                  className="text-xs tracking-wider text-blue-600 font-medium uppercase mt-0.5 text-center"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  DevOps Engineer · LuminahTech
                </p>

                <p className="text-xs text-[#64748b] max-w-xs mt-2.5 leading-relaxed text-center">
                  Specializing in multi-environment release automation, Kubernetes orchestrations, and cloud security in Lahore, Pakistan.
                </p>

                {/* Micro Contact Pills */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <a 
                    href={contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full border border-blue-900/15 bg-white/80 hover:bg-white text-[#0f172a] hover:text-blue-600 transition-all shadow-xs flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z"/>
                    </svg>
                  </a>
                  <a 
                    href={contact.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-full border border-blue-900/15 bg-white/80 hover:bg-white text-[#0f172a] hover:text-blue-600 transition-all shadow-xs flex items-center justify-center"
                    title="GitHub"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="p-2.5 rounded-full border border-blue-900/15 bg-white/80 hover:bg-white text-[#0f172a] hover:text-blue-600 transition-all shadow-xs flex items-center justify-center"
                    title="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Section 1: The Narrative / Academic Foundation (Clean Background, No Grid) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-10 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Section Spec Index */}
            <div className="lg:col-span-3 select-none">
              <div className="sticky top-28 flex items-center gap-3">
                <span 
                  className="text-[11px] tracking-[0.25em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  01 &nbsp;BACKGROUND
                </span>
              </div>
            </div>

            {/* Right Column: Title, Concise Justified Text, Polished Technical Architecture Diagram & Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading — Scaled Down & Refined */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                The academic foundation.
              </h2>

              {/* Narrative Paragraph 1 — Concise, Simple & Justified */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-4"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                My journey began in <strong className="font-medium text-[#0f172a]">Information Engineering Technology</strong>, where I developed a keen interest in how computer systems communicate, scale, and handle workload stress. During my academic studies, I focused on networking protocols, operating system internals, and the fundamentals of distributed computing.
              </p>

              {/* Narrative Paragraph 2 — Concise, Simple & Justified */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                I brought these concepts out of textbooks and into practical laboratory environments, testing Linux system administration, container isolation, and automated scripting. This theoretical and practical grounding shaped my disciplined approach to designing resilient, automated cloud infrastructure.
              </p>

              {/* Polished Architectural Schematic Diagram (Pure Monochrome Black & Slate Blueprint) */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full rounded-2xl border border-blue-900/15 bg-white/80 p-5 sm:p-7 md:p-8 shadow-xs mb-12"
              >
                
                <div className="w-full grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                  
                  {/* Panel 1: Computer Systems & Architecture */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="md:col-span-3 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[280px] shadow-2xs"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0f172a] inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">LAYER 01</span>
                    </div>

                    {/* Schematic Vector Drawing 1 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* CPU / Logic Core */}
                        <rect x="45" y="10" width="60" height="40" rx="4" strokeWidth="1.3" fill="white" />
                        <text x="75" y="34" fontSize="9.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">CPU CORE</text>
                        
                        {/* Bus & Pins */}
                        <line x1="55" y1="50" x2="55" y2="70" strokeWidth="1.2" strokeDasharray="2 2" stroke="#64748b" />
                        <line x1="75" y1="50" x2="75" y2="70" strokeWidth="1.2" strokeDasharray="2 2" stroke="#64748b" />
                        <line x1="95" y1="50" x2="95" y2="70" strokeWidth="1.2" strokeDasharray="2 2" stroke="#64748b" />

                        {/* System Bus Hub */}
                        <rect x="25" y="70" width="100" height="24" rx="3" strokeWidth="1.2" fill="white" />
                        <text x="75" y="86" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">SYSTEM BUS / TCP-IP</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">SYSTEMS ARCHITECTURE</span>
                    </div>
                  </motion.div>

                  {/* Transition Arrow 1 */}
                  <div className="md:col-span-1 hidden md:flex flex-col items-center justify-center gap-1 select-none">
                    <span className="text-[9px] font-mono text-[#64748b] font-medium uppercase">BUILD</span>
                    <svg className="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Panel 2: Containerization & CI/CD Pipeline */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="md:col-span-3 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[280px] shadow-2xs"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-[#0f172a] inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">LAYER 02</span>
                    </div>

                    {/* Schematic Vector Drawing 2 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* CI/CD Pipeline Steps */}
                        <circle cx="30" cy="30" r="14" strokeWidth="1.2" fill="white" />
                        <text x="30" y="34" fontSize="8" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">GIT</text>
                        
                        <line x1="44" y1="30" x2="66" y2="30" strokeWidth="1.2" stroke="#0f172a" />
                        
                        <circle cx="80" cy="30" r="14" strokeWidth="1.2" fill="white" />
                        <text x="80" y="34" fontSize="8" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">CI/CD</text>

                        <line x1="94" y1="30" x2="116" y2="30" strokeWidth="1.2" stroke="#0f172a" />

                        <circle cx="130" cy="30" r="14" strokeWidth="1.2" fill="white" />
                        <text x="130" y="34" fontSize="8" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">IMG</text>

                        {/* Container Runtime Box */}
                        <rect x="25" y="65" width="110" height="30" rx="3" strokeWidth="1.2" fill="white" />
                        <path d="M 40 73 L 48 73 L 48 87 L 40 87 Z M 52 73 L 60 73 L 60 87 L 52 87 Z M 64 73 L 72 73 L 72 87 L 64 87 Z" fill="#0f172a" stroke="none" />
                        <text x="96" y="84" fontSize="8" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">DOCKER / IAC</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">CI/CD & CONTAINERS</span>
                    </div>
                  </motion.div>

                  {/* Transition Arrow 2 */}
                  <div className="md:col-span-1 hidden md:flex flex-col items-center justify-center gap-1 select-none">
                    <span className="text-[9px] font-mono text-[#64748b] font-medium uppercase">DEPLOY</span>
                    <svg className="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Panel 3: Production Cloud & Kubernetes Orchestration */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="md:col-span-3 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[280px] shadow-2xs"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-[#0f172a] inline-block" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">LAYER 03</span>
                    </div>

                    {/* Schematic Vector Drawing 3 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* Cloud Boundary */}
                        <path d="M 35 32 Q 75 12 115 32 Q 138 48 120 70 Q 75 80 30 70 Q 12 48 35 32 Z" strokeWidth="1.3" stroke="#0f172a" fill="white" />
                        
                        {/* Kubernetes Pod Nodes */}
                        <circle cx="55" cy="50" r="8" strokeWidth="1.2" fill="white" />
                        <circle cx="75" cy="42" r="8" strokeWidth="1.2" fill="white" />
                        <circle cx="95" cy="50" r="8" strokeWidth="1.2" fill="white" />
                        
                        <text x="55" y="53" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">POD</text>
                        <text x="75" y="45" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">POD</text>
                        <text x="95" y="53" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">POD</text>

                        {/* Uptime Tag */}
                        <rect x="35" y="82" width="80" height="18" rx="3" strokeWidth="1.1" stroke="#0f172a" fill="white" />
                        <text x="75" y="94" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">&bull; 99.9% RESILIENCE</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">KUBERNETES & CLOUD</span>
                    </div>
                  </motion.div>

                </div>

                {/* Monospace Blueprint Caption */}
                <div className="mt-6 pt-4 border-t border-slate-200 text-center select-none">
                  <p 
                    className="text-[10px] sm:text-[11px] tracking-[0.18em] text-[#64748b] font-medium uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    FROM ACADEMIC LABS TO PRODUCTION CLOUD — RESILIENT SYSTEMS GROUNDED IN PRINCIPLED DESIGN
                  </p>
                </div>

              </motion.div>

              {/* Pull-Quote — Scaled Down & Elegant */}
              <motion.blockquote 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl text-[#0f172a] font-light leading-snug tracking-tight max-w-2xl select-none"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                &ldquo;Resilient infrastructure is never an accident — it is built on disciplined fundamentals and automated without compromise.&rdquo;
              </motion.blockquote>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Section 2: Core Pillars & Metrics (Awais 2x2 Grid + Bottom Stats) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Section Spec Index */}
            <div className="lg:col-span-3 select-none">
              <div className="sticky top-28 flex items-center gap-3">
                <span 
                  className="text-[11px] tracking-[0.25em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  02 &nbsp;EXPERTISE
                </span>
              </div>
            </div>

            {/* Right Column: 2x2 Soft Ice-Blue Cards Grid + Bottom Metrics Bar */}
            <div className="lg:col-span-9 max-w-3xl flex flex-col">
              
              {/* 2x2 Soft Ice-Blue Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                
                {/* Card 1: CI/CD & Automation */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[210px] shadow-xs"
                >
                  <div>
                    {/* Icon: Terminal / Automation */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      CI/CD & JENKINS AUTOMATION
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Multi-environment automated pipelines across Dev, QA, Stage, and Production with reusable Jenkins configurations, webhook triggers, and zero-downtime release flows.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Kubernetes & Cloud Orchestration */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[210px] shadow-xs"
                >
                  <div>
                    {/* Icon: Microservices / Nodes Cluster */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <rect x="2" y="2" width="8" height="8" rx="2" />
                      <rect x="14" y="2" width="8" height="8" rx="2" />
                      <rect x="2" y="14" width="8" height="8" rx="2" />
                      <rect x="14" y="14" width="8" height="8" rx="2" />
                      <path d="M6 10v4M10 6h4M18 10v4M10 18h4" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      KUBERNETES & CLOUD ORCHESTRATION
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Production deployments of containerized microservices on Amazon EKS with auto-scaling, ALB traffic management, least-privilege IAM, and isolated VPC subnets.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Infrastructure as Code */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[210px] shadow-xs"
                >
                  <div>
                    {/* Icon: IaC / Layers Architecture */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <path d="m12 2 10 5-10 5-10-5Z" />
                      <path d="m2 12 10 5 10-5" />
                      <path d="m2 17 10 5 10-5" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      INFRASTRUCTURE AS CODE (TERRAFORM)
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Declarative cloud infrastructure management using modular Terraform templates to guarantee environment parity, prevent configuration drift, and enable immutable deployments.
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: Observability & Production Reliability */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[210px] shadow-xs"
                >
                  <div>
                    {/* Icon: Metrics / Shield Lock */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      <circle cx="12" cy="16" r="1.5" fill="#0f172a" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      OBSERVABILITY & RELIABILITY
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      End-to-end telemetry with Prometheus, Grafana, and CloudWatch — real-time metric thresholds, alerting policies, and proactive incident mitigation for high uptime.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Bottom Metrics Bar (Exact Awais 3-Column Stats Layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-10 border-t border-slate-300/70 select-none">
                
                {/* Stat 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex flex-col sm:border-r border-slate-300/60 pr-0 sm:pr-4"
                >
                  <span 
                    className="text-5xl sm:text-6xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    30+
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    PRODUCTION PIPELINES DEPLOYED
                  </span>
                </motion.div>

                {/* Stat 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-col sm:border-r border-slate-300/60 pr-0 sm:pr-4"
                >
                  <span 
                    className="text-5xl sm:text-6xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    99.9%
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    UPTIME SLA ON CLOUD WORKLOADS
                  </span>
                </motion.div>

                {/* Stat 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-col"
                >
                  <span 
                    className="text-5xl sm:text-6xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    1+
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    YEARS PRODUCTION DEVOPS EXPERIENCE
                  </span>
                </motion.div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Section 3: Methodology & Workflow (Three pillars, one practice) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Section Spec Index */}
            <div className="lg:col-span-3 select-none">
              <div className="sticky top-28 flex items-center gap-3">
                <span 
                  className="text-[11px] tracking-[0.25em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  03 &nbsp;PRACTICE
                </span>
              </div>
            </div>

            {/* Right Column: Title, Intro Text, Multi-Tier Workflow Diagram, and Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Three pillars, one practice.
              </h2>

              {/* Intro Narrative Paragraph */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Today I bring together automation, cloud architecture, and system reliability. As a <strong className="font-medium text-[#0f172a]">DevOps Engineer</strong>, I architect multi-environment release pipelines, immutable cloud infrastructure with Terraform, and self-healing Kubernetes clusters across AWS. I ensure applications move seamlessly from commit to production with zero downtime, robust observability, and guaranteed uptime.
              </p>

              {/* Multi-Tier Architectural Workflow Diagram (Exact Match to Awais Reference Blueprint) */}
              <div className="w-full rounded-2xl border border-blue-900/15 bg-white/80 p-6 sm:p-8 md:p-10 shadow-xs mb-5 select-none">
                
                {/* Tier 1: 4 Cards connected with horizontal flow arrows */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2">
                  
                  {/* Card 1: Code & Collaboration */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="w-full lg:flex-1 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[210px] shadow-2xs"
                  >
                    <div className="text-center">
                      <span className="text-[11px] font-mono tracking-wider font-semibold text-[#0f172a] uppercase block">CODE & REVIEW</span>
                      <span className="text-[9px] font-mono text-[#64748b] uppercase block mt-0.5">BRANCH HYGIENE</span>
                    </div>
                    
                    {/* SVG Line-art: Workstation, Git branching tree & code diff */}
                    <div className="flex items-center justify-center my-auto">
                      <svg className="w-28 h-20 stroke-[#0f172a] fill-none" viewBox="0 0 110 70" strokeWidth="1.2">
                        {/* Monitor outline */}
                        <rect x="10" y="8" width="46" height="34" rx="2" strokeWidth="1.2" />
                        <line x1="26" y1="42" x2="40" y2="42" strokeWidth="1.2" />
                        <line x1="33" y1="42" x2="33" y2="48" strokeWidth="1.2" />
                        <line x1="22" y1="48" x2="44" y2="48" strokeWidth="1.2" />
                        {/* Code lines on screen */}
                        <line x1="16" y1="16" x2="30" y2="16" stroke="#0f172a" strokeWidth="1.4" />
                        <line x1="16" y1="22" x2="44" y2="22" stroke="#64748b" strokeWidth="1.2" />
                        <line x1="22" y1="28" x2="48" y2="28" stroke="#64748b" strokeWidth="1.2" />
                        <line x1="22" y1="34" x2="38" y2="34" stroke="#64748b" strokeWidth="1.2" />

                        {/* Git Tree branching to the right */}
                        <line x1="72" y1="56" x2="72" y2="14" stroke="#0f172a" strokeWidth="1.3" />
                        <circle cx="72" cy="18" r="3" fill="#0f172a" />
                        <circle cx="72" cy="38" r="3" fill="#0f172a" />
                        <circle cx="72" cy="56" r="3" fill="#0f172a" />
                        
                        {/* Feature branch arc */}
                        <path d="M 72 38 Q 96 38 96 22 L 96 14" strokeDasharray="2 2" stroke="#64748b" strokeWidth="1.2" />
                        <circle cx="96" cy="14" r="3" fill="#64748b" />
                        
                        {/* Commit hash box */}
                        <rect x="80" y="46" width="24" height="12" rx="2" strokeWidth="1" stroke="#94a3b8" />
                        <text x="92" y="54" fontSize="6.5" stroke="none" fill="#64748b" textAnchor="middle" fontFamily="var(--font-mono)">PR#24</text>
                      </svg>
                    </div>

                    <div className="text-center border-t border-slate-200/90 pt-2">
                      <span className="text-[9px] font-mono text-[#64748b] tracking-wider uppercase">GIT &middot; PR REVIEWS</span>
                    </div>
                  </motion.div>

                  {/* Arrow 1 -> 2 */}
                  <div className="hidden lg:flex items-center justify-center text-slate-400 text-base font-light px-0.5 select-none">
                    &rarr;
                  </div>

                  {/* Card 2: CI Automation & Gates */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="w-full lg:flex-1 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[210px] shadow-2xs"
                  >
                    <div className="text-center">
                      <span className="text-[11px] font-mono tracking-wider font-semibold text-[#0f172a] uppercase block">CI AUTOMATION</span>
                      <span className="text-[9px] font-mono text-[#64748b] uppercase block mt-0.5">ISOLATED BUILDS</span>
                    </div>
                    
                    {/* SVG Line-art: Jenkins automated testing & Docker build container */}
                    <div className="flex items-center justify-center my-auto">
                      <svg className="w-28 h-20 stroke-[#0f172a] fill-none" viewBox="0 0 110 70" strokeWidth="1.2">
                        {/* Pipeline stages conveyor */}
                        <rect x="14" y="12" width="24" height="20" rx="2" strokeWidth="1.2" fill="white" />
                        <text x="26" y="24" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">LINT</text>
                        <polyline points="20 28 24 30 32 20" stroke="#0f172a" strokeWidth="1.3" />

                        <line x1="38" y1="22" x2="48" y2="22" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 2" />

                        <rect x="48" y="12" width="24" height="20" rx="2" strokeWidth="1.2" fill="white" />
                        <text x="60" y="24" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">TEST</text>
                        <polyline points="54 28 58 30 66 20" stroke="#0f172a" strokeWidth="1.3" />

                        <line x1="72" y1="22" x2="82" y2="22" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2 2" />

                        {/* Docker package box */}
                        <rect x="82" y="12" width="22" height="20" rx="2" stroke="#0f172a" strokeWidth="1.2" fill="white" />
                        <text x="93" y="24" fontSize="6.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">DOCKER</text>

                        {/* Test Status Ribbon below */}
                        <rect x="16" y="45" width="78" height="12" rx="2" strokeWidth="1" stroke="#cbd5e1" fill="white" />
                        <circle cx="24" cy="51" r="2" fill="#0f172a" stroke="none" />
                        <text x="56" y="53.5" fontSize="6.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">ALL TESTS PASSED &middot; 100%</text>
                      </svg>
                    </div>

                    <div className="text-center border-t border-slate-200/90 pt-2">
                      <span className="text-[9px] font-mono text-[#64748b] tracking-wider uppercase">JENKINS &middot; DOCKER</span>
                    </div>
                  </motion.div>

                  {/* Arrow 2 -> 3 */}
                  <div className="hidden lg:flex items-center justify-center text-slate-400 text-base font-light px-0.5 select-none">
                    &rarr;
                  </div>

                  {/* Card 3: Cloud Orchestration */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="w-full lg:flex-1 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[210px] shadow-2xs"
                  >
                    <div className="text-center">
                      <span className="text-[11px] font-mono tracking-wider font-semibold text-[#0f172a] uppercase block">ORCHESTRATION</span>
                      <span className="text-[9px] font-mono text-[#64748b] uppercase block mt-0.5">IMMUTABLE CLOUD</span>
                    </div>
                    
                    {/* SVG Line-art: Terraform Isometric Layers & AWS EKS Cluster */}
                    <div className="flex items-center justify-center my-auto">
                      <svg className="w-28 h-20 stroke-[#0f172a] fill-none" viewBox="0 0 110 70" strokeWidth="1.2">
                        {/* Top Isometric Plane (Kubernetes Workloads) */}
                        <polygon points="55,10 92,25 55,40 18,25" stroke="#0f172a" strokeWidth="1.3" fill="white" />
                        
                        {/* Middle Isometric Plane (VPC / Networking) */}
                        <polygon points="55,22 92,37 55,52 18,37" strokeWidth="1.1" stroke="#64748b" />

                        {/* Bottom Isometric Plane (Terraform IaC) */}
                        <polygon points="55,34 92,49 55,64 18,49" strokeWidth="1.1" stroke="#0f172a" />

                        {/* Connecting vertical node legs */}
                        <line x1="55" y1="10" x2="55" y2="34" strokeWidth="1.1" stroke="#0f172a" />
                        <line x1="92" y1="25" x2="92" y2="49" strokeWidth="1.1" stroke="#0f172a" />
                        <line x1="18" y1="25" x2="18" y2="49" strokeWidth="1.1" stroke="#0f172a" />

                        {/* Pod indicators on top plane */}
                        <circle cx="42" cy="25" r="2.5" fill="#0f172a" stroke="none" />
                        <circle cx="55" cy="22" r="2.5" fill="#0f172a" stroke="none" />
                        <circle cx="68" cy="25" r="2.5" fill="#0f172a" stroke="none" />
                      </svg>
                    </div>

                    <div className="text-center border-t border-slate-200/90 pt-2">
                      <span className="text-[9px] font-mono text-[#64748b] tracking-wider uppercase">TERRAFORM &middot; AWS EKS</span>
                    </div>
                  </motion.div>

                  {/* Arrow 3 -> 4 */}
                  <div className="hidden lg:flex items-center justify-center text-slate-400 text-base font-light px-0.5 select-none">
                    &rarr;
                  </div>

                  {/* Card 4: Production Delivery & Reliability */}
                  <motion.div 
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="w-full lg:flex-1 rounded-xl border border-slate-300/80 bg-white p-4 flex flex-col justify-between h-[210px] shadow-2xs"
                  >
                    <div className="text-center">
                      <span className="text-[11px] font-mono tracking-wider font-semibold text-[#0f172a] uppercase block">PRODUCTION</span>
                      <span className="text-[9px] font-mono text-[#64748b] uppercase block mt-0.5">ZERO DOWNTIME</span>
                    </div>
                    
                    {/* SVG Line-art: 99.9% Uptime Ring & Real-time Metrics Wave */}
                    <div className="flex items-center justify-center my-auto">
                      <svg className="w-28 h-20 stroke-[#0f172a] fill-none" viewBox="0 0 110 70" strokeWidth="1.2">
                        {/* Circular Uptime Target */}
                        <circle cx="55" cy="24" r="18" stroke="#0f172a" strokeWidth="1.3" fill="white" />
                        <circle cx="55" cy="24" r="14" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2" />
                        <text x="55" y="27" fontSize="8" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="700">99.9%</text>

                        {/* Traffic waveform line below */}
                        <path d="M 12 52 Q 26 38 40 52 T 70 52 T 98 52" stroke="#0f172a" strokeWidth="1.4" />
                        
                        {/* Traffic indicator pulses */}
                        <circle cx="40" cy="52" r="2" fill="#0f172a" stroke="none" />
                        <circle cx="70" cy="52" r="2" fill="#0f172a" stroke="none" />

                        {/* Health status badge */}
                        <rect x="36" y="58" width="38" height="9" rx="2" strokeWidth="1" stroke="#cbd5e1" fill="white" />
                        <text x="55" y="64.5" fontSize="5.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">HEALTHY &middot; ACTIVE</text>
                      </svg>
                    </div>

                    <div className="text-center border-t border-slate-200/90 pt-2">
                      <span className="text-[9px] font-mono text-[#64748b] tracking-wider uppercase">PROMETHEUS &middot; GRAFANA</span>
                    </div>
                  </motion.div>

                </div>

                {/* Dotted Architectural Connectors from Cards to Platform Hub */}
                <div className="hidden lg:flex justify-around items-center w-full px-12 my-3">
                  <div className="h-5 border-l border-dashed border-slate-300"></div>
                  <div className="h-5 border-l border-dashed border-slate-300"></div>
                  <div className="h-5 border-l border-dashed border-slate-300"></div>
                  <div className="h-5 border-l border-dashed border-slate-300"></div>
                </div>

                {/* Tier 2: Central Platform Data Bus / Tech Engine (Pure Monochrome Hub) */}
                <motion.div 
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="w-full rounded-xl border border-slate-300/80 bg-white p-4 sm:p-5 mt-3 lg:mt-0 mb-3 shadow-2xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
                    
                    {/* Hub Title with Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0f172a] inline-block" />
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#0f172a] uppercase">
                        DEVOPS PLATFORM BUS
                      </span>
                    </div>

                    {/* Integrated Tool Flow Pipeline */}
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-[#1e293b]">
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-300 shadow-2xs font-medium">GIT</span>
                      <span className="text-slate-400">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-300 shadow-2xs font-medium">DOCKER</span>
                      <span className="text-slate-400">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-300 shadow-2xs font-medium">JENKINS</span>
                      <span className="text-slate-400">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-300 shadow-2xs font-medium">TERRAFORM</span>
                      <span className="text-slate-400">&rarr;</span>
                      <span className="px-2.5 py-1 rounded bg-white border border-slate-300 shadow-2xs font-medium">AWS EKS</span>
                    </div>
                  </div>

                  {/* Spec Sub-Ribbon */}
                  <div className="mt-3 pt-2.5 border-t border-slate-200/90 text-center">
                    <span className="text-[10px] font-mono tracking-[0.22em] text-[#64748b] uppercase font-medium">
                      DATA &middot; CONTAINERS &middot; PIPELINES &middot; CLUSTER ORCHESTRATION &middot; TELEMETRY
                    </span>
                  </div>
                </motion.div>

                {/* Dotted Architectural Connector from Hub to Bottom Process Steps */}
                <div className="hidden lg:flex justify-center items-center w-full my-3">
                  <div className="h-5 border-l border-dashed border-slate-300"></div>
                </div>

                {/* Tier 3: Bottom 4-Node Process Workflow with Connecting Arrows */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-200/90">
                  
                  {/* Step 1 */}
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 w-full lg:flex-1"
                  >
                    <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs font-mono text-[#0f172a] font-medium shrink-0 shadow-2xs">
                      1
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#0f172a] uppercase block">
                        Write & Review
                      </span>
                      <span className="text-[10px] text-[#64748b] leading-tight block mt-0.5">
                        Clean commits & branch hygiene
                      </span>
                    </div>
                  </motion.div>

                  {/* Arrow 1 -> 2 */}
                  <div className="hidden lg:block text-slate-400 text-xs font-light select-none">&rarr;</div>

                  {/* Step 2 */}
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 w-full lg:flex-1"
                  >
                    <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs font-mono text-[#0f172a] font-medium shrink-0 shadow-2xs">
                      2
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#0f172a] uppercase block">
                        Build & Validate
                      </span>
                      <span className="text-[10px] text-[#64748b] leading-tight block mt-0.5">
                        Automated test gates & images
                      </span>
                    </div>
                  </motion.div>

                  {/* Arrow 2 -> 3 */}
                  <div className="hidden lg:block text-slate-400 text-xs font-light select-none">&rarr;</div>

                  {/* Step 3 */}
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 w-full lg:flex-1"
                  >
                    <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs font-mono text-[#0f172a] font-medium shrink-0 shadow-2xs">
                      3
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#0f172a] uppercase block">
                        Provision & Deploy
                      </span>
                      <span className="text-[10px] text-[#64748b] leading-tight block mt-0.5">
                        Declarative IaC & K8s rollout
                      </span>
                    </div>
                  </motion.div>

                  {/* Arrow 3 -> 4 */}
                  <div className="hidden lg:block text-slate-400 text-xs font-light select-none">&rarr;</div>

                  {/* Step 4 */}
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 w-full lg:flex-1"
                  >
                    <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs font-mono text-[#0f172a] font-medium shrink-0 shadow-2xs">
                      4
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#0f172a] uppercase block">
                        Monitor & Heal
                      </span>
                      <span className="text-[10px] text-[#64748b] leading-tight block mt-0.5">
                        99.9% uptime SLA & metrics
                      </span>
                    </div>
                  </motion.div>

                </div>

              </div>

              {/* Monospaced Blueprint Footer Caption below diagram card (Outside card as in reference) */}
              <div className="text-center my-6">
                <p 
                  className="text-[10.5px] sm:text-[11px] tracking-[0.22em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  AUTOMATION, CLUSTER INFRASTRUCTURE AND RELIABILITY RUNNING THROUGH ONE DISCIPLINED PRACTICE
                </p>
              </div>

              {/* Deeper Breakdown / Post-Diagram Narrative (Concise & Justified) */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Every production release has reinforced one fundamental rule: resilient systems are not measured by complexity, but by the confidence and speed they deliver to engineering teams. Before writing a single configuration or deploying a cluster, I design for reproducibility, least-privilege security, and fault tolerance so services run continuously without interruption.
              </p>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Section 4: Education & Training (Where I was trained) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Section Spec Index */}
            <div className="lg:col-span-3 select-none">
              <div className="sticky top-28 flex items-center gap-3">
                <span 
                  className="text-[11px] tracking-[0.25em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  04 &nbsp;TRAINING
                </span>
              </div>
            </div>

            {/* Right Column: Title, Intro Narrative, and 3-Column Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Where I was trained.
              </h2>

              {/* Intro Narrative Paragraph */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-12"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                My technical foundation combines formal engineering coursework with rigorous, hands-on production operations. Grounded in information engineering fundamentals, I developed cloud competencies through enterprise deployments, automated delivery pipelines, and resilient system design.
              </p>

              {/* 3-Column Minimalist Cards Grid (Matching Awais Reference Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pt-2 border-t border-slate-300/70">
                
                {/* Column 1: Formal Engineering Degree */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col md:border-r border-slate-300/70 pr-0 md:pr-7 pt-4"
                >
                  <span 
                    className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    BS
                  </span>
                  
                  <h3 
                    className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[#0f172a] uppercase mt-4 mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    INFORMATION ENGINEERING TECHNOLOGY
                  </h3>

                  <div className="flex flex-col gap-0.5 mb-3">
                    <span className="text-[11px] font-mono text-blue-600 font-medium">
                      DEPT. OF TECHNOLOGY &middot; UOL
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      2023 &ndash; 2027 &middot; IN PROGRESS
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal text-justify">
                    Core grounding in computer networking protocols, operating system internals, distributed systems theory, and digital infrastructure design.
                  </p>
                </motion.div>

                {/* Column 2: Cloud & DevOps Certifications / Competencies */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col md:border-r border-slate-300/70 px-0 md:px-7 pt-4"
                >
                  <span 
                    className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    CLOUD
                  </span>
                  
                  <h3 
                    className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[#0f172a] uppercase mt-4 mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    DEVOPS &amp; CLOUD ARCHITECTURE
                  </h3>

                  <div className="flex flex-col gap-0.5 mb-3">
                    <span className="text-[11px] font-mono text-blue-600 font-medium">
                      AWS &middot; KUBERNETES &middot; TERRAFORM
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      TECHNICAL SPECIALIZATION
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal text-justify">
                    Deep practical mastery in declarative Terraform IaC, containerized microservice orchestration on Kubernetes (EKS), and CI/CD security automation.
                  </p>
                </motion.div>

                {/* Column 3: Production Experience & Industry Practice */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col pl-0 md:pl-7 pt-4"
                >
                  <span 
                    className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    PROD
                  </span>
                  
                  <h3 
                    className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[#0f172a] uppercase mt-4 mb-1"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    ENTERPRISE PRACTICE &amp; RELIABILITY
                  </h3>

                  <div className="flex flex-col gap-0.5 mb-3">
                    <span className="text-[11px] font-mono text-blue-600 font-medium">
                      LUMINAHTECH &middot; NETSOL
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      2025 &ndash; PRESENT &middot; PRODUCTION TRACK
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal text-justify">
                    Hands-on production management of multi-tier cloud environments, automated deployment pipelines, and proactive observability for 99.9% uptime SLA.
                  </p>
                </motion.div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. Section 5: Vision & Signature Framework (Production-ready reliability) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Section Spec Index */}
            <div className="lg:col-span-3 select-none">
              <div className="sticky top-28 flex items-center gap-3">
                <span 
                  className="text-[11px] tracking-[0.25em] text-[#64748b] font-medium uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  05 &nbsp;VISION
                </span>
              </div>
            </div>

            {/* Right Column: Heading, Narrative, Filter Pills, Monochrome Architectural Diagram, and Closing Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading matching Awais reference stacked format */}
              <h2 
                className="text-4xl sm:text-5xl md:text-[54px] font-light text-[#0f172a] tracking-tight leading-[1.08] mb-6"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 300 }}
              >
                Production-<br />
                ready<br />
                reliability.
              </h2>

              {/* Sub-description Narrative */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-8"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                The gap between local code and a resilient, production-ready system is where architectures fail. I exist in that gap.
              </p>

              {/* Pill Tags (Reliability, Efficiency, Security) */}
              <div className="flex flex-wrap items-center gap-3 mb-10 select-none">
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  RELIABILITY
                </motion.span>
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  AUTOMATION
                </motion.span>
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  SECURITY
                </motion.span>
              </div>

              {/* Architectural Schematic Blueprint Card (Strictly Pure Black & Slate Line-Art matching Reference) */}
              <motion.div 
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="w-full rounded-2xl border border-blue-900/15 bg-white/85 p-3 sm:p-6 md:p-10 shadow-xs mb-10 select-none overflow-hidden"
              >
                <div className="w-full">
                  <svg 
                    className="w-full h-auto text-[#0f172a]" 
                    viewBox="0 0 880 500" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    {/* 1. Left Side: Development / Code Workstation */}
                    <g id="development-section">
                      {/* Desk line */}
                      <line x1="50" y1="270" x2="230" y2="270" strokeWidth="1.4" stroke="#0f172a" />
                      
                      {/* Document stack on left */}
                      <rect x="65" y="248" width="30" height="7" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <rect x="63" y="255" width="34" height="7" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <rect x="60" y="262" width="38" height="8" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      
                      {/* Code spec sheet with magnifying glass */}
                      <rect x="75" y="155" width="36" height="50" rx="2" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <line x1="83" y1="168" x2="103" y2="168" strokeWidth="1.3" stroke="#0f172a" />
                      <line x1="83" y1="176" x2="99" y2="176" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="83" y1="184" x2="101" y2="184" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="83" y1="192" x2="95" y2="192" strokeWidth="1.2" stroke="#64748b" />
                      
                      {/* Magnifying glass */}
                      <circle cx="68" cy="212" r="8" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <line x1="74" y1="218" x2="82" y2="226" strokeWidth="1.6" stroke="#0f172a" strokeLinecap="round" />

                      {/* Developer drawing */}
                      {/* Body & Arms */}
                      <path d="M 115,270 L 126,234 Q 145,218 165,234 L 176,270" strokeWidth="1.3" stroke="#0f172a" fill="#ffffff" />
                      {/* Head */}
                      <circle cx="145" cy="195" r="16" strokeWidth="1.3" stroke="#0f172a" fill="#ffffff" />
                      <path d="M 131,195 Q 145,176 160,195 Q 155,180 135,185 Z" fill="#0f172a" stroke="none" />
                      {/* Arm writing / working */}
                      <path d="M 126,242 Q 142,260 162,264" strokeWidth="1.3" stroke="#0f172a" fill="none" />

                      {/* Laptop on desk */}
                      <line x1="172" y1="268" x2="222" y2="268" strokeWidth="2.5" stroke="#0f172a" strokeLinecap="round" />
                      <rect x="180" y="234" width="34" height="26" rx="2" strokeWidth="1.3" stroke="#0f172a" fill="#ffffff" />
                      <line x1="186" y1="244" x2="208" y2="244" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="186" y1="250" x2="204" y2="250" strokeWidth="1.2" stroke="#64748b" />

                      {/* Git tree / nodes above developer */}
                      <line x1="210" y1="165" x2="230" y2="182" strokeWidth="1.2" stroke="#0f172a" />
                      <line x1="210" y1="165" x2="230" y2="148" strokeWidth="1.2" stroke="#0f172a" />
                      <line x1="230" y1="182" x2="250" y2="165" strokeWidth="1.2" stroke="#0f172a" />
                      <line x1="230" y1="148" x2="250" y2="165" strokeWidth="1.2" stroke="#0f172a" />
                      <circle cx="210" cy="165" r="3.5" fill="#0f172a" stroke="none" />
                      <circle cx="230" cy="182" r="3.5" fill="#0f172a" stroke="none" />
                      <circle cx="230" cy="148" r="3.5" fill="#0f172a" stroke="none" />
                      <circle cx="250" cy="165" r="3.5" fill="#0f172a" stroke="none" />

                      {/* Left Labels */}
                      <text x="145" y="306" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#0f172a" letterSpacing="0.1em" stroke="none">
                        DEVELOPMENT
                      </text>
                      <text x="145" y="324" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Code, commits &amp; experiments
                      </text>
                    </g>

                    {/* 2. Center: Suspension Bridge & Central Protective Shield */}
                    <g id="bridge-and-shield">
                      {/* Suspension Bridge Arches */}
                      <path d="M 230,270 Q 420,215 610,270" strokeWidth="1.8" stroke="#0f172a" fill="none" />
                      <path d="M 230,280 Q 420,228 610,280" strokeWidth="1.3" stroke="#0f172a" fill="none" />
                      
                      {/* Vertical Suspension Posts along the bridge */}
                      <line x1="260" y1="265" x2="260" y2="276" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="290" y1="256" x2="290" y2="268" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="320" y1="246" x2="320" y2="258" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="350" y1="237" x2="350" y2="249" strokeWidth="1.1" stroke="#0f172a" />

                      <line x1="490" y1="237" x2="490" y2="249" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="520" y1="246" x2="520" y2="258" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="550" y1="256" x2="550" y2="268" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="580" y1="265" x2="580" y2="276" strokeWidth="1.1" stroke="#0f172a" />

                      {/* Dotted horizontal connection lines bridging left and right to shield */}
                      <line x1="230" y1="202" x2="370" y2="202" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="470" y1="202" x2="610" y2="202" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />

                      {/* Central Defensive Shield */}
                      <path 
                        d="M 370,165 L 470,165 Q 470,242 420,278 Q 370,242 370,165 Z" 
                        fill="#ffffff" 
                        stroke="#0f172a" 
                        strokeWidth="2" 
                      />
                      <path 
                        d="M 378,173 L 462,173 Q 462,236 420,268 Q 378,236 378,173 Z" 
                        fill="none" 
                        stroke="#cbd5e1" 
                        strokeWidth="1" 
                      />
                      {/* Checkmark inside Shield */}
                      <path 
                        d="M 398,214 L 413,228 L 442,196" 
                        fill="none" 
                        stroke="#0f172a" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />

                      {/* Text above Shield */}
                      <text x="420" y="124" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="700" fill="#0f172a" letterSpacing="0.12em" stroke="none">
                        I EXIST IN THAT GAP
                      </text>
                      <text x="420" y="144" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Turning ideas into reliable infrastructure
                      </text>
                    </g>

                    {/* 3. Right Side: Production Workloads & Dashboards */}
                    <g id="production-section">
                      {/* Desk line */}
                      <line x1="610" y1="270" x2="810" y2="270" strokeWidth="1.4" stroke="#0f172a" />

                      {/* Desktop Monitor on Stand */}
                      <rect x="675" y="254" width="20" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
                      <line x1="660" y1="270" x2="710" y2="270" strokeWidth="2.2" stroke="#0f172a" strokeLinecap="round" />
                      
                      {/* Monitor Frame */}
                      <rect x="625" y="148" width="122" height="90" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                      
                      {/* Inner screen graphics */}
                      {/* Real-time telemetry graph */}
                      <path 
                        d="M 635,190 L 650,172 L 665,184 L 680,165 L 695,178 L 710,166 L 730,180" 
                        fill="none" 
                        stroke="#0f172a" 
                        strokeWidth="1.4" 
                      />
                      {/* Grid guideline */}
                      <line x1="635" y1="198" x2="732" y2="198" strokeDasharray="2 2" strokeWidth="1" stroke="#cbd5e1" />

                      {/* Server / Cluster Microchip Icon */}
                      <rect x="646" y="206" width="32" height="18" rx="2" stroke="#0f172a" strokeWidth="1.1" fill="#f8fafc" />
                      <text x="662" y="218" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fontWeight="700" fill="#0f172a" stroke="none">
                        EKS
                      </text>
                      {/* Chip pins */}
                      <line x1="652" y1="203" x2="652" y2="206" strokeWidth="1" stroke="#0f172a" />
                      <line x1="662" y1="203" x2="662" y2="206" strokeWidth="1" stroke="#0f172a" />
                      <line x1="672" y1="203" x2="672" y2="206" strokeWidth="1" stroke="#0f172a" />
                      <line x1="652" y1="224" x2="652" y2="227" strokeWidth="1" stroke="#0f172a" />
                      <line x1="662" y1="224" x2="662" y2="227" strokeWidth="1" stroke="#0f172a" />
                      <line x1="672" y1="224" x2="672" y2="227" strokeWidth="1" stroke="#0f172a" />

                      {/* Status metrics indicators on screen */}
                      <circle cx="700" cy="214" r="3.5" stroke="#0f172a" strokeWidth="1.1" fill="none" />
                      <circle cx="715" cy="214" r="3.5" stroke="#0f172a" strokeWidth="1.1" fill="none" />

                      {/* Production Traffic / Users Circle Frame */}
                      <circle cx="756" cy="245" r="22" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
                      {/* 3 User silhouettes */}
                      {/* Center user */}
                      <circle cx="756" cy="237" r="4.5" fill="#0f172a" stroke="none" />
                      <path d="M 748,255 Q 756,248 764,255" fill="none" stroke="#0f172a" strokeWidth="1.2" />
                      {/* Left user */}
                      <circle cx="744" cy="241" r="3.5" fill="#0f172a" stroke="none" />
                      <path d="M 738,255 Q 744,250 748,255" fill="none" stroke="#0f172a" strokeWidth="1.1" />
                      {/* Right user */}
                      <circle cx="768" cy="241" r="3.5" fill="#0f172a" stroke="none" />
                      <path d="M 764,255 Q 768,250 774,255" fill="none" stroke="#0f172a" strokeWidth="1.1" />

                      {/* Right Labels */}
                      <text x="686" y="306" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#0f172a" letterSpacing="0.1em" stroke="none">
                        PRODUCTION
                      </text>
                      <text x="686" y="324" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Reliable systems &amp; real-world impact
                      </text>
                    </g>

                    {/* 4. Dotted Blueprint Traces Connecting Down to the 4 Pillars */}
                    <g id="traces-to-pillars">
                      {/* Central vertical drop line from bridge/shield */}
                      <line x1="420" y1="278" x2="420" y2="350" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />
                      
                      {/* Horizontal distribution track */}
                      <line x1="260" y1="350" x2="580" y2="350" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />

                      {/* Vertical drops to each pillar */}
                      <line x1="260" y1="350" x2="260" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="367" y1="350" x2="367" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="473" y1="350" x2="473" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="580" y1="350" x2="580" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                    </g>

                    {/* 5. The 4 Foundation Pillars with Pure Black Line-Art Icons */}
                    <g id="four-pillars">
                      
                      {/* Pillar 1: Observability */}
                      <circle cx="260" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      {/* Eye icon */}
                      <path d="M 252,380 Q 260,373 268,380 Q 260,387 252,380 Z" fill="none" stroke="#0f172a" strokeWidth="1.3" />
                      <circle cx="260" cy="380" r="2.5" fill="#0f172a" stroke="none" />
                      <text x="260" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        OBSERVABILITY
                      </text>
                      <text x="260" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        See it. Monitor it.
                      </text>
                      <text x="260" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Understand it.
                      </text>

                      {/* Pillar 2: Reliability */}
                      <circle cx="367" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      {/* Growth / Chart line icon */}
                      <path d="M 359,385 L 364,380 L 368,382 L 374,374" fill="none" stroke="#0f172a" strokeWidth="1.3" />
                      <polyline points="371,374 374,374 374,377" fill="none" stroke="#0f172a" strokeWidth="1.3" />
                      <text x="367" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        RELIABILITY
                      </text>
                      <text x="367" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Built to perform
                      </text>
                      <text x="367" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        consistently.
                      </text>

                      {/* Pillar 3: Security */}
                      <circle cx="473" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      {/* Shield / Lock icon */}
                      <rect x="468" y="379" width="10" height="8" rx="1" fill="#0f172a" stroke="none" />
                      <path d="M 470,379 L 470,375 Q 473,372 476,375 L 476,379" fill="none" stroke="#0f172a" strokeWidth="1.2" />
                      <text x="473" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        SECURITY
                      </text>
                      <text x="473" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Secure by design.
                      </text>
                      <text x="473" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Least privilege.
                      </text>

                      {/* Pillar 4: Automation */}
                      <circle cx="580" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      {/* Sliders / Controls icon */}
                      <line x1="574" y1="376" x2="586" y2="376" stroke="#0f172a" strokeWidth="1.2" />
                      <circle cx="577" cy="376" r="1.8" fill="#0f172a" stroke="none" />
                      <line x1="574" y1="384" x2="586" y2="384" stroke="#0f172a" strokeWidth="1.2" />
                      <circle cx="583" cy="384" r="1.8" fill="#0f172a" stroke="none" />
                      <text x="580" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        CONTROLLABILITY
                      </text>
                      <text x="580" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Automated rollout.
                      </text>
                      <text x="580" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Total control.
                      </text>
                    </g>

                    {/* 6. Bottom Banner Divider and Statement */}
                    <g id="bottom-banner">
                      <line x1="160" y1="462" x2="260" y2="462" stroke="#cbd5e1" strokeWidth="1" />
                      <text x="420" y="465" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="700" fill="#0f172a" letterSpacing="0.14em" stroke="none">
                        PRODUCTION-READY INFRASTRUCTURE.
                      </text>
                      <line x1="580" y1="462" x2="680" y2="462" stroke="#cbd5e1" strokeWidth="1" />

                      <text x="420" y="482" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="9.5" fill="#64748b" stroke="none">
                        Building automated systems that are fault-tolerant, scalable and secure by default &mdash; connecting code with cloud platforms that make a lasting difference.
                      </text>
                    </g>

                  </svg>
                </div>
              </motion.div>

              {/* Final Bold Punchy Closing Philosophy Statement (Matching Awais Reference) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="pt-2"
              >
                <p 
                  className="text-lg sm:text-xl md:text-2xl text-[#334155] leading-relaxed font-normal"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                >
                  For me, DevOps is not about writing configurations in isolation. <strong className="font-semibold text-[#0f172a]" style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}>It is about engineering total confidence.</strong>
                </p>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. Minimalist Architectural Blueprint Footer */}
      <footer className="relative z-10 w-full border-t border-blue-900/15 bg-[#edf5ff] py-10 px-5 sm:px-8 md:px-14 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Spec */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span 
              className="text-[11px] tracking-[0.2em] text-[#64748b] font-medium uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              HASEEB AHMAD &middot; CLOUD &amp; DEVOPS PLATFORM ARCHITECTURE &middot; 2025
            </span>
          </div>

          {/* Right: Quick Links */}
          <div 
            className="flex flex-wrap items-center gap-6 text-[11px] tracking-wider text-[#475569]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
            >
              GITHUB
            </a>
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
            >
              LINKEDIN
            </a>
            <a 
              href={`mailto:${contact.email}`} 
              className="hover:text-blue-600 transition-colors uppercase cursor-pointer"
            >
              EMAIL
            </a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-blue-600 transition-colors uppercase cursor-pointer flex items-center gap-1"
            >
              BACK TO TOP &uarr;
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}

