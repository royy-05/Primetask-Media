import React from 'react';
import './Logo.css';

export const Logo = () => {
  return (
    <div className="logoContainer">
      <img 
        src="/logo.png" 
        alt="Primetask Media Logo" 
        className="logoImg"
      />
    </div>
  );
};
