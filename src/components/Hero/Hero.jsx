import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Magnet } from '../Animations/ReactBits';
import { hero } from '../../data/content';
import './Hero.css';

export const Hero = () => {
  const containerRef = useRef(null);

  // Track scroll progress across the sticky hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const expandProgress = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  // Left column text fade and collapse on scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const leftColWidth = useTransform(expandProgress, [0, 1], ["50%", "0%"]);

  // Right column video expansion from 48% to 90vw full width and downward shift
  const rightColWidth = useTransform(expandProgress, [0, 1], ["48%", "90vw"]);
  const videoY = useTransform(scrollYProgress, [0, 0.95], [0, 20]);
  const videoHeight = useTransform(expandProgress, [0, 1], ["330px", "520px"]);
  const videoBorderRadius = useTransform(expandProgress, [0, 1], ["14px", "10px"]);

  const handleScrollToSection = (targetId) => {
    const cleanId = targetId.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={containerRef} id="home" className="heroStickyContainer">
      <motion.div 
        className="heroStickyWrapper"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container heroContentGrid">

          {/* Left Column: Headline, Subtext & Action CTAs */}
          <motion.div 
            style={{ 
              opacity: textOpacity, 
              x: textX,
              width: leftColWidth,
              overflow: 'hidden'
            }} 
            className="heroLeftCol"
          >
            <h1 className="heroTitle">
              <span>{hero.headlinePlain} </span>
              <span className="heroTitleItalic">{hero.headlineAccent}</span>
            </h1>

            {/* Subtext Row */}
            <div className="heroSubtextRow">
              <p className="heroSubtitle">
                {hero.subtext}
              </p>

              {/* Curved Connector Arrow */}
              <svg className="curvedArrowSvg" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5 C 20 35, 40 30, 45 20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M40 18 L 46 20 L 43 25" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="heroButtons">
              <Magnet range={50} strength={0.3}>
                <button className="btn-primary" onClick={() => handleScrollToSection(hero.primaryCta.target)}>
                  <span>{hero.primaryCta.label}</span>
                  <ArrowUpRight size={18} />
                </button>
              </Magnet>

              <Magnet range={50} strength={0.3}>
                <button className="btn-secondary" onClick={() => handleScrollToSection(hero.secondaryCta.target)}>
                  <span>{hero.secondaryCta.label}</span>
                  <Sparkles size={18} />
                </button>
              </Magnet>
            </div>

            {/* Bottom Left Floating Agent Widget */}
            <div className="heroAgentWidget">
              <div className="agentAvatarWrapper">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
                  alt="Support Agent" 
                  className="agentAvatarImg" 
                />
                <span className="agentOnlineDot" />
              </div>
              <div className="agentBubble">
                <div className="agentBubbleHeader">Hey!</div>
                <p className="agentBubbleText">{hero.chatBubble}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating & Expanding Video Card */}
          <motion.div 
            style={{ width: rightColWidth, y: videoY, transformOrigin: "center center" }}
            className="heroRightCol"
          >
            {/* Video Player Card */}
            <motion.div 
              style={{ 
                height: videoHeight,
                borderRadius: videoBorderRadius,
                transformOrigin: "center center"
              }} 
              className="heroVideoCard"
            >
              <video
                src={hero.video}
                autoPlay
                loop
                muted
                playsInline
                className="heroVideoPlayer"
              />
              <div className="heroVideoOverlay" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
