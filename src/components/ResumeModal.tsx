import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Code2, ExternalLink, Printer } from 'lucide-react';
import { USER_INFO, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-surface border border-stroke rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl selection:bg-white/20 selection:text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Resume"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            >
              &times;
            </button>

            {/* Header */}
            <div className="border-b border-stroke pb-6 mb-6">
              <span className="text-xs text-muted uppercase tracking-[0.25em] font-mono">
                Curriculum Vitae
              </span>
              <h2 className="text-3xl sm:text-4xl font-display italic text-text-primary mt-1">
                {USER_INFO.name}
              </h2>
              <p className="text-sm font-medium text-[#89AACC] mt-1">
                Software Engineer &bull; Backend, APIs &amp; Data Engineering
              </p>

              {/* Contact meta strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#89AACC]" />
                  <span>{USER_INFO.location}</span>
                </span>
                <a
                  href={`tel:${USER_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-[#89AACC]" />
                  <span>{USER_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${USER_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-[#89AACC]" />
                  <span>{USER_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-xs text-muted uppercase tracking-widest font-mono mb-2 flex items-center gap-2">
                <Code2 size={13} className="text-[#89AACC]" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                Software Engineer with experience developing scalable backend services, REST and GraphQL APIs, healthcare workflows, data pipelines, and analytics solutions. Strong hands-on experience with Python, FastAPI, PostgreSQL, SQL, GraphQL, PySpark, Azure Databricks, Docker, Azure, and React.js. Experienced in backend development, API integration, database optimization, distributed ETL pipelines, enterprise healthcare system integration, and operational analytics. Proven ability to build production-oriented systems and collaborate with cross-functional and enterprise stakeholders.
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xs text-muted uppercase tracking-widest font-mono flex items-center gap-2">
                <Briefcase size={13} className="text-[#89AACC]" />
                <span>Work Experience</span>
              </h3>

              <div className="border-l border-stroke pl-4 space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-medium text-text-primary">
                        {exp.role}
                      </h4>
                      <span className="text-xs text-muted font-mono">{exp.period}</span>
                    </div>
                    <p className="text-xs text-[#89AACC] mt-0.5">{exp.company} &bull; {exp.location}</p>
                    <ul className="text-xs sm:text-sm text-muted mt-3 font-light space-y-2 list-disc list-inside">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-xs text-muted uppercase tracking-widest font-mono mb-3">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Languages</div>
                  <div className="text-[12px] text-muted font-light">Python, SQL, JavaScript, HTML, CSS</div>
                </div>
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Backend Development</div>
                  <div className="text-[12px] text-muted font-light">FastAPI, Django, REST APIs, GraphQL, Strawberry GraphQL, JWT Authentication, Webhooks</div>
                </div>
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Databases &amp; Optimization</div>
                  <div className="text-[12px] text-muted font-light">PostgreSQL, MySQL, DuckDB, SQL Joins, Indexing, Query Optimization, Connection Pooling</div>
                </div>
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Data Engineering</div>
                  <div className="text-[12px] text-muted font-light">PySpark, Azure Databricks, ETL Pipelines, Distributed Processing, Pandas, NumPy</div>
                </div>
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Cloud &amp; DevOps</div>
                  <div className="text-[12px] text-muted font-light">Microsoft Azure, Docker, Git, GitHub Actions, Linux, Postman</div>
                </div>
                <div className="p-3 rounded-2xl bg-stroke/20 border border-stroke/60">
                  <div className="text-xs font-medium text-text-primary mb-1">Analytics &amp; Frontend</div>
                  <div className="text-[12px] text-muted font-light">Tableau Desktop/Server, Power BI, MIS Dashboards, React.js, Responsive UI</div>
                </div>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="mb-8">
              <h3 className="text-xs text-muted uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
                <Award size={13} className="text-[#89AACC]" />
                <span>Certifications &amp; Achievements</span>
              </h3>
              <div className="space-y-2.5">
                {ACHIEVEMENTS.map((ach) => (
                  <div
                    key={ach.title}
                    className="p-3.5 rounded-2xl bg-surface border border-stroke flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-text-primary">
                        {ach.title}
                      </div>
                      <div className="text-xs text-muted font-light mt-0.5">
                        {ach.detail}
                      </div>
                    </div>
                    {ach.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#89AACC] shrink-0">
                        {ach.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xs text-muted uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
                <GraduationCap size={13} className="text-[#89AACC]" />
                <span>Education</span>
              </h3>
              <div className="border-l border-stroke pl-4 space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-medium text-text-primary">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-muted font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs text-[#89AACC] mt-0.5">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-[11px] sm:text-xs text-muted/80 mt-1 font-light">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Profiles & Links */}
            <div className="mb-8 flex flex-wrap gap-2.5">
              <a
                href={USER_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-4 py-2 rounded-full border border-stroke text-muted hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={USER_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs px-4 py-2 rounded-full border border-stroke text-muted hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-1.5"
              >
                <span>GitHub Profile</span>
                <ExternalLink size={12} />
              </a>
              <a
                href={`mailto:${USER_INFO.email}`}
                className="text-xs px-4 py-2 rounded-full border border-stroke text-muted hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Email Directly</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Footer Buttons */}
            <div className="pt-6 border-t border-stroke flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${USER_INFO.email}?subject=Software%20Engineering%20Opportunity`}
                  className="group relative inline-flex items-center text-xs sm:text-sm rounded-full p-[1.5px] transition-transform duration-200 hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-full accent-gradient" />
                  <span className="relative z-10 px-5 py-2.5 rounded-full bg-surface text-text-primary font-medium flex items-center gap-1.5 hover:bg-bg transition-colors">
                    <span>Contact Tharun</span>
                    <span className="text-xs">↗</span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-full border border-stroke text-xs text-muted hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer size={13} className="text-[#89AACC]" />
                  <span>Print / Save PDF</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-stroke text-xs text-muted hover:text-white hover:bg-stroke/40 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
