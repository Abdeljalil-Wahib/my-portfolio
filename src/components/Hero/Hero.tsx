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
                    <h2 className={styles.greeting}>Hello, I&apos;m</h2>
                    <h1 className={styles.name}>Abdeljalil Wahib</h1>
                    <div className={styles.roleContainer}>
                        <h2 className={styles.roleWhite}>
                            And I&apos;m a{' '}
                            <span className={styles.highlight}>
                                <Typewriter
                                    words={[
                                        'Web Developer',
                                        'Full-Stack Enthusiast',
                                        'Software Engineering Student @ 1337'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h2>
                    </div>
                    <p className={styles.bio}>I&apos;m a Web Developer and Software Engineering student at 1337 Coding School, passionate about creating interactive and efficient web applications while continuously expanding my expertise in modern web technologies and problem-solving.</p>
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
                <a
                    href="resume.pdf"
                    download="abdeljalil-wahib-resume.pdf"
                    className={styles.cvBtn}
                >
                    Download CV
                </a>
            </div>
            <div className={styles.heroImageContainer}>
                <Image
                    className={styles.portraitImage}
                    src="/images/awahib.jpeg"
                    alt="A picture of me"
                    width={800}
                    height={600}
                    quality={100}
                    priority={true}

                />
            </div>
        </section>
    );
};

export default Hero
