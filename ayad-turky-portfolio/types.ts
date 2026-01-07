

export interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  tags: string[];
  link: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  office: string;
  socials: SocialLink[];
}

export interface AboutSectionData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: {
    label1: string; value1: number;
    label2: string; value2: number;
    label3: string; value3: number;
  };
  profileImage: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SectionHeader {
  title: string;
  subtitle: string;
}

export interface ContactSectionText {
  title: string;
  subtitle: string;
  description: string;
}

export interface FooterData {
  brandName: string; 
  brandSuffix: string; 
  tagline: string;
  copyright: string;
}