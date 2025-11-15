"use client";

import styles from "@/components/Portfolio/Portfolio.module.css";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavigationControls from "@/components/NavigationControls";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { projects } from "@/data/projects";
import { TechStack } from "@/types/project.types";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiC,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiBlender,
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";

interface TechIconProps {
  techName: TechStack;
}

const TechIcon = ({ techName }: TechIconProps): React.ReactElement | null => {
  switch (techName) {
    case "react":
      return <FaReact title="React" />;
    case "nextjs":
      return <SiNextdotjs title="Next.js" />;
    case "redux":
      return <SiRedux title="Redux" />;
    case "sass":
      return <FaSass title="Sass" />;
    case "c":
      return <SiC title="C Language" />;
    case "html":
      return <IoLogoHtml5 title="HTML5" />;
    case "css":
      return <IoLogoCss3 title="CSS3" />;
    case "javascript":
      return <IoLogoJavascript title="JavaScript" />;
    case "typescript":
      return <SiTypescript title="TypeScript" />;
    case "tailwind":
      return <SiTailwindcss title="Tailwind CSS" />;
    case "konva":
      return (
        <svg
          role="img"
          aria-label="Konva"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Konva</title>
          {/* Stylized Konva-like mark (custom SVG) */}
          <path d="M3 21c0 0 4-1 7-4s6-6 6-6l4-4 1-1-2-2-1 1-4 4s-3 1-6 4S3 21 3 21z" />
        </svg>
      );
    case "socketio":
      return <SiSocketdotio title="Socket.IO" />;
    case "blender":
      return <SiBlender title="Blender" />;
    default:
      return null;
  }
};

const MobilePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEmbedLoading, setIsEmbedLoading] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const currentProject = projects[currentIndex];

  useEffect(() => {
    // Reset loading state when project changes
    setIsEmbedLoading(true);
    
    // Preload next and previous project assets
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    
    [projects[nextIndex], projects[prevIndex]].forEach(project => {
      if (project.videoPreview) {
        const video = document.createElement('video');
        video.src = project.videoPreview;
        video.preload = 'auto';
        video.load();
      } else if (project.imageRender || project.thumbnail) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = project.imageRender || project.thumbnail;
        document.head.appendChild(link);
      }
    });
  }, [currentIndex]);

  const changeSlide = (slideDirection: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(slideDirection);
    setCurrentIndex((prevIndex) =>
      slideDirection === "next"
        ? (prevIndex + 1) % projects.length
        : (prevIndex - 1 + projects.length) % projects.length
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const slideVariants = {
    enter: (dir: string) => ({
      x: dir === "next" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "next" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className={styles.mobilePortfolioSection}>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={styles.mobileTwoCardLayout}
          >
            {/* Preview Card */}
            <div className={styles.mobilePreviewCard}>
              <div className={styles.previewImageWrapper}>
                {currentProject.videoPreview ? (
                  <video
                    src={currentProject.videoPreview}
                    className={styles.mobilePreviewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : currentProject.embedCode ? (
                  <>
                    {isEmbedLoading && (
                      <div className={styles.embedLoading}>
                        <div className={styles.spinner}></div>
                        <span>Loading 3D Model...</span>
                      </div>
                    )}
                    <div
                      className={styles.sketchfabEmbed}
                      dangerouslySetInnerHTML={{
                        __html: currentProject.embedCode.replace(
                          '<iframe',
                          `<iframe onload="this.parentElement.parentElement.querySelector('.${styles.embedLoading}')?.remove()"`
                        ),
                      }}
                    />
                  </>
                ) : currentProject.imageRender ? (
                  <Image
                    src={currentProject.imageRender}
                    alt={currentProject.title}
                    fill
                    sizes="90vw"
                    quality={90}
                    priority
                    fetchPriority="high"
                    className={styles.previewImage}
                  />
                ) : (
                  <Image
                    src={currentProject.thumbnail}
                    alt={currentProject.title}
                    fill
                    sizes="90vw"
                    quality={90}
                    priority
                    fetchPriority="high"
                    className={styles.previewImage}
                  />
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className={styles.mobileInfoCard}>
              <div className={styles.infoContent}>
                <h2 className={styles.mobileProjectTitle}>
                  {currentProject.title}
                </h2>

                <p className={styles.mobileProjectDescription}>
                  {currentProject.description}
                </p>

                <div className={styles.mobileTechSection}>
                  <div className={styles.mobileTechGrid}>
                    {currentProject.tech?.map((techName) => (
                      <div key={techName} className={styles.mobileTechBadge}>
                        <TechIcon techName={techName} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.mobileProjectButtons}>
                  {currentProject.liveDemo !== "#" && (
                    <a
                      href={currentProject.liveDemo}
                      className={styles.mobilePrimaryBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Demo</span>
                    </a>
                  )}
                  {currentProject.github !== "#" && (
                    <a
                      href={currentProject.github}
                      className={styles.mobileSecondaryBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <NavigationControls
          onPrev={() => changeSlide("prev")}
          onNext={() => changeSlide("next")}
          currentIndex={currentIndex}
          total={projects.length}
        />
      </section>
    </LazyMotion>
  );
};

const DesktopPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEmbedLoading, setIsEmbedLoading] = useState(true);
  const currentProject = projects[currentIndex];

  useEffect(() => {
    // Reset loading state when project changes
    setIsEmbedLoading(true);
    
    // Preload next and previous project assets
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    
    [projects[nextIndex], projects[prevIndex]].forEach(project => {
      if (project.videoPreview) {
        const video = document.createElement('video');
        video.src = project.videoPreview;
        video.preload = 'auto';
        video.load();
      } else if (project.imageRender || project.thumbnail) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = project.imageRender || project.thumbnail;
        document.head.appendChild(link);
      }
    });
  }, [currentIndex]);

  const [direction, setDirection] = useState<"next" | "prev">("next");

  const changeSlide = (slideDirection: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(slideDirection);
    setCurrentIndex((prevIndex) =>
      slideDirection === "next"
        ? (prevIndex + 1) % projects.length
        : (prevIndex - 1 + projects.length) % projects.length
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const slideVariants = {
    enter: (dir: string) => ({
      x: dir === "next" ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "next" ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className={styles.desktopPortfolioSection}>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={styles.twoCardLayout}
          >
            {/* Preview Card */}
            <div className={styles.previewCard}>
              <div className={styles.previewImageWrapper}>
                {currentProject.videoPreview ? (
                  <video
                    src={currentProject.videoPreview}
                    className={styles.previewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : currentProject.embedCode ? (
                  <>
                    {isEmbedLoading && (
                      <div className={styles.embedLoading}>
                        <div className={styles.spinner}></div>
                        <span>Loading 3D Model...</span>
                      </div>
                    )}
                    <div
                      className={styles.sketchfabEmbed}
                      dangerouslySetInnerHTML={{
                        __html: currentProject.embedCode.replace(
                          '<iframe',
                          `<iframe onload="this.parentElement.parentElement.querySelector('.${styles.embedLoading}')?.remove()"`
                        ),
                      }}
                    />
                  </>
                ) : currentProject.imageRender ? (
                  <Image
                    src={currentProject.imageRender}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1200px) 50vw, 600px"
                    quality={90}
                    priority
                    fetchPriority="high"
                    className={styles.previewImage}
                  />
                ) : (
                  <Image
                    src={currentProject.thumbnail}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1200px) 50vw, 600px"
                    quality={90}
                    priority
                    fetchPriority="high"
                    className={styles.previewImage}
                  />
                )}
                <div className={styles.previewOverlay}>
                  <span className={styles.viewLabel}>Preview</span>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className={styles.infoCard}>
              <div className={styles.infoContent}>
                <h2 className={styles.projectTitle}>
                  {currentProject.title}
                </h2>

                <p className={styles.projectDescription}>
                  {currentProject.description}
                </p>

                <div className={styles.techStackSection}>
                  <h3 className={styles.techStackLabel}>Tech Stack</h3>
                  <div className={styles.techGrid}>
                    {currentProject.tech?.map((techName) => (
                      <div key={techName} className={styles.techBadge}>
                        <TechIcon techName={techName} />
                        <span className={styles.techName}>{techName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.projectButtons}>
                  {currentProject.liveDemo !== "#" && (
                    <a
                      href={currentProject.liveDemo}
                      className={styles.primaryBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {currentProject.github !== "#" && (
                    <a
                      href={currentProject.github}
                      className={styles.secondaryBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <NavigationControls
          onPrev={() => changeSlide("prev")}
          onNext={() => changeSlide("next")}
          currentIndex={currentIndex}
          total={projects.length}
        />
      </section>
    </LazyMotion>
  );
};

const Portfolio = () => {
  const isMobile = useMediaQuery(768);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {isMobile ? <MobilePortfolio /> : <DesktopPortfolio />}
    </motion.div>
  );
};

export default Portfolio;
