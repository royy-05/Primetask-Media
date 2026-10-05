import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Layers, Clock, Film, Play } from 'lucide-react';
import './CaseStudyDrawer.css';

export const CaseStudyDrawer = ({ isOpen, onClose, client }) => {
  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!client || !client.caseStudy) return null;

  const { caseStudy } = client;

  const handleBookStrategy = () => {
    onClose();
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="csDrawerPortal">
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="csDrawerBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Slide-over Drawer */}
          <motion.div
            className="csDrawerContainer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Top Navigation Bar */}
            <div className="csDrawerTopBar">
              <div className="csDrawerHeaderMeta">
                <span className="csDrawerBadge">
                  <Sparkles size={13} />
                  <span>CASE STUDY BREAKDOWN</span>
                </span>
                <span className="csDrawerSubBadge">{client.category}</span>
              </div>
              <button
                className="csDrawerCloseBtn"
                onClick={onClose}
                aria-label="Close Case Study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="csDrawerBody">
              {/* Header Showcase */}
              <div className="csDrawerHero">
                <div className="csDrawerLogoWrapper">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="csDrawerLogo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="csDrawerClientNameTag">{client.name}</span>
                </div>

                <h2 className="csDrawerTitle">
                  {caseStudy.title}
                </h2>
                <p className="csDrawerSubtitle">
                  {caseStudy.tag}
                </p>
                {caseStudy.period && (
                  <div className="csDrawerPeriodTag">
                    <Clock size={13} />
                    <span>Audit Period: {caseStudy.period}</span>
                  </div>
                )}
              </div>

              {/* Metrics Grid */}
              {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                <div className="csMetricsSection">
                  <span className="csSectionSmallLabel">VERIFIED GROWTH METRICS</span>
                  <div className="csMetricsGrid">
                    {caseStudy.metrics.map((item, idx) => (
                      <div key={idx} className="csMetricCard">
                        <span className="csMetricValue">{item.value}</span>
                        <span className="csMetricLabel">{item.label}</span>
                        <span className="csMetricNote">{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Quote / Testimonial Callout */}
              {caseStudy.quote && (
                <div className="csQuoteBlock">
                  <span className="csQuoteMark">“</span>
                  <p className="csQuoteText">{caseStudy.quote}</p>
                </div>
              )}

              {/* Campaign Creatives Showcase */}
              {caseStudy.creatives && caseStudy.creatives.length > 0 && (
                <div className="csCreativesSection">
                  <span className="csSectionSmallLabel">
                    <Sparkles size={13} />
                    <span>CAMPAIGN CREATIVES & VISUAL IDENTITY</span>
                  </span>
                  <div className="csCreativesGrid">
                    {caseStudy.creatives.map((imgSrc, idx) => (
                      <div key={idx} className="csCreativeCard">
                        <img src={imgSrc} alt={`Campaign creative ${idx + 1}`} className="csCreativeImg" />
                        <div className="csCreativeOverlay">
                          <span className="csCreativeTag">Campaign Visual Asset 0{idx + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Performance Reel */}
              {caseStudy.video && (
                <div className="csVideoSection">
                  <span className="csSectionSmallLabel">
                    <Film size={13} />
                    <span>FEATURED PERFORMANCE REEL</span>
                  </span>
                  <div className="csVideoCard">
                    <video
                      src={caseStudy.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="csDrawerVideoElement"
                    />
                  </div>
                </div>
              )}

              {/* About / Foundation Narrative */}
              {(caseStudy.about || caseStudy.startingFromZero) && (
                <div className="csNarrativeCard csZeroCard">
                  <div className="csNarrativeHeader">
                    <span className="csNarrativeTag">FOUNDATION</span>
                    <h3 className="csNarrativeTitle">
                      {typeof (caseStudy.about || caseStudy.startingFromZero) === 'object' 
                        ? (caseStudy.about || caseStudy.startingFromZero).title 
                        : "Background"}
                    </h3>
                  </div>
                  <p className="csNarrativeDesc">
                    {typeof (caseStudy.about || caseStudy.startingFromZero) === 'object' 
                      ? (caseStudy.about || caseStudy.startingFromZero).text 
                      : (caseStudy.about || caseStudy.startingFromZero)}
                  </p>
                </div>
              )}

              {/* The Challenge Block */}
              {caseStudy.challenge && (
                <div className="csNarrativeCard csChallengeCard">
                  <div className="csNarrativeHeader">
                    <span className="csNarrativeTag">THE HURDLE</span>
                    <h3 className="csNarrativeTitle">
                      {typeof caseStudy.challenge === 'object' ? caseStudy.challenge.title : "The Challenge"}
                    </h3>
                  </div>
                  <p className="csNarrativeDesc">
                    {typeof caseStudy.challenge === 'object' ? caseStudy.challenge.text : caseStudy.challenge}
                  </p>
                </div>
              )}

              {/* Strategy Framework */}
              {caseStudy.strategyPhases && caseStudy.strategyPhases.length > 0 && (
                <div className="csStrategySection">
                  <div className="csStrategyHeader">
                    <span className="csSectionSmallLabel">
                      <Layers size={13} />
                      <span>THE STRATEGIC FRAMEWORK</span>
                    </span>
                    <h3 className="csStrategyMainTitle">
                      {caseStudy.strategyTitle || (
                        <>From Execution to <span className="font-serif-italic brand-accent-text">Category Recall</span></>
                      )}
                    </h3>
                  </div>

                  <div className="csPhaseList">
                    {caseStudy.strategyPhases.map((phase, idx) => (
                      <div key={idx} className="csPhaseCard">
                        <div className="csPhaseIndicator">
                          <span className="csPhaseNum">0{idx + 1}</span>
                        </div>
                        <div className="csPhaseContent">
                          <span className="csPhaseBadge">{phase.badge || `PHASE 0${idx + 1}`}</span>
                          <h4 className="csPhaseTitle">{phase.title}</h4>
                          <p className="csPhaseDesc">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Methods (if present) */}
              {caseStudy.tools && caseStudy.tools.length > 0 && (
                <div className="csToolsSection">
                  <span className="csSectionSmallLabel">TOOLS & EXECUTION PLATFORMS</span>
                  <div className="csToolsPillContainer">
                    {caseStudy.tools.map((tool, idx) => (
                      <span key={idx} className="csToolPill">{tool}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Takeaway / Conclusion / Highlight */}
              {(caseStudy.takeaway || caseStudy.sensoryCampaign) && (
                <div className="csSensoryCard">
                  <div className="csSensoryBadge">
                    <TrendingUp size={14} />
                    <span>KEY EXECUTION TAKEAWAY</span>
                  </div>
                  <h3 className="csSensoryTitle">
                    {caseStudy.takeaway ? caseStudy.takeaway.title : caseStudy.sensoryCampaign.title}
                  </h3>
                  <p className="csSensoryDesc">
                    {caseStudy.takeaway ? caseStudy.takeaway.text : caseStudy.sensoryCampaign.desc}
                  </p>
                  {caseStudy.takeaway?.note && (
                    <div className="csAuditReportNote">
                      <strong>Audit Note:</strong> {caseStudy.takeaway.note}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sticky Bottom CTA */}
            <div className="csDrawerFooter">
              <div className="csFooterInfo">
                <span className="csFooterPrompt">Ready for this caliber of growth?</span>
                <span className="csFooterSub">Custom phygital strategy for your business</span>
              </div>
              <button
                className="btn-primary csFooterBtn"
                onClick={handleBookStrategy}
              >
                <span>Scale Your Brand</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
