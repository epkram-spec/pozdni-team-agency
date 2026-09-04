export type Language = 'ua' | 'en';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  isKey?: boolean;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  photoUrl: string;
  skills: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'marketing' | 'design' | 'smm' | 'complex';
  categoryLabel: string;
  industry: string;
  description: string;
  executedScope: string[];
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ClientProblemResult {
  problem: string;
  solution: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  iconName: string;
}

export interface PromoBannerConfig {
  active: boolean;
  textUa: string;
  textEn: string;
  ctaTextUa: string;
  ctaTextEn: string;
  badgeUa?: string;
  badgeEn?: string;
}
