'use client';
import { motion } from 'framer-motion';
import About from '@/components/About/About';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <About/>
    </motion.div>
  );
}
