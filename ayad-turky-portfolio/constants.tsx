
import { Publication, Skill, Experience, ContactInfo, AboutSectionData, NavLink, SectionHeader, ContactSectionText, FooterData, Project } from './types';

/* 
  =============================================================================
  🔥 CONTENT CONTROL CENTER - DR. AYAD TURKY
  -----------------------------------------------------------------------------
*/

// 1. NAVIGATION LINKS
export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Research Interests', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Experience', href: '#experience' }, 
  { name: 'Contact', href: '#contact' },
];

// 2. HERO SECTION
export const HERO_TITLE = "Dr. Ayad Turky";
export const HERO_SUBTITLE = "Assistant Professor in Computer Science specializing in AI, Machine Learning, Optimization, and Smart Cities.";
export const HERO_BUTTON_TEXT = "View Publications";
export const HERO_CONTACT_TEXT = "Contact Me";

// 3. ABOUT SECTION
export const ABOUT_DATA: AboutSectionData = {
  title: "Biography",
  subtitle: "Bridging theoretical AI with real-world applications.",
  paragraphs: [
    "I am an Assistant Professor in the Department of Computer Science at the University of Sharjah. My primary research interests lie in Artificial Intelligence (AI), specifically Machine Learning, Data Mining, and Optimization.",
    "My work focuses on applying these technologies to interdisciplinary real-world problems such as Smart Cities, Internet of Things (IoT), Large-Scale IoT Management, and Cloud Computing. I believe in blending theoretical depth with practical utility to solve complex industry challenges.",
    "Previously, I have held positions as a Lecturer at Victoria University and a Research Fellow at RMIT University in Australia. I hold a PhD in Computer Science from RMIT University."
  ],
  stats: {
    label1: "Publications", value1: 34,
    label2: "Citations", value2: 599,
    label3: "h-index", value3: 13
  },
  // Ensure you place your image named 'profile.jpg' in the 'public' folder of your project
  profileImage: "/profile.jpg" 
};

// 4. SKILLS SECTION (Renamed to Research Interests/Skills)
export const SKILLS_HEADER: SectionHeader = {
  title: "Research Interests & Skills",
  subtitle: "Core areas of expertise."
};

/* 
   AVAILABLE ICONS: 
   "Code", "Palette", "Server", "Globe", "Cpu", 
   "Smartphone", "Brain", "Database", "Cloud", "Terminal"
*/
export const SKILLS: Skill[] = [
  { name: "Artificial Intelligence", level: 98, icon: "Brain" },
  { name: "Machine Learning", level: 95, icon: "Cpu" },
  { name: "Optimization Algorithms", level: 95, icon: "Code" },
  { name: "Smart Cities & IoT", level: 90, icon: "Globe" },
  { name: "Python / C++ / Java", level: 92, icon: "Terminal" },
  { name: "Data Mining", level: 90, icon: "Database" }
];

// 5. EXPERIENCE SECTION
export const EXPERIENCE_HEADER: SectionHeader = {
  title: "Academic Career",
  subtitle: "My professional journey in academia and research."
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Assistant Professor",
    company: "University of Sharjah",
    period: "Current",
    description: "Department of Computer Science, College of Computing and Informatics. Leading research in AI and teaching advanced computer science courses."
  },
  {
    id: 2,
    role: "Lecturer in Computer Science",
    company: "Victoria University, Australia",
    period: "2020 - 2022",
    description: "Delivered lectures and conducted research. Awarded the College Teaching Excellence Award 2021 and VU Research Fellowship 2022."
  },
  {
    id: 3,
    role: "Research Fellow",
    company: "RMIT University, Australia",
    period: "2019 - 2020",
    description: "Conducted high-level research in AI and Machine Learning. Contributed to industry-linked projects."
  },
  {
    id: 4,
    role: "Data Analyst",
    company: "RMIT University (Market Intelligence)",
    period: "2018 - 2019",
    description: "Market Intelligence and Analytics. Analyzed complex datasets to support strategic decision-making."
  }
];

// 6. PUBLICATIONS SECTION
export const PUBLICATIONS_HEADER: SectionHeader = {
  title: "Selected Publications",
  subtitle: "A selection of recent research contributions in high-impact journals."
};

export const SCHOLAR_LINK = "https://scholar.google.com/citations?user=Dzk7IkUAAAAJ&hl=en";

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    title: "A parallel multi-objective evolutionary algorithm for the hardware–software partitioning problem",
    journal: "Knowledge-Based Systems",
    year: "2016",
    tags: ["Evolutionary Algorithms", "Optimization"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0950705116300363"
  },
  {
    id: 2,
    title: "An island-based genetic algorithm for the hardware–software partitioning problem",
    journal: "Information Sciences",
    year: "2014",
    tags: ["Genetic Algorithm", "Hardware-Software"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S002002551400190X"
  },
  {
    id: 3,
    title: "An improved binary particle swarm optimization for hardware–software partitioning",
    journal: "Swarm and Evolutionary Computation",
    year: "2018",
    tags: ["Swarm Intelligence", "PSO"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2210650218303407"
  },
  {
    id: 4,
    title: "A multi-objective evolutionary algorithm for hardware–software partitioning in embedded systems",
    journal: "Swarm and Evolutionary Computation",
    year: "2020",
    tags: ["Embedded Systems", "Multi-objective"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2210650220303837"
  },
  {
    id: 5,
    title: "Hardware-Software Partitioning in Embedded Systems using a New Bio-inspired Algorithm",
    journal: "Procedia Computer Science",
    year: "2015",
    tags: ["Bio-inspired", "Embedded Systems"],
    link: "https://www.sciencedirect.com/science/article/pii/S1877050915011904"
  },
  {
    id: 6,
    title: "A surrogate-assisted evolutionary algorithm for expensive multi-objective optimization",
    journal: "Knowledge-Based Systems",
    year: "2020",
    tags: ["Surrogate-assisted", "Optimization"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0950705120304548"
  },
  {
    id: 7,
    title: "IoT-based Smart City: A New Approach for Smart Parking using Optimization Techniques",
    journal: "IEEE Access",
    year: "2021",
    tags: ["Smart City", "IoT", "IEEE"],
    link: "https://ieeexplore.ieee.org/abstract/document/9512576/"
  },
  {
    id: 8,
    title: "Recent advances in Applied Soft Computing for complex system optimization",
    journal: "Applied Soft Computing",
    year: "2019",
    tags: ["Soft Computing", "Complex Systems"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1568494619302807"
  }
];

// 6.5 PROJECTS SECTION
export const PROJECTS_HEADER: SectionHeader = {
  title: "Applied Projects",
  subtitle: "Real-world applications of AI and Optimization research."
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Smart Parking Optimization",
    description: "An IoT-enabled smart parking system that utilizes optimization algorithms to guide drivers to the nearest available spots, reducing traffic congestion.",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1000",
    tags: ["IoT", "Smart City", "Optimization"],
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare Resource Scheduling",
    description: "A multi-objective evolutionary algorithm designed to optimize the allocation of hospital resources and staff schedules during peak demand.",
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
    tags: ["Healthcare", "Scheduling", "Genetic Algorithms"],
    link: "#"
  },
  {
    id: 3,
    title: "Intelligent Traffic Control",
    description: "Adaptive traffic signal control system based on reinforcement learning to improve traffic flow efficiency in complex urban intersections.",
    imageUrl: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=1000",
    tags: ["Traffic Control", "Reinforcement Learning", "AI"],
    link: "#"
  },
  {
    id: 4,
    title: "Hardware-Software Partitioning",
    description: "Framework for automated partitioning of tasks in embedded systems using swarm intelligence to balance performance and power consumption.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    tags: ["Embedded Systems", "Swarm Intelligence"],
    link: "#"
  }
];

// 7. CONTACT SECTION
export const CONTACT_SECTION_TEXT: ContactSectionText = {
  title: "Get in touch",
  subtitle: "Collaboration & Research",
  description: "I am open to research collaborations, speaking engagements, and consulting opportunities in AI and Smart Cities."
};

export const CONTACT_INFO: ContactInfo = {
  email: "aturky@sharjah.ac.ae",
  phone: "University of Sharjah",
  location: "Sharjah, United Arab Emirates",
  office: "Block A9, Room 210",
  socials: [
    { platform: "Scholar", url: "https://scholar.google.com/citations?user=Dzk7IkUAAAAJ&hl=en" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ayad-turky-6431a290/?originalSubdomain=au" },
    { platform: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=25825717300" },
    { platform: "ResearchGate", url: "https://www.researchgate.net/profile/Ayad-Turky" },
    { platform: "University", url: "https://www.sharjah.ac.ae/Academics/Faculty-And-Staff/Ayad-Turky" }
  ]
};

// 8. FOOTER SECTION
export const FOOTER_DATA: FooterData = {
  brandName: "Dr. Ayad",
  brandSuffix: " Turky",
  tagline: "Advancing Artificial Intelligence and Optimization for a Smarter World.",
  copyright: "Dr. Ayad Turky. All rights reserved."
};

// --- AI ASSISTANT INSTRUCTION ---
export const SYSTEM_INSTRUCTION = `
You are the AI assistant for Dr. Ayad Turky, an Assistant Professor in Computer Science at the University of Sharjah.
Your goal is to answer questions about Dr. Ayad's research, publications, and academic experience.

Context:
Name: Dr. Ayad Turky
Title: Assistant Professor in Computer Science
Research Interests: AI, Machine Learning, Data Mining, Optimization, Smart Cities, IoT.
Education: PhD from RMIT University, MSc from UKM Malaysia, BSc from University of Al-Anbar.
Experience: University of Sharjah, Victoria University, RMIT University.
Key Projects: Smart Parking Optimization, Healthcare Resource Scheduling, Intelligent Traffic Control, Hardware-Software Partitioning.

Publications Stats: 34+ Papers, 599+ Citations, h-index 13.
Contact: aturky@sharjah.ac.ae
Office: Block A9, Room 210, University of Sharjah.
`;
