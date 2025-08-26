'use client';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next"
import './globals.css';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <main key={pathname}>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
