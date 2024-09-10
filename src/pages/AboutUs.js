import React, { useEffect, useRef } from 'react';
import { FaBullseye, FaChartLine, FaMoneyCheckAlt, FaPiggyBank, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import { BecomeFundedSection } from './HomePage'; // Import the section from HomePage
import '../../src/index.css';
import JoinDiscordSection from '../components/JoinDiscordSection'; 

const AboutUs = () => {
  const whyUsRef = useRef(null);

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
      const cards = currentRef.querySelectorAll('.new-why-us-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (currentRef) {
        const cards = currentRef.querySelectorAll('.new-why-us-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div className="about-us">
      <section className="intro">
        <h1>About Us</h1>
        {/* <p className="mission">Alpha Funder - For Africa, By Africa</p> */}
        <div className="hero-story">
          <div className="line"></div>
          <p>The idea to start Alpha Funder arose in 2023 where our founders joined forces to create a reputable Prop Firm in Africa. 
            We believe in the potential of African traders which is why at Alpha Funder we empower you with the resources and support you need to succeed. 
            Our objective? To find and nurture trading talent in Africa.</p>
          <div className="line"></div>
        </div>
      </section>

      <section className="content">
        <div className="what-we-do">
          <div className="text">
            <h2>What We Do</h2>
            <p>At Alpha Funder, we strive to provide experienced traders with an environment to maximize their skill to their full potential and secure a funded account.</p>
            <p>Built by traders for traders, we know the struggles that traders face with insufficient capital - that is why your trading skills combined with our Alpha Challenge process makes a wonderful partnership!</p>
          </div>
          <div className="image">
            <img src="/images/hair_girl.jpg" alt="What We Do" />
          </div>
        </div>

        <div className="vision-mission">
          <div className="image">
            <img src="/images/jason_sunglasses.jpg" alt="Vision and Mission" />
          </div>
          <div className="text">
            <h2>Vision and Mission</h2>
            <p>We are continuously evolving the project into an international investment company. This shift will enable us to build a global platform where, eventually, investors can choose to invest in a diverse portfolio of our retail traders.<br></br>
            <br></br>
            Our vision is not achievable without you, join us in creating a community of successful retail traders in Africa.</p>
            
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="new-why-us-section" ref={whyUsRef}>
        <h2 className="new-why-us-title">Why Us</h2>
        <div className="new-why-us-cards">
          <div className="new-why-us-card">
            <FaBullseye className="new-why-us-icon" />
            <h3>Realistic Targets</h3>
            <p>Our model provides the most competitive targets in the market. Our profit targets, ranging from 5%-8%, are some of the lowest in the industry and this provides our traders with a fair chance of becoming a funded trader.</p>
          </div>
          <div className="new-why-us-card">
            <FaChartLine className="new-why-us-icon" />
            <h3>Refundable Challenge Fee</h3>
            <p>Unlock your potential with Alpha Funder! Get your Alpha Challenge fee refunded upon your first profit split on your Alpha Funded Account. 
              Trade confidently, knowing your investment is secure. Join, prove your skills, and earn both profits and a refund!</p>
          </div>
          <div className="new-why-us-card">
            <FaMoneyCheckAlt className="new-why-us-icon" />
            <h3>The Alpha Project</h3>
            <p>We are continuously working to evolve the project into an international investment company. This shift will allow us to build a global platform where, eventually, investors can choose to invest in a diverse portfolio of our retail traders.</p>
          </div>
          <div className="new-why-us-card">
            <FaPiggyBank className="new-why-us-icon" />
            <h3>Profit Split</h3>
            <p>Our Alpha Traders (i.e. funded traders) receive a profit split of 90%. To incentivize our traders on their journey here at Alpha Funder, we provide a profit split far more competitive than the industry standard of 80%. Combine this with our refundable fees and we are one of the most competitive in the industry.</p>
          </div>
          <div className="new-why-us-card">
            <FaCalendarAlt className="new-why-us-icon" />
            <h3>Frequent Payouts</h3>
            <p>We offer our traders bi-weekly payouts. This means you can receive your profits every 14 days rather than having to wait a full 30 days of trading. You can now get that first withdrawal and refund a whole lot sooner!</p>
          </div>
          <div className="new-why-us-card">
            <FaHeadset className="new-why-us-icon" />
            <h3>Customer Support: Alpha AI</h3>
            <p> Experience the future of support with Alpha Funder’s AI chatbot, expertly trained to answer all your questions using our unique data! 
              Committed to leading the industry and empowering Africa, we ensure you get the best assistance. For live support, just ask the chatbot to connect you on WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Become Funded Section */}
      <BecomeFundedSection />

      {/* Join Discord Section */}
      <JoinDiscordSection />
    </div>
  );
};

export default AboutUs;

