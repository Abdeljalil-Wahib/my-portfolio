'use client';
import styles from '@/components/Hero/Hero.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <h2 className={styles.greeting}>Hello, I'm</h2>
                    <h1 className={styles.name}>Abdeljalil Wahib</h1>
                    <div className={styles.roleContainer}>
                        <h2 className={styles.roleWhite}>
                            And I'm a{' '}
                            <span className={styles.highlight}>
                                <Typewriter
                                    words={['Front-End Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                />
                            </span>
                        </h2>
                    </div>
                    <p className={styles.bio}>Hi! i'm Abdeljalil Wahib, a passionate front-end Developer specializing in translating design concepts into seamless and interactive web experiences.</p>
                </div>
                <div className={styles.actionsContainer}>
                    <div className={styles.socials}>
                        <a href="https://github.com/Abdeljalil-Wahib" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <a href="https://linkedin.com/in/abdeljalil-wahib" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon} />
                        </a>
                    </div>
                </div>
                <button className={styles.cvBtn}>Download CV</button>
            </div>
            <div className={styles.heroImageContainer}>
                <Image
                    className={styles.portraitImage}
                    src="/images/awahib.jpeg"
                    alt="A picture of me"
                    width={800}
                    height={600}
                    priority
                />
            </div>
        </section>
    );
};

export default Hero
