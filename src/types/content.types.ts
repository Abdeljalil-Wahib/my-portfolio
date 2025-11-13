// Content types for about page
export interface AboutContent {
  myWhy: string;
  myJourney: string;
  myPhilosophy: string;
  whatImLearning: string;
  cta?: string;
}

// Metadata types
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  keywords: string[];
}

// Animation variant types
export interface AnimationVariant {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}
