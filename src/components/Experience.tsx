import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cpu,
  Database,
  BarChart3,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ExperiencePillar {
  id: string;
  tabTitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  roleTitle: string;
  focusArea: string;
  impactBadge: string;
  metrics: { label: string; value: string };
  deliverables: string[];
  stack: string[];
}

const PILLARS: ExperiencePillar[] = [
  {
    id: 'backend-apis',
    tabTitle: '01. Scalable Backend & Kiosk Suite',
    icon: Server,
    roleTitle: 'Healthcare Workflows & Tri-Kiosk Hardware Suite',
    focusArea: 'Self-Registration, Report Dispatch, OPD Vitals & HIS Synchronization',
    impactBadge: '90m → 7m Wait Time Cut',
    metrics: { label: 'Reports Dispatched', value: '1.9M+ Dispatched' },
    deliverables: [
      'Developed and maintained scalable backend services using Python, FastAPI, GraphQL, and PostgreSQL for healthcare workflows.',
      'Architected backend microservices and hardware sensor gateways powering a tri-kiosk suite: Self-Registration, Report Dispatch (1.9M+ reports), and OPD Pre-assessment with vital telemetry (67K+ vitals synced to EMR).',
      'Integrated National Health Authority (NHA) APIs for ABHA/UHID generation and bi-directional Hospital Information System (HIS) synchronization.',
    ],
    stack: ['Python', 'FastAPI', 'GraphQL', 'PostgreSQL', 'ABHA/UHID', 'Hardware Telemetry', 'Docker'],
  },
  {
    id: 'ai-qms',
    tabTitle: '02. AI Queue Management (QMS)',
    icon: Cpu,
    roleTitle: 'AI-Powered Queue Triage & Hospital Routing',
    focusArea: 'Dynamic Routing, Wait Time Optimization & HIS Sync',
    impactBadge: '20–30% Wait Time Drop',
    metrics: { label: 'Wait Time Reduction', value: '20–30%' },
    deliverables: [
      'Built core backend workflows for an AI-powered Queue Management System (QMS) automating patient movement across consultation rooms and diagnostic labs.',
      'Implemented dynamic department routing and prioritization logic that reduced patient wait times by 20–30% and front-desk workload by 25–30%.',
      'Integrated queue and patient workflow data with Hospital Information Systems (HIS) to support contactless check-in and real-time operational visibility.',
    ],
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'WebSockets', 'Triage Logic', 'HIS Integration'],
  },
  {
    id: 'pyspark-databricks',
    tabTitle: '03. PySpark ETL on Databricks',
    icon: Database,
    roleTitle: 'Distributed Ingestion & Big Data Analytics',
    focusArea: 'Large-Scale EHR Datasets & Cloud Lakehouse Pipelines',
    impactBadge: 'Distributed Pipeline',
    metrics: { label: 'Daily Processed Logs', value: '500K+ Records' },
    deliverables: [
      'Built distributed data ingestion and transformation pipelines using PySpark and Azure Databricks to process structured EHR and operational datasets.',
      'Decoupled analytical data lakehouse layers in Azure Blob Storage & Delta Lake, isolating heavy batch compute from transactional OLTP databases.',
      'Engineered automated financial and transaction reconciliation routines matching payment gateway webhooks against hospital ledgers with 99.99% accuracy.',
    ],
    stack: ['PySpark', 'Azure Databricks', 'Delta Lake', 'Azure Blob', 'ETL Pipelines', 'Pandas'],
  },
  {
    id: 'db-optimization-mis',
    tabTitle: '04. DB Tuning & 18+ MIS Dashboards',
    icon: BarChart3,
    roleTitle: 'PostgreSQL Performance & Executive Analytics',
    focusArea: '30% Latency Drop & Enterprise Tableau Reporting Suite',
    impactBadge: '18+ Executive Dashboards',
    metrics: { label: 'Query Latency Cut', value: '-30% Boost' },
    deliverables: [
      'Optimized PostgreSQL queries, indexing strategies, and database connection pools, improving application response times by approximately 30%.',
      'Partnered with hospital enterprise stakeholders to deliver a standalone operational MIS analytics platform with 18+ Tableau dashboards.',
      'Covered machine uptime, kiosk utilization, revenue distribution, and pharmacy turnover for hospital executives.',
    ],
    stack: ['PostgreSQL', 'EXPLAIN ANALYZE', 'Tableau Server', 'Power BI', 'Connection Pooling', 'SQL Tuning'],
  },
];

export const Experience: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);
  const [viewMode, setViewMode] = useState<'pillars' | 'chronological'>('pillars');

  const exp = EXPERIENCES[0];
  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];
  const PillarIcon = activePillar.icon;

  return (
    <section
      id="experience"
      className="relative bg-bg py-20 md:py-32 overflow-hidden border-t border-stroke/40"
    >
      {/* Subtle ambient depth glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#4E85BF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Standardized Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Professional Experience
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary tracking-tight leading-[1.08] mb-4">
              Where I&apos;ve{' '}
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
                engineered.
              </span>
            </h2>

            <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-xl">
              Production engineering at Achala Health Services, building scalable backend services, AI queue routing, distributed PySpark ETL, and operational analytics.
            </p>
          </motion.div>

          {/* View Mode Toggle: Interactive Pillars vs. Full Chronological */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface border border-stroke w-fit">
            <button
              onClick={() => setViewMode('pillars')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'pillars'
                  ? 'bg-white/10 text-text-primary font-semibold shadow-sm'
                  : 'text-muted hover:text-white'
              }`}
            >
              Architectural Pillars
            </button>
            <button
              onClick={() => setViewMode('chronological')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'chronological'
                  ? 'bg-white/10 text-text-primary font-semibold shadow-sm'
                  : 'text-muted hover:text-white'
              }`}
            >
              Chronological Bullets
            </button>
          </div>
        </div>

        {/* Company Overview Hero Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-stroke mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl sm:text-3xl font-display text-text-primary">
                {exp.company}
              </h3>
              <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#89AACC]/10 border border-[#89AACC]/30 text-[#89AACC]">
                Active Production Role
              </span>
            </div>

            <p className="text-xs sm:text-sm text-text-primary/90 font-medium">
              {exp.role}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#89AACC]" />
                <span>{exp.period}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#89AACC]" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>

          {/* Quantitative Impact Quick-Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            {[
              { val: '30%', label: 'Latency Cut' },
              { val: '20–30%', label: 'Wait Time Cut' },
              { val: '18+', label: 'MIS Dashboards' },
              { val: '500K+', label: 'Daily Records' },
            ].map((stat, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-center min-w-[90px]">
                <div className="text-base sm:text-lg font-display italic text-[#89AACC]">
                  {stat.val}
                </div>
                <div className="text-[9px] font-mono uppercase text-muted mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Mode 1: Interactive Architectural Pillars */}
        {viewMode === 'pillars' ? (
          <div>
            {/* Pillar Tabs Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
              {PILLARS.map((p) => {
                const isActive = p.id === activePillar.id;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillarId(p.id)}
                    className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-surface border border-[#89AACC]/50 shadow-[0_0_20px_rgba(137,170,204,0.12)]'
                        : 'bg-surface/40 border border-stroke hover:border-white/20'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#89AACC]/20 text-[#89AACC] border border-[#89AACC]/40'
                          : 'bg-white/5 text-muted border border-white/10'
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-muted block mb-0.5">
                        {p.tabTitle.split('.')[0]}
                      </span>
                      <h4
                        className={`text-xs sm:text-sm font-medium tracking-tight truncate ${
                          isActive ? 'text-white' : 'text-text-primary'
                        }`}
                      >
                        {p.tabTitle.split('. ')[1]}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Showcase Stage */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-8 md:p-10 rounded-3xl bg-surface/70 border border-stroke shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-stroke/60">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#89AACC]/10 border border-[#89AACC]/30 flex items-center justify-center text-[#89AACC]">
                      <PillarIcon size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#89AACC] font-semibold">
                        {activePillar.focusArea}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-medium text-text-primary">
                        {activePillar.roleTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {activePillar.impactBadge}
                    </span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-4">
                    Key Architectural Deliverables &amp; Engineering Contributions:
                  </h4>
                  <div className="space-y-3.5">
                    {activePillar.deliverables.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-black/30 border border-white/5">
                        <CheckCircle2 size={16} className="text-[#89AACC] mt-0.5 shrink-0" />
                        <p className="text-xs sm:text-sm text-text-primary/90 font-light leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-6 border-t border-stroke/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-muted mr-1">Stack:</span>
                    {activePillar.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-muted">
                    Impact: <span className="text-[#89AACC] font-medium">{activePillar.metrics.value}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* View Mode 2: Full Chronological Resume Bullets */
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-surface border border-stroke">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-6">
              Complete Engineering Track Record
            </h4>
            <div className="space-y-4">
              {exp.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/20 border border-white/5">
                  <span className="text-xs font-mono font-bold text-[#89AACC] px-2 py-0.5 rounded bg-white/5 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-text-primary/90 font-light leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Achievements Grid below experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Achievements & Competitive Milestones */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-stroke flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#89AACC]/10 border border-[#89AACC]/30 flex items-center justify-center text-[#89AACC]">
                  <Award size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#89AACC] block">
                    Verified Honors
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-text-primary">
                    Competitive Achievements
                  </h4>
                </div>
              </div>

              <div className="space-y-3.5">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-black/30 border border-white/5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-medium text-text-primary">
                        {ach.title}
                      </span>
                      {ach.badge && (
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#89AACC]/10 border border-[#89AACC]/20 text-[#89AACC] shrink-0">
                          {ach.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted font-light leading-relaxed">
                      {ach.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-stroke flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#89AACC]/10 border border-[#89AACC]/30 flex items-center justify-center text-[#89AACC]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#89AACC] block">
                    Academic Foundation
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-text-primary">
                    Education &amp; Degrees
                  </h4>
                </div>
              </div>

              <div className="space-y-3.5">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-black/30 border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <span className="text-xs sm:text-sm font-medium text-text-primary">
                        {edu.degree}
                      </span>
                      <span className="text-[11px] font-mono text-[#89AACC] shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted/90 mb-1.5 font-light">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-[11px] text-muted/70 font-light leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
