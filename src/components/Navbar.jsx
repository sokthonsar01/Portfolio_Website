import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Sok Thonsar</span>
          <span className="logo-dot">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-socials">
            <a href="https://github.com/sokthonsar01" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`nav-mobile-menu glass-panel ${isOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                onClick={toggleMenu}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-socials-mobile">
            <a href="https://github.com/sokthonsar01" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
