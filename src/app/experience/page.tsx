"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function ExperiencePage() {
  const { contact } = portfolioData.personalInfo;

  // Track expanded state for the 2 experience cards
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({
    1: true, // First card open by default for rich first impression
    2: false
  });

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Continuous Typewriter Cycling Animation for DevOps Production Impact
  const words = [
    "PRODUCTION RELIABILITY",
    "CI/CD AUTOMATION",
    "KUBERNETES CLUSTERS",
    "INFRASTRUCTURE CODE",
    "ZERO-DOWNTIME RELEASES"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Experience - Haseeb Ahmad";
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
      }, 2200);
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

      {/* 3. Hero Header Section (Awais-Style Minimalist Typography & Blueprint Grid) */}
      <section className="relative z-10 w-full border-b border-blue-900/15 overflow-hidden">
        
        {/* Blueprint Grid Lines Pattern */}
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
            
            {/* Left Column: Ultra-minimal typography */}
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
                  CAREER TRACK &amp; PRODUCTION HISTORY
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

              {/* Sub-headline: PIPELINES TO PRODUCTION. */}
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#0f172a] mt-8 uppercase flex items-center gap-3 select-none"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                DEPLOYMENT <span className="font-light text-[#475569]">AT</span> SCALE.
              </h2>

              {/* Persona Specs Matrix */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 select-none">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    CURRENT ROLE
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    DevOps Engineer
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    ENTERPRISE TRACK
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    LuminahTech &amp; NETSOL
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    PRODUCTION SLA
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    99.9% Workload Uptime
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    INFRASTRUCTURE
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    AWS, Kubernetes, Terraform
                  </span>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Clean Floating DevOps Infinity Loop with Natural Organic Depth */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5 flex items-center justify-center select-none"
            >
              <div className="w-full max-w-[480px] lg:max-w-[530px] flex items-center justify-center relative group">
                {/* Native GPU Compositor Floating Container (Zero JS Latency) */}
                <div className="animate-float-smooth w-full flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/cicd.webp" 
                    alt="DevOps CI/CD Lifecycle" 
                    className="w-full h-auto object-contain select-none transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    style={{
                      filter: "drop-shadow(0 16px 24px rgba(15, 23, 42, 0.12)) drop-shadow(0 4px 10px rgba(37, 99, 235, 0.08))",
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

      {/* 4. Section: Experience Cards Grid (Exact Awais 2-Column Layout with Expandable Accordions) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          
          {/* Section Header: Matching Awais Screenshot "04 EXPERIENCE ---------- 6 ROLES" */}
          <div className="flex items-center justify-between pb-8 mb-10 border-b border-blue-900/15 select-none">
            <div className="flex items-center gap-3">
              <span 
                className="text-[11px] sm:text-xs tracking-[0.25em] text-[#64748b] font-medium uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                04 &nbsp;EXPERIENCE
              </span>
            </div>
            <div>
              <span 
                className="text-[11px] sm:text-xs tracking-[0.22em] text-[#64748b] font-medium uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                2 ROLES
              </span>
            </div>
          </div>

          {/* 2-Column Cards Grid matching Awais Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Card 01: LuminahTech (Current Production Role) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Top Meta: Index & Date Pill Badge side-by-side on left */}
                <div className="flex items-center gap-3.5 mb-5 select-none">
                  <span 
                    className="text-xs font-mono tracking-widest text-[#94a3b8]"
                  >
                    01
                  </span>
                  <span 
                    className="text-[11px] font-mono tracking-wider text-[#475569] uppercase px-3 py-0.5 rounded-full border border-slate-200/90 bg-white"
                  >
                    OCT 2025 &ndash; PRESENT
                  </span>
                </div>

                {/* Role Title */}
                <h3 
                  className="text-2xl sm:text-[26px] font-normal text-[#0f172a] tracking-tight leading-snug mb-1.5"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                >
                  DevOps Engineer
                </h3>

                {/* Company Name */}
                <p 
                  className="text-xs font-mono tracking-wider text-[#64748b] uppercase mb-4"
                >
                  LUMINAHTECH
                </p>

                {/* Role Summary */}
                <p className="text-sm text-[#475569] leading-relaxed font-normal mb-8 text-justify">
                  Managing and maintaining enterprise Infrastructure as Code (IaC) with Terraform, orchestrating multi-environment release pipelines across Dev, QA, Stage, and Production, and deploying microservices on Amazon EKS.
                </p>

                {/* Expandable Accordion: WHAT THIS INVOLVED (Matching Awais Reference) */}
                <div className="border-t border-slate-100 pt-5">
                  <button 
                    onClick={() => toggleCard(1)}
                    className={`w-full flex items-center justify-between p-3 border transition-all cursor-pointer group select-none text-left ${
                      expandedCards[1] 
                        ? 'border-[#0f172a] bg-white' 
                        : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <span 
                      className="text-[11px] font-mono tracking-[0.16em] text-[#0f172a] font-semibold uppercase"
                    >
                      WHAT THIS INVOLVED
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#0f172a] transition-transform duration-300 ${expandedCards[1] ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {expandedCards[1] && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 space-y-3.5">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Managing &amp; maintaining Infrastructure as Code (IaC) across cloud environments using modular Terraform configurations.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Implemented environment-based CI/CD pipelines (Dev/QA/Stage) using Jenkins with structured, reusable pipeline configurations.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Handling multi-environment deployments across Dev, Stage, Pre-Prod, and Production, ensuring environment parity and controlled zero-downtime release flows.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Deploying and managing containerized and serverless workloads on Amazon EKS and AWS Lambda.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Working with core AWS services (IAM least-privilege, Secrets Manager, Route 53) and Git-based workflows to ensure secure, consistent deployments.
                            </p>
                          </div>

                          {/* Tech Stack Tags */}
                          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                            {["TERRAFORM", "AWS EKS", "JENKINS", "DOCKER", "AWS LAMBDA", "IAM"].map((tech) => (
                              <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#edf5ff] border border-blue-200/60 text-[#0f172a] font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>

            {/* Card 02: NETSOL Technologies Inc. (Internship Role) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                {/* Top Meta: Index & Date Pill Badge side-by-side on left */}
                <div className="flex items-center gap-3.5 mb-5 select-none">
                  <span 
                    className="text-xs font-mono tracking-widest text-[#94a3b8]"
                  >
                    02
                  </span>
                  <span 
                    className="text-[11px] font-mono tracking-wider text-[#475569] uppercase px-3 py-0.5 rounded-full border border-slate-200/90 bg-white"
                  >
                    JUL 2025 &ndash; AUG 2025
                  </span>
                </div>

                {/* Role Title */}
                <h3 
                  className="text-2xl sm:text-[26px] font-normal text-[#0f172a] tracking-tight leading-snug mb-1.5"
                  style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                >
                  DevOps Engineer Intern
                </h3>

                {/* Company Name */}
                <p 
                  className="text-xs font-mono tracking-wider text-[#64748b] uppercase mb-4"
                >
                  NETSOL TECHNOLOGIES INC.
                </p>

                {/* Role Summary */}
                <p className="text-sm text-[#475569] leading-relaxed font-normal mb-8 text-justify">
                  Architected production-style 3-tier AWS VPC infrastructure, deployed containerized microservices on Amazon EKS with CoreDNS and EBS persistent storage, and built auto-scaling Django workloads.
                </p>

                {/* Expandable Accordion: WHAT THIS INVOLVED (Matching Awais Reference) */}
                <div className="border-t border-slate-100 pt-5">
                  <button 
                    onClick={() => toggleCard(2)}
                    className={`w-full flex items-center justify-between p-3 border transition-all cursor-pointer group select-none text-left ${
                      expandedCards[2] 
                        ? 'border-[#0f172a] bg-white' 
                        : 'border-transparent hover:border-slate-300'
                    }`}
                  >
                    <span 
                      className="text-[11px] font-mono tracking-[0.16em] text-[#0f172a] font-semibold uppercase"
                    >
                      WHAT THIS INVOLVED
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#0f172a] transition-transform duration-300 ${expandedCards[2] ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {expandedCards[2] && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 space-y-3.5">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Deployed a 3-tier notes application on AWS EKS using Kubernetes manifests, EBS-backed persistent storage, and CoreDNS service discovery with zero data loss.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Architected a production-style 3-tier AWS VPC infrastructure with public/private subnet isolation, bastion host, and HTTPS-secured ALB.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Built a self-scaling Django deployment using AWS Auto Scaling Group, CloudWatch metrics, and a Golden AMI (dynamically scaled from 1 to 4 instances).
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Implemented a Jenkins CI/CD pipeline triggered by webhooks, using AWS Secrets Manager for centralized secrets and least-privilege IAM roles.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-[#334155] leading-relaxed">
                              Configured Nginx as a reverse proxy and virtual host on AWS EC2 with Let's Encrypt SSL and URL-based routing.
                            </p>
                          </div>

                          {/* Tech Stack Tags */}
                          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                            {["KUBERNETES", "AWS VPC", "AUTO SCALING", "JENKINS", "NGINX", "EBS"].map((tech) => (
                              <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#edf5ff] border border-blue-200/60 text-[#0f172a] font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Bottom Metrics Bar (Exact Awais 3-Column Stats Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-16 mt-16 border-t border-slate-300/70 select-none">
            
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
                1+
              </span>
              <span 
                className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                YEARS ENTERPRISE PRACTICE
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
                30+
              </span>
              <span 
                className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                PRODUCTION PIPELINES DELIVERED
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
                99.9%
              </span>
              <span 
                className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#64748b] uppercase mt-3 font-medium"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                WORKLOAD UPTIME SLA
              </span>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. Minimalist Architectural Blueprint Footer */}
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



