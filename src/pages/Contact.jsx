import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  UploadCloud, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Radio, 
  X
} from 'lucide-react';
import { Magnet } from '../components/Animations/ReactBits';
import { contact } from '../data/content';
import './Contact.css';

// Categories list
const businessCategories = [
  "Premium Cafe",
  "Thematic Restaurant",
  "Skincare / Beauty",
  "Bakery",
  "Perfume / Fragrance",
  "Watches",
  "Luxury Resort/Stay",
  "Other"
];

// Footfall sources
const footfallSources = [
  "Zomato/Swiggy/District bookings",
  "Walk-ins",
  "Instagram/Ads",
  "Word of Mouth",
  "Other"
];

// Hidden Leaks
const hiddenLeaks = [
  "High social following but low table bookings",
  "Invisible to mall/theater footfall",
  "Boring content that doesn't sell",
  "Depending too much on discounts",
  "Other"
];

// Visual Assets options
const visualAssetOptions = [
  "Yes",
  "No",
  "Need a professional refresh"
];

// 3D Circuit options
const circuitOptions = [
  "Yes, I want a primary slot",
  "Maybe, I need more info",
  "Need more Clarity",
  "Other"
];

// Timeline options
const timelineOptions = [
  "Immediately",
  "In 1 week",
  "After 15th August",
  "Not sure"
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    brandName: '',
    location: '',
    businessCategory: 'Premium Cafe',
    otherCategory: '',
    instagramOrWebsite: '',
    footfallSource: 'Zomato/Swiggy/District bookings',
    otherFootfall: '',
    hiddenLeak: 'High social following but low table bookings',
    otherLeak: '',
    distinctivenessScore: 7,
    hasVisualAssets: 'Yes',
    anamorphicCircuitInterest: 'Yes, I want a primary slot',
    otherCircuit: '',
    timeline: 'Immediately',
    workEmail: '',
    whatsappNumber: '',
    sendCopy: true
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
    }
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="contactPage">
      {/* ====================================================================
          1. HERO HEADER
         ==================================================================== */}
      <motion.section 
        className="contactHeroSection"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="contactHeroContent">
            <motion.div 
              className="sprintPillBadge"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} className="sprintPillSparkle" />
              <span>For Hospitality & DTC Founders Only &bull; Limited Q3/Q4 Enrolment</span>
            </motion.div>

            <motion.h1 
              className="contactHeroTitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              60-Day Strategic Sprint{' '}
              <span className="font-serif-italic brand-accent-text">Application Form</span>
            </motion.h1>

            <motion.p 
              className="contactHeroSubtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Most brands today grow using platforms. Very few are prepared to survive when those platforms slow down. Apply below to evaluate strategic fit.
            </motion.p>
          </div>
        </div>
      </motion.section>


      {/* ====================================================================
          3. MAIN APPLICATION & TOUCHPOINTS GRID
         ==================================================================== */}
      <motion.section 
        className="contactMainSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="contactGridContainer">
            {/* Left Column: Direct Touchpoints & Guarantees */}
            <motion.div 
              className="contactInfoCol"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="touchpointsHeader">
                <span className="sectionTag">DIRECT REACH</span>
                <h2 className="touchpointsTitle">Need Instant Answers?</h2>
                <p className="touchpointsDesc">
                  For immediate founder-to-founder dialogue, partner outreach, or deck requests:
                </p>
              </div>

              <div className="touchpointCardsList">
                {/* Phone & WhatsApp */}
                <a href="tel:+918420736756" className="touchpointCard">
                  <div className="touchpointIconBox">
                    <Phone size={20} />
                  </div>
                  <div className="touchpointDetails">
                    <span className="touchpointLabel">PHONE & DIRECT WHATSAPP</span>
                    <strong className="touchpointValue">+91 8420736756</strong>
                    <span className="touchpointNote">Instant response via WhatsApp</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:contact@primetaskmedia.com" className="touchpointCard">
                  <div className="touchpointIconBox">
                    <Mail size={20} />
                  </div>
                  <div className="touchpointDetails">
                    <span className="touchpointLabel">EXECUTIVE SPRINT INQUIRIES</span>
                    <strong className="touchpointValue">contact@primetaskmedia.com</strong>
                    <span className="touchpointNote">Review response within 24 hours</span>
                  </div>
                </a>

                {/* Headquarters Location */}
                <div className="touchpointCard staticLocation">
                  <div className="touchpointIconBox">
                    <MapPin size={20} />
                  </div>
                  <div className="touchpointDetails">
                    <span className="touchpointLabel">HEADQUARTERS</span>
                    <strong className="touchpointValue">Kolkata, West Bengal, India</strong>
                    <span className="touchpointNote">Deploying campaigns across India</span>
                  </div>
                </div>

                {/* Response SLA Guarantee */}
                <div className="touchpointCard slaCard">
                  <div className="touchpointIconBox">
                    <Clock size={20} />
                  </div>
                  <div className="touchpointDetails">
                    <span className="touchpointLabel">SELECTION WINDOW</span>
                    <strong className="touchpointValue">&lt; 24h Application Review</strong>
                    <span className="touchpointNote">Direct founder feedback on fit</span>
                  </div>
                </div>
              </div>

              {/* Founder Assurance Card */}
              <div className="sprintAssuranceCard">
                <ShieldCheck size={28} className="assuranceIcon" />
                <div className="assuranceContent">
                  <h4>Zero Spam. Guaranteed Privacy.</h4>
                  <p>
                    All brand data, operational metrics, and revenue estimates shared in this sprint application remain strictly confidential under NDA.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 60-Day Strategic Sprint Application Form */}
            <motion.div 
              className="contactFormWrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="contactSuccessBox">
                  <div className="successCheckCircle">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="successTitle">Sprint Application Submitted!</h3>
                  <p className="successDesc">
                    Thank you, <strong>{formData.brandName || 'Founder'}</strong>. Your responses for the 60-Day Strategic Sprint have been logged.
                  </p>
                  <div className="successDetailsSummary">
                    <p>📧 Work Email: <strong>{formData.workEmail || formData.email}</strong></p>
                    <p>🏷 Category: <strong>{formData.businessCategory}</strong></p>
                    <p>📍 Location: <strong>{formData.location}</strong></p>
                    <p>⚡ Recall Score: <strong>{formData.distinctivenessScore}/10</strong></p>
                  </div>
                  <p className="successDesc" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    Our partners review every submission within 24 hours. If there is mutual alignment, we will reach out directly on WhatsApp to schedule your discovery teardown.
                  </p>
                  <a 
                    href={`https://wa.me/918420736756?text=Hi%20Primetask%20Media%2C%20I%20have%20just%20submitted%20my%2060-Day%20Strategic%20Sprint%20Application%20for%20${encodeURIComponent(formData.brandName || 'my brand')}.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', textDecoration: 'none' }}
                  >
                    <span>Notify Team on WhatsApp</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="sprintApplicationForm">
                  <div className="formHeader">
                    <div className="formHeaderBadge">60-DAY SPRINT APPLICATION</div>
                    <h3 className="formBoxTitle">Founder & Brand Evaluation</h3>
                    <p className="formBoxSubtitle">
                      * Indicates required question. Please answer candidly so we can evaluate fit.
                    </p>
                  </div>

                  {/* 1. Core Brand Identification */}
                  <div className="sprintFormSection">
                    <h4 className="sprintSectionHeader">1. Brand Identity & Location</h4>

                    <div className="formRowGrid">
                      <div className="formFieldGroup">
                        <label className="fieldLabel">Email *</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder="founder@yourbrand.com" 
                          className="fieldInput" 
                          required 
                        />
                      </div>

                      <div className="formFieldGroup">
                        <label className="fieldLabel">Brand Name *</label>
                        <input 
                          type="text" 
                          name="brandName" 
                          value={formData.brandName} 
                          onChange={handleInputChange} 
                          placeholder="e.g. Masala Code / Mishael" 
                          className="fieldInput" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="formRowGrid">
                      <div className="formFieldGroup">
                        <label className="fieldLabel">Location (City / Area) *</label>
                        <input 
                          type="text" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleInputChange} 
                          placeholder="e.g. Kolkata, Salt Lake / Mumbai" 
                          className="fieldInput" 
                          required 
                        />
                      </div>

                      <div className="formFieldGroup">
                        <label className="fieldLabel">Your Instagram / Website Link *</label>
                        <input 
                          type="url" 
                          name="instagramOrWebsite" 
                          value={formData.instagramOrWebsite} 
                          onChange={handleInputChange} 
                          placeholder="https://instagram.com/yourbrand" 
                          className="fieldInput" 
                          required 
                        />
                      </div>
                    </div>

                    {/* Business Category Radio / Pills */}
                    <div className="formFieldGroup">
                      <label className="fieldLabel">Business Category *</label>
                      <div className="categoryPillsGrid">
                        {businessCategories.map((cat) => (
                          <label 
                            key={cat} 
                            className={`categoryPillLabel ${formData.businessCategory === cat ? 'pillSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="businessCategory" 
                              value={cat} 
                              checked={formData.businessCategory === cat} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <span>{cat}</span>
                          </label>
                        ))}
                      </div>

                      {formData.businessCategory === 'Other' && (
                        <input 
                          type="text" 
                          name="otherCategory" 
                          value={formData.otherCategory} 
                          onChange={handleInputChange} 
                          placeholder="Specify your business category..." 
                          className="fieldInput" 
                          style={{ marginTop: '0.8rem' }}
                          required
                        />
                      )}
                    </div>
                  </div>

                  {/* 2. Customer Footfall & Channel Economics */}
                  <div className="sprintFormSection">
                    <h4 className="sprintSectionHeader">2. Demand Sources & Hidden Leaks</h4>

                    <div className="formFieldGroup">
                      <label className="fieldLabel">
                        Where does 70% of your new customer footfall currently come from? *
                      </label>
                      <div className="radioOptionsList">
                        {footfallSources.map((source) => (
                          <label 
                            key={source} 
                            className={`customRadioOption ${formData.footfallSource === source ? 'radioSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="footfallSource" 
                              value={source} 
                              checked={formData.footfallSource === source} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <div className="customRadioDot" />
                            <span className="radioText">{source}</span>
                          </label>
                        ))}
                      </div>
                      {formData.footfallSource === 'Other' && (
                        <input 
                          type="text" 
                          name="otherFootfall" 
                          value={formData.otherFootfall} 
                          onChange={handleInputChange} 
                          placeholder="Specify primary footfall source..." 
                          className="fieldInput" 
                          style={{ marginTop: '0.6rem' }}
                          required
                        />
                      )}
                    </div>

                    <div className="formFieldGroup">
                      <label className="fieldLabel">
                        What is your biggest "Hidden Leak" right now? *
                      </label>
                      <div className="radioOptionsList">
                        {hiddenLeaks.map((leak) => (
                          <label 
                            key={leak} 
                            className={`customRadioOption ${formData.hiddenLeak === leak ? 'radioSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="hiddenLeak" 
                              value={leak} 
                              checked={formData.hiddenLeak === leak} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <div className="customRadioDot" />
                            <span className="radioText">{leak}</span>
                          </label>
                        ))}
                      </div>
                      {formData.hiddenLeak === 'Other' && (
                        <input 
                          type="text" 
                          name="otherLeak" 
                          value={formData.otherLeak} 
                          onChange={handleInputChange} 
                          placeholder="Specify your biggest leak..." 
                          className="fieldInput" 
                          style={{ marginTop: '0.6rem' }}
                          required
                        />
                      )}
                    </div>

                    {/* Scale of 1 to 10 Distinctiveness */}
                    <div className="formFieldGroup">
                      <div className="distinctivenessHeader">
                        <label className="fieldLabel" style={{ marginBottom: 0 }}>
                          On a scale of 1–10, how distinct is your brand compared to direct competitors? *
                        </label>
                        <span className="distinctScoreBadge">Score: {formData.distinctivenessScore}/10</span>
                      </div>
                      
                      <div className="scaleButtonsRow">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <button
                            key={num}
                            type="button"
                            className={`scaleNumBtn ${formData.distinctivenessScore === num ? 'scaleActive' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, distinctivenessScore: num }))}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <div className="scaleLabelsRow">
                        <span>1 (Commoditized / Generic)</span>
                        <span>10 (Totally Distinct / Cult Recall)</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Assets & Circuit Placement */}
                  <div className="sprintFormSection">
                    <h4 className="sprintSectionHeader">3. Assets & 3D Anamorphic Circuit</h4>

                    <div className="formFieldGroup">
                      <label className="fieldLabel">
                        Do you currently have high-quality visual assets (Photos/Videos) of your venue's theme? *
                      </label>
                      <div className="radioOptionsList">
                        {visualAssetOptions.map((opt) => (
                          <label 
                            key={opt} 
                            className={`customRadioOption ${formData.hasVisualAssets === opt ? 'radioSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="hasVisualAssets" 
                              value={opt} 
                              checked={formData.hasVisualAssets === opt} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <div className="customRadioDot" />
                            <span className="radioText">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="formFieldGroup">
                      <label className="fieldLabel">
                        Are you interested in anchoring your brand in the upcoming 3D Anamorphic Circuit (Inox Salt Lake Loop)?
                      </label>
                      <div className="radioOptionsList">
                        {circuitOptions.map((opt) => (
                          <label 
                            key={opt} 
                            className={`customRadioOption ${formData.anamorphicCircuitInterest === opt ? 'radioSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="anamorphicCircuitInterest" 
                              value={opt} 
                              checked={formData.anamorphicCircuitInterest === opt} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <div className="customRadioDot" />
                            <span className="radioText">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {formData.anamorphicCircuitInterest === 'Other' && (
                        <input 
                          type="text" 
                          name="otherCircuit" 
                          value={formData.otherCircuit} 
                          onChange={handleInputChange} 
                          placeholder="Your questions on the 3D circuit..." 
                          className="fieldInput" 
                          style={{ marginTop: '0.6rem' }}
                        />
                      )}
                    </div>
                  </div>

                  {/* 4. Timeline, Founder WhatsApp & Logo Upload */}
                  <div className="sprintFormSection">
                    <h4 className="sprintSectionHeader">4. Timeline & Founder Verification</h4>

                    <div className="formFieldGroup">
                      <label className="fieldLabel">How soon are you looking to start?</label>
                      <div className="categoryPillsGrid">
                        {timelineOptions.map((tOpt) => (
                          <label 
                            key={tOpt} 
                            className={`categoryPillLabel ${formData.timeline === tOpt ? 'pillSelected' : ''}`}
                          >
                            <input 
                              type="radio" 
                              name="timeline" 
                              value={tOpt} 
                              checked={formData.timeline === tOpt} 
                              onChange={handleInputChange}
                              className="hiddenRadio"
                            />
                            <span>{tOpt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="formRowGrid">
                      <div className="formFieldGroup">
                        <label className="fieldLabel">Work email (No Spam, Promise) 😊 *</label>
                        <input 
                          type="email" 
                          name="workEmail" 
                          value={formData.workEmail} 
                          onChange={handleInputChange} 
                          placeholder="founder@yourbrand.com" 
                          className="fieldInput" 
                          required 
                        />
                      </div>

                      <div className="formFieldGroup">
                        <label className="fieldLabel">
                          Your WhatsApp Number (for sharing sample work & onboarding) 😊 *
                        </label>
                        <input 
                          type="tel" 
                          name="whatsappNumber" 
                          value={formData.whatsappNumber} 
                          onChange={handleInputChange} 
                          placeholder="+91 98765 43210 (We won't spam)" 
                          className="fieldInput" 
                          required 
                        />
                      </div>
                    </div>

                    {/* Logo Upload Zone */}
                    <div className="formFieldGroup">
                      <label className="fieldLabel">Your brand's logo *</label>
                      {uploadedFile ? (
                        <div className="uploadedFileCard">
                          <div className="fileInfoLeft">
                            <FileText size={24} className="fileIcon" />
                            <div>
                              <strong className="fileNameText">{uploadedFile.name}</strong>
                              <span className="fileSizeText">{uploadedFile.size}</span>
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={removeUploadedFile}
                            className="removeFileBtn"
                            aria-label="Remove logo"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ) : (
                        <label className="fileUploadZone">
                          <input 
                            type="file" 
                            accept="image/*,.pdf,.svg,.png,.jpg,.jpeg,.ai,.eps" 
                            onChange={handleFileUpload} 
                            className="hiddenFileInput"
                          />
                          <UploadCloud size={32} className="uploadCloudIcon" />
                          <div className="uploadPromptText">
                            <strong>Click to upload brand logo</strong> or drag & drop
                          </div>
                          <span className="uploadSpecsText">Upload 1 supported file (PNG, SVG, JPG, PDF). Max 1 GB.</span>
                        </label>
                      )}
                    </div>

                    {/* Send Copy Checkbox */}
                    <div className="formFieldGroup" style={{ marginTop: '1.2rem' }}>
                      <label className="checkboxContainer">
                        <input 
                          type="checkbox" 
                          name="sendCopy" 
                          checked={formData.sendCopy} 
                          onChange={handleInputChange}
                          className="checkboxInput" 
                        />
                        <span className="checkboxLabelText">
                          Send me a copy of my responses to my work email.
                        </span>
                      </label>
                    </div>
                  </div>

                  <Magnet range={60} strength={0.25}>
                    <button type="submit" className="sprintSubmitBtn">
                      <span>Submit 60-Day Sprint Application</span>
                      <Send size={18} />
                    </button>
                  </Magnet>

                  <div className="formFooterNotice">
                    <span>
                      Need instant clarification before applying? Message directly on{' '}
                      <a 
                        href="https://wa.me/918420736756?text=Hi%20Barnavo%2C%20I%20have%20a%20question%20regarding%20the%2060-Day%20Strategic%20Sprint." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inlineHelpLink"
                      >
                        WhatsApp (+91 8420736756) &rarr;
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          4. GOOGLE MAP / HEADQUARTERS SECTION
         ==================================================================== */}
      <motion.section 
        className="mapSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <motion.div 
            className="mapHeader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sectionTag">OUR HEADQUARTERS</span>
            <h2 className="mapTitle">
              Operating From <span className="font-serif-italic brand-accent-text">Kolkata, India.</span>
            </h2>
            <p className="mapSubtitle">
              Strategically headquartered in Eastern India, delivering on-ground experiential campaigns, cinema visibility, and full-funnel digital marketing nationwide.
            </p>
          </motion.div>

          <motion.div 
            className="mapContainerCard"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <iframe 
              title="Primetask Media Headquarters Kolkata"
              src="https://maps.google.com/maps?q=Kolkata,%20West%20Bengal,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="googleMapIframe"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="mapOverlayInfoCard">
              <div className="mapOverlayHeader">
                <span className="mapActiveDot" />
                <h4>PRIMETASK MEDIA HQ</h4>
              </div>
              <p className="mapAddressText">
                Kolkata, West Bengal, India &bull; Pin 700001
              </p>
              <div className="mapWorkingHours">
                <span>🕒 Mon – Sat: 10:00 AM – 7:30 PM IST</span>
              </div>
              <a 
                href="https://maps.google.com/?q=Kolkata,West+Bengal,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mapOpenLink"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
