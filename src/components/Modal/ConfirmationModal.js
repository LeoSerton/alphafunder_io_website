import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ show, message, onConfirm, onCancel }) => {
  if (!show) {
    return null; // If the modal is not shown, return null to render nothing
  }

  return (
    <div className="confirm-modal-backdrop">
      <div className="confirm-modal-content">
        <p>{message}</p>
        <div className="confirm-modal-actions">
          <button className="confirm-button" onClick={onConfirm}>Yes, Delete</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
