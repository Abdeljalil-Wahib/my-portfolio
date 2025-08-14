import styles from '@/components/Hero/Hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.heroSection} id="home">
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <h2 className={styles.greeting}>Hello, I'm</h2>
                    <h1 className={styles.name}>Abdeljalil Wahib</h1>
                    <div className={styles.roleContainer}>
                        <h3 className={styles.roleWhite}>And I'm a</h3>
                        <h3 className={styles.rolePurple}>Front-end Developer</h3>
                    </div>
                    <p className={styles.bio}>Hi! i'm Abdeljalil Wahib, a passionate front-end Developer specializing in translating design concepts into seamless and interactive web experiences.</p>
                </div>
                <div className={styles.actionsContainer}>
                    <div className={styles.socials}>
                        <a href="">LinkedIn</a>
                        <a href="">Github</a>
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
                />
            </div>
            
        </section>
    );
};

export default Hero
