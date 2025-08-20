import Foundations from '@/components/Foundations/Foundations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Foundations | Abdeljalil Wahib',
  description: 'Explore the technical foundations and toolkit of Abdeljalil Wahib, from low-level C/C++ programming to modern web development.',
};

const FoundationsPage = () => {
  return <Foundations />;
};

export default FoundationsPage;