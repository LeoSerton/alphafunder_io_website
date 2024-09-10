import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [targetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleScrollClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      setTargetSection(sectionId);
      navigate('/');
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && targetSection) {
      document.getElementById(targetSection).scrollIntoView({ behavior: 'smooth' });
      setTargetSection(null); // Reset the target section after scrolling
    }
  }, [location, targetSection]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/AF_newLogo_white.png" alt="AF Logo" />
          </Link>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/">How It Works <FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="dropdown">
              <li>
                <button onClick={() => handleScrollClick('process-section')} className="scroll-link">Challenge Process</button>
              </li>
              <li>
                <button onClick={() => handleScrollClick('trading-objectives-section')} className="scroll-link">Trading Objectives</button>
              </li>
            </ul>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
          <li>
            <Link to="/trading-platforms">Trading <FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="dropdown">
              <li><Link to="/trading-platforms">Trading Platforms</Link></li>
              <li><Link to="/symbols">Symbols</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/about-us">About Us <FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="dropdown">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </li>
          <li>
            <a href="https://client.alphafunder.io/sign-in" target="_blank" rel="noopener noreferrer">
              Client Area <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown">
              <li><a href="https://client.alphafunder.io/sign-in" target="_blank" rel="noopener noreferrer">Client Area</a></li>
              <li><Link to="/client-area">Delete Account</Link></li>
            </ul>
          </li>
        </ul>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <button className="close-menu" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="mobile-nav-links">
            <li>
              <button onClick={() => handleDropdownToggle('how-it-works')}>How It Works <FontAwesomeIcon icon={faCaretDown} /></button>
              <ul className={`dropdown ${activeDropdown === 'how-it-works' ? 'open' : ''}`}>
                <li>
                  <button onClick={() => handleScrollClick('process-section')} className="scroll-link">Evaluation Process</button>
                </li>
                <li>
                  <button onClick={() => handleScrollClick('trading-objectives-section')} className="scroll-link">Trading Objectives</button>
                </li>
              </ul>
            </li>
            <li><Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link></li>
            <li>
              <Link to="/trading-platforms" onClick={toggleMobileMenu}>Trading <FontAwesomeIcon icon={faCaretDown} /></Link>
              <ul className="dropdown">
                <li><Link to="/trading-platforms" onClick={toggleMobileMenu}>Trading Platforms</Link></li>
                <li><Link to="/symbols" onClick={toggleMobileMenu}>Symbols</Link></li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleDropdownToggle('about-us')}>About Us <FontAwesomeIcon icon={faCaretDown} /></button>
              <ul className={`dropdown ${activeDropdown === 'about-us' ? 'open' : ''}`}>
                <li><Link to="/about-us" onClick={toggleMobileMenu}>About Us</Link></li>
                <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/client-area" onClick={toggleMobileMenu}>Client Area <FontAwesomeIcon icon={faCaretDown} /></Link>
              <ul className="dropdown">
                <li><a href="https://client.alphafunder.io/sign-in" target="_blank" rel="noopener noreferrer">Client Area</a></li>
                <li><Link to="/client-area" onClick={toggleMobileMenu}>Delete Account</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

