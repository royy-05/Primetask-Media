import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { workCategories, works } from '../../data/content';
import './OurWorks.css';

const defaultWorkImages = {
  "Masala Code, Indore": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "Chaa Kahon, Uttarpara": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
  "Wah Boutique, Kolkata": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
  "Mishael": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  "R3 Interiors, Kolkata": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  "YR Fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  "Pool Cafe, Konnagar": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  "Cafe Coutume": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  "Chowdhury Jewellers": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
};

export const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const categories = workCategories;

  const filteredProjects = activeCategory === 'All'
    ? works
    : works.filter(p => p.category === activeCategory);

  // Auto-scrolling carousel that pauses on hover
  useEffect(() => {
    if (isHovered) return;
    if (filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const container = carouselRef.current;
      const firstCard = container.querySelector('.workCardItem');
      const cardWidth = firstCard ? firstCard.offsetWidth : 360;
      const gap = 28; // gap between cards
      const step = cardWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, filteredProjects.length]);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.querySelector('.workCardItem');
    const cardWidth = firstCard ? firstCard.offsetWidth : 360;
    const gap = 28;
    const step = cardWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (direction === 'right') {
      if (container.scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    } else {
      if (container.scrollLeft <= 15) {
        container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="works" 
      className="worksSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <span id="case-studies" style={{ display: 'none' }} />
      <div className="container">
        {/* Section Header with Title on Left and Navigation Arrows on Right */}
        <div className="worksHeader">
          <div className="worksHeaderLeft">
            <h2 className="worksMainTitle">
              Our Featured <span className="font-serif-italic brand-accent-text">Works</span>
            </h2>
          </div>

          {/* Navigation Arrows on Right Side of Title */}
          <div className="worksHeaderArrows">
            <button 
              className="worksArrowBtn" 
              onClick={() => handleScroll('left')}
              aria-label="Previous works"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              className="worksArrowBtn" 
              onClick={() => handleScroll('right')}
              aria-label="Next works"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="worksTabsContainer">
          <div className="worksTabsTrack">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`worksTabItem ${isActive ? 'worksTabItemActive' : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <span>{cat}</span>

                  {/* Active Brand Accent Blue Dot Centered on Baseline */}
                  {isActive && (
                    <motion.span 
                      className="activeBaselineDot" 
                      layoutId="activeBaselineDot"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Carousel */}
        <div 
          className="worksCarouselWrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div 
            ref={carouselRef}
            className="worksCarouselTrack"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const cardImage = project.image || defaultWorkImages[project.title] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";

                return (
                  <motion.div
                    key={project.title || index}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="workCardItem"
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      } else {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {/* Full Card Image with Hover Text Overlay */}
                    <div className="workImageContainer">
                      <img src={cardImage} alt={project.title} className="workImage" />
                      
                      {/* Text Revealed On Hover Only */}
                      <div className="workHoverContent">
                        <div className="workCategoryRow">
                          <span className="workCategoryLabel">{project.category}</span>
                          {project.link && <ExternalLink size={14} className="workLinkIcon" />}
                        </div>
                        <h3 className="workCardTitle">{project.title}</h3>
                        {project.result && <p className="workCardResult">{project.result}</p>}
                        {project.summary && <p className="workCardSummary">{project.summary}</p>}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
