import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services/Services';
import { Clients } from '../components/Clients/Clients';
import { OurWorks } from '../components/OurWorks/OurWorks';
import { InstagramShowcase } from '../components/InstagramShowcase/InstagramShowcase';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Stats } from '../components/Stats/Stats';
import { Packages } from '../components/Packages/Packages';
import { Contact } from '../components/Contact/Contact';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigated with a hash e.g. /#packages or /#services
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <OurWorks />
      <InstagramShowcase />
      <Testimonials />
      <Stats />
      <Packages />
      <Contact />
    </>
  );
};
