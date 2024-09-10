import React, { useEffect, useRef } from 'react';
import { FaUserPlus, FaKey, FaRocket, FaDollarSign, FaBullseye, FaChartLine, FaMoneyCheckAlt, FaPiggyBank, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import TradingObjectivesSection from '../pages/TradingObjectives';
import '../../src/index.css';
import { useNavigate } from 'react-router-dom';
import { TickerTape } from "react-ts-tradingview-widgets";

const tickerSymbols = [
  { description: "AUD / CAD", proName: "OANDA:AUDCAD" },
  { description: "AUD / CHF", proName: "OANDA:AUDCHF" },
  { description: "GOLD / USD", proName: "OANDA:XAUUSD" },
  { description: "GOLD / EUR", proName: "OANDA:XAUEUR" },
  { description: "SILVER / USD", proName: "OANDA:XAGUSD" },
  { description: "SILVER / EUR", proName: "OANDA:XAGEUR" },
  { description: "AUD / JPY", proName: "OANDA:AUDJPY" },
  { description: "AUD / NZD", proName: "OANDA:AUDNZD" },
  { description: "AUD / USD", proName: "OANDA:AUDUSD" },
  { description: "CAD / CHF", proName: "OANDA:CADCHF" },
  { description: "CAD / JPY", proName: "OANDA:CADJPY" },
  { description: "CHF / JPY", proName: "OANDA:CHFJPY" },
  { description: "EUR / AUD", proName: "OANDA:EURAUD" },
  { description: "EUR / CAD", proName: "OANDA:EURCAD" },
  { description: "EUR / CHF", proName: "OANDA:EURCHF" },
  { description: "EUR / GBP", proName: "OANDA:EURGBP" },
  { description: "EUR / JPY", proName: "OANDA:EURJPY" },
  { description: "EUR / NZD", proName: "OANDA:EURNZD" },
  { description: "EUR / USD", proName: "OANDA:EURUSD" },
  { description: "EUR / ZAR", proName: "OANDA:EURZAR" },
  { description: "GBP / AUD", proName: "OANDA:GBPAUD" },
  { description: "GBP / CAD", proName: "OANDA:GBPCAD" },
  { description: "GBP / CHF", proName: "OANDA:GBPCHF" },
  { description: "GBP / JPY", proName: "OANDA:GBPJPY" },
  { description: "GBP / NZD", proName: "OANDA:GBPNZD" },
];


// Become Funded Section Component
export const BecomeFundedSection = () => {
  const becomeFundedRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirectToFAQ = () => {
    navigate('/FAQ');
  };

  // This opens the new link in the same Tab, code below it opens in a new tab
  // const handleBuyChallengeRedirect = () => {
  //   window.location.href = 'https://client.alphafunder.io/sign-in';

  // };

  const handleBuyChallengeRedirect = () => {
    window.open('https://client.alphafunder.io/sign-in', '_blank', 'noopener,noreferrer');
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = becomeFundedRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="become-funded-section">
      <div className="become-funded-container" ref={becomeFundedRef}>
        <div className="become-funded-content">
          <h2 className="become-funded-title">Become an Alpha Trader</h2>
          <p className="become-funded-subtitle">Receive credentials instantly and login to the trader dashboard.</p>
          <div className="become-funded-buttons">
          <button className="become-funded-button" onClick={handleBuyChallengeRedirect}>Start Challenge Now!</button>
            <button className="become-funded-button" onClick={handleRedirectToFAQ}>View FAQs</button>
          </div>
        </div>
        <div className="become-funded-image-container">
          <img src="/images/jason_funded_image.jpg" alt="Become-funded_image" className="become-funded-image" />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const whyUsRef = useRef(null);
  const contentTextRef = useRef(null);
  const contentImageRef = useRef(null);
  const navigate = useNavigate();
  const becomeFundedRef = useRef(null);

  const handleRedirectToFAQ = () => {
    navigate('/FAQ');
  };

  // Code below opens the new pafe in the same tab, new code opens a new tab
  // const handleBuyChallengeRedirect = () => {
  //   window.location.href = 'https://client.alphafunder.io/sign-in';
  // };
  
  const handleBuyChallengeRedirect = () => {
    window.open('https://client.alphafunder.io/sign-in', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const currentRef = whyUsRef.current;
    if (currentRef) {
      const cards = currentRef.querySelectorAll('.why-us-card, .why-us-title');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (currentRef) {
        const cards = currentRef.querySelectorAll('.why-us-card, .why-us-title');
        cards.forEach((card) => {
          observer.unobserve(card);
          card.classList.remove('animate');
        });
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = becomeFundedRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentContentTextRef = contentTextRef.current;
    const currentContentImageRef = contentImageRef.current;

    if (currentContentTextRef) {
      observer.observe(currentContentTextRef);
    }

    if (currentContentImageRef) {
      observer.observe(currentContentImageRef);
    }

    return () => {
      if (currentContentTextRef) {
        observer.unobserve(currentContentTextRef);
        currentContentTextRef.classList.remove('animate');
      }

      if (currentContentImageRef) {
        observer.unobserve(currentContentImageRef);
        currentContentImageRef.classList.remove('animate');
      }
    };
  }, []);

  return (
    <div className="home-page">
      <div className="home-hero-section">
        <div className="text-container">
          <h2 className="pre-headline">For Africa, By Africa</h2>
          <h1 className="headline">Funding Solutions for Traders</h1>
          <p className="description">
            Trade up to the equivalent of R4,000,000 and keep up to 90% of the profit!
          </p>
          <div className="buttons">
            <button className="home-challenge-button" onClick={handleBuyChallengeRedirect}>GET STARTED</button>
          </div>
        </div>
        {/* <div className="placeholder-container">
          <span className="placeholder-text">Video Placeholder</span>
        </div> */}
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/vvXKVPmu_s4?si=FMlP0BwsP0pMB_oI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="tradingview-widget-container">
          <TickerTape colorTheme="dark" symbols={tickerSymbols} />
        </div>
      </div>
      <div className="content-section">
        <div className="sub-hero-placeholder-image" ref={contentImageRef}>
          <img src={`${process.env.PUBLIC_URL}/images/jason_wolves1.jpg`} alt="Placeholder 1" className="placeholder" />
        </div>
        <div className="content-text" ref={contentTextRef}>
          <h2>Enhance Your Skills with Modern Prop Trading</h2>
          <p>
            Alpha Funder has developed a unique Challenge Process for traders that we specifically designed to discover trading talents in Africa.
          </p>
          <p>
            Upon completing the Challenge Process, you will trade up to the equivalent of R2,000,000 on a single Alpha Funded Account.
            However, you can trade up to the equivalent of R4,000,000 on multiple Alpha Funded Accounts!
            Alpha Traders can be rewarded for their performance with up to 90% of the profits they produce on an Alpha Funded account, without any risk of losing their own capital!
          </p>
          <p>
            At the heart of our mission is to develop Alpha Funder into an international investment company.
            On realisation, our company will offer a unique composition of retail traders to investors.
            Let’s work together to build a community of successful retail traders in Africa.
          </p>
        </div>
      </div>
      <div id="process-section">
        <div className="process-container">
          <h2 className="process-title">The Process</h2>
          <p className="process-subtitle">Follow these steps to become an Alpha Trader.</p>
          <div className="progress-line">
            <div className="circle circle-left"></div>
            <div className="circle circle-middle-left"></div>
            <div className="circle circle-middle-right"></div>
            <div className="circle circle-right"></div>
          </div>
          <div className="process-steps">
            <div className="step">
              <FaUserPlus className="step-icon" />
              <h3>1. Sign Up</h3>
              <p>Start by registering for the Alpha Challenge that best suits your needs.</p>
            </div>
            <div className="step">
              <FaKey className="step-icon" />
              <h3>2. Receive your login</h3>
              <p>You will receive your credentials instantly - login to your trader's dashboard.</p>
            </div>
            <div className="step">
              <FaRocket className="step-icon" />
              <h3>3. Start Your Challenge</h3>
              <p>Simply start your Alpha Challenge by trading, remember to follow the objectives shown on your dashboard.</p>
            </div>
            <div className="step">
              <FaDollarSign className="step-icon" />
              <h3>4. Start Earning</h3>
              <p>Once you pass your Challenge, you are officially an Alpha Trader (i.e. a funded trader)! Trade your funded account successfully and you will get payouts bi-weekly.</p>
            </div>
          </div>
          <div className="process-buttons">
            <button className="get-started-button" onClick={handleBuyChallengeRedirect}>Start Challenge Now!</button>
            <button className="more-faq-button" onClick={handleRedirectToFAQ}>More Questions? View FAQs</button>
          </div>
        </div>
      </div>
      <div id="trading-objectives-section">
        <TradingObjectivesSection />
      </div>
      <div className="why-us-section" ref={whyUsRef}>
        <h2 className="why-us-title">Why Us</h2>
        <div className="why-us-cards">
          <div className="why-us-card">
            <FaBullseye className="why-us-icon" />
            <h3>Realistic Targets</h3>
            <p>Our model provides the most competitive targets in the market. Our profit targets, ranging from 5%-8%, are some of the lowest in the industry and this provides our traders with a fair chance of becoming a funded trader.</p>
          </div>
          <div className="why-us-card">
            <FaChartLine className="why-us-icon" />
            <h3>Refundable Challenge Fee</h3>
            <p>Unlock your potential with Alpha Funder! Get your Alpha Challenge fee refunded upon your first profit split on your Alpha Funded Account.
              Trade confidently, knowing your investment is secure. Join, prove your skills, and earn both profits and a refund!</p>
          </div>
          <div className="why-us-card">
            <FaMoneyCheckAlt className="why-us-icon" />
            <h3>The Alpha Program</h3>
            <p>We are one of the few firms actually looking for profitable traders. Prove yourself as a consistent and profitable trader and you will stand a chance to be employed as a professional trader by our US-based partner company, Arielfx Trading and Consulting.</p>
          </div>
          <div className="why-us-card">
            <FaPiggyBank className="why-us-icon" />
            <h3>Profit Split</h3>
            <p>Our Alpha Traders (i.e. funded traders) receive a profit split of up to 90%. To incentivize our traders on their journey here at Alpha Funder, we provide a profit split far more competitive than the industry standard of 80%. Combine this with our refundable fees and we are one of the most competitive in the industry.</p>
          </div>
          <div className="why-us-card">
            <FaCalendarAlt className="why-us-icon" />
            <h3>Frequent Payouts</h3>
            <p>We offer our traders bi-monthly payouts. This means you can receive your profits every 14 days rather than having to wait a full 30 days of trading. You can now get that first withdrawal and refund a whole lot sooner!</p>
          </div>
          <div className="why-us-card">
            <FaHeadset className="why-us-icon" />
            <h3>Customer Support: Alpha AI</h3>
            <p> Experience the future of support with Alpha Funder’s AI chatbot, expertly trained to answer all your questions using our unique data!
              Committed to leading the industry and empowering Africa, we ensure you get the best assistance. For live support, just ask the chatbot to connect you on WhatsApp.</p>
          </div>
        </div>
      </div>
      <BecomeFundedSection />
    </div>
  );
};

export default HomePage;