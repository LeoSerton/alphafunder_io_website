import React, { useEffect, useRef } from 'react';
import { FaDiscord } from 'react-icons/fa';
import './JoinDiscordSection.css';

const JoinDiscordSection = () => {
  const discordRef = useRef(null);

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

    const currentRef = discordRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleRedirectToDiscord = () => {
    window.location.href = "https://discord.gg/tbUhpqMDRm"; // Replace with your actual Discord link
  };

  return (
    <div className="join-discord-section" ref={discordRef}>
      <div className="join-discord-container">
        <div className="join-discord-content">
          <h2 className="join-discord-title">Join Our Discord Community</h2>
          <div className="join-discord-icon-container" onClick={handleRedirectToDiscord}>
            <FaDiscord className="join-discord-icon" />
          </div>
          <div className="join-discord-buttons">
            <button className="join-discord-button" onClick={handleRedirectToDiscord}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscordSection;
