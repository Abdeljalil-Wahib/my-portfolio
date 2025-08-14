import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link  href="/">
                    <span className={styles.logoPurple}>Abdeljalil</span>
                    <span className={styles.logoWhite}>Wahib</span>
                </Link>
            </div>
        <div>
            <nav className={styles.nav}> 
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/#about">About</Link>
                <Link className={styles.navLink} href="/#skills">Skills</Link>
                <Link className={styles.navLink} href="/#portfolio">Portfolio</Link>
                <Link className={styles.navLink} href="/#contact">Contacts</Link>
            </nav>
        </div>
        </header>
    );
};

export default Header;