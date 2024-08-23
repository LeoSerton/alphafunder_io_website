// import React, { useEffect, useRef, useState } from 'react';
// import './Contact.css';
// import { useNavigate } from 'react-router-dom';

// const Contact = () => {
//   const navigate = useNavigate();
//   const heroRef = useRef(null);
//   const contactFormRef = useRef(null);
//   const contactDetailsRef = useRef(null);
//   const faqButtonRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleRedirectToFAQ = () => {
//     navigate('/FAQ');
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://www.portal.basecloudglobal.com/at_channel/DBlMfsLPAa9FIJ68Ov0bTnd5m', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       } else {
//         alert('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target); // Stop observing after animation
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const heroElement = heroRef.current;
//     const contactFormElement = contactFormRef.current;
//     const contactDetailsElement = contactDetailsRef.current;
//     const faqButtonElement = faqButtonRef.current;

//     if (heroElement) observer.observe(heroElement);
//     if (contactFormElement) observer.observe(contactFormElement);
//     if (contactDetailsElement) observer.observe(contactDetailsElement);
//     if (faqButtonElement) observer.observe(faqButtonElement);

//     return () => {
//       if (heroElement) observer.unobserve(heroElement);
//       if (contactFormElement) observer.unobserve(contactFormElement);
//       if (contactDetailsElement) observer.unobserve(contactDetailsElement);
//       if (faqButtonElement) observer.unobserve(faqButtonElement);
//     };
//   }, []);

//   return (
//     <div className="contact-page">
//       <section className="contact-hero" ref={heroRef}>
//         <h1>Contact Us</h1>
//         <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>
//       </section>
//       <section className="contact-info">
//         <div className="info-container">
//           <div className="contact-form" ref={contactFormRef}>
//             <h2>Get in Touch</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   value={formData.name} 
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   value={formData.email} 
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea 
//                   id="message" 
//                   name="message" 
//                   rows="5" 
//                   value={formData.message} 
//                   onChange={handleChange} 
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//           <div className="contact-details" ref={contactDetailsRef}>
//             <h2>Contact Details</h2>
//             <p><strong>Email:</strong> support@alphafunder.io</p>
//             <p><strong>Address:</strong> Building B, 169 Corobay Ave, Menlyn, Pretoria, 0181</p>
//             <p><strong>Business Hours:</strong> 8am - 7pm, Monday - Saturday (CAT)</p>
//           </div>
//         </div>
//       </section>
//       <button className="contact-faq-button" onClick={handleRedirectToFAQ} ref={faqButtonRef}>View FAQs</button>
//       <section className="contact-map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4915830877712!2d28.276056075664098!3d-25.787351577335755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560b8de9b8bc3%3A0xf1202e8b42f8b192!2s169%20Corobay%20Ave%2C%20Menlyn%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1720013492604!5m2!1sen!2sza"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           title="Company Location"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS
import SuccessModal from '../components/Modal/SuccessModal'; // Import the SuccessModal

const Contact = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const faqButtonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to hold the modal message

  const handleRedirectToFAQ = () => {
    navigate('/FAQ');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace with your EmailJS Service ID, Template ID, and User ID
    const serviceID = 'service_p6if8ig';
    const templateID = 'template_n3k84bk';
    const userID = 'mfA2QXRBwk1-LBLQa';

    try {
      await emailjs.send(
        serviceID, 
        templateID, 
        formData, 
        userID
      );
      setModalMessage('Message sent successfully!'); // Set success message
      setShowModal(true); // Show the success modal
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setModalMessage('Failed to send message. Please try again.'); // Set error message
      setShowModal(true); // Show the error modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
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
    const contactFormElement = contactFormRef.current;
    const contactDetailsElement = contactDetailsRef.current;
    const faqButtonElement = faqButtonRef.current;

    if (heroElement) observer.observe(heroElement);
    if (contactFormElement) observer.observe(contactFormElement);
    if (contactDetailsElement) observer.observe(contactDetailsElement);
    if (faqButtonElement) observer.observe(faqButtonElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
      if (contactFormElement) observer.unobserve(contactFormElement);
      if (contactDetailsElement) observer.unobserve(contactDetailsElement);
      if (faqButtonElement) observer.unobserve(faqButtonElement);
    };
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero" ref={heroRef}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>
      </section>
      <section className="contact-info">
        <div className="info-container">
          <div className="contact-form" ref={contactFormRef}>
            <h2>Get in Touch</h2>
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
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-details" ref={contactDetailsRef}>
            <h2>Contact Details</h2>
            <p><strong>Email:</strong> support@alphafunder.io</p>
            <p><strong>Address:</strong> Building B, 169 Corobay Ave, Menlyn, Pretoria, 0181</p>
            <p><strong>Business Hours:</strong> 8am - 7pm, Monday - Saturday (CAT)</p>
          </div>
        </div>
      </section>
      <button className="contact-faq-button" onClick={handleRedirectToFAQ} ref={faqButtonRef}>View FAQs</button>
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4915830877712!2d28.276056075664098!3d-25.787351577335755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560b8de9b8bc3%3A0xf1202e8b42f8b192!2s169%20Corobay%20Ave%2C%20Menlyn%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1720013492604!5m2!1sen!2sza"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>
      </section>

      {/* Add the success confirmation modal */}
      <SuccessModal
        show={showModal}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Contact;


