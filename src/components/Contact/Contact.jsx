import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, PhoneCall, Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { Magnet } from '../Animations/ReactBits';
import { contact } from '../../data/content';
import './Contact.css';

const CALENDLY_URL = "https://calendly.com/royyronit05/30min";

export const Contact = () => {
  // Tabs: 'calendly' or 'message'
  const [activeTab, setActiveTab] = useState('calendly');
  const calendlyContainerRef = useRef(null);

  // Direct Message Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: contact.services?.[0] || 'Primetask Growth Package',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Initialize or re-render Calendly widget when switching to the Calendly tab
  useEffect(() => {
    if (activeTab === 'calendly' && calendlyContainerRef.current) {
      if (window.Calendly) {
        calendlyContainerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: calendlyContainerRef.current
        });
      } else {
        // Fallback: load script if not yet present
        const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://assets.calendly.com/assets/external/widget.js';
          script.async = true;
          script.onload = () => {
            if (window.Calendly && calendlyContainerRef.current) {
              window.Calendly.initInlineWidget({
                url: CALENDLY_URL,
                parentElement: calendlyContainerRef.current
              });
            }
          };
          document.head.appendChild(script);
        }
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const handlePackageSelection = (e) => {
      const { packageName } = e.detail || {};
      if (!packageName) return;

      const matched = contact.services?.find(s => 
        s.toLowerCase().includes(packageName.toLowerCase().replace('primetask ', '')) ||
        s.toLowerCase().includes(packageName.toLowerCase())
      );

      setFormData(prev => ({
        ...prev,
        service: matched || prev.service,
        message: prev.message ? prev.message : `Hi! I would like to get started with the ${packageName}.`
      }));
      setActiveTab('message');
    };

    window.addEventListener('select-package', handlePackageSelection);
    return () => window.removeEventListener('select-package', handlePackageSelection);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: contact.services?.[0] || 'Integrated Phygital Campaigns', message: '' });
    }, 4000);
  };

  return (
    <motion.section 
      id="contact" 
      className="contactSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container contactWideContainer">
        {/* Centered Section Header */}
        <div className="contactSectionHeader">
          <span className="sectionTag">{contact.tagline}</span>
          <h2 className="contactTitle">
            {contact.headingPlain} <span className="font-serif-italic brand-accent-text">{contact.headingAccent}</span>
          </h2>
          <p className="contactSubtitle">
            {contact.desc}
          </p>

          {/* Quick Contact Info Strip */}
          <div className="contactTopInfoStrip">
            <a href={`mailto:${contact.email}`} className="contactStripItem">
              <div className="contactStripIcon"><Mail size={16} /></div>
              <span>{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone}`} className="contactStripItem">
              <div className="contactStripIcon"><PhoneCall size={16} /></div>
              <span>{contact.phone}</span>
            </a>
            <div className="contactStripItem staticStrip">
              <div className="contactStripIcon"><MapPin size={16} /></div>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        {/* Wide Interactive Scheduler & Contact Card (Spacious 1000px+ width for 2-column Calendly) */}
        <motion.div 
          className="contactWideCard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mode Switcher Tabs */}
          <div className="contactTabsHeader">
            <button 
              type="button"
              className={`contactTabBtn ${activeTab === 'calendly' ? 'tabActive' : ''}`}
              onClick={() => setActiveTab('calendly')}
            >
              <Calendar size={16} />
              <span>Book Call (Calendly)</span>
            </button>
            <button 
              type="button"
              className={`contactTabBtn ${activeTab === 'message' ? 'tabActive' : ''}`}
              onClick={() => setActiveTab('message')}
            >
              <MessageSquare size={16} />
              <span>Send Message</span>
            </button>
          </div>

          {/* TAB 1: OFFICIAL CALENDLY EMBED WIDGET (WIDE SPLIT VIEW) */}
          {activeTab === 'calendly' && (
            <div className="calendlyTabContentWide">
              <div className="calendlyEmbedWrapper">
                <div 
                  ref={calendlyContainerRef}
                  className="calendly-inline-widget" 
                  data-url={CALENDLY_URL}
                  style={{ minWidth: '320px', height: '700px', width: '100%', borderRadius: 0 }} 
                />
              </div>
            </div>
          )}

          {/* TAB 2: DIRECT MESSAGE FORM */}
          {activeTab === 'message' && (
            <div className="messageTabContentWide">
              {submitted ? (
                <div className="formSuccessState">
                  <div className="successIcon">&check;</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you! Our growth strategist will review your proposal and respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contactFormWide">
                  <div className="formRowGrid">
                    <div className="formGroup">
                      <label className="formLabel">Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Alex Morgan" 
                        className="formInput" 
                        required 
                      />
                    </div>

                    <div className="formGroup">
                      <label className="formLabel">Work Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="name@company.com" 
                        className="formInput" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <label className="formLabel">What service do you need?</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange} 
                      className="formSelect"
                    >
                      {contact.services.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="formGroup">
                    <label className="formLabel">Tell us about your project</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="What are your goals, timeline, and budget?" 
                      className="formTextarea" 
                      required
                    ></textarea>
                  </div>

                  <Magnet range={60} strength={0.3}>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </Magnet>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
