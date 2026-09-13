"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const experiences = (portfolioData as any).experience || [];

  return (
    <section id="experience" className="py-32 px-6 bg-[#0B0F12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Section Header */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-28"
          >
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-white border-l-4 border-[#00F5D4] pl-4 uppercase tracking-tight mb-6">
              Experience
            </h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed pr-8">
              Professional journey across cloud infrastructure, CI/CD automation, and production environments.
            </p>
          </motion.div>
        </div>

        {/* Right Minimalist Timeline */}
        <div className="md:w-2/3 border-l border-white/10 pl-8 md:pl-12 relative py-4">
          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-16 last:mb-0 relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F12] border-2 border-white/20 group-hover:border-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:shadow-[0_0_16px_#00F5D4] transition-all duration-300" />

              {/* Role & Duration Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl md:text-3xl font-syne font-bold text-white group-hover:text-[#00F5D4] transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono tracking-widest uppercase text-[#00F5D4] bg-[#00F5D4]/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Company & Type */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg font-medium text-white/90">
                  {exp.company}
                </span>
                {exp.type && (
                  <>
                    <span className="text-white/20">•</span>
                    <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono">
                      {exp.type}
                    </span>
                  </>
                )}
              </div>

              {/* Highlights Clean Minimal List */}
              <ul className="space-y-3">
                {exp.highlights?.map((highlight: string, hIdx: number) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-3.5 text-[#94A3B8] text-sm md:text-[15px] leading-relaxed group/item"
                  >
                    <span className="font-mono text-[#00F5D4]/40 group-hover:text-[#00F5D4] transition-colors duration-200 mt-0.5 select-none">
                      —
                    </span>
                    <span className="text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors duration-200">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
