// src/components/Modal/SuccessModal.js

import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ show, message, onClose }) => {
  if (!show) return null;

  // Modal to confirm contaact form success
  return (
    <div className="success-modal-overlay">
      <div className="success-modal-content">
        <h2>Success!</h2>
        <p>
           A member of our team will get back to you as soon as possible.
        </p>
        <div className="success-modal-actions">
          <button onClick={onClose} className="success-confirm-btn">OK</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
