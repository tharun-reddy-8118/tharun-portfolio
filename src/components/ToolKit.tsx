import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToolItem {
  id: string;
  name: string;
  category: 'Backend & DB' | 'Data & Cloud' | 'Languages & Tools';
  tag: string;
  desc: string;
  productionMetric?: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Languages & Tools',
    tag: 'Core Lang',
    desc: 'Scalable backend services, distributed ETL scripts, and data engine logic',
    productionMetric: 'Microservices & Daemons',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M11.9 2c-4.2 0-3.9 1.8-3.9 1.8l.04 1.9h4v.6H6.1S3 6 3 10.3s2.7 4.1 2.7 4.1h1.6v-2.3c0-2.6 2.3-2.5 2.3-2.5h3.9c.7 0 1.2-.5 1.2-1.2V4.4c0-1.8-2.8-2.4-2.8-2.4zm-1.8 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#387EB8" />
        <path d="M12.1 22c4.2 0 3.9-1.8 3.9-1.8l-.04-1.9h-4v-.6h5.9s3.1.3 3.1-4-2.7-4.1-2.7-4.1h-1.6v2.3c0 2.6-2.3 2.5-2.3 2.5H10.5c-.7 0-1.2.5-1.2 1.2v6c0 1.8 2.8 2.4 2.8 2.4zm1.8-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" fill="#FFE052" />
      </svg>
    ),
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend & DB',
    tag: 'Web Framework',
    desc: 'High-throughput async APIs, auto-docs, and microservices for healthcare',
    productionMetric: '< 65ms P95 Response SLA',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path d="M13 3L6 13h5l-2 8 9-11h-5l2-7z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Backend & DB',
    tag: 'Database',
    desc: 'Query execution tuning, B-tree indexing, and connection pool optimization',
    productionMetric: '30% Latency Reduction',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M12 2C6.5 2 3 5.5 3 10.5c0 3.2 1.8 6.1 4.5 7.8V22l3.5-1.8h2l3.5 1.8v-3.7c2.7-1.7 4.5-4.6 4.5-7.8C21 5.5 17.5 2 12 2z" fill="#336791" />
        <path d="M12 5c-3 0-5 2-5 4.5 0 2 1.5 3.5 3.5 3.5h3c2 0 3.5-1.5 3.5-3.5C17 7 15 5 12 5z" fill="#FFFFFF" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'pyspark',
    name: 'PySpark',
    category: 'Data & Cloud',
    tag: 'Distributed ETL',
    desc: 'Distributed data ingestion, transformation, and large-scale batch processing',
    productionMetric: '500K+ Daily Records',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M12 2l2.5 5.5L20 9l-4.5 4 1.5 6-5-3.5L7 19l1.5-6L4 9l5.5-1.5L12 2z" fill="#E25A1C" />
      </svg>
    ),
  },
  {
    id: 'azure-databricks',
    name: 'Azure Databricks',
    category: 'Data & Cloud',
    tag: 'Data Platform',
    desc: 'Distributed analytics workspace for structured EHR & hospital operational pipelines',
    productionMetric: 'Delta Lake Lakehouse',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8L2 15l10 5 10-5-10-5z" fill="#FF3621" />
      </svg>
    ),
  },
  {
    id: 'graphql',
    name: 'GraphQL & Strawberry',
    category: 'Backend & DB',
    tag: 'API Architecture',
    desc: 'Type-safe schema resolution, JWT authorization, and real-time query contracts',
    productionMetric: 'Zero N+1 Query Batching',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" stroke="#E10098" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="20.7" cy="7" r="2" fill="#E10098" />
        <circle cx="20.7" cy="17" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3.3" cy="17" r="2" fill="#E10098" />
        <circle cx="3.3" cy="7" r="2" fill="#E10098" />
        <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" fill="#E10098" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'duckdb',
    name: 'DuckDB',
    category: 'Backend & DB',
    tag: 'Analytical SQL',
    desc: 'Embedded columnar SQL engine driving natural-language clinical queries',
    productionMetric: '< 15ms Columnar Scans',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFF000" />
        <circle cx="12" cy="12" r="7" fill="#000000" />
        <circle cx="10" cy="10" r="2" fill="#FFF000" />
      </svg>
    ),
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Data & Cloud',
    tag: 'Cloud Platform',
    desc: 'Enterprise cloud hosting, container registries, data lakes, and secure network tiers',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M13.5 2.5l-6 10.5 4 4.5 8.5-12.5H13.5zm-8 12l2.5 4.5H20l-4-5-8.5.5z" fill="#0078D4" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Data & Cloud',
    tag: 'Containerization',
    desc: 'Isolated, production-grade microservice containers and reproducible environments',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M4 10h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3z" fill="#2496ED" />
        <path d="M22 12c-.5-1.5-2-2-3-2-.5 0-1 .2-1.5.5C16.5 9 14 9 12 11H2c0 4 3 8 9 8 7 0 9-4 10-5 .5-.3.8-.7 1-1.2.2-.3 0-.6 0-.8z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Languages & Tools',
    tag: 'Frontend UI',
    desc: 'Responsive user interfaces for admin portals, kiosk UIs, and analytical dashboards',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: 'tableau',
    name: 'Tableau & BI',
    category: 'Data & Cloud',
    tag: 'Analytics & MIS',
    desc: '18+ operational dashboards mapping revenue, uptime, and patient throughput',
    productionMetric: '18+ Executive Dashboards',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M11 2h2v4h-2zm0 16h2v4h-2zM2 11h4v2H2zm16 0h4v2h-4zM6 6h2v2H6zm10 0h2v2h-2zm0 10h2v2h-2zm-10 0h2v2H6z" fill="#E97627" />
        <path d="M10.5 7h3v10h-3zM7 10.5h10v3H7z" fill="#E97627" />
      </svg>
    ),
  },
  {
    id: 'django',
    name: 'Django',
    category: 'Backend & DB',
    tag: 'Full-Stack ORM',
    desc: 'Robust enterprise Python web framework with secure ORM and authentication suites',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <rect width="24" height="24" rx="6" fill="#092E20" />
        <path d="M11 5h3v8.5c-.8.3-1.6.5-2.5.5-2.5 0-3.8-1.4-3.8-3.7 0-2.4 1.5-3.8 3.3-3.8.5 0 .9.1 1.2.2V5zm0 3.3c-.2-.1-.5-.1-.7-.1-.9 0-1.6.7-1.6 2 0 1.2.6 1.9 1.5 1.9.3 0 .6 0 .8-.1V8.3z" fill="#44B78B" />
      </svg>
    ),
  },
  {
    id: 'sql',
    name: 'SQL & Query Tuning',
    category: 'Backend & DB',
    tag: 'Database Theory',
    desc: 'Complex joins, indexing strategies, CTEs, and execution plan optimization',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#89AACC" strokeWidth="1.8" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" stroke="#89AACC" strokeWidth="1.8" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" stroke="#89AACC" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: 'git-actions',
    name: 'Git & GitHub Actions',
    category: 'Languages & Tools',
    tag: 'CI/CD & VCS',
    desc: 'Automated testing, linting checks, build pipelines, and version control',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M19.5 9.5a2.5 2.5 0 0 0-2.3 1.5H12a3 3 0 0 0-3 3v2.2a2.5 2.5 0 1 0 2 0V14a1 1 0 0 1 1-1h5.2a2.5 2.5 0 1 0 2.3-3.5z" fill="#F05032" />
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman & REST',
    category: 'Languages & Tools',
    tag: 'API Testing',
    desc: 'End-to-end API regression testing, automated test collections, and contract validation',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M16 11l-4-4v3H8v2h4v3l4-4z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'linux',
    name: 'Linux & Shell',
    category: 'Languages & Tools',
    tag: 'OS & Systems',
    desc: 'Server configuration, process management, shell scripting, and deployment environments',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
        <path d="M12 2C9 2 7 5 7 9c0 3 1.5 5 2 6l-2 3c-.5.8 0 1.5 1 1.5h8c1 0 1.5-.7 1-1.5l-2-3c.5-1 2-3 2-6 0-4-2-7-5-7z" fill="#FCC624" />
        <circle cx="10" cy="7" r="1" fill="#000" />
        <circle cx="14" cy="7" r="1" fill="#000" />
      </svg>
    ),
  },
];

type CategoryFilter = 'All' | 'Backend & DB' | 'Data & Cloud' | 'Languages & Tools';

export const ToolKit: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredTools =
    activeFilter === 'All'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === activeFilter);

  return (
    <section
      id="toolkit"
      className="relative bg-bg py-20 md:py-32 overflow-hidden border-t border-stroke/40"
    >
      {/* Ambient background glow adhering to site theme */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4E85BF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Standardized Portfolio Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Technical Stack
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary tracking-tight leading-[1.08] mb-4">
              My engineering{' '}
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
                toolkit.
              </span>
            </h2>

            <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-lg">
              A production-tested stack across backend frameworks, distributed data engineering, databases, cloud, and operational analytics.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1.5 p-1 rounded-full bg-surface border border-stroke w-fit flex-wrap"
          >
            {(['All', 'Backend & DB', 'Data & Cloud', 'Languages & Tools'] as CategoryFilter[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === tab
                    ? 'text-text-primary bg-white/10 shadow-sm'
                    : 'text-muted hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 16-Tool Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.02,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative bg-surface border border-stroke hover:border-[#89AACC]/40 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] shadow-sm hover:shadow-[0_0_24px_rgba(137,170,204,0.12)] cursor-default"
              >
                {/* Subtle hover gradient ring inside card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#89AACC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Row: Icon squircle + Category Tag */}
                <div className="relative z-10 flex items-start justify-between gap-2 mb-4">
                  {/* Icon squircle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#89AACC]/40 group-hover:bg-[#89AACC]/10 flex items-center justify-center transition-all duration-300 shrink-0">
                    {tool.icon}
                  </div>

                  {/* Micro Category Tag */}
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-muted group-hover:text-[#89AACC] group-hover:border-[#89AACC]/30 transition-colors">
                    {tool.tag}
                  </span>
                </div>

                {/* Bottom Row: Name + Micro Description */}
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-medium text-text-primary tracking-tight mb-1 group-hover:text-white transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted font-light leading-relaxed line-clamp-2 mb-2">
                    {tool.desc}
                  </p>

                  {/* Production Proof Pill */}
                  {tool.productionMetric && (
                    <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#89AACC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">{tool.productionMetric}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolKit;
