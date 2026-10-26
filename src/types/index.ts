export interface ProjectArchitectureComponent {
  title: string;
  description: string;
  tech: string;
}

export interface ProjectEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'WS' | 'QUERY';
  path: string;
  desc: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface KioskVariant {
  name: string;
  badge: string;
  headline: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  video?: string;
  externalLink?: string;
  github?: string;
  description?: string;
  highlights?: string[];
  span: 5 | 7 | 12;
  link?: string;
  role?: string;
  timeline?: string;
  clientOrOrg?: string;
  overview?: string;
  problemStatement?: string;
  kioskVariants?: KioskVariant[];
  keyComponents?: ProjectArchitectureComponent[];
  workflow?: string[];
  endpoints?: ProjectEndpoint[];
  metrics?: ProjectMetric[];
  challenges?: ProjectChallenge[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
  badge?: string;
}
