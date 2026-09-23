import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { Logo } from '../Logo/Logo';
import { footer } from '../../data/content';
import './Footer.css';

const capabilityAnchorMap = {
  'integrated phygital campaigns': 'phygital-campaigns',
  'cinema & on-ground visibility': 'cinema-onground',
  'retention & whatsapp marketing': 'retention-whatsapp',
  'social media & content': 'social-content',
  'brand recall strategy': 'brand-recall-strategy',
  'customer loyalty programs': 'retention-whatsapp'
};

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const lower = item.toLowerCase();

    if (lower === 'about us' || lower === 'about') {
      navigate('/about');
      return;
    }

    if (lower === 'services' || lower === 'our services') {
      navigate('/services');
      return;
    }

    if (lower === 'contact us' || lower === 'contact') {
      navigate('/contact');
      return;
    }

    if (lower === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetMap = {
      'works': 'case-studies',
      'contact us': 'contact',
      'contact': 'contact',
      'packages': 'packages',
      'clients': 'clients'
    };

    const targetId = targetMap[lower] || lower;

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCapabilityClick = (e, capName) => {
    e.preventDefault();
    const anchor = capabilityAnchorMap[capName.toLowerCase()] || 'phygital-campaigns';
    navigate(`/services#${anchor}`);
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div className="footerMainGrid">
          {/* Column 1: Brand Info & Socials */}
          <div className="footerBrandCol">
            <div onClick={() => navigate('/')} className="footerLogoWrapper">
              <Logo />
            </div>

            <p className="footerBrandDesc">
              <strong>{footer.brandName}</strong> is an elite phygital marketing agency helping hospitality, QSR, and consumer brands stay relevant beyond platforms by building brand recall that protects revenue. We don't chase clicks — we build memory.
            </p>

            {/* Social Media Rounded Buttons */}
            <div className="footerSocialsRow">
              <a 
                href={footer.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="socialPillBtn" 
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={footer.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="socialPillBtn" 
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={footer.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="socialPillBtn" 
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={footer.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="socialPillBtn" 
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Core Capabilities with Chevrons */}
          <div className="footerNavCol">
            <h4 className="footerColTitle">
              <span className="footerBulletDot" />
              <span>CORE CAPABILITIES</span>
            </h4>
            <ul className="footerCapabilitiesList">
              {footer.capabilities.map((cap) => (
                <li key={cap} className="capabilityItem">
                  <span className="chevronPrefix">›</span>
                  <a href={`/services#${capabilityAnchorMap[cap.toLowerCase()] || ''}`} onClick={(e) => handleCapabilityClick(e, cap)}>
                    {cap}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="footerNavCol">
            <h4 className="footerColTitle">
              <span className="footerBulletDot" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="footerNavList">
              {footer.nav.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contacts */}
          <div className="footerContactCol">
            <h4 className="footerColTitle">
              <span className="footerBulletDot" />
              <span>DIRECT CONTACTS</span>
            </h4>

            <div className="footerContactsList">
              {/* Email Card */}
              <a href={`mailto:${footer.contacts.email}`} className="contactCardLink">
                <div className="contactIconPill">
                  <Mail size={16} />
                </div>
                <span className="contactText">{footer.contacts.email}</span>
              </a>

              {/* Phone Card */}
              <a href={`tel:${footer.contacts.phone}`} className="contactCardLink">
                <div className="contactIconPill">
                  <Phone size={16} />
                </div>
                <span className="contactText">{footer.contacts.phone}</span>
              </a>

              {/* Address Card */}
              <div className="contactCardLink locationStatic">
                <div className="contactIconPill">
                  <MapPin size={16} />
                </div>
                <span className="contactText">{footer.contacts.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footerDivider" />

        {/* Bottom Bar: Copyright & Policies */}
        <div className="footerBottomBar">
          <div className="footerCopyright">
            <p className="mainCopyright">{footer.copyright}</p>
            <p className="operatingTradeName">{footer.operatingName}</p>
          </div>

          <div className="footerPolicyLinks">
            {footer.policies.map((policy) => (
              <a 
                key={policy} 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="policyLink"
              >
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
