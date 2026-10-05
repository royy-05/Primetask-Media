import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Play, X, Film, Sparkles } from 'lucide-react';
import { workCategories, works } from '../../data/content';
import './OurWorks.css';


export const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const carouselRef = useRef(null);

  // Manage body scroll when modal is active
  useEffect(() => {
    if (activeVideoModal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveVideoModal(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeVideoModal]);

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
                const cardImage = project.image || null;

                return (
                  <motion.div
                    key={project.title || index}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className={`workCardItem ${project.video ? 'workCardHasVideo' : project.isCreative ? 'workCardHasCreative' : ''}`}
                    onClick={() => {
                      if (project.video || project.isCreative) {
                        setActiveVideoModal(project);
                      } else if (project.link) {
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      } else {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {/* Full Card Media (Video or Image) with Hover Text Overlay */}
                    <div className="workImageContainer">
                      {project.video ? (
                        <>
                          <video
                            src={project.video}
                            poster={project.poster || undefined}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="workVideo"
                          />
                          <div className="workVideoPill">
                            <Play size={10} fill="currentColor" />
                            <span>REEL</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <img src={cardImage} alt={project.title} className="workImage" />
                          {project.isCreative && (
                            <div className="workCreativePill">
                              <Sparkles size={10} />
                              <span>CREATIVE</span>
                            </div>
                          )}
                        </>
                      )}
                      
                      {/* Text Revealed On Hover Only */}
                      <div className="workHoverContent">
                        <div className="workCategoryRow">
                          <span className="workCategoryLabel">{project.category}</span>
                          {project.video ? (
                            <span className="workWatchReelPrompt">
                              <span>Watch Reel</span>
                              <Play size={11} fill="currentColor" />
                            </span>
                          ) : project.isCreative ? (
                            <span className="workWatchCreativePrompt">
                              <span>View Creative</span>
                              <Sparkles size={11} />
                            </span>
                          ) : (
                            project.link && <ExternalLink size={14} className="workLinkIcon" />
                          )}
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

      {/* Video Reel & Creative Lightbox Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <div 
            className="workVideoModalPortal"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div 
              className="workVideoModalBackdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div 
              className="workVideoModalContainer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="workVideoModalHeader">
                <div className="workVideoModalMeta">
                  <span className="workVideoModalTag">
                    {activeVideoModal.video ? <Film size={12} /> : <Sparkles size={12} />}
                    <span>{activeVideoModal.category}</span>
                  </span>
                  <h3 className="workVideoModalTitle">{activeVideoModal.title}</h3>
                </div>
                <button 
                  className="workVideoModalClose"
                  onClick={() => setActiveVideoModal(null)}
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="workVideoPlayerWrapper">
                {activeVideoModal.video ? (
                  <video
                    src={activeVideoModal.video}
                    poster={activeVideoModal.poster}
                    controls
                    autoPlay
                    playsInline
                    className="workModalVideoElement"
                  />
                ) : (
                  <img
                    src={activeVideoModal.image}
                    alt={activeVideoModal.title}
                    className="workModalImgElement"
                  />
                )}
              </div>

              <div className="workVideoModalFooter">
                <div className="workVideoModalInfo">
                  <p className="workVideoModalResult">{activeVideoModal.result}</p>
                  <p className="workVideoModalSummary">{activeVideoModal.summary}</p>
                </div>
                <div className="workVideoModalActions">
                  {activeVideoModal.link && (
                    <a
                      href={activeVideoModal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary workModalCta"
                    >
                      <span>Visit Post / Client</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
