import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";
import { getStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://awahib-portfolio.vercel.app"),
  title: {
    default: "Abdeljalil Wahib | Web Developer & Software Engineer",
    template: "%s | Abdeljalil Wahib",
  },
  description:
    "Web Developer and Software Engineering student at 1337 Coding School, passionate about creating interactive and efficient web applications. Explore my portfolio of modern web projects and 3D work.",
  keywords: [
    "Abdeljalil Wahib",
    "Web Developer",
    "Software Engineer",
    "1337 School",
    "42 Network",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [
    { name: "Abdeljalil Wahib", url: "https://awahib-portfolio.vercel.app" },
  ],
  creator: "Abdeljalil Wahib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://awahib-portfolio.vercel.app",
    siteName: "Abdeljalil Wahib Portfolio",
    title: "Abdeljalil Wahib | Web Developer & Software Engineer",
    description:
      "Web Developer and Software Engineering student at 1337 Coding School. Explore my portfolio of modern web projects and 3D work.",
    images: [
      {
        url: "/images/awahib.jpeg",
        width: 1200,
        height: 630,
        alt: "Abdeljalil Wahib - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdeljalil Wahib | Web Developer & Software Engineer",
    description:
      "Web Developer and Software Engineering student at 1337 Coding School",
    images: ["/images/awahib.jpeg"],
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
  verification: {
    // Add your verification tokens when you have them
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getStructuredData()}
        />
      </head>
      <body>
        <ErrorBoundary>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
