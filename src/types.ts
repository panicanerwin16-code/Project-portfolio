export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
  category: 'workflow' | 'crm' | 'ai' | 'integration';
  popular?: boolean;
}

export interface WorkflowStep {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  type: 'trigger' | 'ai' | 'app' | 'action';
  status?: 'idle' | 'active' | 'success';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tools: string[];
  problem: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  features: string[];
  result?: string;
  workflowDiagram: WorkflowStep[];
  clientSector: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; icon?: string; highlighted?: boolean }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  credentialUrl?: string;
  skillsVerified: string[];
}

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
  iconBg: string;
  experience?: string;
  link?: string;
  orbit?: 'inner' | 'middle' | 'outer';
  glowColor?: string;
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  results: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}
