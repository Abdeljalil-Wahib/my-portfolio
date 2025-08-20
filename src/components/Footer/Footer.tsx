import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/Abdeljalil-Wahib" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abdeljalil-wahib/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:ajwahib.dev@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="/resume.pdf" download="Abdeljalil_Wahib_Resume.pdf" aria-label="Download CV">
          <FaFilePdf />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Abdeljalil Wahib. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;