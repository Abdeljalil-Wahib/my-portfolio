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
      return null; // Blender doesn't have an icon, handled differently
    default:
      return null;
  }
};

const MobilePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentProject = projects[currentIndex];

  const changeSlide = (direction: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Flip back if showing back
    if (isFlipped) {
      setIsFlipped(false);
    }

    const delay = isFlipped ? 600 : 0;
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, delay);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className={styles.mobilePortfolioSection}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className={`${styles.mobileCardContainer} ${
              currentProject.cardType === "landscape"
                ? styles.mobileLandscape
                : ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileFlipper}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Back Card */}
              <div
                className={`${styles.mobileCardBase} ${styles.mobileCardBack} ${
                  currentProject.embedCode || currentProject.imageRender
                    ? styles.isEmbedded
                    : ""
                }`}
                onClick={() => setIsFlipped(false)}
                style={
                  {
                    "--bg-image": `url(${currentProject.thumbnail})`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.details}>
                  {currentProject.embedCode ? (
                    <div
                      className={styles.sketchfabEmbed}
                      dangerouslySetInnerHTML={{
                        __html: currentProject.embedCode,
                      }}
                    />
                  ) : currentProject.imageRender ? (
                    <div className={styles.imageRender}>
                      <Image
                        src={currentProject.imageRender}
                        alt={currentProject.title}
                        style={{ objectFit: "cover" }}
                        sizes="90vw"
                        quality={90}
                        priority
                        fill
                      />
                    </div>
                  ) : (
                    <>
                      <p>{currentProject.description}</p>
                      <div className={styles.buttons}>
                        {currentProject.liveDemo !== "#" && (
                          <a
                            href={currentProject.liveDemo}
                            className={styles.demoBtn}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo
                          </a>
                        )}
                        {currentProject.github !== "#" && (
                          <a
                            href={currentProject.github}
                            className={styles.githubBtn}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Github
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Front Card */}
              <div
                className={`${styles.mobileCardBase} ${styles.mobileCardFront}`}
              >
                <Image
                  src={currentProject.thumbnail}
                  alt={currentProject.title}
                  className={styles.frontImg}
                  sizes="90vw"
                  quality={85}
                  priority
                  fill
                />
                <div className={styles.frontContent}>
                  <h3>{currentProject.title}</h3>
                  <div className={styles.bottomContent}>
                    <button
                      onClick={() => setIsFlipped(true)}
                      className={styles.showMoreBtn}
                    >
                      Show More
                    </button>
                    <div className={styles.techIcons}>
                      {currentProject.tech?.map((techName) => (
                        <TechIcon key={techName} techName={techName} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentProject = projects[currentIndex];

  const changeSlide = (direction: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Flip back if showing back
    if (isFlipped) {
      setIsFlipped(false);
    }

    const delay = isFlipped ? 600 : 0;
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, delay);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className={styles.portfolioContainer}>
        <div className={styles.cardWrapper}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.cardGroup}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={styles.flipper}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Back Card */}
                <div
                  className={`${styles.cardBase} ${styles.cardBack} ${
                    currentProject.embedCode || currentProject.imageRender
                      ? styles.isEmbedded
                      : ""
                  }`}
                  onClick={() => setIsFlipped(false)}
                  style={
                    {
                      "--bg-image": `url(${currentProject.thumbnail})`,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.details}>
                    {currentProject.embedCode ? (
                      <div
                        className={styles.sketchfabEmbed}
                        dangerouslySetInnerHTML={{
                          __html: currentProject.embedCode,
                        }}
                      />
                    ) : currentProject.imageRender ? (
                      <Image
                        src={currentProject.imageRender}
                        alt={currentProject.title}
                        fill
                        sizes="(max-width: 768px) 80vw, 800px"
                        quality={90}
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <>
                        <p>{currentProject.description}</p>
                        <div className={styles.buttons}>
                          {currentProject.liveDemo !== "#" && (
                            <a
                              href={currentProject.liveDemo}
                              className={styles.demoBtn}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          )}
                          {currentProject.github !== "#" && (
                            <a
                              href={currentProject.github}
                              className={styles.githubBtn}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Github
                            </a>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Front Card */}
                <div
                  className={`${styles.cardBase} ${styles.cardFront}`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <Image
                    src={currentProject.thumbnail}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 600px"
                    quality={85}
                    priority
                    className={styles.frontImg}
                  />
                  <div className={styles.frontContent}>
                    <h3>{currentProject.title}</h3>
                    <div className={styles.bottomContent}>
                      <button className={styles.showMoreBtn}>
                        {isFlipped ? "Go Back" : "Show More"}
                      </button>
                      <div className={styles.techIcons}>
                        {currentProject.tech?.map((techName) => (
                          <TechIcon key={techName} techName={techName} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <NavigationControls
            onPrev={() => changeSlide("prev")}
            onNext={() => changeSlide("next")}
            currentIndex={currentIndex}
            total={projects.length}
          />
        </div>
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
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {isMobile ? <MobilePortfolio /> : <DesktopPortfolio />}
    </motion.div>
  );
};

export default Portfolio;
