import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { Logo } from '../Logo/Logo';
import { Magnet } from '../Animations/ReactBits';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', target: 'home', path: '/' },
    { label: 'About Us', target: 'about', path: '/about' },
    { label: 'Services', target: 'services', path: '/services' },
    { label: 'Contact Us', target: 'contact', path: '/contact' }
  ];

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/services') {
      setActiveSection('services');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
    } else {
      setActiveSection('home');
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleNavClick = (item) => {
    setIsMobileOpen(false);

    if (item.target === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.target === 'about') {
      navigate('/about');
      return;
    }

    if (item.target === 'services') {
      navigate('/services');
      return;
    }

    if (item.target === 'contact') {
      navigate('/contact');
      return;
    }
  };

  return (
    <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>
      <div className="container headerContainer">
        <div onClick={() => navigate('/')} className="headerLogoWrapper">
          <Logo />
        </div>

        <nav className="navMenu">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={item.path}
              className={`navLink ${activeSection === item.target ? 'navLinkActive' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.label}
              {activeSection === item.target && <span className="activeIndicator" />}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <button 
            className="themeToggleBtn" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="headerCTA">
            <Magnet range={50} strength={0.3}>
              <button 
                className="btn-primary" 
                style={{ padding: '0.6rem 1.6rem', fontSize: '0.9rem' }}
                onClick={() => handleNavClick({ target: 'contact' })}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </button>
            </Magnet>
          </div>

          <button
            className={`mobileToggle ${isMobileOpen ? 'mobileToggleOpen' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobileDrawer ${isMobileOpen ? 'mobileDrawerOpen' : ''}`}>
        <div className="mobileDrawerContent">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={item.path}
              className={`mobileNavLink ${activeSection === item.target ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => handleNavClick({ target: 'contact' })}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
