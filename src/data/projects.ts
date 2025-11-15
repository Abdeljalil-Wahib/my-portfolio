import { Project, TechStack } from "@/types/project.types";

export const projects: Project[] = [
  {
    title: "Holoboard - Real-time Holographic Whiteboard",
    thumbnail: "/images/holoboard.webp",
    description:
      "Holoboard is a real-time collaborative whiteboard with a holographic cyan/purple UI and unique UX. It offers drawing tools, live cursors, customizable avatars, undo/redo and persistent rooms — built with Next.js, React Konva and Socket.IO.",
    liveDemo: "https://holoboard-navy.vercel.app/",
    github: "https://github.com/Abdeljalil-Wahib/Holoboard",
    tech: ["nextjs", "react", "typescript", "tailwind", "konva", "socketio"],
    cardType: "landscape",
    videoPreview: "/videos/holoboard.mp4",
  },
  {
    title: "SnapShop - E-commerce SPA",
    thumbnail: "/images/snapshop-thumbnail.webp",
    description:
      "A full-featured e-commerce SPA built with Next.js and Redux Toolkit. Features dynamic product filtering, shopping cart with persistence, user authentication, checkout process, and optimistic UI updates. Demonstrates modern frontend architecture with clean state management.",
    liveDemo: "https://snapshop-ajwahib.vercel.app/",
    github: "https://github.com/Abdeljalil-Wahib/Ecom-SPA",
    tech: ["nextjs", "react", "redux", "sass"],
    cardType: "landscape",
  },
  {
    title: "Frontend Mentor Challenges",
    thumbnail: "/images/frontend-mentor-thumbnail.webp",
    description:
      "A collection of 15+ pixel-perfect UI challenges from Frontend Mentor, showcasing proficiency in translating design mockups into production-ready code. Each challenge emphasizes responsive design with mobile-first approach, semantic HTML5 markup, modern CSS techniques including Grid and Flexbox, CSS custom properties for theming, and vanilla JavaScript for interactive components. Projects range from simple landing pages to complex multi-page applications with form validation and API integration.",
    liveDemo: "https://www.frontendmentor.io/profile/Ajwahib95/solutions",
    github: "#",
    tech: ["html", "css", "javascript"],
  },
  {
    title: "Minishell - A Custom Shell",
    thumbnail: "/images/minishell-thumbnail.webp",
    description:
      "A Unix shell implementation written in C that replicates core bash functionality. The project demonstrates low-level systems programming with features including: command parsing and tokenization, environment variable expansion, built-in commands (cd, echo, pwd, export, unset, env, exit), I/O redirection (>, <, >>), pipes for inter-process communication, signal handling (Ctrl-C, Ctrl-D, Ctrl-\\), and heredoc support (<<). Built with focus on memory safety, proper error handling, and adhering to the POSIX standard.",
    liveDemo: "#",
    github: "https://github.com/Abdeljalil-Wahib/minishell",
    tech: ["c"],
  },
  {
    title: "Blender Models",
    thumbnail: "/images/3dmodel-thumbnail.webp",
    description:
      "A collection of high-quality 3D models and interactive scenes created with Blender. This portfolio piece demonstrates proficiency in 3D modeling workflows including hard-surface modeling with precise topology, UV unwrapping and texture painting, PBR materials with realistic shaders, lighting setup for dramatic effects, and composition for compelling renders. The featured model showcases attention to detail in geometry, material properties, and presentation through Sketchfab's 3D viewer integration.",
    liveDemo: "#",
    github: "#",
    tech: ["blender"],
    cardType: "landscape",
    embedCode: `<iframe title="Leona_shield" frameBorder="0" allowFullScreen mozAllowFullScreen="true" webkitAllowFullScreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b99e9bf599c64e398dec0e139d88f043/embed"></iframe>`,
  },
  {
    title: "Retro Rewind - Blender Scene",
    thumbnail: "/images/retro-rewind-thumbnail.webp",
    description:
      "A nostalgic 1990s gaming room scene meticulously crafted in Blender, capturing the essence of retro gaming culture. The scene features detailed prop modeling (vintage console, CRT TV, posters, furniture), realistic PBR materials with proper roughness and metallic values, atmospheric lighting with volumetric effects and color grading, thoughtful composition emphasizing storytelling, and photorealistic rendering using Cycles with optimized render settings. Every element is carefully placed to evoke nostalgia while demonstrating technical excellence in 3D environment creation.",
    liveDemo: "#",
    github: "#",
    tech: ["blender"],
    cardType: "landscape",
    imageRender: "/images/retro-rewind.webp",
  },
];

// Helper function to get project by index
export const getProject = (index: number): Project | undefined => {
  return projects[index];
};

// Helper function to get total project count
export const getTotalProjects = (): number => {
  return projects.length;
};

// Helper function to filter projects by technology
export const getProjectsByTech = (tech: TechStack): Project[] => {
  return projects.filter((project) => project.tech.includes(tech));
};
