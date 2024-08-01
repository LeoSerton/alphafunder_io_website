import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './ModalContent.css';

const ModalContent = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Markdown/${file}`)
      .then(response => response.text())
      .then(text => setContent(text));
  }, [file]);

  return (
    <div className="modal-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ModalContent;

