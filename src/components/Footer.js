import React from 'react';
import { FaDiscord, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../index.css';

function Footer() {

  const handleSocialClick = (platform) => {
    let url = '';
    switch (platform) {
      case 'Discord':
        url = 'https://discord.gg/tbUhpqMDRm';
        break;
      case 'Instagram':
        url = 'https://www.instagram.com/alphafunder.io?igsh=aWdxaG9ldDI3MW9i';
        break;
      case 'X':
        url = 'https://x.com/AlphaFunder'; // Note: X is the rebranded name for Twitter
        break;
      case 'WhatsApp':
        url = 'https://wa.me/message/3PJQVAE3PHSAK1';
        break;
      case 'Facebook':
        url = 'https://www.facebook.com/profile.php?id=61561425301615';
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/AF_newLogo_white.png" alt="AF Logo" />
          <div className="contact-info">
            <p>
              <strong>Email:</strong> <a href="mailto:support@alphafunder.io">support@alphafunder.io</a><br />
              <strong>Address:</strong> Building B, 169 Corobay Ave, Menlyn, Pretoria, 0181<br />
              <strong>Business Hours:</strong> 8am - 7pm, Monday - Saturday (CAT)
            </p>
          </div>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
          <li><a href="pdfs/AF-Terms-of-Use.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Terms of Use</a></li>
            <li><a href="pdfs/AF-Terms-and-Conditions.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Terms & Conditions</a></li>
            <li><a href="pdfs/AF-PAIA-Manual.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">PAIA Manual</a></li>
            <li><a href="pdfs/AF-Privacy-Policy.docx.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Privacy Policy</a></li>
            <li><a href="pdfs/AF-Risk_Disclosure.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Risk Disclosure</a></li>
            <li><a href="pdfs/AF-Refund-Policy.pdf.docx.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Refund Policy</a></li>
            <li><a href="pdfs/AF-AML-POLICY.pdf" target="_blank" rel="noopener noreferrer" className="footer-link-button">Anti-Money Laundering Policy</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Socials</h3>
          <div className="icons">
            <button onClick={() => handleSocialClick('Discord')} aria-label="Discord">
              <FaDiscord />
            </button>
            <button onClick={() => handleSocialClick('Instagram')} aria-label="Instagram">
              <FaInstagram />
            </button>
            <button onClick={() => handleSocialClick('X')} aria-label="X">
              <FaXTwitter />
            </button>
            <button onClick={() => handleSocialClick('WhatsApp')} aria-label="WhatsApp">
              <FaWhatsapp />
            </button>
            <button onClick={() => handleSocialClick('Facebook')} aria-label="Facebook">
              <FaFacebook />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Alpha Funder. All rights reserved.</p>
        <p className="disclaimer">
          Alpha Funder is a product of Alpha Funder (Pty) Ltd. <br />
          Alpha Funder is not a financial product in terms of the FAIS Act and the client is therefore not protected under the FAIS Act. <br />
          All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Alpha Funder only provides services of simulated trading and educational tools for traders. The information on this site is not directed at resident in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Alpha Funder does not act as a broker and do not accept any deposits. The offered technical solution the Alpha Funder platform and data feed is powered by liquidity providers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;