import { Mail } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sok Thonsar</h3>
            <p>Year 2 Software Engineering Student at Camtech University.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/sokthonsar01" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} />
            </a>
            <a href="mailto:contact@example.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sok Thonsar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
