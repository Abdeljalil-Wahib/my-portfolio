import styles from '@/components/Portfolio/Portfolio.module.css';
import { motion, AnimatePresence, Variants, LazyMotion, domAnimation } from "framer-motion";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavigationControls from "@/utils/NavigationControls";
import { useMediaQuery } from "@/utils/useMediaQuery";
import { FaReact, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiC } from 'react-icons/si';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';

const projects = [
    {
        title: "SnapShop - E-commerce SPA",
        thumbnail: "/images/snapshop-thumbnail.png",
        description: "A full-featured, responsive e-commerce single-page application built from the ground up with Next.js and Redux Toolkit. This project showcases modern frontend architecture and complex state management.",
        liveDemo: "https://snapshop-ajwahib.vercel.app/",
        github: "https://github.com/Abdeljalil-Wahib/Ecom-SPA",
        tech: ['nextjs', 'react', 'redux', 'sass'],
        cardType: 'landscape',
    },
    {
        title: "Frontend Mentor Challenges",
        thumbnail: "/images/frontend-mentor-thumbnail.png",
        description: "A collection of pixel-perfect UI challenges from Frontend Mentor, demonstrating a strong command of responsive design principles, HTML, CSS, and JavaScript to precisely match professional designs.",
        liveDemo: "https://www.frontendmentor.io/profile/Ajwahib95/solutions",
        github: "#",
        tech: ['html', 'css', 'javascript'],
    },
    {
        title: "Minishell - A Custom Shell",
        thumbnail: "/images/minishell-thumbnail.png",
        description: "A custom implementation of a command-line shell in C. Features include parsing of complex commands, I/O redirection, pipes for inter-process communication, and signal handling (Ctrl-C, Ctrl-\\).",
        liveDemo: "#",
        github: "https://github.com/Abdeljalil-Wahib/minishell",
        tech: ['c'],
    },
    {
        title: "Blender Models",
        thumbnail: "/images/3dmodel-thumbnail.png",
        description: "A showcase of 3D models and scenes created with Blender...",
        liveDemo: "#",
        github: "#",
        tech: ['blender'],
        cardType: 'landscape',
        embedCode: `<iframe title="Leona_shield" frameBorder="0" allowFullScreen mozAllowFullScreen="true" webkitAllowFullScreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b99e9bf599c64e398dec0e139d88f043/embed"></iframe>`
    },
    {
        title: "Retro Rewind - Blender Scene",
        thumbnail: "/images/retro-rewind-thumbnail.png",
        description: "A detailed Retro gaming room scene rendered in Blender, focusing on realistic materials and atmospheric lighting.",
        liveDemo: "#",
        github: "#",
        tech: ['blender'],
        cardType: 'landscape',
        imageRender: "/images/retro-rewind.png"
    },
];

interface TechIconProps {
    techName: string;
}

const TechIcon = ({ techName }: TechIconProps) => {
    switch (techName) {
        case 'react': return <FaReact title="React" />;
        case 'nextjs': return <SiNextdotjs title="Next.js" />;
        case 'redux': return <SiRedux title="Redux" />;
        case 'sass': return <FaSass title="Sass" />;
        case 'c': return <SiC title="C Language" />;
        case 'html': return <IoLogoHtml5 title="Html" />;
        case 'css': return <IoLogoCss3 title="Css" />;
        case 'javascript': return <IoLogoJavascript title="Javascript" />;
        default: return null;
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
        setTimeout(() => {
            const newIndex = direction === "next" ? (currentIndex + 1) % projects.length : (currentIndex - 1 + projects.length) % projects.length;
            setCurrentIndex(newIndex);
            setIsFlipped(false);
            setTimeout(() => { setIsTransitioning(false); }, 50);
        }, 300);
    };

    const cardContainerClasses = `${styles.mobileCardContainer} ${currentProject.cardType === 'landscape' ? styles.mobileLandscape : ''} ${isTransitioning ? styles.isTransitioning : ''}`;

    return (
        <section className={styles.mobilePortfolioSection}>
            <div className={cardContainerClasses}>
                <div className={`${styles.mobileFlipper} ${isFlipped ? styles.isFlipped : ''}`}>
                    <div
                        className={`${styles.mobileCardBase} ${styles.mobileCardBack} ${currentProject.embedCode || currentProject.imageRender ? styles.isEmbedded : ''}`}
                        onClick={() => setIsFlipped(false)}
                        style={{ '--bg-image': `url(${currentProject.thumbnail})` } as React.CSSProperties}
                    >
                        <div className={styles.details}>
                            {currentProject.embedCode ? <div className={styles.sketchfabEmbed} dangerouslySetInnerHTML={{ __html: currentProject.embedCode }} />
                                : currentProject.imageRender ? <div className={styles.imageRender}><Image src={currentProject.imageRender} alt={currentProject.title} style={{ objectFit: 'cover' }} sizes="90vw" quality={100} priority fill /></div>
                                    : <>
                                        <p>{currentProject.description}</p>
                                        <div className={styles.buttons}>
                                            {currentProject.liveDemo !== "#" && <a href={currentProject.liveDemo} className={styles.demoBtn} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>}
                                            {currentProject.github !== "#" && <a href={currentProject.github} className={styles.githubBtn} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Github</a>}
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                    <div className={`${styles.mobileCardBase} ${styles.mobileCardFront}`}>
                        <Image src={currentProject.thumbnail} alt={currentProject.title} className={styles.frontImg} sizes="90vw" quality={100} priority fill />
                        <div className={styles.frontContent}>
                            <h3>{currentProject.title}</h3>
                            <div className={styles.bottomContent}>
                                <button onClick={() => setIsFlipped(true)} className={styles.showMoreBtn}>Show More</button>
                                <div className={styles.techIcons}>{currentProject.tech?.map((techName) => <TechIcon key={techName} techName={techName} />)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavigationControls onPrev={() => changeSlide("prev")} onNext={() => changeSlide("next")} currentIndex={currentIndex} total={projects.length} />
        </section>
    );
};

// --- VARIANTS FOR DESKTOP COMPONENT ---
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
const mobileFrontCardVariants: Variants = {
    enter: { y: "-150%" },
    stacked: { y: "0%", transition: { type: "spring", duration: 1, bounce: 0.2 } },
    exit: { y: "-150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};
const mobileBackCardVariants: Variants = {
    enter: { y: "150%" },
    stacked: { y: "0%", rotateY: 180, transition: { type: "spring", duration: 1, bounce: 0.2 } },
    exit: { y: "150%", transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
};
const groupFlipVariants: Variants = {
    stacked: { rotateY: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    revealed: { rotateY: 180, transition: { duration: 0.7, ease: "easeInOut" } },
};
const groupFadeVariants: Variants = {
    enter: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const DesktopPortfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const isMobile = useMediaQuery(768);
    const currentProject = projects[currentIndex];

    const frontCardVariants = isMobile ? mobileFrontCardVariants : desktopFrontCardVariants;
    const backCardVariants = isMobile ? mobileBackCardVariants : desktopBackCardVariants;

    const revealState = isRevealed ? "revealed" : "stacked";

    const changeSlide = (direction: "next" | "prev") => {
        setIsRevealed(false);
        setCurrentIndex(prevIndex => (direction === "next" ? (prevIndex + 1) % projects.length : (prevIndex - 1 + projects.length) % projects.length));
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className={styles.portfolioContainer}>
                <div className={styles.cardWrapper}>
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div className={styles.cardGroup} key={currentIndex} variants={groupFadeVariants} initial="enter" animate="enter" exit="exit">
                            <motion.div className={styles.flipper} variants={isMobile ? groupFlipVariants : undefined} animate={isMobile ? revealState : "stacked"}>
                                <motion.div className={`${styles.cardBase} ${styles.cardBack} ${currentProject.embedCode || currentProject.imageRender ? styles.isEmbedded : ''}`} variants={backCardVariants} initial="enter" animate={isMobile ? "stacked" : revealState} exit="exit" style={{ '--bg-image': `url(${currentProject.thumbnail})` } as React.CSSProperties}>
                                    <div className={styles.details}>
                                        {currentProject.embedCode ? <div className={styles.sketchfabEmbed} dangerouslySetInnerHTML={{ __html: currentProject.embedCode }} />
                                            : currentProject.imageRender ? <Image src={currentProject.imageRender} alt={currentProject.title} fill sizes="(max-width: 768px) 80vw, 800px" quality={95} style={{ objectFit: 'cover' }} />
                                                : <>
                                                    <p>{currentProject.description}</p>
                                                    <div className={styles.buttons}>
                                                        {currentProject.liveDemo !== "#" && <a href={currentProject.liveDemo} className={styles.demoBtn} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                                                        {currentProject.github !== "#" && <a href={currentProject.github} className={styles.githubBtn} target="_blank" rel="noopener noreferrer">Github</a>}
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </motion.div>
                                <motion.div className={`${styles.cardBase} ${styles.cardFront}`} variants={frontCardVariants} initial="enter" animate={isMobile ? "stacked" : revealState} exit="exit">
                                    <Image src={currentProject.thumbnail} alt={currentProject.title} fill sizes="(max-width: 768px) 80vw, 600px" quality={100} priority className={styles.frontImg} />
                                    <div className={styles.frontContent}>
                                        <h3>{currentProject.title}</h3>
                                        <div className={styles.bottomContent}>
                                            <button onClick={() => setIsRevealed(!isRevealed)} className={styles.showMoreBtn}>{isRevealed ? "Go Back" : "Show More"}</button>
                                            <div className={styles.techIcons}>{currentProject.tech?.map((techName) => <TechIcon key={techName} techName={techName} />)}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    <NavigationControls onPrev={() => changeSlide("prev")} onNext={() => changeSlide("next")} currentIndex={currentIndex} total={projects.length} />
                </div>
            </section>
        </LazyMotion>
    );
};

const Portfolio = () => {
    const isMobile = useMediaQuery(768);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);
    if (!isClient) { return null; }
    return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />;
};

export default Portfolio;