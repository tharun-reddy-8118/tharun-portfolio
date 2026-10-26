import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cpu,
  Database,
  GitBranch,
  Zap,
  Activity,
  Terminal,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
  Server,
  Layers,
  Sparkles,
} from 'lucide-react';

interface SystemHighlight {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  category: string;
  summary: string;
  architecturePoints: string[];
  metrics: { label: string; value: string }[];
  projectId?: string;
  codeView: {
    filename: string;
    language: string;
    code: string;
  };
  telemetry: {
    status: string;
    p95: string;
    concurrency: string;
    payloadReduction: string;
  };
  flow: { step: string; detail: string }[];
}

const HIGHLIGHTS: SystemHighlight[] = [
  {
    id: 'qms-engine',
    tabLabel: '01. AI Queue Dispatcher',
    tag: 'Real-Time Triage',
    title: 'AI Queue Management & Dynamic Department Routing',
    category: 'Backend Microservices · FastAPI & Redis',
    summary:
      'Engineered a real-time event-driven queue dispatcher that calculates weighted multi-department triage scores, preventing consultation bottlenecks and reducing patient wait times by 20–30%.',
    architecturePoints: [
      'Pessimistic row locking on PostgreSQL prevents token race conditions during multi-doctor concurrent calling.',
      'Sub-50ms WebSocket live broadcast channel push updates to digital triage monitors across consultation wings.',
      'Automated fallback queue buffers in Redis retain ticket ordering during HIS network lag.',
    ],
    metrics: [
      { label: 'Patient Wait Time', value: '-28%' },
      { label: 'Token Dispatch P95', value: '< 45ms' },
      { label: 'Doctor Idle Time', value: '-35%' },
    ],
    projectId: 'ai-powered-qms',
    codeView: {
      filename: 'services/dynamic_triage.py',
      language: 'python',
      code: `async def calculate_priority_score(patient_vitals: dict, appointment_time: datetime, queue_depth: int) -> float:
    """Calculates weighted triage score across medical severity and wait delta."""
    severity_weight = triage_matrix.get(patient_vitals.get("acuity_level", "STANDARD"), 1.0)
    wait_minutes = (datetime.utcnow() - appointment_time).total_seconds() / 60.0
    
    # Priority dynamic formula with congestion penalty
    congestion_factor = 1.0 + (queue_depth * 0.05)
    priority_score = (severity_weight * 100.0) + (wait_minutes * 1.5) * congestion_factor
    
    return round(priority_score, 2)`,
    },
    telemetry: {
      status: 'HEALTHY · 0 LOSS',
      p95: '42ms',
      concurrency: '1,450 req/s',
      payloadReduction: '68% via Protobuf',
    },
    flow: [
      { step: 'Check-In', detail: 'Kiosk or mobile check-in verifies UHID and active appointments' },
      { step: 'Triage Engine', detail: 'Dynamic scoring combines acuity, wait delta, and room availability' },
      { step: 'WS Broadcast', detail: 'Token pushed to digital signage & automated WhatsApp alert' },
      { step: 'Doctor Call', detail: 'Doctor clicks next; atomic DB lock summons patient' },
    ],
  },
  {
    id: 'pyspark-etl',
    tabLabel: '02. 18+ MIS Tableau & PySpark',
    tag: 'Enterprise Operational BI',
    title: 'Enterprise MIS Analytics & Distributed Data Platform',
    category: 'Big Data & Cloud · PySpark, Databricks & Tableau',
    summary:
      'Constructed distributed batch and streaming ETL pipelines on Azure Databricks that ingest, deduplicate, and aggregate multi-branch hospital encounter streams into Delta Lake, authoring 18+ executive Tableau dashboards.',
    architecturePoints: [
      'Partitioned Delta Lake lakehouse enables fast time-travel and audit trails across millions of clinical records.',
      'Decoupled analytical compute from transactional PostgreSQL databases, eliminating query lockouts.',
      'Directly hydrates 18+ executive MIS Tableau dashboards for daily hospital operations, revenue, and kiosk throughput.',
    ],
    metrics: [
      { label: 'Executive Dashboards', value: '18+' },
      { label: 'Records Ingested/Day', value: '500K+' },
      { label: 'Query Performance', value: '+30%' },
    ],
    projectId: 'enterprise-mis-analytics',
    codeView: {
      filename: 'pipelines/ehr_delta_aggregator.py',
      language: 'python',
      code: `from pyspark.sql import functions as F

def transform_clinical_encounters(raw_df):
    """Distributed partition cleansing and KPI derivation for executive dashboards."""
    return (
        raw_df.filter(F.col("encounter_status") == "COMPLETED")
        .withColumn("encounter_date", F.to_date("created_at"))
        .groupBy("hospital_branch", "department", "encounter_date")
        .agg(
            F.count("patient_id").alias("total_admissions"),
            F.avg("consultation_duration_mins").alias("avg_duration"),
            F.sum("billing_amount").alias("daily_revenue")
        )
        .write.format("delta")
        .mode("append")
        .partitionBy("encounter_date")
    )`,
    },
    telemetry: {
      status: 'BATCH SUCCESS',
      p95: '1.2s job execution',
      concurrency: '32 Executor Cores',
      payloadReduction: '82% Parquet Snappy',
    },
    flow: [
      { step: 'Azure Blob Ingest', detail: 'Raw hospital transaction logs collected from kiosks & wards' },
      { step: 'PySpark Transform', detail: 'Schema enforcement, null handling, and metric derivation' },
      { step: 'Delta Lake Sink', detail: 'Z-ordered indexed storage for fast analytical queries' },
      { step: 'Tableau Sync', detail: '18+ MIS dashboards refreshed automatically for hospital leadership' },
    ],
  },
  {
    id: 'mediquery-nl2sql',
    tabLabel: '03. MediQuery NL2SQL',
    tag: 'LLM & Columnar Engine',
    title: 'Natural-Language to SQL Engine on Embedded DuckDB',
    category: 'Applied AI · Groq LPU & DuckDB',
    summary:
      'Engineered an in-memory clinical query compiler utilizing Groq LLM API with strict AST parsing guardrails, translating doctor questions into sanitized analytical SQL in under 150ms.',
    architecturePoints: [
      'Zero-risk AST sanitization via SQLGlot permits strictly read-only SELECT clauses, eliminating SQL injection.',
      'Embedded in-memory DuckDB columnar storage achieves 12ms analytical scans over 200,000+ patient records.',
      'Zero technical friction: doctors query complex multi-table cohort distributions using conversational English.',
    ],
    metrics: [
      { label: 'End-to-End Query', value: '< 150ms' },
      { label: 'DuckDB Scan Time', value: '12ms' },
      { label: 'AST Guardrail Block', value: '100%' },
    ],
    projectId: 'mediquery-clinical-engine',
    codeView: {
      filename: 'engine/ast_guardrail.py',
      language: 'python',
      code: `import sqlglot
from sqlglot.expressions import Select

def validate_and_sanitize_sql(generated_sql: str) -> str:
    """Enforces strict read-only execution guardrails using AST parsing."""
    try:
        expression = sqlglot.parse_one(generated_sql, read="duckdb")
        if not isinstance(expression, Select):
            raise SecurityException("Forbidden query type: Mutation statements rejected.")
            
        # Strip comments, limit scan depth, enforce limit safety clause
        expression = expression.limit(1000)
        return expression.sql(dialect="duckdb")
    except Exception as e:
        raise SecurityException(f"AST validation failure: {str(e)}")`,
    },
    telemetry: {
      status: 'AST GUARD ACTIVE',
      p95: '128ms generation',
      concurrency: 'Sub-millisecond DB scan',
      payloadReduction: '0 SQL Injection Risk',
    },
    flow: [
      { step: 'Doctor Question', detail: '"Find diabetic patients over 60 with elevated creatinine"' },
      { step: 'Groq LLM LPU', detail: 'Synthesizes targeted SQL based on clinical schema context' },
      { step: 'AST Sanitizer', detail: 'Strict syntax tree audit verifies read-only integrity' },
      { step: 'DuckDB In-Memory', detail: 'Instant columnar scan outputs interactive telemetry table' },
    ],
  },
  {
    id: 'kiosk-gateway',
    tabLabel: '04. Tri-Kiosk Suite & Vitals',
    tag: 'Hardware & Systems Integration',
    title: 'Healthcare Smart Kiosk Suite (Registration, Dispatch & Vitals)',
    category: 'Hardware & Sensor Integration · FastAPI & WebSockets',
    summary:
      'Engineered backend microservices, hardware sensor gateways, and HIS sync powering a tri-kiosk suite: Self-Registration (90m → 7m wait time), Report Dispatch (1.9M+ reports), and OPD Pre-assessment with vital telemetry (67K+ vitals synced to HIS/EMR).',
    architecturePoints: [
      'Self-Registration: Integrated Aadhaar OTP validation with National Health Authority (NHA) for instant ABHA/UHID minting.',
      'Report Dispatch: Barcode & patient ID retrieval with automated thermal/laser report printing for 426K+ patients.',
      'OPD Vitals: Real-time sensor daemon capturing BP, HR, SpO2, RR, temperature, and weight synced directly to doctor EMR.',
    ],
    metrics: [
      { label: 'Wait Time Cut', value: '90m → 7m' },
      { label: 'Reports Dispatched', value: '1.9M+' },
      { label: 'Vitals Captured', value: '67,126+' },
    ],
    projectId: 'healthcare-smart-kiosks',
    codeView: {
      filename: 'gateways/kiosk_sensor_sync.py',
      language: 'python',
      code: `async def sync_kiosk_telemetry(kiosk_id: str, uhid: str, payload: dict) -> dict:
    """Handles multi-variant kiosk requests: registration, report fetch, or vitals telemetry."""
    match payload.get("operation"):
        case "SELF_REGISTRATION":
            return await mint_abha_and_uhid(payload["aadhaar_otp"], payload["mobile"])
        case "REPORT_DISPATCH":
            return await fetch_and_stream_diagnostic_pdf(uhid, payload["test_ids"])
        case "OPD_PRE_ASSESSMENT_VITALS":
            # Medical telemetry (BP, SpO2, HR, Temp, Weight) write to EMR
            return await record_vitals_and_push_emr(uhid, payload["vitals"])
        case _:
            raise ValueError(f"Unknown operation type: {payload.get('operation')}")`,
    },
    telemetry: {
      status: 'TRI-KIOSK SYNCHRONIZED',
      p95: '65ms telemetry sync',
      concurrency: 'Zero-drop queue buffer',
      payloadReduction: 'Automated EMR Upload',
    },
    flow: [
      { step: 'Touch Selection', detail: 'Patient selects Registration, Report Printing, or Vitals Check' },
      { step: 'Sensor / Auth Handshake', detail: 'NHA OTP auth, barcode UHID scan, or medical sensor readings' },
      { step: 'HIS / EMR Write', detail: 'Sub-100ms bidirectional sync to doctor clinical workstation' },
      { step: 'Receipt / Report Print', detail: 'Dynamic UPI QR billing receipt or diagnostic report dispensed' },
    ],
  },
  {
    id: 'postgres-opt',
    tabLabel: '05. PostgreSQL Latency Tuner',
    tag: 'Database Engineering',
    title: 'PostgreSQL Query & Connection Pool Optimization',
    category: 'Relational Database · Index Tuning & Scalability',
    summary:
      'Engineered database optimizations across hospital relational backends, analyzing EXPLAIN ANALYZE execution plans, designing partial composite B-Trees, and restructuring connection pooling for ~30% response time gains.',
    architecturePoints: [
      'Eliminated sequential table scans across multi-million row encounter tables with composite B-Tree indexing.',
      'Tuned async connection pool sizes and statement caching to eliminate connection starvation during rush hours.',
      'Refactored analytical reporting queries with Common Table Expressions (CTEs) and covering indexes.',
    ],
    metrics: [
      { label: 'Query Latency', value: '-30%' },
      { label: 'Connection Re-use', value: '98%' },
      { label: 'Deadlocks', value: 'Zero' },
    ],
    projectId: 'ai-powered-qms',
    codeView: {
      filename: 'db/migrations/optimize_indexes.sql',
      language: 'sql',
      code: `-- High-traffic queue lookup composite index eliminating full table scans
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_queue_dept_status_priority
ON patient_queue_entries (department_id, status, priority_score DESC)
WHERE status IN ('WAITING', 'CALLED');

-- Covering index for rapid patient search by phone without touching heap
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_patient_mobile_covering
ON patients (mobile_number)
INCLUDE (id, uhid, full_name, created_at);`,
    },
    telemetry: {
      status: 'OPTIMAL EXECUTION',
      p95: '18ms query execution',
      concurrency: '300 pooled connections',
      payloadReduction: 'Zero Seq Scans',
    },
    flow: [
      { step: 'Plan Analysis', detail: 'Identified 480ms sequential scans on queue and patient tables' },
      { step: 'Composite Indexing', detail: 'Engineered partial B-Tree indexes targeting active statuses' },
      { step: 'Pool Restructure', detail: 'Configured Asyncpg pooling with statement cache eviction' },
      { step: '30% Latency Drop', detail: 'API response times plummeted from ~280ms to sub-65ms' },
    ],
  },
];

export const Explorations: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState<string>(HIGHLIGHTS[0].id);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'code' | 'flow'>('blueprint');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const currentSystem =
    HIGHLIGHTS.find((h) => h.id === activeSystemId) || HIGHLIGHTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSystem.codeView.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="explorations"
      className="relative bg-bg py-20 md:py-32 overflow-hidden border-t border-stroke/40"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4E85BF]/5 rounded-full blur-3xl pointer-events-none" />

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
                Systems &amp; Architecture
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary tracking-tight leading-[1.08] mb-4">
              Engineering highlights &amp;{' '}
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#89AACC] to-[#4E85BF]">
                deep-dives.
              </span>
            </h2>

            <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-xl">
              An interactive inspection deck of core distributed architectures, high-concurrency queue dispatchers, and healthcare analytics engines.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-stroke text-xs text-[#89AACC] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Architecture Console</span>
          </div>
        </div>

        {/* System Selector Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {HIGHLIGHTS.map((system) => {
            const isActive = system.id === currentSystem.id;
            return (
              <button
                key={system.id}
                onClick={() => {
                  setActiveSystemId(system.id);
                  setActiveTab('blueprint');
                }}
                className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-surface text-text-primary border border-[#89AACC]/50 shadow-[0_0_20px_rgba(137,170,204,0.15)] font-semibold'
                    : 'bg-surface/40 text-muted border border-stroke hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{system.tabLabel}</span>
                <span
                  className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-[#89AACC]/20 text-[#89AACC]' : 'bg-white/5 text-muted/60'
                  }`}
                >
                  {system.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Command Deck Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSystem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-surface/50 border border-stroke rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl"
          >
            {/* Left Column: System Narrative & Telemetry */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Micro Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#89AACC] font-semibold">
                    {currentSystem.category}
                  </span>
                </div>

                {/* System Title */}
                <h3 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight mb-4 leading-snug">
                  {currentSystem.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-6">
                  {currentSystem.summary}
                </p>

                {/* Architectural Highlights Bullet Points */}
                <div className="space-y-3 mb-8">
                  {currentSystem.architecturePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted/90 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Strips */}
                <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6">
                  {currentSystem.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base sm:text-lg font-display italic text-text-primary">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-muted uppercase mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {currentSystem.projectId && (
                <button
                  onClick={() => navigate(`/project/${currentSystem.projectId}`)}
                  className="group inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.04] border border-stroke hover:border-[#89AACC]/50 text-xs sm:text-sm text-text-primary transition-all cursor-pointer"
                >
                  <span className="font-medium">Read Full Project Architecture Case Study</span>
                  <ArrowRight size={15} className="text-[#89AACC] transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>

            {/* Right Column: High-Tech Interactive Console & Code Simulator */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl border border-stroke bg-[#0a0a0d] overflow-hidden shadow-2xl">
              {/* Console Header Tabs */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {(
                    [
                      { id: 'blueprint', label: 'Architecture Blueprint', icon: Layers },
                      { id: 'code', label: 'Production Code', icon: Terminal },
                      { id: 'flow', label: 'Execution Flow', icon: GitBranch },
                    ] as const
                  ).map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          activeTab === t.id
                            ? 'bg-white/10 text-white font-semibold'
                            : 'text-muted hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon size={13} />
                        <span className="hidden sm:inline">{t.label}</span>
                      </button>
                    );
                  })}
                </div>

                {activeTab === 'code' && (
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span className="text-[11px] font-mono">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>

              {/* Console Content Area */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-y-auto">
                {activeTab === 'code' ? (
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-3 pb-2 border-b border-white/5">
                      <span>{currentSystem.codeView.filename}</span>
                      <span className="uppercase text-[#89AACC]">{currentSystem.codeView.language}</span>
                    </div>
                    <pre className="text-xs sm:text-[13px] font-mono text-text-primary/90 leading-relaxed overflow-x-auto max-h-[340px]">
                      <code>{currentSystem.codeView.code}</code>
                    </pre>
                  </div>
                ) : activeTab === 'flow' ? (
                  <div className="space-y-3 py-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3">
                      End-to-End Request Pipeline
                    </span>
                    {currentSystem.flow.map((f, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5"
                      >
                        <span className="text-xs font-mono font-bold text-[#89AACC] px-2 py-0.5 rounded bg-white/5 shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-xs font-medium text-text-primary block mb-0.5">
                            {f.step}
                          </span>
                          <span className="text-xs text-muted font-light leading-relaxed">
                            {f.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted">
                        Live Architecture Telemetry
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>{currentSystem.telemetry.status}</span>
                      </span>
                    </div>

                    {/* Telemetry Dashboard Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                          P95 Execution Latency
                        </span>
                        <span className="text-base sm:text-lg font-mono font-semibold text-text-primary">
                          {currentSystem.telemetry.p95}
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                          Concurrency Throughput
                        </span>
                        <span className="text-base sm:text-lg font-mono font-semibold text-text-primary">
                          {currentSystem.telemetry.concurrency}
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 col-span-2">
                        <span className="text-[10px] font-mono text-muted uppercase block mb-1">
                          Optimization Delta
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-[#89AACC]">
                          {currentSystem.telemetry.payloadReduction}
                        </span>
                      </div>
                    </div>

                    {/* Architectural Takeaway Card */}
                    <div className="p-4 rounded-xl bg-[#89AACC]/5 border border-[#89AACC]/20">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#89AACC] font-semibold block mb-1">
                        System Takeaway:
                      </span>
                      <p className="text-xs text-muted font-light leading-relaxed">
                        Engineered for zero downtime, resilient fallback under network failure, and sub-second deterministic responses in high-throughput enterprise healthcare settings.
                      </p>
                    </div>
                  </div>
                )}

                {/* Console Footer Status Line */}
                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted/70">
                  <span>Stack: {currentSystem.category.split('·')[0]}</span>
                  <span className="text-emerald-400">STATUS: PRODUCTION-READY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Explorations;
