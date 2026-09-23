import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/content';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <motion.section 
      className="testimonialsSection"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container testimonialsContainer">
        <motion.div 
          className="testimonialsHeader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sectionTag">WHAT CLIENTS SAY</span>
          <h2 className="sectionTitle">
            Trusted by <span className="font-serif-italic brand-accent-text">Category Leaders</span>
          </h2>
          <p className="testimonialsSubtitle">
            Real outcomes from founders building durable brand recall and platform-independent revenue:
          </p>
        </motion.div>

        {/* 2-Card Side-by-Side Luxury Grid */}
        <div className="testimonialsGrid">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.brand}
              className="editorialTestimonialCard"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
            >
              <div className="editorialStarsRow">
                {[...Array(item.stars || 5)].map((_, i) => (
                  <Star key={i} size={18} className="editorialStar" fill="currentColor" />
                ))}
              </div>

              <h3 className="editorialBrandTitle font-serif">{item.brand}</h3>

              <p className="editorialQuoteText">{item.quote}</p>

              <div className="editorialAuthorLine">
                <span className="editorialAuthorName">— {item.name},</span>
                <span className="editorialAuthorRole"> {item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
