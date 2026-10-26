import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const SelectedWorks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="works" className="bg-bg py-12 md:py-20 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header with Framer Motion whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Featured Systems
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight font-light">
              Production <span className="font-display italic font-normal">architectures</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-lg">
              Scalable backend services, distributed data pipelines, and healthcare systems. Click any system to read the in-depth architectural case study.
            </p>
          </div>

          {/* Quick badge */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-stroke text-xs text-muted font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>5 Dedicated Case Studies Available</span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => {
            const colSpanClass =
              project.span === 12
                ? 'md:col-span-12'
                : project.span === 7
                ? 'md:col-span-7'
                : 'md:col-span-5';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onClick={() => navigate(`/project/${project.id}`)}
                className={`${colSpanClass} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer min-h-[380px] md:min-h-[460px] flex flex-col justify-end p-6 md:p-8 transition-all duration-300 hover:border-[#89AACC]/50 shadow-lg`}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Halftone Overlay */}
                <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply pointer-events-none" />

                {/* Subtle base vignette so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-20" />

                {/* Upfront Production Metric Badge */}
                {project.metrics && project.metrics[0] && (
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 pointer-events-none transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-[11px] font-mono text-white shadow-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-[#89AACC]">{project.metrics[0].value}</span>
                      <span className="text-white/60 text-[10px] hidden sm:inline">{project.metrics[0].label}</span>
                    </div>
                  </div>
                )}

                {/* Default Card Meta Content */}
                <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] text-[#89AACC] uppercase tracking-widest font-mono font-semibold">
                      {project.category}
                    </span>
                    <span className="text-muted/40">&bull;</span>
                    <span className="text-[11px] text-muted font-mono">{project.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display text-text-primary tracking-wide mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted line-clamp-2">
                    {project.subtitle}
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay: bg-bg/80 + backdrop-blur-md */}
                <div className="absolute inset-0 z-20 bg-bg/85 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-3">
                    Deep Architectural Case Study
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display italic text-white max-w-md mb-6">
                    {project.title}
                  </h4>

                  {/* Hover CTA Button */}
                  <div className="relative inline-flex items-center p-[2px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                    <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
                    <span className="relative z-10 px-6 py-2.5 bg-white text-black text-xs sm:text-sm font-medium rounded-full flex items-center gap-2 shadow-sm">
                      <span>Explore Dedicated Page</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
