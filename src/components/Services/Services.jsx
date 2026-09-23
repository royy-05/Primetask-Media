import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { services } from '../../data/content';
import './Services.css';

// High-impact imagery for each of the 6 Primetask Media services
const serviceImages = [
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", // Integrated Phygital Campaigns
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop", // Cinema & On-Ground Visibility
  "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop", // Retention & WhatsApp Marketing
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", // Social Media & Content
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", // Brand Recall Strategy
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"  // Customer Loyalty Programs
];

// Generous staggered vertical offsets for 3 columns spreading across the canvas
const colOffsets = ["0px", "75px", "15px", "50px", "130px", "65px"];

// Staggered ambient float delays so cards drift asynchronously
const floatDelays = ["0s", "1.2s", "2.4s", "3.6s", "4.8s", "1.8s"];

// Anchors on the /services page for direct navigation
const serviceAnchorMap = [
  'phygital-campaigns',
  'cinema-onground',
  'retention-whatsapp',
  'social-content',
  'brand-recall-strategy',
  'retention-whatsapp'
];

// Neural synaptic links connecting the cards in a wide graph
const neuralLinks = [
  { from: 0, to: 1, curve: 30 },
  { from: 1, to: 2, curve: -30 },
  { from: 0, to: 3, curve: -20 },
  { from: 1, to: 4, curve: 20 },
  { from: 2, to: 5, curve: 25 },
  { from: 3, to: 4, curve: 35 },
  { from: 4, to: 5, curve: -35 },
  { from: 1, to: 3, curve: -30 }, // cross synapse
  { from: 1, to: 5, curve: 30 }   // cross synapse
];

export const Services = () => {
  const navigate = useNavigate();
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [nodeCoords, setNodeCoords] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tiltMap, setTiltMap] = useState({});

  const handleCardMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTiltMap(prev => ({
      ...prev,
      [index]: { x: x * 26, y: y * 20 }
    }));
  };

  const handleCardMouseLeave = (index) => {
    setHoveredCard(null);
    setTiltMap(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  // Measure dot center coordinates relative to the grid wrapper
  const updateNodePositions = () => {
    if (!gridRef.current) return;
    const gridRect = gridRef.current.getBoundingClientRect();

    const coords = cardRefs.current.map((cardEl) => {
      if (!cardEl) return { x: 0, y: 0 };
      const dot = cardEl.querySelector('.neuralCardDot');
      const target = dot || cardEl;
      const rect = target.getBoundingClientRect();
      return {
        x: rect.left - gridRect.left + rect.width / 2,
        y: rect.top - gridRect.top + rect.height / 2
      };
    });

    setNodeCoords(coords);
  };

  useEffect(() => {
    updateNodePositions();
    const t1 = setTimeout(updateNodePositions, 100);
    const t2 = setTimeout(updateNodePositions, 400);
    const t3 = setTimeout(updateNodePositions, 900);

    window.addEventListener('resize', updateNodePositions);

    let observer;
    if (gridRef.current && window.ResizeObserver) {
      observer = new ResizeObserver(() => {
        updateNodePositions();
      });
      observer.observe(gridRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', updateNodePositions);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleCardClick = (index) => {
    const anchor = serviceAnchorMap[index] || '';
    navigate(`/services#${anchor}`);
  };

  // Generate smooth SVG bezier curves for strings
  const generateCurvedPath = (p1, p2, curveOffset = 0) => {
    if (!p1 || !p2 || (p1.x === 0 && p1.y === 0) || (p2.x === 0 && p2.y === 0)) return '';
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const cx1 = p1.x + dx * 0.35;
    const cy1 = p1.y + dy * 0.15 + curveOffset;
    const cx2 = p1.x + dx * 0.65;
    const cy2 = p1.y + dy * 0.85 + curveOffset;
    return `M ${p1.x} ${p1.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p2.x} ${p2.y}`;
  };

  return (
    <motion.section 
      id="services" 
      className="servicesSection neuralSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="servicesHeader">
          <span className="sectionTag">SERVICES</span>
          <h2 className="servicesMainTitle">
            Our <span className="font-serif-italic brand-accent-text">Services</span>
          </h2>
        </div>

        {/* Neural Network Canvas: Wide spread across the container */}
        <div ref={gridRef} className="neuralNetworkWrapper">
          {/* Dynamic SVG Synapse Connecting Strings */}
          <svg className="neuralSvgOverlay" aria-hidden="true">
            <defs>
              <linearGradient id="brandSynapseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--accent-indigo)" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {neuralLinks.map((link, idx) => {
              const p1 = nodeCoords[link.from];
              const p2 = nodeCoords[link.to];
              const pathD = generateCurvedPath(p1, p2, link.curve);
              if (!pathD) return null;

              const isConnected = 
                hoveredCard !== null && (hoveredCard === link.from || hoveredCard === link.to);

              return (
                <g key={idx} className="neuralStringGroup">
                  {/* Synapse String Line */}
                  <path
                    d={pathD}
                    className={`neuralSynapseLine ${isConnected ? 'synapseLineActive' : ''}`}
                  />
                  {/* Signal Pulse Traveling Along String */}
                  <circle 
                    r={isConnected ? "4" : "3"} 
                    className={`neuralPulseDot ${isConnected ? 'pulseDotActive' : ''}`}
                  >
                    <animateMotion
                      path={pathD}
                      dur={`${isConnected ? 2 : 4 + (idx % 3) * 0.7}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Staggered Grid of Floating Service Cards Spaced Out Wide */}
          <div className="neuralCardsGrid">
            {services.slice(0, 6).map((service, index) => {
              const isHovered = hoveredCard === index;
              const tilt = tiltMap[index] || { x: 0, y: 0 };

              return (
                <motion.div
                  key={service.title || index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`neuralCard ${isHovered ? 'neuralCardHovered' : ''}`}
                  style={{ 
                    marginTop: colOffsets[index],
                    animationDelay: floatDelays[index],
                    transform: isHovered 
                      ? `translate3d(${tilt.x}px, ${tilt.y - 18}px, 0) rotateY(${tilt.x * 0.45}deg) rotateX(${-tilt.y * 0.45}deg) scale(1.05)`
                      : undefined,
                    transition: isHovered 
                      ? 'transform 0.12s ease-out, border-color 0.35s ease, box-shadow 0.4s ease' 
                      : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.4s ease'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseMove={(e) => handleCardMouseMove(e, index)}
                  onMouseLeave={() => handleCardMouseLeave(index)}
                  onClick={() => handleCardClick(index)}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  {/* Card Background Image with Depth */}
                  <div 
                    className="neuralCardBg"
                    style={{ backgroundImage: `url(${serviceImages[index]})` }}
                  />

                  {/* Dark Vignette Overlay for Crisp Contrast */}
                  <div className="neuralCardOverlay" />

                  {/* Top-Left Glowing Node Dot (Brand Color) */}
                  <div className="neuralCardTop">
                    <div className="neuralDotWrapper">
                      <span className="neuralCardDot" />
                      <span className="neuralDotRing" />
                    </div>
                  </div>

                  {/* Bottom: Only Service Name */}
                  <div className="neuralCardBottom">
                    <h3 className="neuralCardName">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
