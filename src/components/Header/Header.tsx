'use client'

import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleLinkClick = () => {
        setMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" onClick={handleLinkClick}>
                    <span className={styles.logoPurple}>Abdeljalil</span>
                    <span className={styles.logoWhite}>Wahib</span>
                </Link>
            </div>
            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Open menu'
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </button>
            <div>
                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    <Link className={styles.navLink} href="/" onClick={handleLinkClick}>Home</Link>
                    <Link className={styles.navLink} href="/about" onClick={handleLinkClick}>About</Link>
                    <Link className={styles.navLink} href="/foundations" onClick={handleLinkClick}>Foundations</Link>
                    <Link className={styles.navLink} href="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
                    <a
                        className={styles.resume}
                        href="/resume.pdf"
                        download="Abdeljalil-Wahib-CV.pdf"
                        onClick={handleLinkClick}
                    >
                        Let's Work Together
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;