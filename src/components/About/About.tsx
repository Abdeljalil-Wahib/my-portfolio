"use client";
import styles from "@/components/About/About.module.css";
import {
  myWhyText,
  myJourneyText,
  myPhilosophyText,
  whatImLearning,
} from "@/utils/aboutContent";
import { motion } from "framer-motion";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.cardsGrid}>
        <motion.div
          className={styles.card}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className={styles.cardTitle}>My Why</h2>
          <p className={styles.cardText}>{myWhyText}</p>
        </motion.div>

        <motion.div
          className={styles.card}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className={styles.cardTitle}>My Journey</h2>
          <p className={styles.cardText}>{myJourneyText}</p>
        </motion.div>

        <motion.div
          className={styles.card}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className={styles.cardTitle}>My Philosophy</h2>
          <p className={styles.cardText}>{myPhilosophyText}</p>
        </motion.div>

        <motion.div
          className={styles.card}
          custom={3}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className={styles.cardTitle}>What I&apos;m Learning Next</h2>
          <p className={styles.cardText}>{whatImLearning}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
