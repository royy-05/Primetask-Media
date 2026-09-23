import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import './InstagramShowcase.css';

const clientReels = [
  {
    id: 'DRSScsBEhUT',
    client: 'Cafe Coutume',
    category: 'Artisanal Specialty Cafe',
    result: '5X ROAS & 35% drop in CPA',
    link: 'https://www.instagram.com/reels/DRSScsBEhUT/'
  },
  {
    id: 'DOJSppclENQ',
    client: 'Chowdhury Jewellers',
    category: 'Heritage Jewellery',
    result: 'Record Festive Sales & 40 Online Orders',
    link: 'https://www.instagram.com/reels/DOJSppclENQ/'
  },
  {
    id: 'C368vN3MYxM',
    client: 'Pool Cafe',
    category: 'Dining & Gaming Hangout',
    result: '25K+ Local Reach & Packed Tables',
    link: 'https://www.instagram.com/reels/C368vN3MYxM/'
  },
  {
    id: 'DJCCD9Egovy',
    client: 'YR Fitness',
    category: 'Gym & Fitness Community',
    result: '0 to 88.9K+ Reach in 4 Weeks',
    link: 'https://www.instagram.com/reel/DJCCD9Egovy/'
  },
  {
    id: 'DI1gcloS6Kp',
    client: 'Mishael',
    category: 'Luxury Fashion & Couture',
    result: '500K+ Organic Reach & 4X Engagement',
    link: 'https://www.instagram.com/reel/DI1gcloS6Kp/'
  }
];

export const InstagramShowcase = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = 340;
    const gap = 24;
    const step = cardWidth + gap;

    if (direction === 'left') {
      container.scrollBy({ left: -step, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="instagram-reels" 
      className="instaEmbedSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="instaEmbedHeader">
          <div className="instaEmbedHeaderLeft">
            <div className="instaEmbedBadge">
              <Instagram size={16} />
              <span>OFFICIAL CLIENT REELS</span>
            </div>
            <h2 className="instaEmbedMainTitle">
              Direct From <span className="font-serif-italic brand-accent-text">Instagram</span>
            </h2>
            <p className="instaEmbedSubtitle">
              Real reels from live client profiles. Click play on any reel to watch the campaigns we create and scale.
            </p>
          </div>

          {/* Navigation Controls & Official Handle Link */}
          <div className="instaEmbedHeaderControls">
            <a 
              href="https://www.instagram.com/primetask_media/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instaProfileBadgeLink"
              title="Visit @primetask_media on Instagram"
            >
              <Instagram size={15} />
              <span>@primetask_media</span>
            </a>

            <div className="instaCarouselBtnsGroup">
              <button 
                className="instaEmbedNavBtn"
                onClick={() => scroll('left')}
                aria-label="Previous reel"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="instaEmbedNavBtn"
                onClick={() => scroll('right')}
                aria-label="Next reel"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel of Real Instagram Embeds */}
        <div className="instaEmbedCarouselWrapper">
          <div ref={carouselRef} className="instaEmbedCarouselTrack">
            {clientReels.map((reel) => (
              <div key={reel.id} className="instaEmbedCard">
                {/* Real Official Instagram Iframe Embed */}
                <div className="instaIframeContainer">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    title={`${reel.client} Instagram Reel`}
                    className="instaRealIframe"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
