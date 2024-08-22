import React, { useEffect, useRef, useState } from 'react';
import './ClientArea.css';
// import { useNavigate } from 'react-router-dom'; //creates warning due to not being used.
import JoinDiscordSection from '../components/JoinDiscordSection';
import emailjs from 'emailjs-com';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

const ClientArea = () => {
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the custom modal when delete is clicked
  };

  const handleConfirmDelete = () => {
    setShowModal(false); // Hide the modal
    const templateParams = {
      name: formData.name, // Send the user's first name
      surname: formData.surname, // Send the user's surname
      email: formData.email, // Send the user's email
    };

    emailjs.send(
      'service_p6if8ig', // Replace with your EmailJS service ID
      'template_y4igwon', // Replace with your EmailJS template ID
      templateParams,
      'mfA2QXRBwk1-LBLQa' // Replace with your EmailJS user ID (public key)
    ).then(
      (response) => {
        alert('Request to delete account sent successfully!');
        setFormData({
          name: '',
          surname: '',
          email: '',
        });
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to send the request. Please try again later.');
      }
    );
  };

  const handleCancelDelete = () => {
    setShowModal(false); // Hide the modal if cancel is clicked
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;

    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  return (
    <div className="client-area">
      <section className="client-hero" ref={heroRef}>
        <h1>Client Area</h1>
        <p>We're sorry to see you go.<br />You're always welcome to get funded again in the future.</p>
      </section>
      <section className="client-content">
        <div className="delete-account-form">
          <h2>Need to delete your account?</h2>
          <p>Send us an Email with your details.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Delete Account</button>
          </form>
        </div>
        <JoinDiscordSection /> {/* Add the Discord section */}
      </section>

      {/* Add the custom confirmation modal */}
      <ConfirmationModal
        show={showModal}
        message="Are you sure? This action will be permanent."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default ClientArea;


