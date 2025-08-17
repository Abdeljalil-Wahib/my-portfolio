// src/components/Foundations/Foundations.tsx
'use client'; // This component will be a client component

import styles from './Foundations.module.css';
import Image from 'next/image';

const Foundations = () => {
  return (
    <main className={styles.foundationsPage}>
      <header className={styles.header}>
        <h1>My Foundations & Toolkit</h1>
        <p className={styles.subtitle}>
          From first principles to modern applications, this is the story of my craft.
        </p>
      </header>

      {/* --- Introduction Section --- */}
      <section className={styles.intro}>
        <h3>The 1337 Philosophy</h3>
        <p>
          My technical journey was forged at 1337, part of the renowned 42 network. This intensive curriculum operates without teachers or traditional classes, pushing students to master concepts through challenging, hands-on projects and peer-to-peer collaboration. This process cultivated a deep-seated ability to learn autonomously, adapt to new challenges, and solve complex problems from first principles.
        </p>
      </section>

      {/* --- Low-Level Foundations Section --- */}
      <section className={styles.skillsSection}>
        <h2>Low-Level & Algorithmic Foundations</h2>
        <div className={styles.projectGrid}>
          {/* Project 1: cub3D */}
          <div className={styles.projectEntry}>
            <div className={styles.projectVisual}>
              <video
                className={styles.projectVideo} // You'll style this like an image
                autoPlay
                loop
                muted
                playsInline
                poster="/images/cub3d-poster.png"
              >
                <source src="/videos/cub3D.webm" type="video/webm" />
                <source src="/videos/cub3d.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.projectDescription}>
              <h3>cub3D - A Raycasting 3D Engine</h3>
              <p>cub3D is a 3D maze exploration game inspired by Wolfenstein 3D. The core challenge was to build a complete graphics engine from scratch in C, using the raycasting technique to render a 2D map into a 3D perspective. This project solidified my understanding of memory management, the graphics rendering pipeline, and the mathematical principles behind 3D space.</p>
              <p className={styles.keyLearnings}><b>Key Learnings:</b> Memory Management, Raycasting, Graphics Pipeline, C Programming</p>
            </div>
          </div>

          {/* Project 2: fract-ol */}
          <div className={styles.projectEntry}>
            <div className={styles.projectVisual}>
              {/* Replace with your actual screenshot or GIF */}
              <Image src="/images/fractol-placeholder.jpg" alt="fract-ol Project Screenshot" width={600} height={400} className={styles.projectImage} />
            </div>
            <div className={styles.projectDescription}>
              <h3>fract-ol - Fractal Renderer</h3>
              <p>This project involved rendering complex mathematical fractals like the Mandelbrot and Julia sets. It was a deep dive into algorithmic optimization, complex number mathematics, and creating a smooth, interactive user experience with graphical event handling in a low-level environment.</p>
              <p className={styles.keyLearnings}><b>Key Learnings:</b> Complex Numbers, Algorithmic Optimization, Event Handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Web Development Section --- */}
      <section className={styles.skillsSection}>
        <h2>Modern Web Application Development</h2>
        <p className={styles.webIntro}>
          I apply the same rigor and problem-solving mindset from my low-level work to build modern, intuitive, and performant web applications.
        </p>
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h4>Languages</h4>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>
          <div className={styles.techCategory}>
            <h4>Frameworks & Libraries</h4>
            <ul>
              <li>React & Next.js</li>
              <li>Framer Motion</li>
              <li>Three.js / R3F</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className={styles.techCategory}>
            <h4>Tools & Platforms</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>Blender & Unity</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Foundations;
