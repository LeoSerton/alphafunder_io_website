import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const observeElements = (selector) => {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(element => {
    observer.observe(element);
  });
};

const initAnimations = () => {
  observeElements('.why-us-title');
  observeElements('.why-us-card');
  observeElements('.hero-section');
  observeElements('.text-container');
  observeElements('.placeholder-container');
};

const Main = () => {
  useEffect(() => {
    initAnimations();
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
