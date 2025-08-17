import Foundations from '@/components/Foundations/Foundations'; // Assuming you place your component in src/components/Foundations/
import { Metadata } from 'next';

// Optional: Add metadata for better SEO
export const metadata: Metadata = {
  title: 'My Foundations | Abdeljalil Wahib',
  description: 'Explore the technical foundations and toolkit of Abdeljalil Wahib, from low-level C/C++ programming to modern web development.',
};

const FoundationsPage = () => {
  return <Foundations />;
};

export default FoundationsPage;