export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdeljalil Wahib",
  url: "https://awahib-portfolio.vercel.app",
  image: "https://awahib-portfolio.vercel.app/images/awahib.jpeg",
  jobTitle: "Web Developer",
  description:
    "Web Developer and Software Engineering student at 1337 Coding School",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "1337 Coding School",
    sameAs: "https://www.1337.ma",
  },
  sameAs: [
    "https://github.com/Abdeljalil-Wahib",
    "https://linkedin.com/in/abdeljalil-wahib",
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Full Stack Development",
    "Frontend Development",
    "C Programming",
    "3D Modeling",
    "Blender",
  ],
};

export function getStructuredData() {
  return {
    __html: JSON.stringify(personSchema),
  };
}
