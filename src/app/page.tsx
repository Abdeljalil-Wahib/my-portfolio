import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Foundations from "@/components/Foundations/Foundations";
import Portfolio from "@/components/Portfolio/Portfolio";

export const metadata: Metadata = {
  title: "Abdeljalil Wahib | Web Developer & Software Engineer",
  description:
    "Welcome to my portfolio. I'm Abdeljalil Wahib, a Web Developer and Software Engineering student at 1337 Coding School, passionate about creating interactive and efficient web applications.",
  openGraph: {
    title: "Abdeljalil Wahib | Web Developer & Software Engineer",
    description:
      "Welcome to my portfolio. Explore my journey in web development and software engineering.",
    url: "https://awahib-portfolio.vercel.app",
    images: [
      {
        url: "/images/awahib.jpeg",
        width: 1200,
        height: 630,
        alt: "Abdeljalil Wahib",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="foundations">
        <Foundations />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
    </div>
  );
}
