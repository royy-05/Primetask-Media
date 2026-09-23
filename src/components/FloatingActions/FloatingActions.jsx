import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './FloatingActions.css';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappUrl = "https://wa.me/918420736756?text=Hi%20Primetask%20Media%2C%20I%20would%20like%20to%20know%20more%20about%20your%20growth%20services!";

  return (
    <div className="floatingActionsContainer">
      {/* Scroll to Top Button */}
      <button 
        className={`scrollTopFab ${showScrollTop ? 'fabVisible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappFab"
        aria-label="Chat with Primetask Media on WhatsApp"
        title="Chat with us on WhatsApp (+91 8420736756)"
      >
        <div className="whatsappPulse" />
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
          className="whatsappSvgIcon"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.26 15.11 13.67 14.88 13.58C14.66 13.5 14.49 13.46 14.33 13.71C14.16 13.96 13.69 14.51 13.55 14.67C13.41 14.84 13.26 14.86 13.01 14.73C12.77 14.61 11.97 14.35 11.03 13.51C10.29 12.85 9.79 12.04 9.65 11.79C9.51 11.54 9.63 11.41 9.76 11.28C9.87 11.17 10.01 10.99 10.13 10.84C10.26 10.7 10.3 10.59 10.38 10.42C10.47 10.26 10.42 10.11 10.36 9.99C10.3 9.86 9.8 8.64 9.59 8.14C9.39 7.65 9.18 7.72 9.03 7.71C8.89 7.7 8.72 7.7 8.56 7.7C8.39 7.7 8.12 7.76 7.89 8.01C7.66 8.26 7.02 8.86 7.02 10.08C7.02 11.3 7.91 12.48 8.03 12.65C8.16 12.81 9.78 15.31 12.26 16.38C12.85 16.63 13.31 16.78 13.67 16.9C14.26 17.08 14.8 17.06 15.22 17C15.7 16.93 16.68 16.4 16.89 15.82C17.09 15.23 17.09 14.73 17.03 14.62C16.97 14.51 16.82 14.45 16.57 14.39Z" />
        </svg>
      </a>
    </div>
  );
};
