// src/components/ReflectionItem.js

import React, { useState } from 'react';

const ReflectionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <button 
        onClick={toggleOpen} 
        style={{ fontWeight: 'bold', cursor: 'pointer', border: '1px solid #ccc', padding: '10px', width: '100%' }}>
        {question}
      </button>
      {isOpen && (
        <div style={{ marginTop: '5px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ReflectionItem;
