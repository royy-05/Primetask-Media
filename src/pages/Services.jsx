import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Plus, 
  Minus, 
  Sparkles, 
  Layers, 
  Film, 
  MessageSquare, 
  Camera, 
  Compass, 
  CheckCircle2,
  Check
} from 'lucide-react';
import { Magnet } from '../components/Animations/ReactBits';
import './Services.css';

const detailedServices = [
  {
    id: 'phygital-campaigns',
    indexTag: '01 — UNIFIED OMNICHANNEL',
    titlePlain: 'Integrated Phygital',
    titleItalic: 'Campaigns.',
    pitch: 'For brands ready to scale visibility, we connect everything into one system.',
    description: 'Digital channels and physical touchpoints working together so demand does not depend on any single platform. We create holistic customer journeys that guide an audience from their initial online impression to in-store footfall and repeat visits.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    icon: Layers,
    inclusions: [
      {
        title: 'Digital + Physical Campaign Planning',
        details: 'Unified cross-channel orchestrations aligning paid digital ads (Meta, Google, YouTube) with real-world locality media and in-store collateral.'
      },
      {
        title: 'Unified Messaging Across Touchpoints',
        details: 'Ensuring your brand voice, sensory cues, and promotional offers speak with one unmistakable identity whether seen on Instagram or billboard.'
      },
      {
        title: 'Performance Tracking Beyond Vanity Metrics',
        details: 'Rigorous attribution focusing on verified store footfall, blended customer acquisition cost, and revenue velocity rather than superficial clicks.'
      }
    ],
    outcome: 'A brand that feels present everywhere — without shouting.',
    ctaText: 'Deploy Phygital Campaign'
  },
  {
    id: 'cinema-onground',
    indexTag: '02 — EMOTIONAL RECALL',
    titlePlain: 'Cinema & On-Ground',
    titleItalic: 'Visibility (Phygital).',
    pitch: 'We place your brand where decisions are emotionally made.',
    description: 'When people are scrolling on their phones, they are distracted. When they sit in a premium cinema hall or experience your brand in their physical neighborhood, they pay undivided attention. We place your brand directly inside the emotional decision-making moments.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    icon: Film,
    inclusions: [
      {
        title: 'PVR / INOX Screen Advertising',
        details: 'High-impact cinematic ad placements across premium theater networks, capturing high-intent affluent local consumers in focused immersion.'
      },
      {
        title: 'On-Ground & Locality-Based Visibility',
        details: 'Hyper-localized media placements, mall kiosks, and commercial hub touchpoints strategically positioned within your outlet’s catchment radius.'
      },
      {
        title: 'Experiential Brand Placements',
        details: 'Sensory pop-ups, tasting tables, and branded physical installations that turn passive bystanders into captivated, paying customers.'
      }
    ],
    outcome: 'Strong top-of-mind recall beyond phones.',
    ctaText: 'Book Cinema & On-Ground Scope'
  },
  {
    id: 'retention-whatsapp',
    indexTag: '03 — REPEAT ENGINE',
    titlePlain: 'Retention & WhatsApp',
    titleItalic: 'Marketing.',
    pitch: 'We help you stay present after the first visit.',
    description: 'Acquiring a new customer costs 5X to 7X more than retaining an existing one. We build automated retention flows, VIP WhatsApp clubs, and tailored nudges that keep your regulars engaged and coming back week after week.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop',
    icon: MessageSquare,
    inclusions: [
      {
        title: 'WhatsApp Campaigns for Repeat Footfall',
        details: 'High-open-rate conversational broadcasts designed for weekly dining, weekend events, and exclusive seasonal releases without being spammy.'
      },
      {
        title: 'Customer Retention Flows',
        details: 'Automated post-purchase check-ins, feedback recovery loops, and re-activation triggers for guests who haven’t visited in 30 days.'
      },
      {
        title: 'Event, Weekend & Seasonal Triggers',
        details: 'Timely festive nudges and weekend special hooks delivered precisely when purchase decision-making reaches its weekly peak.'
      }
    ],
    outcome: 'More repeat customers, less dependence on new ads.',
    ctaText: 'Build Retention Funnel'
  },
  {
    id: 'social-content',
    indexTag: '04 — MEMORY FIRST',
    titlePlain: 'Social Media & Content',
    titleItalic: '(Digital Presence).',
    pitch: 'We design content that feels human, not promotional, built to stay in people’s minds, not just their feeds.',
    description: 'Most agencies churn out daily graphics that get scrolled past. We produce sensory, feeling-led, and review-led video content engineered to stimulate physical desire and cement authentic recall.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    icon: Camera,
    inclusions: [
      {
        title: 'Reels & Carousels with Recall-First Storytelling',
        details: 'Sensory food and lifestyle cinematography, motion design, and narrative hooks designed to trigger visceral craving and memorable recall.'
      },
      {
        title: 'Founder & Brand-Led Narratives',
        details: 'Authentic behind-the-scenes stories spotlighting the craft, origin, and vision of the founders to build emotional community resonance.'
      },
      {
        title: 'Campaign-Based Content Instead of Daily Noise',
        details: 'High-production creative campaigns released strategically to drive viral algorithm reach instead of forgettable low-effort daily filler.'
      }
    ],
    outcome: 'Higher memory, not just reach.',
    ctaText: 'Produce Recall-First Content'
  },
  {
    id: 'brand-recall-strategy',
    indexTag: '05 — BLUEPRINT & MINDSHARE',
    titlePlain: 'Brand Recall',
    titleItalic: 'Strategy.',
    pitch: 'We start by identifying how and where customers discover, remember, and choose your brand.',
    description: 'Before executing any media or creative, we diagnose where your brand is leaking mindshare. We architect a definitive positioning system so you stand apart from aggressive competitors in crowded markets.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    icon: Compass,
    inclusions: [
      {
        title: 'Positioning & Messaging Clarity',
        details: 'Defining your unique value proposition and brand voice so customers instantly understand why you are the only logical choice.'
      },
      {
        title: 'Demand Moments Mapping (Cravings, Weekends, Events)',
        details: 'Pinpointing the exact moments of day, week, and season when customer appetite surges, ensuring you own that specific mental availability.'
      },
      {
        title: 'Platform Dependency Diagnosis',
        details: 'Auditing your customer acquisition channels to systematically reduce dependence on escalating meta/google ad costs.'
      }
    ],
    outcome: 'A clear recall plan instead of random posting.',
    ctaText: 'Commission Brand Strategy'
  }
];

export const ServicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State to manage open accordions per service item
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    // Scroll to anchor if provided in URL (e.g. /services#cinema-onground)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const headerOffset = 90;
          const pos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  const toggleAccordion = (serviceId, index) => {
    const key = `${serviceId}-${index}`;
    setOpenAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleServiceSelect = (serviceTitle) => {
    window.dispatchEvent(
      new CustomEvent('select-package', {
        detail: {
          packageName: serviceTitle
        }
      })
    );
    navigate('/#contact');
  };

  const scrollToService = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="servicesPage">
      {/* ====================================================================
          1. HERO SECTION
         ==================================================================== */}
      <motion.section 
        className="servicesHeroSection"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="servicesHeroContent">
            <motion.span 
              className="sectionTag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              SERVICES & PHYGITAL ARCHITECTURE
            </motion.span>

            <motion.h1 
              className="servicesHeroHeading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Architected For Real-World Recall &{' '}
              <span className="font-serif-italic brand-accent-text">Revenue Protection.</span>
            </motion.h1>

            <motion.p 
              className="servicesHeroSubtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We don't chase vanity clicks. We engineer connected physical and digital marketing systems that ensure customers think of your brand before they open an app, search Google, or see an offer.
            </motion.p>
          </div>

          {/* Quick Jump Pin Bar (Matching Image 1 Reference) */}
          <motion.div 
            className="servicesPinNavWrapper"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="pinNavLabel">QUICK JUMP TO SERVICE:</span>
            <div className="servicesPinBar">
              {detailedServices.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => scrollToService(svc.id)}
                  className="servicePinBtn"
                >
                  <span className="pinEmoji">📌</span>
                  <span className="pinTitle">{svc.titlePlain}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================================
          2. DETAILED SERVICE BLOCKS (Matching Image 2 Reference Layout)
         ==================================================================== */}
      <motion.section 
        className="detailedServicesList"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          {detailedServices.map((svc, sIdx) => {
            const isReversed = sIdx % 2 !== 0;

            return (
              <motion.div
                key={svc.id}
                id={svc.id}
                className={`serviceBlockCard ${isReversed ? 'layoutReversed' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.25, 0.8, 0.25, 1] }}
              >
                {/* Visual Image Column */}
                <div className="serviceVisualCol">
                  <div className="serviceImageFrame">
                    <img src={svc.image} alt={svc.titlePlain} className="serviceImg" />
                    <div className="serviceImageSplashOverlay" />
                    <div className="serviceIconFloatingBadge">
                      <svc.icon size={22} />
                    </div>
                  </div>
                </div>

                {/* Content & Interactive Inclusions Column */}
                <div className="serviceContentCol">
                  {/* Top Bullet Tag (Matching Reference: • FIRST - FULFILL & SHIP) */}
                  <div className="serviceSubTagRow">
                    <span className="referenceRedDot" />
                    <span className="referenceSubTag">{svc.indexTag}</span>
                  </div>

                  {/* Main Title */}
                  <h2 className="serviceBlockTitle">
                    {svc.titlePlain}{' '}
                    <span className="font-serif-italic titleItalicAccent">
                      {svc.titleItalic}
                    </span>
                  </h2>

                  {/* Pitch & Description */}
                  <p className="servicePitchQuote">"{svc.pitch}"</p>
                  <p className="serviceMainDesc">{svc.description}</p>

                  {/* Accordion / Expandable Deliverable Rows (Matching Reference with red + icons) */}
                  <div className="inclusionsAccordionList">
                    {svc.inclusions.map((inc, iIdx) => {
                      const isOpen = openAccordions[`${svc.id}-${iIdx}`];

                      return (
                        <div key={iIdx} className="accordionRowItem">
                          <button 
                            className="accordionHeaderBtn"
                            onClick={() => toggleAccordion(svc.id, iIdx)}
                            aria-expanded={isOpen}
                          >
                            <span className="accordionTitleText">{inc.title}</span>
                            <span className="accordionToggleIcon">
                              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.28, ease: 'easeInOut' }}
                                className="accordionContentBody"
                              >
                                <p>{inc.details}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Outcome Highlight Box */}
                  <div className="serviceOutcomeCard">
                    <span className="outcomeBadge">OUTCOME & BUSINESS IMPACT</span>
                    <p className="outcomeQuote">
                      ✨ {svc.outcome}
                    </p>
                  </div>

                  {/* CTA Action Button (Matching Reference Button Style) */}
                  <div className="serviceCtaRow">
                    <Magnet range={40} strength={0.25}>
                      <button
                        className="serviceActionBtn"
                        onClick={() => handleServiceSelect(svc.titlePlain)}
                      >
                        <span>{svc.ctaText}</span>
                        <ArrowUpRight size={17} />
                      </button>
                    </Magnet>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ====================================================================
          3. BOTTOM PACKAGES & CONSULTATION BANNER
         ==================================================================== */}
      <motion.section 
        className="servicesBottomCtaSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <motion.div 
            className="servicesBottomBanner"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sectionTag" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              ALL-IN-ONE GROWTH PACKAGES
            </span>

            <h2 className="servicesBottomBannerHeading">
              Want These Services Unified Into A{' '}
              <span className="font-serif-italic" style={{ textDecoration: 'underline wavy var(--accent-magenta) 2px' }}>
                Complete Growth Retainer?
              </span>
            </h2>

            <p className="servicesBottomBannerSub">
              Explore our structured growth tiers — Core, Growth, Premium, and VIP — engineered with guaranteed monthly deliverables and full-funnel execution.
            </p>

            <div className="servicesBottomBannerActions">
              <button 
                className="btn-primary"
                style={{ background: '#ffffff', color: '#0c1844', padding: '0.9rem 2.2rem', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)' }}
                onClick={() => navigate('/#packages')}
              >
                <span>View Growth Packages</span>
                <ArrowUpRight size={17} />
              </button>

              <button 
                className="btn-secondary"
                style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.1)' }}
                onClick={() => navigate('/#contact')}
              >
                <span>Discuss Custom Scope</span>
                <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
