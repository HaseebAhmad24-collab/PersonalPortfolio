"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";

export default function EducationPage() {
  const { name, contact } = portfolioData.personalInfo;

  // Continuous Typewriter Cycling Animation for Academic & Engineering Disciplines
  const words = [
    "BS INFO ENGINEERING",
    "UNIVERSITY OF LAHORE",
    "DEVOPS CERTIFICATION",
    "AWS SKILL BUILDER",
    "PSDF SPONSORED LABS"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Education - Haseeb Ahmad";
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

      {/* 3. Hero Header Section (Awais-Style Blueprint Grid & Academic Typography) */}
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            
            {/* Left Column: Ultra-minimal typography matching Awais reference */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-7 flex flex-col justify-center select-none pr-0 md:pr-6"
            >
              {/* Bullet Spec Tag */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#64748b]/80 inline-block" />
                <span 
                  className="text-[11px] md:text-xs tracking-[0.25em] text-[#64748b] font-normal uppercase" 
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  ACADEMIC FOUNDATION &amp; SPECIALIZED TRAINING
                </span>
              </div>

              {/* Massive Architectural Running Typewriter Headline with Zero Shift & Clean Clearance */}
              <div className="min-h-[80px] sm:min-h-[110px] md:min-h-[155px] lg:min-h-[175px] flex items-start">
                <h1 
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-[68px] xl:text-[74px] font-light tracking-tight text-[#0f172a] uppercase leading-[1.08]"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 300 }}
                >
                  <span>{displayText}</span><span aria-hidden="true" className="inline text-[#0f172a] font-light animate-pulse select-none ml-1">_</span>
                </h1>
              </div>

              {/* Sub-headline: FOUNDATION TO PRACTICE. */}
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#0f172a] mt-8 uppercase flex items-center gap-3 select-none"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                FOUNDATION <span className="font-light text-[#475569]">TO</span> PRACTICE.
              </h2>

              {/* Persona Specs Matrix */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 select-none">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    DEGREE
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    BS Info Engineering Tech
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    INSTITUTION
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    Univ. of Lahore (UOL)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    DURATION
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    2023 &ndash; 2027 (Active)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    CORE FOCUS
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    Cloud &amp; Distributed Systems
                  </span>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Floating Education Graphic with Butter-Smooth Hardware Acceleration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5 flex items-center justify-center select-none"
            >
              <div className="relative group w-full max-w-[480px] lg:max-w-[530px] flex items-center justify-center cursor-pointer">
                {/* Soft Blueprint Ambient Radial Glow Aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-indigo-400/5 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                {/* Native GPU-Compositor Thread Animation (Zero JS Latency) */}
                <div className="animate-float-smooth w-full flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/education.png" 
                    alt="Education" 
                    className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    style={{
                      filter: "drop-shadow(0 16px 24px rgba(15, 23, 42, 0.12)) drop-shadow(0 4px 10px rgba(37, 99, 235, 0.09))",
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Section 1: Formal Degree & Academic Journey (01 ACADEMIC DEGREE) */}
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
                  01 &nbsp;ACADEMIC DEGREE
                </span>
              </div>
            </div>

            {/* Right Column: Title, University Degree Narrative, Blueprint Diagram & Pull Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Institution Spec Ribbon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                <span 
                  className="text-xs font-mono tracking-wider text-blue-600 uppercase font-semibold"
                >
                  THE UNIVERSITY OF LAHORE &middot; DEPT. OF TECHNOLOGY
                </span>
              </div>

              {/* Section Heading */}
              <h2 
                className="text-3xl sm:text-4xl md:text-[42px] font-light text-[#0f172a] tracking-tight leading-tight mb-2"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif', fontWeight: 300 }}
              >
                Bachelor of Science in<br />
                Information Engineering Technology
              </h2>

              {/* Sub-headline / Spec Tag */}
              <p 
                className="text-xs font-mono tracking-widest text-[#64748b] uppercase mb-8"
              >
                SESSION: 2023 &ndash; 2027 &middot; IN PROGRESS &middot; LAHORE, PAKISTAN
              </p>

              {/* Academic Narrative Paragraph 1 — Concise, Simple & Justified */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-4"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                My journey into Cloud &amp; DevOps began within the Department of Technology at The University of Lahore. Rather than treating software systems as black boxes, my academic curriculum grounded me in the core engineering principles that power modern distributed computing — beginning with rigorous study in <strong className="font-medium text-[#0f172a]">Data Communication &amp; Computer Networks</strong>, advancing through <strong className="font-medium text-[#0f172a]">System &amp; Network Administration (Linux)</strong>, and culminating in modern <strong className="font-medium text-[#0f172a]">Cloud Computing</strong>.
              </p>

              {/* Academic Narrative Paragraph 2 — Concise, Simple & Justified */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                These courses formed the bedrock of my engineering intuition. Mastering packet switching, CIDR subnetting, TCP/IP handshakes, and Linux kernel process scheduling gave me the exact mental model needed to understand why container networks isolate, how cloud load balancers route ingress traffic, and how high-availability Kubernetes clusters survive production node failures.
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
                  
                  {/* Panel 1: Data Communication & Networks */}
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
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">COURSE 01</span>
                    </div>

                    {/* Schematic Vector Drawing 1 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* Switch / Router Center Node */}
                        <circle cx="75" cy="45" r="16" strokeWidth="1.3" fill="white" />
                        <text x="75" y="48" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="700">TCP/IP</text>
                        
                        {/* Subnet Nodes */}
                        <rect x="18" y="18" width="28" height="18" rx="2" strokeWidth="1.1" fill="white" />
                        <text x="32" y="30" fontSize="6.5" stroke="none" fill="#64748b" textAnchor="middle" fontFamily="var(--font-mono)">NET A</text>

                        <rect x="104" y="18" width="28" height="18" rx="2" strokeWidth="1.1" fill="white" />
                        <text x="118" y="30" fontSize="6.5" stroke="none" fill="#64748b" textAnchor="middle" fontFamily="var(--font-mono)">NET B</text>

                        <line x1="46" y1="27" x2="62" y2="38" strokeWidth="1.2" stroke="#0f172a" />
                        <line x1="104" y1="27" x2="88" y2="38" strokeWidth="1.2" stroke="#0f172a" />
                        
                        {/* Packet Flow Trace below */}
                        <line x1="75" y1="61" x2="75" y2="78" strokeWidth="1.2" strokeDasharray="2 2" stroke="#64748b" />
                        
                        {/* Subnet Box */}
                        <rect x="25" y="78" width="100" height="22" rx="3" strokeWidth="1.2" fill="white" />
                        <text x="75" y="93" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">CIDR / SUBNETTING</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">DATA COMMUNICATION</span>
                    </div>
                  </motion.div>

                  {/* Transition Arrow 1 */}
                  <div className="md:col-span-1 hidden md:flex flex-col items-center justify-center gap-1 select-none">
                    <span className="text-[9px] font-mono text-[#64748b] font-medium uppercase">ADMIN</span>
                    <svg className="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Panel 2: System & Network Administration (Linux) */}
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
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">COURSE 02</span>
                    </div>

                    {/* Schematic Vector Drawing 2 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* Terminal Box Frame */}
                        <rect x="25" y="12" width="100" height="52" rx="3" strokeWidth="1.2" fill="white" />
                        <line x1="25" y1="24" x2="125" y2="24" strokeWidth="1" stroke="#cbd5e1" />
                        <circle cx="32" cy="18" r="1.5" fill="#0f172a" stroke="none" />
                        <circle cx="38" cy="18" r="1.5" fill="#64748b" stroke="none" />
                        
                        {/* Bash Prompt Line */}
                        <text x="32" y="36" fontSize="6.5" stroke="none" fill="#0f172a" fontFamily="var(--font-mono)">$ systemctl start</text>
                        <text x="32" y="46" fontSize="6.5" stroke="none" fill="#64748b" fontFamily="var(--font-mono)">&gt; bash / sshd / iam</text>
                        <text x="32" y="56" fontSize="6.5" stroke="none" fill="#0f172a" fontFamily="var(--font-mono)">[active: running]</text>

                        {/* Kernel Process Scheduling Box below */}
                        <rect x="25" y="74" width="100" height="24" rx="3" strokeWidth="1.2" fill="white" />
                        <text x="75" y="89" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">LINUX KERNEL &amp; OS</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">LINUX SYSADMIN</span>
                    </div>
                  </motion.div>

                  {/* Transition Arrow 2 */}
                  <div className="md:col-span-1 hidden md:flex flex-col items-center justify-center gap-1 select-none">
                    <span className="text-[9px] font-mono text-[#64748b] font-medium uppercase">CLOUD</span>
                    <svg className="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  {/* Panel 3: Cloud Computing & Virtualization */}
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
                      <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">COURSE 03</span>
                    </div>

                    {/* Schematic Vector Drawing 3 */}
                    <div className="flex-1 flex flex-col items-center justify-center my-2 select-none">
                      <svg className="w-full h-32" viewBox="0 0 150 110" fill="none" stroke="#0f172a">
                        {/* Cloud Boundary */}
                        <path d="M 35 32 Q 75 12 115 32 Q 138 48 120 70 Q 75 80 30 70 Q 12 48 35 32 Z" strokeWidth="1.3" stroke="#0f172a" fill="white" />
                        
                        {/* VM & Container Nodes */}
                        <rect x="42" y="38" width="28" height="20" rx="2" strokeWidth="1.1" fill="white" />
                        <text x="56" y="51" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">VM</text>

                        <rect x="80" y="38" width="28" height="20" rx="2" strokeWidth="1.1" fill="white" />
                        <text x="94" y="51" fontSize="7" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)">POD</text>

                        {/* High Availability SLA Box */}
                        <rect x="30" y="82" width="90" height="20" rx="3" strokeWidth="1.1" stroke="#0f172a" fill="white" />
                        <text x="75" y="95" fontSize="7.5" stroke="none" fill="#0f172a" textAnchor="middle" fontFamily="var(--font-mono)" fontWeight="600">AWS &amp; CLOUD ARCH</text>
                      </svg>
                    </div>

                    {/* Footer Spec */}
                    <div className="border-t border-slate-200 pt-2 text-center">
                      <span className="text-[10px] font-mono text-[#0f172a] font-medium tracking-wide uppercase">CLOUD COMPUTING</span>
                    </div>
                  </motion.div>

                </div>

                {/* Monospace Blueprint Caption */}
                <div className="mt-6 pt-4 border-t border-slate-200 text-center select-none">
                  <p 
                    className="text-[10px] sm:text-[11px] tracking-[0.18em] text-[#64748b] font-medium uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    FROM UNIVERSITY ACADEMIC LABS TO ENTERPRISE CLOUD — GROUNDED IN FUNDAMENTAL SYSTEMS THEORY
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
                &ldquo;Understanding how packets traverse interfaces and how the Linux kernel schedules processes is what separates configuring tools from engineering reliable cloud systems.&rdquo;
              </motion.blockquote>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Section 2: Core Engineering Disciplines (02 FOUNDATIONS) */}
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
                  02 &nbsp;FOUNDATIONS
                </span>
              </div>
            </div>

            {/* Right Column: 2x2 Soft Ice-Blue Cards Grid + Bottom Metrics Bar */}
            <div className="lg:col-span-9 max-w-3xl flex flex-col">
              
              {/* Heading */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Core Engineering Disciplines.
              </h2>
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Four academic courses from my university syllabus that directly established my architectural foundation for DevOps automation, infrastructure design, and production reliability.
              </p>

              {/* 2x2 Soft Ice-Blue Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                
                {/* Card 1: Data Communication & Networks */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-xs"
                >
                  <div>
                    {/* Icon: Network Nodes */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      DATA COMMUNICATION &amp; NETWORKS
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Rigorous grounding in the TCP/IP stack, CIDR subnetting, packet switching, DNS propagation, and routing tables — the direct predecessor to architecting isolated AWS VPC subnets and Kubernetes CoreDNS routing.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: System & Network Administration (Linux) */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-xs"
                >
                  <div>
                    {/* Icon: Terminal / Administration */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      SYSTEM &amp; NETWORK ADMIN (LINUX)
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Systematic study of Linux OS internals, Systemd services, process tree hierarchy, least-privilege user security, SSH tunneling, and Bash scripting for resilient server administration and automation.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Cloud Computing & Virtualization */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-xs"
                >
                  <div>
                    {/* Icon: Cloud Server Virtualization */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      CLOUD COMPUTING &amp; VIRTUALIZATION
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Theoretical and hands-on comprehension of multi-tenant cloud paradigms, IaaS compute layers, hypervisors, storage block volumes, and container isolation models that form the backbone of modern AWS infrastructure.
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: Distributed Systems & Automation */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 hover:bg-[#e4efff] transition-all p-6 sm:p-7 flex flex-col justify-between min-h-[220px] shadow-xs"
                >
                  <div>
                    {/* Icon: Distributed Clusters / IaC */}
                    <svg className="w-6 h-6 stroke-[#0f172a] fill-none" viewBox="0 0 24 24" strokeWidth="1.4">
                      <rect x="2" y="2" width="8" height="8" rx="2" />
                      <rect x="14" y="2" width="8" height="8" rx="2" />
                      <rect x="2" y="14" width="8" height="8" rx="2" />
                      <rect x="14" y="14" width="8" height="8" rx="2" />
                    </svg>

                    <h3 
                      className="text-xs sm:text-[13px] tracking-wider text-[#0f172a] font-medium uppercase mt-4 mb-2.5"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      DISTRIBUTED SYSTEMS &amp; RELIABILITY
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      Principles of high availability, consensus protocols, horizontal scaling, and decoupled microservices architectures — engineering infrastructure that self-heals under high traffic stress.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Bottom Metrics Bar (3-Column Stats Layout) */}
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
                    4
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    YEARS DEGREE TRACK (2023–2027)
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
                    10+
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    SYSTEMS &amp; NETWORKING LABS
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
                    100%
                  </span>
                  <span 
                    className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    HANDS-ON PRACTICAL GROUNDING
                  </span>
                </motion.div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Section 3: Specialized Cloud & DevOps Training (03 SPECIALIZATION) */}
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
                  03 &nbsp;SPECIALIZATION
                </span>
              </div>
            </div>

            {/* Right Column: PSDF Bootcamp, AWS Skill Builder Labs, & Technical Breakdown */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Specialized Training &amp; Cloud Labs.
              </h2>

              {/* Intro Narrative */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                To translate university engineering theory into enterprise-level delivery standards, I completed a specialized, 3-month intensive DevOps program at The University of Lahore, fully sponsored by the <strong className="font-medium text-[#0f172a]">Punjab Skills Development Fund (PSDF)</strong>. In parallel, I completed rigorous cloud architecture labs on <strong className="font-medium text-[#0f172a]">AWS Skill Builder</strong> to master real-world cloud services.
              </p>

              {/* Featured Major Credential Card: 3-Month PSDF DevOps Bootcamp */}
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-full rounded-2xl border border-blue-900/15 bg-white/90 p-6 sm:p-8 md:p-9 shadow-xs mb-10 select-none"
              >
                {/* Header Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/90">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#0f172a] uppercase">
                      PUNJAB SKILLS DEVELOPMENT FUND (PSDF)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#64748b] uppercase font-medium bg-[#edf5ff] px-3 py-1 rounded-full border border-blue-200/80">
                    JUNE 1 &ndash; AUGUST 31 &middot; 3 MONTHS
                  </span>
                </div>

                {/* Bootcamp Title & Location */}
                <div className="my-5">
                  <h3 
                    className="text-xl sm:text-2xl font-light text-[#0f172a] tracking-tight"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    Professional DevOps &amp; Cloud Engineering Program
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-medium uppercase mt-1">
                    Delivered at The University of Lahore &middot; Full-Time Lab Intensive
                  </p>
                </div>

                {/* 4-Domain Curriculum Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  
                  {/* Domain 1 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafc] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#64748b] uppercase block font-medium">DOMAIN 01</span>
                      <h4 className="text-xs font-mono font-semibold text-[#0f172a] uppercase mt-1 mb-1.5">
                        LINUX &amp; GIT / GITHUB
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Advanced Linux system administration, Systemd service management, SSH key management, and branch hygiene with collaborative Git pull-request workflows.
                      </p>
                    </div>
                  </div>

                  {/* Domain 2 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafc] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#64748b] uppercase block font-medium">DOMAIN 02</span>
                      <h4 className="text-xs font-mono font-semibold text-[#0f172a] uppercase mt-1 mb-1.5">
                        DOCKER &amp; GITLAB CI/CD
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Building optimized multi-stage Dockerfiles, image caching, container isolation, and writing declarative GitLab CI/CD pipelines with automated test gates.
                      </p>
                    </div>
                  </div>

                  {/* Domain 3 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafc] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#64748b] uppercase block font-medium">DOMAIN 03</span>
                      <h4 className="text-xs font-mono font-semibold text-[#0f172a] uppercase mt-1 mb-1.5">
                        TERRAFORM &amp; AWS CLOUD
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Infrastructure as Code using modular Terraform configurations, remote state locking with S3/DynamoDB, and provisioning core AWS compute and network resources.
                      </p>
                    </div>
                  </div>

                  {/* Domain 4 */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-[#f8fafc] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#64748b] uppercase block font-medium">DOMAIN 04</span>
                      <h4 className="text-xs font-mono font-semibold text-[#0f172a] uppercase mt-1 mb-1.5">
                        PROMETHEUS &amp; GRAFANA
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        Configuring telemetry exporters, creating PromQL query alerts, and architecting real-time Grafana observability dashboards for production uptime monitoring.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card Footer Ribbon */}
                <div className="mt-6 pt-4 border-t border-slate-200/90 text-center">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#64748b] uppercase font-medium">
                    FULLY SPONSORED BY PSDF &middot; LAB PRACTICAL EVALUATIONS &middot; 100% COMPLETION
                  </span>
                </div>
              </motion.div>

              {/* AWS Skill Builder Hands-On Competencies Matrix */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0f172a] inline-block" />
                  <span 
                    className="text-xs font-mono tracking-wider text-[#0f172a] uppercase font-semibold"
                  >
                    AWS SKILL BUILDER &middot; PRACTICAL CLOUD LABS
                  </span>
                </div>
                <p className="text-xs text-[#475569] mb-5 leading-relaxed">
                  Demonstrated competency across core AWS infrastructure building blocks through hands-on laboratory exercises:
                </p>

                {/* 6 Cloud Services Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 select-none">
                  
                  {/* Service 1: EC2 */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS EC2</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Compute instances, AMI templating, and auto-scaling rules.</span>
                  </motion.div>

                  {/* Service 2: S3 */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS S3</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Object storage, bucket versioning, and lifecycle management.</span>
                  </motion.div>

                  {/* Service 3: VPC */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS VPC</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Public/private subnets, NAT gateways, route tables &amp; ACLs.</span>
                  </motion.div>

                  {/* Service 4: Lambda */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS LAMBDA</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Serverless event execution, API Gateway, and CloudWatch triggers.</span>
                  </motion.div>

                  {/* Service 5: IAM */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS IAM</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Least-privilege policy definitions, instance roles, and MFA access.</span>
                  </motion.div>

                  {/* Service 6: RDS */}
                  <motion.div 
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="p-3.5 rounded-xl border border-slate-300/80 bg-white shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#0f172a] block">AWS RDS</span>
                    <span className="text-[11px] text-[#64748b] block mt-1">Relational database provisioning, Multi-AZ backups, and security.</span>
                  </motion.div>

                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Section 4: Prior Foundation (04 PRIOR FOUNDATION) */}
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
                  04 &nbsp;PRIOR FOUNDATION
                </span>
              </div>
            </div>

            {/* Right Column: F.Sc Scientific Problem Solving & Academic Continuum */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-9 max-w-3xl flex flex-col"
            >
              
              {/* Section Heading */}
              <h2 
                className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#0f172a] tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Scientific Problem Solving.
              </h2>

              {/* Intro Narrative */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-10"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Before entering university to specialize in Information Engineering Technology, my analytical thinking and methodical approach to troubleshooting were shaped through formal scientific education under the Board of Intermediate and Secondary Education (BISE) Lahore.
              </p>

              {/* 2-Column Comparative Foundation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 select-none">
                
                {/* Column 1: Sharif Education Complex Card */}
                <motion.div 
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-slate-300/80 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#64748b] uppercase block font-medium">
                      HIGHER SECONDARY &middot; BISE LAHORE
                    </span>
                    <h3 
                      className="text-lg font-light text-[#0f172a] tracking-tight mt-2 mb-1"
                      style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                    >
                      Sharif Education Complex
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-medium uppercase mb-4">
                      F.Sc &middot; Science Track &middot; Lahore, Pakistan
                    </p>
                    <p className="text-xs text-[#475569] leading-relaxed text-justify">
                      A rigorous curriculum centered on empirical observation, structured problem decomposition, and disciplined quantitative logic. This foundational track developed the patience and analytical rigor needed to debug intricate system anomalies.
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200 text-center">
                    <span className="text-[10px] font-mono text-[#64748b] uppercase">COMPLETED &middot; METHODICAL DISCIPLINE</span>
                  </div>
                </motion.div>

                {/* Column 2: The Three-Tier Educational Continuum */}
                <motion.div 
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-blue-200/80 bg-[#eaf3ff]/80 p-6 sm:p-7 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#64748b] uppercase block font-medium">
                      ACADEMIC CONTINUUM
                    </span>
                    <h3 
                      className="text-lg font-light text-[#0f172a] tracking-tight mt-2 mb-4"
                      style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                    >
                      Three Stages of Mastery
                    </h3>
                    
                    {/* Stage 1 */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-blue-300 flex items-center justify-center text-[10px] font-mono font-bold text-[#0f172a] shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#0f172a] uppercase block">Scientific Logic</span>
                        <span className="text-[11px] text-[#64748b] block">Sharif Education Complex &middot; Empirical mindset</span>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-blue-300 flex items-center justify-center text-[10px] font-mono font-bold text-[#0f172a] shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#0f172a] uppercase block">Information Engineering</span>
                        <span className="text-[11px] text-[#64748b] block">The University of Lahore &middot; Systems &amp; networks</span>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white border border-blue-300 flex items-center justify-center text-[10px] font-mono font-bold text-[#0f172a] shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#0f172a] uppercase block">DevOps Specialization</span>
                        <span className="text-[11px] text-[#64748b] block">PSDF &middot; AWS Skill Builder &middot; Enterprise deployments</span>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-300/70 text-center">
                    <span className="text-[10px] font-mono text-[#0f172a] font-medium uppercase">CONTINUOUS ENGINEERING EVOLUTION</span>
                  </div>
                </motion.div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. Section 5: Philosophy & Closing Blueprint (05 VISION) */}
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
                Foundation-<br />
                driven<br />
                engineering.
              </h2>

              {/* Sub-description Narrative */}
              <p 
                className="text-sm sm:text-[15px] text-[#334155] leading-[1.8] font-normal text-justify mb-8"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Theory without production practice is stagnant. Production without theoretical fundamentals is fragile. True engineering reliability exists where rigorous academic principles meet automated cloud operations.
              </p>

              {/* Pill Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-10 select-none">
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  ACADEMIC RIGOR
                </motion.span>
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  PSDF DEVOPS BOOTCAMP
                </motion.span>
                <motion.span 
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                  className="px-5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-[10.5px] font-mono tracking-widest text-[#0f172a] uppercase shadow-2xs font-medium cursor-default"
                >
                  PRODUCTION RELIABILITY
                </motion.span>
              </div>

              {/* Architectural Schematic Blueprint Card (Pure Black & Slate Line-Art) */}
              <motion.div 
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="w-full rounded-2xl border border-blue-900/15 bg-white/85 p-6 sm:p-8 md:p-10 shadow-xs mb-10 select-none overflow-x-auto"
              >
                <div className="min-w-[680px]">
                  <svg 
                    className="w-full h-auto text-[#0f172a]" 
                    viewBox="0 0 880 500" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    {/* 1. Left Side: Academic Foundation (University & Coursework) */}
                    <g id="academic-foundations">
                      <line x1="50" y1="270" x2="230" y2="270" strokeWidth="1.4" stroke="#0f172a" />
                      
                      {/* Books / Coursework Stack */}
                      <rect x="65" y="248" width="30" height="7" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <rect x="63" y="255" width="34" height="7" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <rect x="60" y="262" width="38" height="8" rx="1" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      
                      {/* University Lecture Blueprint Sheet */}
                      <rect x="75" y="155" width="36" height="50" rx="2" strokeWidth="1.2" stroke="#0f172a" fill="#ffffff" />
                      <line x1="83" y1="168" x2="103" y2="168" strokeWidth="1.3" stroke="#0f172a" />
                      <line x1="83" y1="176" x2="99" y2="176" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="83" y1="184" x2="101" y2="184" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="83" y1="192" x2="95" y2="192" strokeWidth="1.2" stroke="#64748b" />

                      {/* Network nodes icon */}
                      <circle cx="145" cy="195" r="16" strokeWidth="1.3" stroke="#0f172a" fill="#ffffff" />
                      <text x="145" y="198" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fontWeight="700" fill="#0f172a" stroke="none">UOL</text>

                      {/* Desk Workstation */}
                      <line x1="172" y1="268" x2="222" y2="268" strokeWidth="2.5" stroke="#0f172a" strokeLinecap="round" />
                      <rect x="180" y="234" width="34" height="26" rx="2" strokeWidth="1.3" stroke="#0f172a" fill="#ffffff" />
                      <line x1="186" y1="244" x2="208" y2="244" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="186" y1="250" x2="204" y2="250" strokeWidth="1.2" stroke="#64748b" />

                      {/* Left Labels */}
                      <text x="145" y="306" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#0f172a" letterSpacing="0.1em" stroke="none">
                        ACADEMIC FOUNDATION
                      </text>
                      <text x="145" y="324" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Networks, OS internals &amp; theory
                      </text>
                    </g>

                    {/* 2. Center: The Suspension Bridge & Specialized Boot Camp Shield */}
                    <g id="bridge-and-bootcamp">
                      {/* Suspension Bridge Arches */}
                      <path d="M 230,270 Q 420,215 610,270" strokeWidth="1.8" stroke="#0f172a" fill="none" />
                      <path d="M 230,280 Q 420,228 610,280" strokeWidth="1.3" stroke="#0f172a" fill="none" />
                      
                      {/* Suspension Posts */}
                      <line x1="260" y1="265" x2="260" y2="276" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="290" y1="256" x2="290" y2="268" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="320" y1="246" x2="320" y2="258" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="350" y1="237" x2="350" y2="249" strokeWidth="1.1" stroke="#0f172a" />

                      <line x1="490" y1="237" x2="490" y2="249" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="520" y1="246" x2="520" y2="258" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="550" y1="256" x2="550" y2="268" strokeWidth="1.1" stroke="#0f172a" />
                      <line x1="580" y1="265" x2="580" y2="276" strokeWidth="1.1" stroke="#0f172a" />

                      {/* Dotted Connections */}
                      <line x1="230" y1="202" x2="370" y2="202" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="470" y1="202" x2="610" y2="202" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />

                      {/* Central Shield: PSDF DevOps Training */}
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

                      {/* Shield Labels */}
                      <text x="420" y="124" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="700" fill="#0f172a" letterSpacing="0.12em" stroke="none">
                        PSDF DEVOPS BOOTCAMP
                      </text>
                      <text x="420" y="144" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Bridging theory to cloud practice
                      </text>
                    </g>

                    {/* 3. Right Side: Production Cloud Systems */}
                    <g id="production-systems">
                      <line x1="610" y1="270" x2="810" y2="270" strokeWidth="1.4" stroke="#0f172a" />

                      {/* Monitor Stand */}
                      <rect x="675" y="254" width="20" height="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.2" />
                      <line x1="660" y1="270" x2="710" y2="270" strokeWidth="2.2" stroke="#0f172a" strokeLinecap="round" />
                      
                      {/* Monitor Screen Frame */}
                      <rect x="625" y="148" width="122" height="90" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                      
                      {/* Telemetry Chart */}
                      <path 
                        d="M 635,190 L 650,172 L 665,184 L 680,165 L 695,178 L 710,166 L 730,180" 
                        fill="none" 
                        stroke="#0f172a" 
                        strokeWidth="1.4" 
                      />
                      <line x1="635" y1="198" x2="732" y2="198" strokeDasharray="2 2" strokeWidth="1" stroke="#cbd5e1" />

                      {/* AWS EKS Microchip */}
                      <rect x="646" y="206" width="32" height="18" rx="2" stroke="#0f172a" strokeWidth="1.1" fill="#f8fafc" />
                      <text x="662" y="218" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fontWeight="700" fill="#0f172a" stroke="none">
                        AWS
                      </text>

                      {/* Uptime Indicator */}
                      <circle cx="715" cy="214" r="3.5" stroke="#0f172a" strokeWidth="1.1" fill="none" />
                      <circle cx="756" cy="245" r="22" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
                      <text x="756" y="249" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fontWeight="700" fill="#0f172a" stroke="none">99.9%</text>

                      {/* Right Labels */}
                      <text x="686" y="306" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" fill="#0f172a" letterSpacing="0.1em" stroke="none">
                        PRODUCTION ARCHITECTURE
                      </text>
                      <text x="686" y="324" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="10.5" fill="#64748b" stroke="none">
                        Automated, resilient cloud systems
                      </text>
                    </g>

                    {/* 4. Dotted Blueprint Traces Connecting Down to the 4 Pillars */}
                    <g id="traces-to-pillars">
                      <line x1="420" y1="278" x2="420" y2="350" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />
                      <line x1="260" y1="350" x2="580" y2="350" strokeDasharray="3 3" strokeWidth="1.2" stroke="#64748b" />

                      <line x1="260" y1="350" x2="260" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="367" y1="350" x2="367" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="473" y1="350" x2="473" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                      <line x1="580" y1="350" x2="580" y2="368" strokeDasharray="2 2" strokeWidth="1.1" stroke="#64748b" />
                    </g>

                    {/* 5. The 4 Foundation Pillars with Pure Black Line-Art Icons */}
                    <g id="four-pillars">
                      
                      {/* Pillar 1: Networks */}
                      <circle cx="260" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      <circle cx="260" cy="380" r="4" fill="#0f172a" stroke="none" />
                      <text x="260" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        NETWORKING
                      </text>
                      <text x="260" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        TCP/IP &middot; Subnetting
                      </text>
                      <text x="260" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        VPC Topologies
                      </text>

                      {/* Pillar 2: Linux OS */}
                      <circle cx="367" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      <rect x="363" y="375" width="8" height="10" rx="1" fill="#0f172a" stroke="none" />
                      <text x="367" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        LINUX KERNEL
                      </text>
                      <text x="367" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Systemd &middot; Processes
                      </text>
                      <text x="367" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Shell Automation
                      </text>

                      {/* Pillar 3: Cloud & IaC */}
                      <circle cx="473" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      <polygon points="473,373 481,378 473,383 465,378" stroke="#0f172a" strokeWidth="1.2" fill="white" />
                      <polygon points="473,379 481,384 473,389 465,384" stroke="#0f172a" strokeWidth="1.2" fill="white" />
                      <text x="473" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        CLOUD &amp; IAC
                      </text>
                      <text x="473" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        AWS &middot; Terraform
                      </text>
                      <text x="473" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        GitLab CI/CD
                      </text>

                      {/* Pillar 4: Reliability */}
                      <circle cx="580" cy="380" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.3" />
                      <path d="M 572,382 L 577,377 L 581,379 L 587,372" fill="none" stroke="#0f172a" strokeWidth="1.3" />
                      <text x="580" y="405" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="#0f172a" letterSpacing="0.08em" stroke="none">
                        OBSERVABILITY
                      </text>
                      <text x="580" y="419" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Prometheus &middot; Metrics
                      </text>
                      <text x="580" y="430" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="8.5" fill="#64748b" stroke="none">
                        Grafana Dashboards
                      </text>
                    </g>

                    {/* 6. Bottom Banner Divider and Statement */}
                    <g id="bottom-banner">
                      <line x1="160" y1="462" x2="260" y2="462" stroke="#cbd5e1" strokeWidth="1" />
                      <text x="420" y="465" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="700" fill="#0f172a" letterSpacing="0.14em" stroke="none">
                        GROUNDED THEORY &middot; PRACTICAL DEVOPS MASTERY.
                      </text>
                      <line x1="580" y1="462" x2="680" y2="462" stroke="#cbd5e1" strokeWidth="1" />

                      <text x="420" y="482" textAnchor="middle" fontFamily="var(--font-albert)" fontSize="9.5" fill="#64748b" stroke="none">
                        Merging degree-level information engineering with specialized PSDF boot camp labs to engineer resilient cloud platforms.
                      </text>
                    </g>

                  </svg>
                </div>
              </motion.div>

              {/* Final Bold Punchy Closing Philosophy Statement */}
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
                  DevOps is not learned in a vacuum. <strong className="font-medium text-[#0f172a]">It is forged at the intersection of rigorous academic fundamentals and relentless production deployment.</strong>
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



