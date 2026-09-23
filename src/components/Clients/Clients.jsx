import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { clientsMeta, clients } from '../../data/content';
import { CaseStudyDrawer } from './CaseStudyDrawer';
import './Clients.css';

const LogoTile = ({ client, isActive, onSelect, onOpenDrawer }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`logoWallTile ${isActive ? 'activeTile' : ''}`}
      onMouseEnter={onSelect}
      onClick={onSelect}
    >
      <div className="logoTileMedia">
        {!hasError ? (
          <img 
            src={client.logo} 
            alt={client.name} 
            className="logoTileImg" 
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="logoTileFallback">
            {client.name}
          </span>
        )}
      </div>

      {/* Mobile Inline Proof (Visible on screens below 768px) */}
      <div className="mobileInlineResult">
        <span className="mobileCategoryTag">{client.category}</span>
        <p className="mobileResultDesc">{client.result}</p>
        {client.hasCaseStudy && (
          <button
            className="mobileCaseStudyTrigger"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
              onOpenDrawer();
            }}
          >
            <span>View Full Breakdown</span>
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export const Clients = () => {
  const [activeClient, setActiveClient] = useState(clients[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="clients" 
      className="clientsSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="clientsHeader">
          <span className="sectionTag">{clientsMeta.tagline}</span>
          <h2 className="clientsTitle">
            {clientsMeta.headingPlain} <span className="font-serif-italic brand-accent-text">{clientsMeta.headingAccent}</span>
          </h2>
          <p className="clientsDesc">
            {clientsMeta.desc}
          </p>
        </div>

        {/* Two-Column Hover-Split Showcase */}
        <div className="clientsSplitLayout">
          {/* Left Column: 3-Column Logo Wall */}
          <div className="logoWallColumn">
            <div className="logoWallGrid">
              {clients.map((client) => (
                <LogoTile
                  key={client.name}
                  client={client}
                  isActive={activeClient.name === client.name}
                  onSelect={() => setActiveClient(client)}
                  onOpenDrawer={() => setIsDrawerOpen(true)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Proof Panel (Desktop) */}
          <div className="proofPanelColumn">
            <div className="proofPanelSticky">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClient.name}
                  className="proofCard"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
                >
                  <div className="proofHeaderRow">
                    <span className="proofCategory">{activeClient.category}</span>
                    <span className="proofVerifiedBadge">
                      <CheckCircle2 size={14} />
                      <span>{activeClient.hasCaseStudy ? "Detailed Breakdown" : "Verified Case"}</span>
                    </span>
                  </div>

                  <h3 className="proofClientName">{activeClient.name}</h3>

                  <div className="proofDivider" />

                  <div className="proofResultBlock">
                    <span className="proofResultLabel">KEY RESULT & IMPACT</span>
                    <p className="proofResultMetric">{activeClient.result}</p>
                  </div>

                  {activeClient.hasCaseStudy ? (
                    <button 
                      className="btn-primary proofActionBtn proofCaseStudyBtn"
                      onClick={() => setIsDrawerOpen(true)}
                    >
                      <span>View Full Breakdown</span>
                      <ArrowUpRight size={16} />
                    </button>
                  ) : (
                    <button 
                      className="btn-secondary proofActionBtn"
                      onClick={handleScrollToContact}
                    >
                      <span>Scale Your Brand</span>
                      <ArrowUpRight size={16} />
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Slide-Over Drawer */}
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        client={activeClient}
      />
    </motion.section>
  );
};
