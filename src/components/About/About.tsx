'use client';

import styles from '@/components/About/About.module.css'
import Image from 'next/image'
import  { myWhyText, myJourneyText} from '@/utils/aboutContent'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.textCard}>
                <h2 className={styles.sectionTitle}>My Why</h2>
                <p>"{ myWhyText }"</p>
                <h2 className={styles.sectionTitle}>My Journey</h2>
                <p>"{ myJourneyText }"</p>
            </div>

            <div className={styles.gallery}>
                <div className={styles.imageWrapper}>
                    {/* <Image
                        src={}
                        alt=''
                        fill
                        className={styles.galleryImg}
                    
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default About