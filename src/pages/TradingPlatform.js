import React, { useEffect } from 'react';
import './TradingPlatform.css';
import { IoDesktopOutline } from "react-icons/io5";

const TradingPlatforms = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      observer.observe(element);
    });

    // Initial check for elements already in view
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add('animate');
        observer.unobserve(element);
      }
    });

  }, []);

  return (
    <div className="trading-platforms">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/trading_background.jpg)` }}
      >
        <div className="hero-mask">
          <h1 className="hero-title animate-on-scroll">Trading Platforms</h1>
          <p className="hero-subtitle animate-on-scroll">Trade with DX Trade, our state-of-the-art trading platform</p>
          <div className="dx-logo animate-on-scroll">
            <img src={`${process.env.PUBLIC_URL}/images/dxtrade-no-background.png`} alt="DX Trade Logo" />
          </div>
        </div>
      </div>
      <div className="platform-info-section">
        <div className="platform-logo animate-on-scroll">
          <img src={`${process.env.PUBLIC_URL}/images/dxtrade-no-background.png`} alt="DX Trade Logo" />
        </div>
        <div className="platform-details animate-on-scroll">
          <h2>DX Trade</h2>
          <p>
            DX Trade is a cutting-edge trading platform that offers a comprehensive suite of tools for traders of all levels. With real-time market data, advanced charting, and customizable interfaces, DX Trade provides a seamless trading experience.
          </p><br></br>
          <ul>
            <li>Real-time market data</li>
            <li>Advanced charting tools</li>
            <li>Customizable interface</li>
            <li>Secure and reliable</li>
            <li>Accessible on multiple devices</li>
          </ul>
        </div>
      </div>
    
      <div className="download-section">
        <h2 className="animate-on-scroll">Access DX Trade</h2>
        <div className="download-buttons animate-on-scroll">
          <a href="https://dx.alphafunder.io/" className="download-button">
            Web Browser <IoDesktopOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TradingPlatforms;