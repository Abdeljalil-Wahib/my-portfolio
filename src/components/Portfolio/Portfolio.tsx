import styles from '@/components/Portfolio/Portfolio.module.css';
import { motion, AnimatePresence, Variants, LazyMotion, domAnimation } from "framer-motion";
import Image from 'next/image';
import { useState } from 'react';
import NavigationControls from "@/utils/NavigationControls";
import { useMediaQuery } from "@/utils/useMediaQuery";

const projects = [
    {
        title: "Project One",
        thumbnail: "/images/cluster.jpeg",
        description: "This is a detailed description for Project One, explaining its purpose, the technologies used, and the problems it solves.",
        liveDemo: "#",
        github: "#",
    },
    {
        title: "Project Two",
        thumbnail: "/images/cluster.jpeg",
        description: "This is a detailed description for Project Two, highlighting its unique features and the development process.",
        liveDemo: "#",
        github: "#",
    },
];

// --- DESKTOP VARIANTS (Horizontal Split) ---
const desktopFrontCardVariants: Variants = {
    enter: { x: "-150%" },
    stacked: { x: "0%", transition: { type: "spring", duration: 1, bounce: 0.2 } },
    revealed: { x: "-55%", transition: { type: "spring", duration: 0.8, bounce: 0.2 } },
    exit: { x: "-150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};
const desktopBackCardVariants: Variants = {
    enter: { x: "150%" },
    stacked: { x: "0%", scale: 0.9, opacity: 0.8, transition: { type: "spring", duration: 1, bounce: 0.2 } },
    revealed: { x: "55%", scale: 1, opacity: 1, transition: { type: "spring", duration: 0.8, bounce: 0.2 } },
    exit: { x: "150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};


// --- MOBILE VARIANTS (Vertical Enter/Exit) ---
const mobileFrontCardVariants: Variants = {
    enter: { y: "-150%" },
    stacked: { y: "0%", transition: { type: "spring", duration: 1, bounce: 0.2 } },
    exit: { y: "-150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};
// The back card is pre-rotated so the flip works correctly
const mobileBackCardVariants: Variants = {
    enter: { y: "150%" },
    stacked: { y: "0%", rotateY: 180, transition: { type: "spring", duration: 1, bounce: 0.2 } },
    exit: { y: "150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};

// Parent container variants to handle the flip on mobile
const groupFlipVariants: Variants = {
    stacked: { rotateY: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    revealed: { rotateY: 180, transition: { duration: 0.7, ease: "easeInOut" } },
};

// General fade for project transitions
const groupFadeVariants: Variants = {
    enter: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, delay: 0.1 } },
};


const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const isMobile = useMediaQuery(768);

    const currentProject = projects[currentIndex];

    const frontCardVariants = isMobile ? mobileFrontCardVariants : desktopFrontCardVariants;
    const backCardVariants = isMobile ? mobileBackCardVariants : desktopBackCardVariants;

    const revealState = isRevealed ? "revealed" : "stacked";

    const changeSlide = (direction: "next" | "prev") => {
        setIsRevealed(false);
        setCurrentIndex(prevIndex => {
            return direction === "next"
                ? (prevIndex + 1) % projects.length
                : (prevIndex - 1 + projects.length) % projects.length;
        });
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className={styles.portfolioContainer}>
                <div className={styles.cardWrapper}>
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            className={styles.cardGroup}
                            key={currentIndex}
                            variants={groupFadeVariants}
                            initial="enter"
                            animate="enter"
                            exit="exit"
                        >
                            <motion.div
                                className={styles.flipper}
                                variants={isMobile ? groupFlipVariants : undefined}
                                animate={isMobile ? revealState : "stacked"}
                            >
                                <motion.div
                                    className={`${styles.cardBase} ${styles.cardBack}`}
                                    variants={backCardVariants}
                                    initial="enter"
                                    animate={isMobile ? "stacked" : revealState}
                                    exit="exit"
                                    style={{ '--bg-image': `url(${currentProject.thumbnail})` } as React.CSSProperties}
                                >
                                   <div className={styles.details}>
                                        <p>{currentProject.description}</p>
                                        <div className={styles.buttons}>
                                            <a href={currentProject.liveDemo} className={styles.demoBtn}>Live Demo</a>
                                            <a href={currentProject.github} className={styles.githubBtn}>Github</a>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className={`${styles.cardBase} ${styles.cardFront}`}
                                    variants={frontCardVariants}
                                    initial="enter"
                                    animate={isMobile ? "stacked" : revealState}
                                    exit="exit"
                                >
                                    {/* ✨ FIX: Updated Image component props */}
                                    <Image
                                        src={currentProject.thumbnail}
                                        alt={currentProject.title}
                                        fill
                                        sizes="(max-width: 768px) 80vw, 600px"
                                        className={styles.frontImg}
                                    />
                                    <div className={styles.frontContent}>
                                        <h3>{currentProject.title}</h3>
                                        <button onClick={() => setIsRevealed(!isRevealed)} className={styles.showMoreBtn}>
                                            {isRevealed ? "Go Back" : "Show More"}
                                        </button>
                                    </div>
                                </motion.div>
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

export default Portfolio;