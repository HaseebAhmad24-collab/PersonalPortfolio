"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ChevronDown, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function WorkPage() {
  const { contact } = portfolioData.personalInfo;

  // Track expanded state for project cards
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({
    1: true, // First card open by default for rich first impression
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Continuous Typewriter Cycling Animation for Production Deliveries
  const words = [
    "AWS VPC ARCHITECTURE",
    "CI/CD PIPELINES",
    "KUBERNETES ON EKS",
    "AUTO-SCALING SYSTEMS",
    "REVERSE PROXY & SSL"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    document.title = "Work - Haseeb Ahmad";
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
      }, 2200); // pause on full word
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

  // Project List (Exactly matching user's Resume)
  const projects = [
    {
      id: 1,
      index: "01",
      tag: "AWS VPC & ARCHITECTURE",
      title: "Zero-Trust 3-Tier AWS Network Architecture",
      subtitle: "PRODUCTION VPC WITH PUBLIC, APP & DATA SUBNETS",
      summary: "Manually designed a production-style 3-tier AWS VPC with isolated public, private app, and private data subnets without pre-built templates, enforcing strict zero-trust network boundaries.",
      bullets: [
        "Manually designed a production-style 3-tier AWS VPC — public, private app, and private data subnets — without pre-built templates or IaC tools.",
        "Isolated backend and database resources in private subnets, controlling access via custom route tables and security groups.",
        "Deployed a bastion host for secure, restricted SSH access to private instances.",
        "Configured an HTTPS-secured ALB as the sole public entry point, keeping backend systems fully private."
      ],
      tech: ["AWS VPC", "ALB", "SECURITY GROUPS", "BASTION HOST", "ROUTE TABLES"]
    },
    {
      id: 2,
      index: "02",
      tag: "AUTO SCALING & SRE",
      title: "Self-Healing Auto-Scaling Infrastructure on AWS",
      subtitle: "DJANGO AUTO-SCALING WORKLOAD & GOLDEN AMI",
      summary: "Built a self-scaling Django deployment using a Golden AMI, Launch Template, and Auto Scaling Group behind an Application Load Balancer with CloudWatch target tracking policies.",
      bullets: [
        "Built a self-scaling Django deployment using a Golden AMI, Launch Template, and Auto Scaling Group behind an ALB.",
        "Configured a CloudWatch Target Tracking policy to auto-scale EC2 instances from 1 to 4 under load.",
        "Deployed an Nginx → Gunicorn → Django stack per instance with a /health/ endpoint for ALB health checks.",
        "Verified scaling behavior in real time via an IMDSv2-based live instance dashboard."
      ],
      tech: ["AWS EC2", "AUTO SCALING", "CLOUDWATCH", "GOLDEN AMI", "GUNICORN", "NGINX"]
    },
    {
      id: 3,
      index: "03",
      tag: "CI/CD & SECURITY",
      title: "Secure CI/CD Deployment Pipeline with AWS Integration",
      subtitle: "JENKINS TRACKER WITH RDS MYSQL & SECRETS MANAGER",
      summary: "Built and deployed a full-stack log-tracking application on AWS EC2 with private RDS (MySQL), private S3 signed URLs, and an automated Jenkins CI/CD pipeline triggered by GitHub webhooks.",
      bullets: [
        "Built and deployed a full-stack log-tracking app on AWS EC2 with private RDS (MySQL) and private S3 (signed URLs) for secure storage.",
        "Eliminated hardcoded credentials using AWS Secrets Manager with least-privilege IAM roles.",
        "Set up a Jenkins CI/CD pipeline triggered by GitHub webhooks for zero-touch deployment on every push.",
        "Configured Nginx + PM2 with Cloudflare DNS and Let's Encrypt SSL for the production domain."
      ],
      tech: ["JENKINS", "AWS EC2", "RDS MYSQL", "AWS S3", "SECRETS MANAGER", "CLOUDFLARE"]
    },
    {
      id: 4,
      index: "04",
      tag: "KUBERNETES & EKS",
      title: "Highly Available Kubernetes Deployment on AWS EKS",
      subtitle: "3-TIER NOTES APP WITH 5 CONTAINERIZED SERVICES",
      summary: "Deployed a 3-tier notes app on Amazon EKS with 5 containerized services, EBS-backed persistent storage for PostgreSQL, and CoreDNS-based internal service discovery.",
      bullets: [
        "Deployed a 3-tier notes app on Amazon EKS with 5 containerized services (2 React frontends, Django REST API, PostgreSQL, Nginx).",
        "Configured persistent PostgreSQL storage via an EBS-backed PersistentVolumeClaim, ensuring zero data loss across pod restarts.",
        "Exposed the app without a Load Balancer using Nginx as a NodePort entry point, with CoreDNS handling internal service discovery.",
        "Managed credentials securely using Kubernetes Secrets across all manifests."
      ],
      tech: ["KUBERNETES", "AMAZON EKS", "EBS PVC", "COREDNS", "POSTGRESQL", "DOCKER"]
    },
    {
      id: 5,
      index: "05",
      tag: "REVERSE PROXY & SSL",
      title: "Multi-Service Reverse Proxy & SSL Gateway on AWS",
      subtitle: "NGINX LAB WITH VIRTUAL HOSTING & PATH ROUTING",
      summary: "Configured Nginx on AWS EC2 as both reverse and forward proxy for multiple backend microservice apps with custom domain DNS, Let's Encrypt SSL, and URL-path routing.",
      bullets: [
        "Manually configured Nginx on AWS EC2 as both reverse and forward proxy for multiple backend apps.",
        "Implemented virtual hosting and URL-path-based routing (/python-app/, /node-app/, /java-app/) across services.",
        "Connected a custom domain via Elastic IP and DNS A records for a persistent address.",
        "Secured traffic with Let's Encrypt SSL and enforced HTTP-to-HTTPS redirection."
      ],
      tech: ["NGINX", "AWS EC2", "ELASTIC IP", "LET'S ENCRYPT SSL", "URL ROUTING"]
    }
  ];

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

      {/* 3. Hero Header Section: Minimalist Typography & Floating Tools Graphic */}
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
                  PRODUCTION DELIVERIES &amp; CLOUD SYSTEMS
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

              {/* Sub-headline: ARCHITECTURE TO PRODUCTION. */}
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#0f172a] mt-8 uppercase flex items-center gap-3 select-none"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                ARCHITECTURE <span className="font-light text-[#475569]">TO</span> PRODUCTION.
              </h2>

              {/* Persona Specs Matrix */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 select-none">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    TOTAL SYSTEMS
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    {projects.length} Projects
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    CLOUD PLATFORM
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    AWS EKS &amp; EC2
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    IAC ENGINE
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    Modular Terraform
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#64748b] uppercase block font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
                    PIPELINES
                  </span>
                  <span className="text-xs md:text-[13px] font-medium text-[#0f172a] mt-1.5 block leading-snug">
                    Jenkins Automation
                  </span>
                </div>
              </div>

            </motion.div>

            {/* Right Column: User's tools.png Transparent Floating Graphic with Butter-Smooth Hardware Acceleration */}
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
                    src="/tools.webp" 
                    alt="DevOps Tools & Cloud Ecosystem" 
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

      {/* 4. Section: Work / Projects Cards Grid (Exact Awais 2-Column Layout with Expandable Accordions) */}
      <section className="relative z-10 w-full overflow-hidden border-b border-blue-900/15 bg-[#edf5ff]">
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-20 md:py-28">
          
          {/* Section Header: Matching Awais Screenshot "03 WORK ---------- 6 DELIVERIES" */}
          <div className="flex items-center justify-between pb-8 mb-10 border-b border-blue-900/15 select-none">
            <div className="flex items-center gap-3">
              <span 
                className="text-[11px] sm:text-xs tracking-[0.25em] text-[#64748b] font-medium uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                03 &nbsp;WORK &amp; PROJECTS
              </span>
            </div>
            <div>
              <span 
                className="text-[11px] sm:text-xs tracking-[0.22em] text-[#64748b] font-medium uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {projects.length} PROJECTS
              </span>
            </div>
          </div>

          {/* 2-Column Cards Grid matching Awais Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.id * 0.08 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  {/* Top Meta: Index & Category Pill Badge side-by-side on left */}
                  <div className="flex items-center gap-3.5 mb-5 select-none">
                    <span 
                      className="text-xs font-mono tracking-widest text-[#94a3b8]"
                    >
                      {project.index}
                    </span>
                    <span 
                      className="text-[11px] font-mono tracking-wider text-[#475569] uppercase px-3 py-0.5 rounded-full border border-slate-200/90 bg-white"
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-2xl sm:text-[26px] font-normal text-[#0f172a] tracking-tight leading-snug mb-1.5"
                    style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  {/* Project Subtitle */}
                  <p 
                    className="text-xs font-mono tracking-wider text-[#64748b] uppercase mb-4"
                  >
                    {project.subtitle}
                  </p>

                  {/* Project Summary */}
                  <p className="text-sm text-[#475569] leading-relaxed font-normal mb-8 text-justify">
                    {project.summary}
                  </p>

                  {/* Expandable Accordion: WHAT THIS INVOLVED (Matching Awais Reference) */}
                  <div className="border-t border-slate-100 pt-5">
                    <button 
                      onClick={() => toggleCard(project.id)}
                      className={`w-full flex items-center justify-between p-3 border transition-all cursor-pointer group select-none text-left ${
                        expandedCards[project.id] 
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
                        className={`w-4 h-4 text-[#0f172a] transition-transform duration-300 ${expandedCards[project.id] ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {expandedCards[project.id] && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 space-y-3.5">
                            {project.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <p className="text-xs text-[#334155] leading-relaxed">
                                  {bullet}
                                </p>
                              </div>
                            ))}

                            {/* Tech Stack Tags */}
                            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                              {project.tech.map((t) => (
                                <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#edf5ff] border border-blue-200/60 text-[#0f172a] font-medium">
                                  {t}
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
            ))}

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
              <div 
                className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                {projects.length}
              </div>
              <div 
                className="text-xs font-mono uppercase tracking-widest text-[#64748b] mt-2"
              >
                Enterprise Systems Delivered
              </div>
              <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                From microservices orchestrations on Amazon EKS to agentic AI pipelines with automated quality gates.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:border-r border-slate-300/60 pr-0 sm:pr-4"
            >
              <div 
                className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                100%
              </div>
              <div 
                className="text-xs font-mono uppercase tracking-widest text-[#64748b] mt-2"
              >
                IaC Automation Rate
              </div>
              <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                Modular Terraform definitions enforcing environment parity across Dev, QA, Stage, and Production.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col"
            >
              <div 
                className="text-4xl sm:text-5xl font-light text-[#0f172a] tracking-tight"
                style={{ fontFamily: 'var(--font-albert), Albert Sans, sans-serif' }}
              >
                Zero
              </div>
              <div 
                className="text-xs font-mono uppercase tracking-widest text-[#64748b] mt-2"
              >
                Downtime Deployment SLA
              </div>
              <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                Zero-downtime rolling updates on Kubernetes clusters with health-checked target groups and automated rollback.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Minimalist Architectural Blueprint Footer */}
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



