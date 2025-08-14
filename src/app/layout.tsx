import type { Metadata } from 'next';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './globals.css';

// This is the new way to handle <head> content in the App Router

export const metadata: Metadata = {
  title: 'Abdeljalil Wahib | Front-end Developer',
  description: 'Portfolio of Abdeljalil Wahib, a passionate front-end developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> {/* Your page content will go here */}
        <Footer />
      </body>
    </html>
  );
}
