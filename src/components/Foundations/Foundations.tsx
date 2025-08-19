// src/components/Foundations/Foundations.tsx
'use client';

import styles from './Foundations.module.css';
import Image from 'next/image';
import { motion, LazyMotion, domAnimation, Variants, useInView } from 'framer-motion';
import { useRef } from 'react'; // ✨ Import useRef

// --- Animation Variants (no changes) ---
const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] } },
};
const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] } },
};
const fadeIn: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ✨ Create a reusable component to handle the animation logic
const AnimatedSection = ({ children, variants, amount = 0.5 }: { children: React.ReactNode, variants: Variants, amount?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
};

const Foundations = () => {
  return (
    <LazyMotion features={domAnimation}>
      <main className={styles.foundationsPage}>
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>My Foundations & Toolkit</h1>
          <p className={styles.subtitle}>
            From first principles to modern applications, this is the story of my craft.
          </p>
        </motion.header>

        <AnimatedSection variants={fadeIn}>
          <section className={styles.intro}>
            <h3>The 1337 Philosophy</h3>
            <p>
              My technical journey was forged at 1337, part of the renowned 42 network. This intensive curriculum operates without teachers or traditional classes, pushing students to master concepts through challenging, hands-on projects and peer-to-peer collaboration. This process cultivated a deep-seated ability to learn autonomously, adapt to new challenges, and solve complex problems from first principles.
            </p>
          </section>
        </AnimatedSection>

        <section className={styles.skillsSection}>
          <AnimatedSection variants={slideInLeft} amount={0.8}>
            <h2><span>Low-Level & Algorithmic Foundations</span></h2>
          </AnimatedSection>

          <AnimatedSection variants={slideInRight} amount={0.2}>
            <div className={styles.projectGrid}>
              <div className={styles.projectEntry}>
                <div className={styles.projectVisual}>
                  <video
                    className={styles.projectVideo}
                    autoPlay loop muted playsInline
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
              <div className={styles.projectEntry}>
                <div className={styles.projectVisual}>
                  <Image src="/images/fractol-placeholder.jpg" alt="fract-ol Project Screenshot" width={600} height={400} className={styles.projectImage} />
                </div>
                <div className={styles.projectDescription}>
                  <h3>fract-ol - Fractal Renderer</h3>
                  <p>This project involved rendering complex mathematical fractals like the Mandelbrot and Julia sets. It was a deep dive into algorithmic optimization, complex number mathematics, and creating a smooth, interactive user experience with graphical event handling in a low-level environment.</p>
                  <p className={styles.keyLearnings}><b>Key Learnings:</b> Complex Numbers, Algorithmic Optimization, Event Handling</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className={styles.skillsSection}>
          <AnimatedSection variants={slideInLeft} amount={0.8}>
            <h2><span>Modern Web Application Development</span></h2>
          </AnimatedSection>
          
          <AnimatedSection variants={slideInRight} amount={0.1}>
            <div>
              <p className={styles.webIntro}>
                I apply the same rigor and problem-solving mindset from my low-level work to build modern, intuitive, and performant web applications.
              </p>
              <motion.div 
                className={styles.techGrid}
                variants={staggerContainer}
                initial="initial"
                animate="animate" // Animate stagger automatically when parent is in view
              >
                <motion.div className={styles.techCategory} variants={fadeIn}>
                  <h4>Languages</h4>
                  <ul><li>TypeScript</li><li>JavaScript (ES6+)</li><li>HTML5 & CSS3</li></ul>
                </motion.div>
                <motion.div className={styles.techCategory} variants={fadeIn}>
                  <h4>Frameworks & Libraries</h4>
                  <ul><li>React & Next.js</li><li>Framer Motion</li><li>Three.js / R3F</li><li>Node.js</li></ul>
                </motion.div>
                <motion.div className={styles.techCategory} variants={fadeIn}>
                  <h4>Tools & Platforms</h4>
                  <ul><li>Git & GitHub</li><li>Vercel</li><li>Blender & Unity</li></ul>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </LazyMotion>
  );
};

export default Foundations;
