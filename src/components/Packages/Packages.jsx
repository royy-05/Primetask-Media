import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Zap, 
  Flame, 
  Crown, 
  Layers, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Magnet } from '../Animations/ReactBits';
import { growthPackages, packagesMeta } from '../../data/content';
import './Packages.css';

const tierIcons = {
  core: ShieldCheck,
  growth: Zap,
  premium: Flame,
  vip: Crown
};

// Detailed deliverable pillars containing all bullet points from the brief
const packagePillars = {
  core: [
    {
      title: "Content & Presence",
      items: [
        "Social Media Management",
        "Content Strategy & Ideation",
        "Content Creation",
        "8–12 Monthly Content Pieces",
        "Reels & Static/Carousel Content",
        "Caption & Hashtag Strategy"
      ]
    },
    {
      title: "Growth & Visibility",
      items: [
        "Google Business Profile Management",
        "Basic Performance Marketing",
        "Monthly Performance Report",
        "Basic Growth Recommendations"
      ]
    }
  ],
  growth: [
    {
      title: "Content & Creative System",
      items: [
        "16 Monthly Content Pieces",
        "Short-Form/Reel Content",
        "Carousel & Static Content",
        "Advanced Content Strategy",
        "Social Media Management"
      ]
    },
    {
      title: "Paid Acquisition & Ads",
      items: [
        "Meta Ads Management",
        "Google Ads Management",
        "Google Business Profile Management",
        "Retargeting Strategy",
        "Audience & Competitor Research"
      ]
    },
    {
      title: "Strategy & Optimization",
      items: [
        "Campaign Optimization",
        "Monthly Performance Analysis",
        "Growth Strategy Calls",
        "Everything in Core Included"
      ]
    }
  ],
  premium: [
    {
      title: "Studio Video & UGC Creative",
      items: [
        "20 Monthly Content Pieces",
        "High-Quality Reel Production",
        "UGC-Style Content Creation",
        "Influencer Marketing Coordination",
        "Advanced Content Strategy"
      ]
    },
    {
      title: "Omnichannel Paid Engine",
      items: [
        "Advanced Meta Ads",
        "Google Search & Display Ads",
        "YouTube Ads",
        "Retargeting Campaigns",
        "Conversion-Focused Strategy"
      ]
    },
    {
      title: "CRO & Revenue Intelligence",
      items: [
        "Landing Page/Website Optimization",
        "Detailed Performance Reporting",
        "ROI & Conversion Analysis",
        "Monthly Strategy Review",
        "Google Business Profile Management",
        "Everything in Growth Included"
      ]
    }
  ],
  vip: [
    {
      title: "Dedicated Creative Studio",
      items: [
        "25+ Monthly Content Pieces",
        "Dedicated Content Strategy",
        "Premium Video & Creative Production",
        "UGC & Influencer Campaigns",
        "Full Brand Creative Direction"
      ]
    },
    {
      title: "Full-Funnel Ad & CRO Engine",
      items: [
        "Full-Funnel Performance Marketing",
        "Meta + Google + YouTube Ads",
        "Advanced Retargeting",
        "Conversion Funnel Optimization",
        "Website & Landing Page Optimization",
        "Customer Acquisition Strategy",
        "Competitor Intelligence"
      ]
    },
    {
      title: "Executive CMO Partnership",
      items: [
        "Dedicated Account Management",
        "Priority Support & Direct Line",
        "Campaign-Level ROI Tracking",
        "Detailed Performance Dashboard",
        "Weekly Performance Monitoring",
        "Monthly Strategic Growth Meeting",
        "Quarterly Growth Planning",
        "Everything in Premium Included"
      ]
    }
  ]
};

export const Packages = () => {
  const [activeTab, setActiveTab] = useState('core');

  const handleSelectPackage = (pkg) => {
    // Notify contact form
    window.dispatchEvent(
      new CustomEvent('select-package', {
        detail: {
          packageName: pkg.name,
          packageId: pkg.id
        }
      })
    );

    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const activePackage = growthPackages.find(p => p.id === activeTab) || growthPackages[0];
  const activePillars = packagePillars[activePackage.id] || [];

  return (
    <motion.section 
      id="packages" 
      className="packagesSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container packagesContainer">
        {/* Section Header */}
        <div className="packagesHeaderRow">
          <div className="packagesHeaderLeft">
            <span className="sectionTag">{packagesMeta.tagline}</span>
            <h2 className="packagesMainHeading">
              {packagesMeta.headingPlain}{' '}
              <span className="font-serif-italic brand-accent-text">
                {packagesMeta.headingAccent}
              </span>
            </h2>
            <p className="packagesHeaderDesc">
              {packagesMeta.desc}
            </p>
          </div>
        </div>

        {/* Tab-like Structure (Sole Layout) */}
        <div className="spotlightWrapper">
          {/* Top Interactive Tabs Bar */}
          <div className="spotlightTabsTrack">
            {growthPackages.map((pkg) => {
              const TierIcon = tierIcons[pkg.id] || Layers;
              const isActive = activeTab === pkg.id;

              return (
                <button
                  key={pkg.id}
                  className={`spotlightTabTile ${isActive ? 'tileActive' : ''} ${pkg.highlight ? 'tileFeatured' : ''} ${pkg.vipTier ? 'tileVip' : ''}`}
                  onClick={() => setActiveTab(pkg.id)}
                >
                  <div className="tileNumberTag">{pkg.number}</div>
                  <div className="tileInfo">
                    <h4 className="tileName">{pkg.name}</h4>
                    <p className="tileVolume">{pkg.contentVolume}</p>
                  </div>
                  {pkg.highlight && <span className="tileBadge">POPULAR</span>}
                  {pkg.vipTier && <span className="tileBadge vip">VIP</span>}

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      className="tabActiveUnderline" 
                      layoutId="tabActiveUnderline"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Package Showcase Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
              className={`spotlightStageCard ${activePackage.highlight ? 'stageFeatured' : ''} ${activePackage.vipTier ? 'stageVip' : ''}`}
            >
              {/* Background Watermark Number */}
              <div className="stageWatermark">{activePackage.number}</div>

              <div className="stageGrid">
                {/* Left Column: Package Overview & Action */}
                <div className="stageOverview">
                  <div className="stageBadgeRow">
                    <span className="stageNumberPill">{activePackage.number}</span>
                    <span className="stageTierBadge">{activePackage.badge}</span>
                  </div>

                  <h3 className="stagePackageName">{activePackage.name}</h3>
                  <p className="stageTagline font-serif-italic">"{activePackage.tagline}"</p>
                  <p className="stageTarget">{activePackage.target}</p>

                  {/* Metric Box */}
                  <div className="stageMetricHighlight">
                    <div className="metricNumber">{activePackage.contentVolume.split(' ')[0]}</div>
                    <div className="metricLabel">
                      <strong>Monthly Content Pieces</strong>
                      <span>Reels, carousels & multimedia production</span>
                    </div>
                  </div>

                  {/* Best For Box */}
                  <div className="stageBestForBlock">
                    <span className="stageBestForLabel">DESIGNED SPECIFICALLY FOR:</span>
                    <p className="stageBestForText">{activePackage.bestFor}</p>
                  </div>

                  {/* CTA Action Button */}
                  <div className="stageActionRow">
                    <Magnet range={45} strength={0.25}>
                      <button
                        className={`stageMainCta ${activePackage.highlight ? 'btnFeaturedGradient' : ''} ${activePackage.vipTier ? 'btnVipGold' : ''}`}
                        onClick={() => handleSelectPackage(activePackage)}
                      >
                        <span>{activePackage.cta}</span>
                        <ArrowUpRight size={18} />
                      </button>
                    </Magnet>
                  </div>
                </div>

                {/* Right Column: Complete Scope & Deliverables */}
                <div className="stageDeliverables">
                  <div className="stageDeliverablesHeader">
                    <h4 className="stageDeliverablesTitle">Complete Scope & Deliverables</h4>
                    {activePackage.includesPrevious && (
                      <span className="stageCompoundingBadge">
                        + Includes {activePackage.includesPrevious}
                      </span>
                    )}
                  </div>

                  <div className={`pillarsGrid ${activePillars.length === 2 ? 'twoColumns' : 'threeColumns'}`}>
                    {activePillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="pillarCard">
                        <h5 className="pillarTitle">{pillar.title}</h5>
                        <ul className="pillarList">
                          {pillar.items.map((item, iIdx) => (
                            <li key={iIdx} className="pillarItem">
                              <CheckCircle2 size={15} className="pillarCheck" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section Footer Guarantee */}
        <div className="packagesBottomAssurance">
          <p>
            Looking for an enterprise custom rollout, multi-brand retainer, or on-ground activation?{' '}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                handleSelectPackage({ id: 'custom', name: 'Custom Agency Scope' });
              }}
              className="agencyContactLink"
            >
              Discuss a Custom Scope with Our Directors &rarr;
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};
