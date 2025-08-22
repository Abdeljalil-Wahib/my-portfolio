// 'use client';
import styles from '@/components/About/About.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { myWhyText, myJourneyText, myPhilosophyText, whatImLearning } from '@/utils/aboutContent'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.textCard}>
                <h2 className={styles.sectionTitle}>My Why</h2>
                <p className={styles.textContainer}>{myWhyText}</p>
                <h2 className={styles.sectionTitle}>My Journey</h2>
                <p className={styles.textContainer}>{myJourneyText}</p>
                <h2 className={styles.sectionTitle}>My Philosophy</h2>
                <p className={styles.textContainer}>{myPhilosophyText}</p>
                <h2 className={styles.sectionTitle}>What I&apos;m Learning Next</h2>
                <p className={styles.textContainer}>{whatImLearning}</p>
                <div className={styles.ctaBtns}>
                    <Link href="/foundations">
                        <button className={styles.viewFoundationBtn}>My Foundation</button>
                    </Link>
                    <Link href="/portfolio">
                        <button className={styles.viewProjectsBtn}>View My Projects</button>
                    </Link>
                </div>
            </div>

            <div className={styles.gallery}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.galleryImg}
                        src="/images/cluster.jpeg"
                        alt="A picture of my school"
                        priority={true}
                        quality={100}
                        fill
                    />
                </div>
                <p className={styles.imageCaption}>
                    The 1337 School (42 Network) Cluster in Ben Guerir, Morocco.
                </p>
            </div>
        </section>
    )
}

export default About