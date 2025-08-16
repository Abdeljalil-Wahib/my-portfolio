'use client';
import { motion } from 'framer-motion';
import Portfolio from '@/components/Portfolio/Portfolio';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <Portfolio/>
    </motion.div>
  );
}