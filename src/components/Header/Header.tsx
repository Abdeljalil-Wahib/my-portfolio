"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <header className={styles.header}>
        <div className={styles.logo}>
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <span className={styles.logoPurple}>Abdeljalil</span>
            <span className={styles.logoWhite}>Wahib</span>
          </a>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a
            className={styles.navLink}
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Home
          </a>
          <a
            className={styles.navLink}
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </a>
          <a
            className={styles.navLink}
            href="#foundations"
            onClick={(e) => handleSmoothScroll(e, "foundations")}
          >
            Foundations
          </a>
          <a
            className={styles.navLink}
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "portfolio")}
          >
            Portfolio
          </a>
          <Link
            className={styles.resume}
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Work Together
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
