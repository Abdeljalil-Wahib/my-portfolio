import { Metadata } from "next";

export const siteConfig = {
  name: "Abdeljalil Wahib",
  title: "Abdeljalil Wahib | Web Developer & Software Engineer",
  description:
    "Web Developer and Software Engineering student at 1337 Coding School, passionate about creating interactive and efficient web applications.",
  url: "https://awahib-portfolio.vercel.app",
  ogImage: "/images/awahib.jpeg",
  links: {
    github: "https://github.com/Abdeljalil-Wahib",
    linkedin: "https://linkedin.com/in/abdeljalil-wahib",
    email: "mailto:ajwahib.dev@gmail.com",
  },
  keywords: [
    "Abdeljalil Wahib",
    "Web Developer",
    "Software Engineer",
    "1337 School",
    "42 Network",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Morocco Developer",
    "Portfolio",
    "3D Modeling",
    "Blender",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ajwahib", // Update with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
