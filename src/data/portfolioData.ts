import {
  Project,
  StatItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
} from '../types';

export const USER_INFO = {
  name: 'Tharun Kumar Reddy',
  shortName: 'Tharun Reddy',
  initials: 'TR',
  role: 'Software Engineer • Backend, APIs & Data Engineering',
  eyebrow: "ENGINEERING '26 • BACKEND & SYSTEMS",
  location: 'Hyderabad, Telangana',
  phone: '+91 8297634009',
  email: 'tharunreddymandapalli@gmail.com',
  tagline: 'Developing scalable backend architectures, high-throughput APIs, healthcare workflows, and distributed data pipelines.',
  bio: "I'm Tharun — a Software Engineer focused on building robust, scalable backend services, distributed ETL pipelines, and healthcare systems. With hands-on expertise in Python, FastAPI, PostgreSQL, PySpark, Azure Databricks, and GraphQL, I engineer reliable systems that turn complex operational and clinical workflows into high-throughput, low-latency production applications.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/tharun-kumar-reddy-mandapalli-880932241/',
    github: 'https://github.com/tharun-reddy-8118',
    email: 'mailto:tharunreddymandapalli@gmail.com',
    phone: 'tel:+918297634009',
  },
  resumeUrl: '#',
  roles: [
    'Software Engineer',
    'Backend & API Architect',
    'Data & Analytics Engineer',
    'Healthcare Systems Engineer',
  ],
};

export const CONTACT_INFO = {
  badge: 'GET IN TOUCH',
  titlePrefix: "Let's engineer ",
  titleHighlight: 'resilient',
  titleSuffix: 'scalable systems together.',
  description: "I'm open to software engineering opportunities, distributed backend architectures, and high-impact data pipelines. Feel free to reach out directly — my inbox is always open.",
  email: 'tharunreddymandapalli@gmail.com',
  phone: '+91 8297634009',
  location: 'Hyderabad, Telangana',
  linkedin: 'https://www.linkedin.com/in/tharun-kumar-reddy-mandapalli-880932241/',
  github: 'https://github.com/tharun-reddy-8118',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'achala-health-services',
    company: 'Achala Health Services',
    role: 'Software Engineer · Backend & Data Systems',
    period: 'Jun 2025 — Present',
    location: 'Hyderabad, Telangana',
    bullets: [
      'Developed and maintained scalable backend services using Python, FastAPI, GraphQL, and PostgreSQL for healthcare workflows including patient onboarding, appointments, billing, and hospital operations.',
      'Designed and integrated REST and GraphQL APIs for communication between healthcare applications and enterprise systems, focusing on reliability, low latency, and maintainability.',
      'Built core backend workflows for an AI-powered Queue Management System (QMS), implementing dynamic department routing, queue prioritization, and scheduling logic that reduced patient wait times by 20–30%.',
      'Developed backend services for a tri-kiosk hardware ecosystem (Self-Registration, Report Dispatch, OPD Pre-assessment with vitals), cutting patient registration wait times from 90 min to under 7 min and dispatching 1.9M+ reports.',
      'Built distributed data ingestion and transformation pipelines using PySpark and Azure Databricks to process structured EHR and operational datasets for downstream analytics.',
      'Optimized PostgreSQL queries, indexing, and database connection pools, improving application response times by approximately 30%.',
      'Partnered with hospital enterprise stakeholders to deliver a standalone operational MIS analytics solution with 18+ Tableau dashboards covering kiosk utilization, revenue tracking, deployment performance, and operational metrics.',
      'Collaborated with cross-functional teams on internal administrative portals and used React.js and AI-assisted development to accelerate frontend feature delivery.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'healthcare-smart-kiosks',
    title: 'Healthcare Smart Kiosk Ecosystem (Self-Registration, Report Dispatch & OPD Vitals)',
    subtitle: 'Touchpoint automation cutting wait times from 90 to 7 minutes, dispatching 1.9M+ reports, and capturing 67K+ vital checks with real-time HIS/EMR sync.',
    year: '2025',
    category: 'Healthcare Hardware & Systems',
    tags: ['FastAPI', 'Python', 'ABHA/UHID', 'HIS Integration', 'EMR Sync', 'Medical Telemetry', 'PostgreSQL', 'Thermal Printing', 'Docker'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop',
    role: 'Lead Backend & Systems Integration Engineer',
    timeline: '2025 · Production Enterprise Rollout',
    clientOrOrg: 'Achala Health Services',
    overview: 'Architected the backend microservices, hardware sensor gateways, and hospital information system synchronization powering a tri-kiosk healthcare hardware suite: Self-Registration Kiosks, Report Dispatch Kiosks, and OPD Pre-assessment Kiosks with integrated vital signs capture.',
    problemStatement: 'Overcrowded hospital outpatient lobbies suffered 90-minute wait times, manual paper registrations, congested diagnostic report collection counters, and overburdened triage nurses spending 10+ minutes measuring routine vitals manually.',
    kioskVariants: [
      {
        name: 'Self Registration Kiosk',
        badge: 'Wait Time: 90 min → 7 min',
        headline: 'Frictionless Walk-In Onboarding & Self-Billing',
        description: 'Digitizes traditional paper-based hospital registration. Empowers walk-in patients to register with national ABHA/UHID, select departments, pay consultation fees via dynamic UPI QR, and receive printed appointment tokens in under 4 minutes.',
        features: [
          'UHID & ABHA Creation via Aadhaar OTP validation',
          'Direct HIS & doctor consultation slot synchronization',
          'Self-billing & dynamic UPI/card payments integration',
          'Multi-lingual interactive touchscreen UI',
          'Patient experience feedback rating system (9.41/10 score)',
        ],
        metrics: [
          { label: 'Wait Time Reduction', value: '90 min → 7 min' },
          { label: 'Operational Efficiency', value: '+30% – 40%' },
          { label: 'Kiosk Adoption Rate', value: '65% of all new patients' },
          { label: 'Avg Transaction Time', value: '3 min 44s' },
          { label: 'Patient Satisfaction', value: '9.41 / 10' },
        ],
      },
      {
        name: 'Report Dispatch Kiosk',
        badge: '1.9M+ Reports Dispatched',
        headline: 'Instant Diagnostic & Lab Report Retrieval',
        description: 'Autonomous report delivery station allowing patients to scan their UHID barcode or enter their Patient ID to instantly fetch, preview, and print clinical diagnostic reports without standing in billing or lab queues.',
        features: [
          'Instant lab report search by UHID barcode or Patient ID',
          'High-speed automated thermal/laser report printing',
          'Hospital scope of services & department navigation guide',
          'Itemized hospitalization & inpatient expense printing',
          'Autonomous collection eliminating counter lines',
        ],
        metrics: [
          { label: 'Patients Served', value: '4,26,563+' },
          { label: 'Reports Dispatched', value: '19,17,959+' },
          { label: 'Kiosk Adoption', value: '85% of hospital patients' },
          { label: 'Avg Transaction Time', value: '2 min 7s' },
          { label: 'Report Wait Time Cut', value: '45 min → < 7 min' },
        ],
      },
      {
        name: 'OPD Pre-assessment Kiosk (with vitals)',
        badge: '67K+ Vitals Synced',
        headline: 'Clinical Telemetry & Automatic EMR Integration',
        description: 'Automated vital check-in station equipped with integrated medical-grade sensors. Measures patient blood pressure, heart rate, SpO2, respiratory rate, temperature, height, and weight, automatically synchronizing readings into the hospital EMR system before physician consultation.',
        features: [
          'Medical sensor array: BP, HR, SpO2, RR, Temperature, Weight, Height',
          'Automated pre-assessment medical questionnaire',
          'Instant real-time sync to physician EMR & HIS',
          'Drastic nurse workload reduction',
          'Automatic abnormal vital flagging and priority triage alerts',
        ],
        metrics: [
          { label: 'Vitals Collected', value: '67,126+ patients' },
          { label: 'Avg Measurement Time', value: '4 min 7s' },
          { label: 'Clinical Wait Cut', value: '80% (45m → 9m)' },
          { label: 'Nurse Workload Cut', value: '20% – 30%' },
        ],
      },
    ],
    keyComponents: [
      {
        title: 'Hardware I/O & Sensor Gateway',
        tech: 'Python & WebSockets',
        description: 'Real-time telemetry parser communicating with blood pressure cuffs, pulse oximeters, weight scales, thermal printers, and barcode scanners.',
      },
      {
        title: 'NHA ABHA Verification Service',
        tech: 'FastAPI & NHA Gateway',
        description: 'Asynchronous validation module interacting with National Health Authority APIs for Aadhaar OTP validation and instant digital health account generation.',
      },
      {
        title: 'Bi-Directional HIS/EMR Sync Engine',
        tech: 'REST & Message Queues',
        description: 'Pushes patient vitals, registration tokens, and payment receipts directly into enterprise Hospital Information Systems in sub-100ms.',
      },
      {
        title: 'Dynamic Payment & Thermal Print Worker',
        tech: 'Webhooks & POS Drivers',
        description: 'Generates dynamic UPI QR codes and handles instant payment confirmation webhooks with deterministic receipt printing.',
      },
    ],
    workflow: [
      'Patient selects desired service (Registration, Report Printing, or Vital Pre-assessment) on touch screen.',
      'For registration: Aadhaar OTP handshake generates national ABHA ID and internal hospital UHID.',
      'For vitals check: Medical-grade sensors capture BP, HR, SpO2, Temp, and Weight in 4 minutes, instantly writing to patient EMR.',
      'For report dispatch: UHID barcode scan immediately fetches signed diagnostic PDFs from HIS and prints them on-demand.',
      'Dynamic UPI QR settles outpatient fees, and the system prints an itemized receipt with queue token details.',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/kiosk/abha/generate-otp', desc: 'Trigger Aadhaar OTP for national ABHA creation' },
      { method: 'POST', path: '/api/v1/kiosk/vitals/sync', desc: 'Sync hardware sensor telemetry (BP, HR, SpO2, Temp) to HIS' },
      { method: 'GET', path: '/api/v1/kiosk/reports/{uhid}', desc: 'Retrieve verified diagnostic lab reports for printing' },
      { method: 'POST', path: '/api/v1/kiosk/payment/upi-qr', desc: 'Generate dynamic UPI QR code for self-billing' },
    ],
    metrics: [
      { label: 'Self-Registration Wait Time', value: '90m → 7m', desc: '92% reduction in walk-in patient registration queue time' },
      { label: 'Reports Dispatched', value: '1.9M+', desc: '19,17,959 lab reports autonomously printed across 426K+ patients' },
      { label: 'Clinical Vitals Collected', value: '67,126+', desc: 'Automated BP, HR, SpO2, temperature, and weight sync to EMR' },
      { label: 'Patient Satisfaction', value: '9.41 / 10', desc: 'Exceptional patient sentiment rating maintained across all hospital sites' },
    ],
    challenges: [
      {
        challenge: 'Maintaining real-time responsiveness and device stability across physical sensor peripherals (BP cuff, pulse oximeter, barcode scanner, thermal printer).',
        solution: 'Engineered an asynchronous Python hardware daemon utilizing WebSockets and event listeners with automated self-healing peripheral reconnects.',
      },
      {
        challenge: 'Preventing patient queue stalls when third-party government health gateways (NHA ABHA) experience latency.',
        solution: 'Built non-blocking background queue workers with fallback local UHID reservation, allowing the patient to proceed while verification settles asynchronously.',
      },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'services/kiosk_vital_sync.py',
      code: `@router.post("/v1/kiosk/vitals/sync", response_model=VitalSyncResponse)
async def sync_patient_vitals(
    payload: VitalMeasurementPayload,
    db: AsyncSession = Depends(get_db_session)
):
    """Validates telemetry from hardware sensors and synchronizes with hospital EMR."""
    async with db.begin():
        # Verify active patient consultation
        encounter = await get_active_encounter(db, payload.uhid)
        if not encounter:
            raise HTTPException(status_code=404, detail="No active OPD appointment found.")
            
        # Structure clinical vitals telemetry
        vitals_record = PatientVitals(
            uhid=payload.uhid,
            encounter_id=encounter.id,
            blood_pressure_sys=payload.systolic,
            blood_pressure_dia=payload.diastolic,
            heart_rate_bpm=payload.heart_rate,
            spo2_percentage=payload.spo2,
            temperature_celsius=payload.temperature,
            height_cm=payload.height,
            weight_kg=payload.weight,
            bmi=round(payload.weight / ((payload.height / 100.0) ** 2), 2),
            collected_via="KIOSK_OPD_PRE_ASSESSMENT"
        )
        db.add(vitals_record)
        
        # Synchronize with Hospital Information System (HIS)
        await push_to_his_emr(vitals_record)
        return VitalSyncResponse(status="synced", uhid=payload.uhid, bmi=vitals_record.bmi)`,
    },
    highlights: [
      'Engineered tri-kiosk backend architecture: Self-Registration, Report Dispatch, and OPD Vitals Pre-assessment',
      'Cut patient registration wait times from 90 min to under 7 min (92% reduction) with 9.41/10 satisfaction',
      'Dispatched 1.9M+ reports autonomously to 426K+ patients and captured 67K+ clinical vitals with zero manual data entry',
    ],
    description: 'Architected the backend microservices, hardware sensor gateways, and hospital information system synchronization powering a tri-kiosk healthcare hardware suite: Self-Registration Kiosks, Report Dispatch Kiosks, and OPD Pre-assessment Kiosks with vital checks.',
    span: 7,
  },
  {
    id: 'enterprise-mis-analytics',
    title: 'Enterprise Healthcare MIS Analytics & Distributed Data Platform',
    subtitle: 'Centralized operational analytics suite delivering 18+ Tableau dashboards powered by PySpark & Azure Databricks ETL pipelines.',
    year: '2025',
    category: 'Data Engineering & Operational BI',
    tags: ['PySpark', 'Azure Databricks', 'Tableau Server', 'Power BI', 'ETL Pipelines', 'PostgreSQL', 'Delta Lake', 'Operational Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    role: 'Data Engineering & Analytics Lead',
    timeline: '2025 · Production Enterprise',
    clientOrOrg: 'Hospital Enterprise Stakeholders',
    overview: 'Architected an enterprise-grade operational MIS reporting and distributed data warehousing platform ingesting multi-branch transaction streams, processing structured EHR sets with PySpark on Azure Databricks, and authoring 18+ executive Tableau dashboards.',
    problemStatement: 'Hospital executives, department heads, and pharmacy managers lacked consolidated visibility into real-time operational efficiency, kiosk hardware utilization, daily department revenues, and patient turnover velocity across distributed hospital branches.',
    keyComponents: [
      {
        title: 'Distributed PySpark ETL Engine',
        tech: 'PySpark & Azure Databricks',
        description: 'Batch and micro-batch data transformation pipelines ingesting transactional records from kiosks, pharmacies, and consultation chambers.',
      },
      {
        title: 'Delta Lake Analytical Store',
        tech: 'Azure Blob & Delta Lake',
        description: 'Decoupled, columnar data lakehouse providing ACID transactions and fast aggregation queries without putting load on production OLTP databases.',
      },
      {
        title: '18+ Executive MIS Dashboards',
        tech: 'Tableau Server & Desktop',
        description: 'Curated suite of interactive operational dashboards covering deployment uptime, revenue distribution, kiosk throughput, and pharmacy velocity.',
      },
      {
        title: 'Automated Data Reconciliation',
        tech: 'Python & Cron Schedules',
        description: 'End-of-day financial reconciliation routines matching kiosk payment gateway webhooks against hospital accounting ledgers with 99.99% accuracy.',
      },
    ],
    workflow: [
      'Transactional logs from kiosks, pharmacy counters, and HIS databases are streamed to Azure Blob Storage.',
      'PySpark jobs on Azure Databricks parse JSON/Parquet logs, remove duplicates, and compute daily aggregates.',
      'Transformed analytical tables are partitioned by hospital branch, department, and transaction date in Delta Lake.',
      'Tableau Server extracts refresh automatically on schedule, updating 18+ operational dashboards for executive reviews.',
      'Automated email digests with KPI summaries and outlier alerts are pushed to hospital directors each morning.',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/mis/analytics/branch-summary', desc: 'Fetch consolidated branch performance KPIs' },
      { method: 'GET', path: '/api/v1/mis/analytics/kiosk-utilization', desc: 'Telemetry on machine uptime, transaction velocity, and errors' },
      { method: 'GET', path: '/api/v1/mis/analytics/revenue-distribution', desc: 'Departmental billing aggregation and payment method splits' },
      { method: 'POST', path: '/api/v1/mis/etl/trigger-batch', desc: 'Trigger on-demand Azure Databricks PySpark transformation job' },
    ],
    metrics: [
      { label: 'Executive MIS Dashboards', value: '18+', desc: 'Live operational dashboards powering hospital enterprise leadership' },
      { label: 'Query Performance Boost', value: '30%', desc: 'ETL speedup achieved through columnar partitioning and schema pruning' },
      { label: 'Data Ingestion Scale', value: '500K+ rows/day', desc: 'Structured patient logs and operational transaction records ingested daily' },
      { label: 'Decision Turnaround', value: 'Real-Time', desc: 'From delayed end-of-month spreadsheets to live executive operational visibility' },
    ],
    challenges: [
      {
        challenge: 'Aggregating millions of daily transaction logs across departments without degrading transactional database response times.',
        solution: 'Engineered decoupled Azure Databricks PySpark pipelines reading from Azure Blob read-replicas, isolating analytical compute from OLTP databases.',
      },
      {
        challenge: 'Maintaining real-time accuracy across volatile pharmacy inventories and fluctuating walk-in patient volumes.',
        solution: 'Constructed incremental Delta Lake merge pipelines that update intraday metrics in under 3 minutes with zero table locking.',
      },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'analytics/pyspark_mis_aggregator.py',
      code: `from pyspark.sql import SparkSession
from pyspark.sql import functions as F

def build_mis_operational_kpis(spark: SparkSession, delta_input: str, warehouse_sink: str):
    """Aggregates multi-branch operational metrics for executive Tableau dashboards."""
    df = spark.read.format("delta").load(delta_input)
    
    kpi_df = (
        df.groupBy("hospital_branch_id", "department_name", F.to_date("created_at").alias("metric_date"))
        .agg(
            F.count("transaction_id").alias("total_patient_visits"),
            F.sum("revenue_inr").alias("daily_revenue"),
            F.avg("wait_time_minutes").alias("avg_patient_wait_time"),
            F.avg("kiosk_uptime_percentage").alias("avg_kiosk_availability"),
            F.sum("pharmacy_bills_cleared").alias("total_pharmacy_orders")
        )
    )
    
    # Sync to relational warehouse for low-latency Tableau direct query
    (kpi_df.write.format("jdbc")
        .option("url", "jdbc:postgresql://analytics-db.hospital.internal/mis_analytics")
        .option("dbtable", "executive_mis_kpis")
        .mode("append")
        .save())`,
    },
    highlights: [
      'Constructed distributed PySpark ETL pipelines on Azure Databricks processing structured EHR sets',
      'Shipped 18+ operational Tableau dashboards utilized daily by hospital leadership and department heads',
      'Engineered automated financial and transaction reconciliation routines with 99.99% accuracy',
    ],
    description: 'Architected an enterprise-grade operational MIS reporting and distributed data warehousing platform ingesting multi-branch transaction streams, processing structured EHR sets with PySpark on Azure Databricks, and authoring 18+ executive Tableau dashboards.',
    span: 5,
  },
  {
    id: 'ai-powered-qms',
    title: 'AI-Powered Queue Management System (QMS)',
    subtitle: 'Enterprise queue automation, dynamic department routing, and intelligent triage reducing wait times by 20–30%.',
    year: '2025',
    category: 'Healthcare Backend & AI',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'HIS Integration', 'Triage Logic', 'WebSockets', 'Docker'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop',
    role: 'Lead Backend Engineer · Systems Architecture',
    timeline: '2025 · Production Deployment',
    clientOrOrg: 'Hospital Enterprise Systems',
    overview: 'Engineered an enterprise-grade backend infrastructure automating patient movements between consultation rooms, diagnostic centers, and sample collection labs across high-traffic multi-specialty healthcare facilities.',
    problemStatement: 'Traditional hospital queue counters suffer from severe physical bottlenecks, unpredictable patient arrivals, manual token tracking, and static triage that causes consultation rooms to sit idle while waiting lobbies overflow with frustrated patients.',
    keyComponents: [
      {
        title: 'Dynamic Priority Dispatcher',
        tech: 'FastAPI & Async Task Workers',
        description: 'Calculates dynamic priority queues combining triage urgency, appointment slots, doctor availability, and diagnostic dependencies.',
      },
      {
        title: 'Bi-Directional HIS Gateway',
        tech: 'REST & Webhooks',
        description: 'Real-time synchronization with Hospital Information Systems to sync patient vitals, registration data, and consultation completion states.',
      },
      {
        title: 'Real-Time Notification Engine',
        tech: 'WebSockets & Notification APIs',
        description: 'Sub-50ms queue status broadcasts to digital signage boards and automated WhatsApp/SMS alerts when a patient is next in line.',
      },
      {
        title: 'Optimized State Store',
        tech: 'PostgreSQL & Connection Pooling',
        description: 'Sub-millisecond token transitions with pessimistic row locking preventing race conditions when multiple doctors call patients concurrently.',
      },
    ],
    workflow: [
      'Patient arrives and checks in via self-service kiosk or mobile check-in; system queries HIS to verify UHID and active appointments.',
      'Triage engine calculates priority score based on medical severity, age, appointment schedule, and room queue depth.',
      'Patient is routed to the optimal diagnostic department or waiting lounge with real-time token telemetry on digital displays.',
      'When doctor marks a consultation completed, the dispatcher automatically summons the next highest priority patient and updates HIS records.',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/queue/checkin', desc: 'Patient contactless check-in and automated token generation' },
      { method: 'GET', path: '/api/v1/queue/department/{dept_id}', desc: 'Real-time department queue depth and wait time estimation' },
      { method: 'POST', path: '/api/v1/queue/dispatch/next', desc: 'Doctor workstation trigger for next prioritized patient' },
      { method: 'WS', path: '/ws/v1/queue/live-board/{dept_id}', desc: 'WebSocket live stream powering hospital display screens' },
    ],
    metrics: [
      { label: 'Patient Wait Time', value: '20–30%', desc: 'Reduction in average wait times across peak hospital shifts' },
      { label: 'Front-Desk Workload', value: '25–30%', desc: 'Decrease in repetitive reception inquiries and manual ticketing' },
      { label: 'API P95 Latency', value: '< 65ms', desc: 'Sustained response time under peak concurrent check-in traffic' },
      { label: 'Uptime Reliability', value: '99.95%', desc: 'Zero queue desynchronization across consultation departments' },
    ],
    challenges: [
      {
        challenge: 'Handling abrupt burst traffic during morning outpatient clinic openings without queue desynchronization.',
        solution: 'Engineered an asynchronous queue dispatcher leveraging FastAPI with Redis connection pooling and atomic PostgreSQL row-level locks, guaranteeing zero duplicate tokens.',
      },
      {
        challenge: 'Lagging legacy Hospital Information Systems with intermittent network dropouts.',
        solution: 'Implemented an event-driven retry queue with exponential backoff and circuit breaker patterns, ensuring offline kiosk tolerance and eventual consistency.',
      },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'services/queue_dispatcher.py',
      code: `@router.post("/dispatch/next", response_model=DispatchResponse)
async def dispatch_next_patient(
    department_id: UUID,
    doctor_id: UUID,
    db: AsyncSession = Depends(get_db_session)
):
    """Atomically selects and locks the highest-priority patient in the department queue."""
    async with db.begin():
        query = (
            select(QueueEntry)
            .where(QueueEntry.department_id == department_id)
            .where(QueueEntry.status == QueueStatus.WAITING)
            .order_by(QueueEntry.priority_score.desc(), QueueEntry.checkin_time.asc())
            .with_for_update(skip_locked=True)
            .limit(1)
        )
        result = await db.execute(query)
        patient_entry = result.scalar_one_or_none()
        
        if not patient_entry:
            return DispatchResponse(status="idle", message="No patients waiting in queue.")
            
        patient_entry.status = QueueStatus.IN_CONSULTATION
        patient_entry.doctor_id = doctor_id
        patient_entry.called_at = datetime.utcnow()
        
        await db.flush()
        await broadcast_queue_update(department_id, patient_entry.token_number)
        return DispatchResponse(patient=patient_entry, status="called")`,
    },
    highlights: [
      'Reduced patient wait times by 20–30% via automated department routing and priority logic',
      'Integrated real-time check-in and queue alerts with existing Hospital Information Systems (HIS)',
      'Sub-100ms API response latency for real-time status updates across hospital branches',
    ],
    description: 'Developed an enterprise queue management backend using FastAPI and PostgreSQL to automate patient movement across consultation rooms and diagnostic departments. Implemented dynamic queue prioritization, department routing, scheduling workflows, and automated notifications, reducing front-desk workload by 25–30%. Integrated queue and patient workflow data with Hospital Information Systems (HIS) to support contactless check-in and real-time operational visibility.',
    span: 7,
  },
  {
    id: 'mediquery-clinical-engine',
    title: 'MediQuery — Natural-Language Clinical Data Engine',
    subtitle: 'Natural-language data querying engine translating doctor prompts into sanitized SQL queries on DuckDB.',
    year: '2025',
    category: 'AI & Data Engine',
    tags: ['Python', 'DuckDB', 'Groq API', 'React.js', 'SQL', 'LLM Querying', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
    role: 'AI & Data Systems Engineer',
    timeline: '2025 · Research & Implementation',
    clientOrOrg: 'Clinical Data Analytics',
    overview: 'Engineered an AI-powered conversational clinical query engine that allows doctors, nurses, and researchers to query structured Electronic Health Records (EHR) using plain natural language.',
    problemStatement: 'Medical staff require immediate answers to critical clinical queries (e.g. "How many diabetic patients over 60 had elevated creatinine levels this month?") but lack technical SQL knowledge, creating severe dependencies on data analysts with turnaround times of days.',
    keyComponents: [
      {
        title: 'Groq LLM Compiler',
        tech: 'Groq API & LLaMA 3',
        description: 'Translates unstructured natural language clinical questions into syntactically correct, optimized SQL queries in under 120ms.',
      },
      {
        title: 'SQL AST Sanitizer & Guardrail',
        tech: 'Python & SQLGlot',
        description: 'Strict Abstract Syntax Tree (AST) validation ensuring queries are strictly read-only SELECT statements, preventing data corruption and SQL injection.',
      },
      {
        title: 'Columnar Analytics Engine',
        tech: 'DuckDB In-Memory',
        description: 'High-speed embedded OLAP database executing multi-table joins and aggregations across hundreds of thousands of medical records in sub-20ms.',
      },
      {
        title: 'Interactive React Explorer',
        tech: 'React.js & Recharts',
        description: 'Dynamically formats query results into interactive clinical telemetry tables, distribution histograms, and exportable CSVs.',
      },
    ],
    workflow: [
      'Doctor types question in plain English into the clinical search interface.',
      'System combines user prompt with domain schemas, column descriptions, and few-shot clinical examples into a structured prompt.',
      'Groq API generates proposed SQL; the sanitizer parses the AST, blocks any non-SELECT commands, and injects tenant filters.',
      'DuckDB executes the sanitized SQL directly against the in-memory columnar dataset.',
      'Results are rendered into the React dashboard with instant interactive charts and natural-language summary insights.',
    ],
    endpoints: [
      { method: 'POST', path: '/api/v1/query/translate', desc: 'Compile natural language query to sanitized SQL' },
      { method: 'POST', path: '/api/v1/query/execute', desc: 'Execute sanitized SQL against DuckDB in-memory engine' },
      { method: 'GET', path: '/api/v1/schema/catalog', desc: 'Retrieve clinical table schema and sample attributes' },
    ],
    metrics: [
      { label: 'Query Generation Latency', value: '< 120ms', desc: 'Blazing fast inference utilizing Groq LPU hardware' },
      { label: 'DuckDB Execution Time', value: '< 15ms', desc: 'Sub-millisecond columnar scans across 200k+ clinical records' },
      { label: 'SQL Injection Risk', value: '0.00%', desc: '100% blocked mutations via AST parsing and read-only transactions' },
      { label: 'Analytical Accuracy', value: '96.4%', desc: 'High precision on complex multi-table healthcare SQL aggregations' },
    ],
    challenges: [
      {
        challenge: 'Ensuring zero possibility of hallucinated or destructive SQL (DROP, UPDATE, DELETE) reaching the medical database.',
        solution: 'Implemented two-tier security: strict AST parsing via SQLGlot to reject any token outside read-only SELECT clauses, paired with a DuckDB read-only connection handle.',
      },
      {
        challenge: 'Minimizing end-to-end latency so doctors can query data conversationally in real-time consultations.',
        solution: 'Leveraged Groq API for sub-second LLM inference combined with DuckDB in-process memory execution, achieving <250ms total query cycle.',
      },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'engine/nl_to_sql.py',
      code: `import duckdb
from groq import AsyncGroq
import sqlglot
from sqlglot.expressions import Select

async def natural_language_to_duckdb(question: str, schema_context: str) -> dict:
    client = AsyncGroq()
    
    # Generate SQL via Groq high-speed inference
    completion = await client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {"role": "system", "content": f"You are a Clinical Data SQL Expert. Schema: {schema_context}. Return ONLY valid DuckDB SQL SELECT statements."},
            {"role": "user", "content": question}
        ],
        temperature=0.0
    )
    raw_sql = completion.choices[0].message.content.strip()
    
    # Strict AST Parsing & Guardrails using SQLGlot
    parsed = sqlglot.parse_one(raw_sql, read="duckdb")
    if not isinstance(parsed, Select):
        raise ValueError("Security violation: Only read-only SELECT queries are permitted.")
        
    # Execute against embedded DuckDB in-memory database
    con = duckdb.connect(database=":memory:", read_only=True)
    df_result = con.execute(raw_sql).fetchdf()
    
    return {
        "sql": raw_sql,
        "row_count": len(df_result),
        "data": df_result.to_dict(orient="records")
    }`,
    },
    highlights: [
      'Integrated Groq LLM API to convert conversational clinical questions into sanitized SQL',
      'Leveraged in-process DuckDB for zero-latency analytical aggregations over medical datasets',
      'Crafted interactive React analytical dashboard for instant data exploration and graphing',
    ],
    description: 'Engineered a natural-language data querying system that enables healthcare users to explore structured medical datasets without writing SQL manually. Integrated the Groq LLM API with DuckDB to translate natural-language questions into sanitized SQL queries for analytical workloads. Developed a React.js analytical interface for interactive data exploration, visualization, and inspection of query results.',
    span: 5,
  },
  {
    id: 'solopreneuros-operations-saas',
    title: 'SolopreneurOS — Freelance Operations SaaS',
    subtitle: 'Modular operations platform featuring client portals, proposal management, and automated invoice PDF pipelines.',
    year: '2025',
    category: 'Full-Stack SaaS & APIs',
    tags: ['FastAPI', 'Strawberry GraphQL', 'React.js', 'PostgreSQL', 'Make.com', 'JWT Auth', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    role: 'Full-Stack Software Engineer',
    timeline: '2025 · Product Launch',
    clientOrOrg: 'SaaS Platform',
    overview: 'Engineered a modern operations and billing operating system for solo tech contractors, agencies, and consultants, providing unified client portals, proposal approvals, and automated invoice PDF generation.',
    problemStatement: 'Freelancers lose 10+ hours weekly chasing invoice payments, manually typing PDF invoices in Word, emailing proposals as static attachments, and struggling with fragmented payment records across multiple tools.',
    keyComponents: [
      {
        title: 'Modular GraphQL Backend',
        tech: 'FastAPI & Strawberry',
        description: 'Type-safe GraphQL schema handling complex nested client projects, milestone time tracking, and customizable billing contracts.',
      },
      {
        title: 'Webhook Automation Engine',
        tech: 'Make.com & Webhooks',
        description: 'Automates instant PDF generation, client email dispatching, payment link embedding, and overdue invoice reminders.',
      },
      {
        title: 'Fine-Grained JWT Security',
        tech: 'PyJWT & Passlib',
        description: 'Multi-tenant authentication with separate role boundaries for freelancers and their external client view portals.',
      },
      {
        title: 'Interactive React Dashboard',
        tech: 'React.js & Tailwind',
        description: 'Fast, AI-assisted interface featuring dynamic revenue projections, time logging, and invoice status boards.',
      },
    ],
    workflow: [
      'User creates proposal with itemized deliverables and sets automated milestone billing schedule.',
      'Client receives branded access portal link with one-click digital proposal signature.',
      'On signature event, a webhook triggers Make.com automation, creating an itemized invoice and generating an official PDF.',
      'Client pays via integrated gateway; system updates financial ledger and triggers receipt delivery.',
    ],
    endpoints: [
      { method: 'QUERY', path: '/graphql { viewer { clients { projects { invoices } } } }', desc: 'Fetch user dashboard and nested project billing metrics' },
      { method: 'POST', path: '/graphql mutation createProposal', desc: 'Create and issue client service proposal' },
      { method: 'POST', path: '/api/v1/webhooks/invoice/generate', desc: 'Trigger Make.com automated PDF generation and email webhook' },
      { method: 'POST', path: '/api/v1/auth/token', desc: 'Generate secure JWT authentication tokens' },
    ],
    metrics: [
      { label: 'Time Saved Weekly', value: '10+ hrs', desc: 'Eliminated manual invoice typing and proposal chasing' },
      { label: 'GraphQL Latency', value: '< 45ms', desc: 'Average query execution time across nested relationship resolvers' },
      { label: 'Delivery Automation', value: '100%', desc: 'Fully automated invoice PDF generation and client dispatch' },
      { label: 'Payment Turnaround', value: '3x Faster', desc: 'Quicker invoice settlement via embedded digital payment links' },
    ],
    challenges: [
      {
        challenge: 'Solving the N+1 query problem when resolving deep nested relationships (Clients -> Projects -> Invoices) in GraphQL.',
        solution: 'Implemented Strawberry GraphQL DataLoader batching with SQLAlchemy async relationship eager loading, reducing DB queries from O(N) to O(1).',
      },
      {
        challenge: 'Ensuring zero downtime and fault-tolerant PDF delivery during external email gateway outages.',
        solution: 'Architected asynchronous job queues using webhooks and idempotency keys, guaranteeing exactly-once invoice generation without duplication.',
      },
    ],
    codeSnippet: {
      language: 'python',
      filename: 'graphql/schema.py',
      code: `import strawberry
from typing import List
from strawberry.types import Info

@strawberry.type
class InvoiceType:
    id: strawberry.ID
    invoice_number: str
    amount_due: float
    status: str
    due_date: str
    pdf_url: str | None

@strawberry.type
class Query:
    @strawberry.field
    async def client_invoices(self, info: Info, client_id: strawberry.ID) -> List[InvoiceType]:
        user = await get_authenticated_user(info)
        # Using DataLoader to batch resolve invoices in a single query
        loader = info.context["invoice_loader"]
        invoices = await loader.load(client_id)
        return [
            InvoiceType(
                id=inv.id,
                invoice_number=inv.invoice_number,
                amount_due=inv.amount,
                status=inv.status.value,
                due_date=inv.due_date.isoformat(),
                pdf_url=inv.pdf_url
            ) for inv in invoices
        ]`,
    },
    highlights: [
      'Engineered GraphQL endpoints with Strawberry GraphQL, schema stitching, and granular JWT protection',
      'Automated PDF invoice generation and webhook delivery pipelines with Make.com integration',
      'Delivered responsive client & admin portals using React.js and modern state management',
    ],
    description: 'Built a freelance operations platform supporting client portals, proposal management, invoicing, and automated invoice PDF delivery. Developed modular backend services using FastAPI and Strawberry GraphQL with JWT authentication and Make.com webhook automation. Built responsive interfaces using React.js, leveraging AI-assisted development to accelerate feature implementation and iteration.',
    span: 12,
  },
];



export const STATS: StatItem[] = [
  {
    value: '92%',
    label: 'Wait Time Cut',
    description: 'Reduced patient registration queue times from 90 minutes to under 7 minutes via Self-Registration Kiosks.',
  },
  {
    value: '1.9M+',
    label: 'Reports Dispatched',
    description: '19,17,959 diagnostic lab reports independently delivered to 426,563+ patients via autonomous kiosks.',
  },
  {
    value: '18+',
    label: 'MIS Dashboards Delivered',
    description: 'Centralized operational Tableau suite covering deployment uptime, kiosk utilization, and revenue distribution.',
  },
  {
    value: '67K+',
    label: 'Patient Vitals Captured',
    description: 'Automated OPD vital checks (BP, HR, SpO2, temp, weight) synchronized directly into hospital EMR systems.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT) – IIIT Ongole',
    period: '2021 — 2025',
    details: 'Core curriculum: Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks, Distributed Systems.',
  },
  {
    degree: 'Pre University Course (PUC)',
    institution: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT) – IIIT Ongole',
    period: '2019 — 2021',
    details: 'Mathematics, Physics, Chemistry, and Foundations of Computer Science.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'GATE 2024 — Computer Science',
    detail: 'Qualified with All India Rank (AIR) 19,293 in Graduate Aptitude Test in Engineering (CS & IT).',
    badge: 'National Exam',
  },
  {
    title: 'NPTEL — IIT Kharagpur',
    detail: 'Earned Elite Certification & ranked in the Top 5% nationwide in Database Management Systems (DBMS).',
    badge: 'Top 5% Nationwide',
  },
  {
    title: 'Competitive Programming',
    detail: 'Solved 500+ Data Structures and Algorithms problems across LeetCode and HackerRank.',
    badge: '500+ Solved',
  },
];
