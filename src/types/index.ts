export type Language = 'pt' | 'en';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  tag: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  techStack: string[];
  activitiesTitle?: string;
  techStackTitle?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  identification: string;
  badge: string;
  shortDescription: string;
  problem: string;
  solution: string;
  homeImg: string;
  loginImg: string;
  logoImg?: string;
  features: string[];
  technologies: string[];
  quality: string;
  discreetNote: string;
  ctaVisit: string;
  ctaVisitUrl: string;
  ctaTech: string;
  responsibleNotice: string;
}

export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  skills: string[];
}

export interface OliverTechSeries {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface PortfolioContent {
  meta: {
    statusBadge: string;
    systemVersion: string;
    location: string;
    timezone: string;
  };
  nav: {
    brand: string;
    links: NavItem[];
    cta: string;
    langSelectAria: string;
    mainNavAria?: string;
    mobileMenuOpenAria?: string;
    mobileMenuCloseAria?: string;
  };
  hero: {
    label: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    indicators: string[];
    indicatorsHeading?: string;
    terminalCommand?: string;
  };
  about: {
    tag: string;
    title: string;
    heading: string;
    locationLine: string;
    availabilityLine: string;
    p1: string;
    p2: string;
    p3: string;
    sidebarTitle?: string;
    sidebarItems?: { bold: string; text: string }[];
    sidebarFooter?: string;
    pillars: {
      id: string;
      code: string;
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
    activitiesLabel?: string;
    toolsLabel?: string;
  };
  featuredProject: {
    sectionTag: string;
    sectionTitle: string;
    exclusiveNotice?: string;
    project: ProjectDetail;
    uiLabels?: {
      compositionTitle: string;
      compositionSubtitle: string;
      homeTab: string;
      loginTab: string;
      enlarge: string;
      problemTitle: string;
      solutionTitle: string;
      featuresTitle: string;
      privacyTitle: string;
      qaTitle: string;
      qaPill: string;
      techTitle: string;
      lightboxTitle: string;
      homeAlt?: string;
      loginAlt?: string;
      lightboxAlt?: string;
    };
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    noteNoPercentages: string;
    categories: SkillCategory[];
    verifiedLabel?: string;
  };
  oliverTech: {
    tag: string;
    title: string;
    subtitle: string;
    text: string;
    series: OliverTechSeries[];
    seriesTitle?: string;
    terminalTitle?: string;
    statusInProgress?: string;
    instagramCta: string;
    instagramUrl: string;
    terminalHelpText: string;
    terminalPlaceholder: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    text: string;
    emailLabel: string;
    emailValue?: string;
    emailNotice: string;
    emailReservedBadge?: string;
    channelsTitle: string;
    socials: {
      linkedin: string;
      linkedinUrl: string;
      github: string;
      githubUrl: string;
      instagram: string;
      instagramUrl: string;
    };
  };
  footer: {
    author: string;
    tagline: string;
    systemStatus: string;
    builtWith: string;
    backToTop: string;
  };
}
