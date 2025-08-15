'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Header />
        <AnimatePresence mode='wait'>
        <main key={pathname}>{children}</main> {/* Your page content will go here */}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
