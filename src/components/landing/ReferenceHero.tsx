"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, X, ExternalLink, Briefcase } from "lucide-react";

export default function ReferenceHero() {
  const { name, contact } = portfolioData.personalInfo;
  const [activeModal, setActiveModal] = useState<"about" | "work" | "experience" | "education" | "contact" | null>(null);

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

  // Handle URL hash changes (e.g. #education from external or new tabs)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "education" || hash === "experience" || hash === "work" || hash === "contact") {
        setActiveModal(hash as "education" | "experience" | "work" | "contact");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

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

      {/* 4. Elegant Minimalist Drawer / Modal for Detailed Views */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#0f172a]/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-[#0f172a]">
            
            {/* Close button */}
            <button 
              onClick={() => {
                setActiveModal(null);
                if (typeof window !== "undefined") {
                  window.history.replaceState(null, "", window.location.pathname);
                }
              }}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content Sections */}
            {activeModal === "about" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">01 / Profile</span>
                  <h3 className="text-3xl font-bold mt-1">About Me</h3>
                </div>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed text-justify">
                  {portfolioData.personalInfo.bio}
                </p>
                <div className="pt-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-3">Core Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {portfolioData.skills.map((skill, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeModal === "experience" && (
              <div className="space-y-8">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">02 / Career History</span>
                  <h3 className="text-3xl font-bold mt-1">Work Experience</h3>
                </div>
                <div className="space-y-8">
                  {(portfolioData as any).experience?.map((exp: any, i: number) => (
                    <div key={i} className="border-l-2 border-blue-500 pl-6 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-600">{exp.company} • {exp.type}</p>
                      <ul className="space-y-2 pt-2">
                        {exp.highlights?.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                            <span className="text-blue-500 font-bold select-none">—</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === "work" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">03 / Projects</span>
                  <h3 className="text-3xl font-bold mt-1">Featured Architecture & Work</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioData.projects.map((proj) => (
                    <div key={proj.id} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-blue-600 font-bold">#{proj.id}</span>
                        <span className="text-xs font-medium text-slate-500">{proj.role}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{proj.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {proj.techStack?.map((t, tIdx) => (
                          <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === "education" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">04 / Academics</span>
                  <h3 className="text-3xl font-bold mt-1">Education & Foundation</h3>
                </div>
                <div className="space-y-6">
                  {portfolioData.education.map((edu: any) => (
                    <div key={edu.id} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-200 text-slate-800">
                          {edu.duration || edu.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{edu.institution}</p>
                      <p className="text-xs font-mono text-blue-600 font-bold pt-1">CGPA: 3.89 / 4.00</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === "contact" && (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">05 / Get In Touch</span>
                  <h3 className="text-3xl font-bold mt-1">Let's Talk</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-700">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a href={`mailto:${contact.email}`} className="text-base hover:underline font-medium">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a href={`tel:${contact.phone}`} className="text-base hover:underline font-medium">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-base font-medium">{contact.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 transition-all font-semibold text-sm"
                    >
                      <span className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z"/>
                        </svg>
                        LinkedIn Profile
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </a>
                    <a 
                      href={contact.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 transition-all font-semibold text-sm"
                    >
                      <span className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-slate-900 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                        </svg>
                        GitHub Repositories
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
