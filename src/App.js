import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import TradingObjectives from './pages/TradingObjectives';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import TradingPlatforms from './pages/TradingPlatform';
import Symbols from './pages/Symbols';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ClientArea from './pages/ClientArea';
import './App.css';

const App = () => {
  useEffect(() => {
    // Set the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "3z3zMb9PCuFcGdRa13Hfu",
      domain: "www.chatbase.co"
    };

    // Function to load the script only if it's not already present
    const loadScript = () => {
      if (!document.querySelector('script[src="https://www.chatbase.co/embed.min.js"]')) {
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.setAttribute('chatbotId', '3z3zMb9PCuFcGdRa13Hfu');
        script.setAttribute('domain', 'www.chatbase.co');
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
          console.log('Chatbot script loaded successfully.');
        };

        script.onerror = () => {
          console.error('Failed to load the chatbot script.');
        };
      } else {
        console.log('Chatbot script already present.');
      }
    };

    loadScript();

    return () => {
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trading-objectives" element={<TradingObjectives />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/trading-platforms" element={<TradingPlatforms />} />
        <Route path="/symbols" element={<Symbols />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-area" element={<ClientArea />} />
      </Routes>
      <Footer />

      <iframe
        src="https://www.chatbase.co/chatbot-iframe/3z3zMb9PCuFcGdRa13Hfu"
        id="chatbot-iframe"
        title="Chatbot"
        style={{
          display: 'none' // Ensure it is hidden by default
        }}
      ></iframe>
    </Router>
  );
};

export default App;

////////////////////////////////////////////////////////////////////////
