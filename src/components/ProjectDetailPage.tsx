import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Zap,
  Clock,
  ShieldCheck,
  Code2,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Activity,
  HardDrive,
  Network,
  GitBranch,
} from 'lucide-react';
import { PROJECTS, USER_INFO } from '../data/portfolioData';

interface ArchitectureNode {
  stage: string;
  name: string;
  tech: string;
  protocol: string;
  desc: string;
}

const ARCHITECTURE_TOPOLOGIES: Record<string, { title: string; subtitle: string; nodes: ArchitectureNode[] }> = {
  'healthcare-smart-kiosks': {
    title: 'Healthcare Smart Kiosk Hardware-to-Cloud System Topology',
    subtitle: 'Real-time telemetry pipeline bridging physical outpatient kiosks with hospital information systems and national health registries.',
    nodes: [
      {
        stage: '01. Ingestion',
        name: 'Hardware Sensor Array',
        tech: 'Python UART Daemons',
        protocol: 'Serial / WebSockets',
        desc: 'Captures BP, HR, SpO2, height, weight, barcode scans, and touchscreen inputs with automated peripheral self-healing.',
      },
      {
        stage: '02. Gateway',
        name: 'FastAPI Microservice Gateway',
        tech: 'FastAPI & NHA Connector',
        protocol: 'REST / HTTPS',
        desc: 'Validates Aadhaar OTP with National Health Authority to mint ABHA/UHID accounts in under 60 seconds.',
      },
      {
        stage: '03. Transaction',
        name: 'Billing & Token Dispatcher',
        tech: 'POS Webhooks & Redis',
        protocol: 'Event Queue',
        desc: 'Generates dynamic UPI QR codes and issues thermal tokens, eliminating registration lines from 90 min to 7 min.',
      },
      {
        stage: '04. EMR Sync',
        name: 'HIS / EMR Sync Engine',
        tech: 'PostgreSQL & Message Bus',
        protocol: 'Sub-100ms Sync',
        desc: 'Synchronizes patient vital readings and appointment tokens directly into physician EHR consultation rooms.',
      },
      {
        stage: '05. Delivery',
        name: 'Autonomous Dispatch Engine',
        tech: '80mm Thermal & Laser Print',
        protocol: 'POSIX Spooler',
        desc: 'Autonomously dispatches 1.9M+ diagnostic lab reports and consultation slips without staff intervention.',
      },
    ],
  },
  'enterprise-mis-analytics': {
    title: 'Enterprise Healthcare MIS Data Lakehouse Architecture',
    subtitle: 'Decoupled big data pipeline extracting multi-branch hospital transaction streams into Delta Lake and Tableau Server.',
    nodes: [
      {
        stage: '01. Ingestion',
        name: 'Branch Event Ingestion',
        tech: 'Azure Blob Storage',
        protocol: 'Batch & Stream',
        desc: 'Collects high-frequency transaction logs from kiosks, pharmacy billing terminals, and consultation rooms.',
      },
      {
        stage: '02. Compute',
        name: 'PySpark Transformation Engine',
        tech: 'Azure Databricks',
        protocol: 'PySpark 3.x',
        desc: 'Cleanses, schema-enforces, and aggregates 500K+ daily patient encounter records across distributed worker clusters.',
      },
      {
        stage: '03. Lakehouse',
        name: 'Delta Lake Analytical Store',
        tech: 'Delta Tables & Parquet',
        protocol: 'ACID Transactions',
        desc: 'Partitioned columnar storage isolating analytical aggregations from transactional hospital OLTP databases.',
      },
      {
        stage: '04. Validation',
        name: 'Reconciliation Daemon',
        tech: 'Python Automated Workers',
        protocol: 'Cron & Webhooks',
        desc: 'Matches kiosk UPI payment gateway ledgers against hospital accounting records with 99.99% deterministic accuracy.',
      },
      {
        stage: '05. Presentation',
        name: '18+ Executive Tableau Suite',
        tech: 'Tableau Server & Power BI',
        protocol: 'Live & Extract Feeds',
        desc: 'Provides executive leadership with real-time operational visibility on kiosk uptime, revenue, and clinical turnaround.',
      },
    ],
  },
  'ai-powered-qms': {
    title: 'AI Queue Management & Dynamic Triage Dispatch Architecture',
    subtitle: 'Event-driven hospital routing engine calculating patient acuity, wait times, and room allocation.',
    nodes: [
      {
        stage: '01. Check-In',
        name: 'Arrival Ingestion Portal',
        tech: 'Touch Kiosks & Mobile QR',
        protocol: 'HTTP / JSON',
        desc: 'Verifies appointment slot and UHID against Hospital Information System upon patient arrival.',
      },
      {
        stage: '02. Triage',
        name: 'Acuity Scoring Dispatcher',
        tech: 'FastAPI & Weighted Matrix',
        protocol: 'In-Memory Scoring',
        desc: 'Computes dynamic queue prioritization combining medical triage score, appointment schedule, and room congestion.',
      },
      {
        stage: '03. State Lock',
        name: 'State Locking Engine',
        tech: 'PostgreSQL & Redis',
        protocol: 'FOR UPDATE SKIP LOCKED',
        desc: 'Prevents race conditions when multiple doctors call patients concurrently, eliminating duplicate tokens.',
      },
      {
        stage: '04. Broadcast',
        name: 'Sub-50ms Notification Bus',
        tech: 'WebSockets & SMS Gateway',
        protocol: 'Pub/Sub Channel',
        desc: 'Broadcasts instant token summons to digital signage monitors across consultation wings and patient phones.',
      },
      {
        stage: '05. Routing',
        name: 'Physician Call Console',
        tech: 'HIS Desktop Integration',
        protocol: 'REST & Webhooks',
        desc: 'Reduces patient wait times by 20–30% and doctor idle time by 35% through seamless next-patient summoning.',
      },
    ],
  },
  'mediquery-clinical-engine': {
    title: 'Natural-Language to SQL Clinical Query Engine Architecture',
    subtitle: 'Sub-150ms clinical text-to-SQL compiler with strict AST guardrails on embedded DuckDB.',
    nodes: [
      {
        stage: '01. Interface',
        name: 'Clinical Natural Language UI',
        tech: 'React.js & Tailwind',
        protocol: 'Conversational Input',
        desc: 'Allows doctors and medical researchers to query EHR datasets using conversational English questions.',
      },
      {
        stage: '02. Inference',
        name: 'Groq LLM Compiler',
        tech: 'Groq LPU (LLaMA-3 70B)',
        protocol: 'Sub-120ms Inference',
        desc: 'Synthesizes targeted SQL query from medical prompts based on schema context and few-shot healthcare examples.',
      },
      {
        stage: '03. Security',
        name: 'SQLGlot AST Sanitizer',
        tech: 'Python Abstract Syntax Tree',
        protocol: 'Deterministic Validation',
        desc: 'Strictly rejects non-SELECT statements (0% SQL injection risk) and injects multi-tenant clinical privacy clauses.',
      },
      {
        stage: '04. Execution',
        name: 'DuckDB Columnar OLAP',
        tech: 'In-Process DuckDB',
        protocol: 'Sub-15ms Scans',
        desc: 'Executes complex multi-table analytical aggregations over 200,000+ patient records with zero network latency.',
      },
      {
        stage: '05. Analytics',
        name: 'Interactive Analytics Table',
        tech: 'Recharts & CSV Exporter',
        protocol: 'Live Dynamic Charts',
        desc: 'Renders cohort distributions, clinical histograms, and patient summaries with instant filter controls.',
      },
    ],
  },
  'solopreneuros-operations-saas': {
    title: 'SolopreneurOS Modular Freelance Operations Platform Architecture',
    subtitle: 'Type-safe GraphQL backend with webhook automation and automated invoice generation.',
    nodes: [
      {
        stage: '01. App UI',
        name: 'Responsive Client Portal',
        tech: 'React.js & Tailwind CSS',
        protocol: 'Single Page App',
        desc: 'Provides contractors and clients with branded portals for proposals, milestone approvals, and billing tracking.',
      },
      {
        stage: '02. API Layer',
        name: 'FastAPI & Strawberry GraphQL',
        tech: 'Strawberry & DataLoader',
        protocol: 'GraphQL / HTTP',
        desc: 'Solves N+1 query bottlenecks via DataLoader batching while enforcing granular JWT role authorization.',
      },
      {
        stage: '03. Webhooks',
        name: 'Make.com Webhook Pipeline',
        tech: 'Make.com & Cloud Webhooks',
        protocol: 'Event-Driven Pipeline',
        desc: 'Automates digital proposal signatures, invoice calculation, and payment reminder delivery workflows.',
      },
      {
        stage: '04. Database',
        name: 'PostgreSQL Relational Ledger',
        tech: 'SQLAlchemy Async & Postgres',
        protocol: 'ACID Ledger',
        desc: 'Stores encrypted contractor credentials, proposal states, and immutable payment records.',
      },
      {
        stage: '05. Delivery',
        name: 'Deterministic PDF Generator',
        tech: 'Headless Chromium & Mailers',
        protocol: 'Idempotent Jobs',
        desc: 'Generates branded invoice PDFs with embedded payment links, saving 10+ hours weekly.',
      },
    ],
  },
};

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex] || PROJECTS[0];

  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white font-body pb-24">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070709]/90 backdrop-blur-2xl px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={() => navigate('/#works')}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-xs font-mono uppercase tracking-wider text-muted">
            {project.category}
          </span>
          <span className="hidden md:inline text-white/20">•</span>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#contact');
            }}
            className="text-xs sm:text-sm px-4 py-1.5 rounded-full border border-stroke text-text-primary hover:border-white/30 hover:bg-white/5 transition-all"
          >
            Contact Tharun
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 pt-10 sm:pt-14">
        {/* Breadcrumb & Year */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] font-semibold">
            {project.category}
          </span>
          <span className="text-muted/40">•</span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-text-primary tracking-tight leading-[1.1] mb-5"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-3xl mb-8"
        >
          {project.subtitle}
        </motion.p>

        {/* Project Meta Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-surface border border-stroke mb-10"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
              Role
            </span>
            <span className="text-xs sm:text-sm font-medium text-text-primary">
              {project.role || 'Lead Backend Engineer'}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
              Timeline
            </span>
            <span className="text-xs sm:text-sm font-medium text-text-primary">
              {project.timeline || '2025 · Production'}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
              Domain / Client
            </span>
            <span className="text-xs sm:text-sm font-medium text-text-primary">
              {project.clientOrOrg || 'Healthcare Systems'}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
              Primary Stack
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#89AACC]">
              {project.tags.slice(0, 3).join(', ')}
            </span>
          </div>
        </motion.div>

        {/* Hero Visual Media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-stroke bg-surface mb-14 shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* Executive Overview & Problem Statement */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 pb-16 border-b border-stroke/60">
          <div className="md:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Context &amp; Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight">
              The Problem &amp; <br />
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
                System Mandate
              </span>
            </h2>
          </div>

          <div className="md:col-span-7 space-y-5 text-sm sm:text-base text-muted font-light leading-relaxed">
            <p>
              {project.overview || project.description}
            </p>
            {project.problemStatement && (
              <div className="p-5 rounded-2xl bg-surface border border-stroke/70">
                <span className="text-xs font-mono uppercase tracking-wider text-text-primary font-medium block mb-2">
                  Key Operational Bottleneck:
                </span>
                <p className="text-xs sm:text-sm text-muted/90">
                  {project.problemStatement}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Specialized Kiosk Suite Section (Rendered when project has kioskVariants) */}
        {project.kioskVariants && project.kioskVariants.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Hardware &amp; Software Suite
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              The 3 Specialized <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">Kiosk Deployments</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {project.kioskVariants.map((kiosk, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-surface border border-stroke flex flex-col justify-between hover:border-[#89AACC]/40 transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#89AACC]/15 border border-[#89AACC]/30 text-[#89AACC] font-semibold">
                        {kiosk.badge}
                      </span>
                      <span className="text-xs font-mono text-muted">0{idx + 1}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-text-primary mb-1">
                      {kiosk.name}
                    </h3>
                    <h4 className="text-xs font-mono text-[#89AACC] mb-3">
                      {kiosk.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-6">
                      {kiosk.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-1">
                        Key Capabilities:
                      </span>
                      {kiosk.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-text-primary/90 font-light">
                          <CheckCircle2 size={13} className="text-[#89AACC] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brochure Business Impact Strip */}
                  <div className="pt-4 border-t border-stroke/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-2">
                      Verified Business Impact:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {kiosk.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-xl bg-black/40 border border-white/5">
                          <div className="text-xs font-display italic text-[#89AACC]">
                            {m.value}
                          </div>
                          <div className="text-[9px] font-mono text-muted leading-tight mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specialized Hardware Specification Grid (Rendered for Kiosk project) */}
        {project.id === 'healthcare-smart-kiosks' && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Physical Layer Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              Medical &amp; Hardware <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">Peripheral Stack</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Vital Sensor Array</span>
                  <Activity size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">Automated BP Cuff &amp; SpO2</div>
                <p className="text-xs text-muted font-light leading-relaxed">Medical-grade digital cuff and pulse oximeter communicating via asynchronous Python serial/UART daemons with real-time error detection.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Body Metrics</span>
                  <HardDrive size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">Dual-Platform Scale &amp; Sonar</div>
                <p className="text-xs text-muted font-light leading-relaxed">High-precision load cell weight sensor and ultrasonic sonar height sensor for automated BMI computation and triage categorization.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Output Hardware</span>
                  <Server size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">High-Speed POS Thermal Printer</div>
                <p className="text-xs text-muted font-light leading-relaxed">80mm thermal printer with auto-cutter generating token slips, itemized payment receipts, and diagnostic report summaries in under 1.5s.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Optical Input</span>
                  <Zap size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">2D Barcode &amp; ABHA QR Reader</div>
                <p className="text-xs text-muted font-light leading-relaxed">Omni-directional CMOS optical scanner for instant physical UHID card barcode scans and national ABHA digital QR authentication.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Touch Interface</span>
                  <Cpu size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">21.5" Full-HD Capacitive Touch</div>
                <p className="text-xs text-muted font-light leading-relaxed">Vandal-resistant responsive touchscreen optimized for multi-lingual outpatient navigation with high-contrast accessibility modes.</p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-stroke hover:border-[#89AACC]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#89AACC] uppercase tracking-wider">Payment Module</span>
                  <Network size={15} className="text-[#89AACC]" />
                </div>
                <div className="text-base font-medium text-text-primary mb-1.5">Dynamic UPI QR &amp; Webhook POS</div>
                <p className="text-xs text-muted font-light leading-relaxed">On-screen dynamic UPI QR code generator listening for sub-second banking webhook confirmations with auto-refund fault tolerance.</p>
              </div>
            </div>
          </section>
        )}

        {/* Quantitative Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Production Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              Measurable <span className="font-display italic">outcomes</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-surface border border-stroke flex flex-col justify-between"
                >
                  <div className="text-3xl sm:text-4xl font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF] mb-2">
                    {metric.value}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-text-primary mb-1">
                      {metric.label}
                    </div>
                    <div className="text-[11px] sm:text-xs text-muted font-light">
                      {metric.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architectural Pillars / Components */}
        {project.keyComponents && project.keyComponents.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              System Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              Core Architectural <span className="font-display italic">pillars</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {project.keyComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface border border-stroke flex flex-col justify-between hover:border-[#89AACC]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#89AACC]">
                        {idx === 0 ? <Cpu size={18} /> : idx === 1 ? <Server size={18} /> : idx === 2 ? <Zap size={18} /> : <Layers size={18} />}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-[#89AACC]">
                        {comp.tech}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-medium text-text-primary mb-2">
                      {comp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Visual System Architecture Topology */}
        {ARCHITECTURE_TOPOLOGIES[project.id] && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              System Topology
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight">
                  Visual Architecture <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">Pipeline</span>
                </h2>
                <p className="text-xs sm:text-sm text-muted font-light mt-1 max-w-xl">
                  {ARCHITECTURE_TOPOLOGIES[project.id].subtitle}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-stroke text-[11px] font-mono text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>5-Stage Production Flow</span>
              </div>
            </div>

            {/* Interactive Connected Pipeline Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {ARCHITECTURE_TOPOLOGIES[project.id].nodes.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-surface/80 border border-stroke hover:border-[#89AACC]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Stage Number & Protocol */}
                    <div className="flex items-center justify-between gap-1 mb-2.5">
                      <span className="text-[10px] font-mono font-bold text-[#89AACC] tracking-wider uppercase">
                        {node.stage}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-muted">
                        {node.protocol}
                      </span>
                    </div>

                    {/* Component Name */}
                    <h3 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">
                      {node.name}
                    </h3>

                    {/* Tech Badge */}
                    <div className="text-[11px] font-mono text-[#89AACC] mb-2">
                      {node.tech}
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-muted font-light leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator (between cards on desktop) */}
                  {nIdx < 4 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#89AACC]/60 text-xs font-mono font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* End-to-End Workflow */}
        {project.workflow && project.workflow.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Data &amp; Request Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              End-to-End <span className="font-display italic">pipeline execution</span>
            </h2>

            <div className="space-y-4">
              {project.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-surface/60 border border-stroke"
                >
                  <span className="text-xs font-mono font-bold text-[#89AACC] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-muted font-light leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Production API & Service Endpoints */}
        {project.endpoints && project.endpoints.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              API Interface
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              Key Service <span className="font-display italic">contracts</span>
            </h2>

            <div className="rounded-2xl border border-stroke bg-surface overflow-hidden">
              <div className="divide-y divide-stroke/60">
                {project.endpoints.map((ep, idx) => (
                  <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shrink-0 ${
                          ep.method === 'GET'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : ep.method === 'POST'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : ep.method === 'WS'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-text-primary break-all">
                        {ep.path}
                      </span>
                    </div>
                    <span className="text-xs text-muted font-light sm:text-right shrink-0">
                      {ep.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Architectural Code Snippet Showcase */}
        {project.codeSnippet && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-1 block">
                  Implementation
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight">
                  Production Code <span className="font-display italic">snippet</span>
                </h2>
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 text-xs text-muted hover:text-white transition-all cursor-pointer"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Terminal Window */}
            <div className="rounded-2xl border border-stroke bg-[#0a0a0d] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="text-[11px] font-mono text-muted/80 ml-2">
                    {project.codeSnippet.filename}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#89AACC]">
                  {project.codeSnippet.language}
                </span>
              </div>

              <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] font-mono text-text-primary/90 leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Engineering Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-16 pb-16 border-b border-stroke/60">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#89AACC] mb-2 block">
              Engineering Depth
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-8">
              Key Challenges &amp; <span className="font-display italic">resolutions</span>
            </h2>

            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface border border-stroke"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-1">
                        Challenge
                      </span>
                      <h4 className="text-sm sm:text-base font-medium text-text-primary">
                        {item.challenge}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pl-5 border-l-2 border-[#89AACC]/40 ml-1 mt-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#89AACC] block mb-1">
                        Engineering Solution
                      </span>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Pills */}
        <section className="mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3">
            Full Project Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3.5 py-1.5 rounded-full bg-surface border border-stroke text-text-primary font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Next Project Footer Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface to-[#4E85BF]/10 border border-stroke flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">
              Next Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-display text-text-primary">
              {nextProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1">
              {nextProject.category} • {nextProject.year}
            </p>
          </div>

          <Link
            to={`/project/${nextProject.id}`}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg font-medium text-xs sm:text-sm hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            <span>Explore Next Case Study</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
