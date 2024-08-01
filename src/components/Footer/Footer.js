// import React, { useState } from 'react';
// import Modal from '../Modal/Modal';
// import ModalContent from '../Modal/ModalContent';
// import { FaDiscord, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
// import './Footer.css';

// function Footer() {
//   const [modalFile, setModalFile] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (file) => {
//     setModalFile(file);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSocialClick = (platform) => {
//     let url = '';
//     switch (platform) {
//       case 'Discord':
//         url = 'https://discord.gg/qmTc24RP';
//         break;
//       case 'Instagram':
//         url = 'https://www.instagram.com/alphafunder.io?igsh=aWdxaG9ldDI3MW9i';
//         break;
//       case 'X':
//         url = 'https://twitter.com/yourtwitterprofile'; // Note: X is the rebranded name for Twitter
//         break;
//       case 'WhatsApp':
//         url = 'https://wa.me/yourwhatsapplink';
//         break;
//       case 'Facebook':
//         url = 'https://www.facebook.com/profile.php?id=61561425301615';
//         break;
//       default:
//         break;
//     }
//     if (url) {
//       window.open(url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">
//           <img src="/images/AF_newLogo.png" alt="AF Logo" />
//         </div>
//         <div className="footer-center">
//           <div className="footer-links">
//             <button onClick={() => openModal('terms-of-service.md')}>Terms of Service</button>
//             <button onClick={() => openModal('privacy-policy.md')}>Privacy Policy</button>
//             <button onClick={() => openModal('risk-disclosure.md')}>Risk Disclosure</button>
//             <button onClick={() => openModal('refund-policy.md')}>Refund Policy</button>
//           </div>
//           <p>&copy; 2024 Alpha Funder. All rights reserved.</p>
//         </div>
//         <div className="social-media">
//           <button onClick={() => handleSocialClick('Discord')} aria-label="Discord">
//             <FaDiscord />
//           </button>
//           <button onClick={() => handleSocialClick('Instagram')} aria-label="Instagram">
//             <FaInstagram />
//           </button>
//           <button onClick={() => handleSocialClick('X')} aria-label="X">
//             <FaXTwitter />
//           </button>
//           <button onClick={() => handleSocialClick('WhatsApp')} aria-label="WhatsApp">
//             <FaWhatsapp />
//           </button>
//           <button onClick={() => handleSocialClick('Facebook')} aria-label="Facebook">
//             <FaFacebook />
//           </button>
//         </div>
//       </div>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <ModalContent file={modalFile} />
//         </Modal>
//       )}
//     </footer>
//   );
// }

// export default Footer;

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/ModalContent';
import { FaDiscord, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

function Footer() {
  const [modalFile, setModalFile] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (file) => {
    setModalFile(file);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <img src="/images/AF_newLogo.png" alt="AF Logo" />
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
            <li><button onClick={() => openModal('terms-of-service.md')}>Terms & Conditions</button></li>
            <li><a href="/AF-PAIA-Manual.pdf" target="_blank" rel="noopener noreferrer" class="footer-link-button">PAIA Manual</a></li>
            <li><button onClick={() => openModal('privacy-policy.md')}>Privacy Policy</button></li>
            <li><button onClick={() => openModal('risk-disclosure.md')}>Risk Disclosure</button></li>
            <li><button onClick={() => openModal('refund-policy.md')}>Refund Policy</button></li>
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
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalContent file={modalFile} />
        </Modal>
      )}
    </footer>
  );
}

export default Footer;








