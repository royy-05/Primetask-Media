import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Coffee, 
  Hotel, 
  ShoppingBag, 
  Users, 
  Target, 
  Zap, 
  Layers, 
  HeartHandshake, 
  TrendingUp, 
  Eye, 
  ShieldCheck,
  Film,
  MessageCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';
import { Magnet } from '../components/Animations/ReactBits';
import './About.css';

const clientSectors = [
  {
    id: 'qsr',
    icon: Coffee,
    title: 'Cafés & QSR Chains',
    tag: 'Footfall & Local Retention',
    desc: 'High-velocity local footfall, sensory reels, review-led social proof, and automated WhatsApp loyalty funnels that pack tables every weekend.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    examples: 'Masala Code, Chaa Kahon, Pool Cafe, Cafe Coutume'
  },
  {
    id: 'hospitality',
    icon: Hotel,
    title: 'Resorts & Hospitality Brands',
    tag: 'Experiential & Direct Bookings',
    desc: 'Boutique retreats, luxury destination hotels, and dining spaces aiming for aspirational positioning, elevated recall, and direct booking engines.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    examples: 'Indoor Hotel, experiential stays'
  },
  {
    id: 'd2c',
    icon: ShoppingBag,
    title: 'Emerging D2C Brands',
    tag: 'Omnichannel & Customer LTV',
    desc: 'Direct-to-consumer apparel, lifestyle, and consumer goods breaking past platform ad dependency into enduring recall and high repeat purchase rates.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    examples: 'Wah Boutique, Mishael Luxury Fashion'
  },
  {
    id: 'founders',
    icon: Users,
    title: 'Founder-Led Consumer Businesses',
    tag: 'Executive CMO Partnership',
    desc: 'Visionary entrepreneurs and multi-unit operators looking for a high-touch marketing department that builds lasting category leadership.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    examples: 'Royal Enfield community, R3 Interiors, YR Fitness'
  }
];

const whyChooseUsPoints = [
  {
    icon: Target,
    title: 'Founder-First Approach',
    tag: 'Direct Strategic Access',
    desc: 'We work closely with founders who want to move from short-term campaigns to long-term brand presence with zero bureaucracy.'
  },
  {
    icon: Zap,
    title: 'Tailored Strategies',
    tag: 'No Cookie-Cutter Templates',
    desc: 'No cookie-cutter solutions. Every campaign and distribution channel is customized strictly to your brand’s competitive landscape.'
  },
  {
    icon: TrendingUp,
    title: 'Creative Meets Performance',
    tag: 'Art + Analytical Rigor',
    desc: 'We blend high-aesthetic sensory storytelling with rigorous analytics for campaigns that captivate audiences and convert profitably.'
  },
  {
    icon: Layers,
    title: 'Phygital Brand Systems',
    tag: 'Connected Ecosystems',
    desc: 'Digital channels and real-world touchpoints operating as one cohesive machine, ensuring demand never relies on any single platform.'
  },
  {
    icon: HeartHandshake,
    title: 'Client-First Partnership',
    tag: 'Your Extended Team',
    desc: 'Your success is our priority. We operate as an extension of your internal marketing department with total transparency.'
  },
  {
    icon: Eye,
    title: 'Focus on Footfall & Recall',
    tag: 'Revenue That Compounds',
    desc: 'We obsess over the metrics that build equity: in-store footfall, brand recall, customer retention, and repeat buyers.'
  }
];

export const About = () => {
  const navigate = useNavigate();
  const [whyChooseTilt, setWhyChooseTilt] = useState({});

  const handleContactClick = () => {
    navigate('/#contact');
  };

  const handlePackagesClick = () => {
    navigate('/#packages');
  };

  const handleWorksClick = () => {
    navigate('/#works');
  };

  const handleWhyChooseMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setWhyChooseTilt(prev => ({
      ...prev,
      [index]: { x: x * 22, y: y * 16 }
    }));
  };

  const handleWhyChooseMouseLeave = (index) => {
    setWhyChooseTilt(prev => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  return (
    <div className="aboutPage">
      {/* ====================================================================
          1. HERO & POSITIONING MANIFESTO
         ==================================================================== */}
      <motion.section 
        className="aboutHeroSection"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="aboutHeroContent">
            <motion.span 
              className="sectionTag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ABOUT PRIMETASK MEDIA
            </motion.span>

            <motion.h1 
              className="aboutHeroTitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Helping Hospitality & DTC Brands Stay Relevant{' '}
              <span className="font-serif-italic brand-accent-text">Beyond Platforms.</span>
            </motion.h1>

            <motion.p 
              className="aboutHeroSubtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help brands build recall, not just reach — so customers think of you before they open an app, search Google, or see an offer.
            </motion.p>
          </div>

          {/* Manifesto Card */}
          <motion.div 
            className="manifestoCard"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="manifestoQuoteMark">
              <Quote size={40} />
            </div>

            <div className="manifestoBody">
              <p className="manifestoLead">
                Our work blends digital channels (social, retention, WhatsApp) with physical visibility (cinema screens, on-ground media, experiential touchpoints) to create demand that doesn’t depend on platforms alone.
              </p>

              <div className="manifestoPunchline">
                <span className="punchlineMuted">We don’t chase clicks.</span>
                <span className="punchlineAccent font-serif-italic">We build memory.</span>
              </div>
            </div>

            <div className="manifestoFooter">
              <div className="founderBadge">
                <div className="founderAvatarDot" />
                <span>Founder-First Collaboration &bull; Long-Term Brand Presence</span>
              </div>
              <button onClick={handleContactClick} className="btn-primary manifestoCtaBtn">
                <span>Book a Strategy Call</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ====================================================================
          2. WHO WE ARE
         ==================================================================== */}
      <motion.section 
        className="whoWeAreSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="whoWeAreGrid">
            {/* Left Narrative */}
            <motion.div 
              className="whoWeAreLeft"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <span className="sectionTag">WHO WE ARE</span>
              <h2 className="whoWeAreTitle">
                Built For Brands That Want{' '}
                <span className="font-serif-italic brand-accent-text">Memory That Protects Revenue.</span>
              </h2>

              <p className="whoWeArePara">
                We are <strong>Primetask Media</strong>, a <strong>phygital marketing agency</strong> built for hospitality, QSR, and consumer brands that want to build lasting brand recall, not just digital reach.
              </p>

              <p className="whoWeArePara">
                We blend <strong>digital visibility with physical-world presence</strong> to help brands stay top-of-mind when customers are ready to choose — not just when they’re scrolling. Our work focuses on creating demand through <strong>social, retention, cinema screens, and on-ground visibility</strong>, connected into one unified system.
              </p>

              <p className="whoWeArePara">
                With a <strong>founder-first approach</strong>, we work closely with brands that want to reduce platform dependency and build something more durable than short-term campaigns.
              </p>

              <div className="missionHighlight">
                <span className="missionIcon">🚀</span>
                <span className="missionText">Your growth is our mission.</span>
              </div>
            </motion.div>

            {/* Right: 3-Image Bento Box Layout (1 Wide on Top, 2 on Bottom) - Pure Photography, No Texts */}
            <motion.div 
              className="whoWeAreBentoGrid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {/* Top Bento Item: Wide Cinema & Experiential Showcase */}
              <div className="bentoTile bentoTopWide">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Physical Visibility & Cinema Presence" 
                  className="bentoImg"
                />
                <div className="bentoOverlay" />
              </div>

              {/* Bottom Row: 2 Bento Image Tiles Side-by-Side */}
              <div className="bentoBottomRow">
                {/* Bottom Left: Sensory Culinary / Hospitality Experience */}
                <div className="bentoTile bentoBottomTile">
                  <img 
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop" 
                    alt="Sensory Digital Content & Dining" 
                    className="bentoImg"
                  />
                  <div className="bentoOverlay" />
                </div>

                {/* Bottom Right: Enduring Recall & Community Footfall */}
                <div className="bentoTile bentoBottomTile">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                    alt="Enduring Recall & Repeat Footfall" 
                    className="bentoImg"
                  />
                  <div className="bentoOverlay" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          3. WHO WE WORK WITH
         ==================================================================== */}
      <motion.section 
        className="sectorsSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <motion.div 
            className="sectorsHeader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sectionTag">TARGET SECTORS</span>
            <h2 className="sectorsTitle">
              Who We <span className="font-serif-italic brand-accent-text">Work With</span>
            </h2>
            <p className="sectorsSubtitle">
              We partner with category leaders and ambitious founders across four primary domains where footfall, recall, and retention drive enterprise value:
            </p>
          </motion.div>

          <div className="sectorsGrid">
            {clientSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div 
                  key={sector.id}
                  className="sectorCard clickableSectorCard"
                  onClick={handleWorksClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleWorksClick(); }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="sectorImage"
                    style={{ backgroundImage: `url(${sector.image})` }}
                  >
                    <div className="sectorImageOverlay" />
                    <span className="sectorTagBadge">{sector.tag}</span>
                  </div>

                  <div className="sectorBody">
                    <div className="sectorTitleRow">
                      <div className="sectorIconWrapper">
                        <Icon size={18} />
                      </div>
                      <h3 className="sectorCardTitle">{sector.title}</h3>
                    </div>

                    <p className="sectorDesc">{sector.desc}</p>

                    <div className="sectorActionLink">
                      <span>Explore In Our Works</span>
                      <ArrowUpRight size={15} className="sectorActionArrow" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          4. WHY CHOOSE PRIMETASK MEDIA? (Single Row Layout)
         ==================================================================== */}
      <motion.section 
        className="whyChooseSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <motion.div 
            className="whyChooseHeader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sectionTag">THE PRIMETASK ADVANTAGE</span>
            <h2 className="whyChooseTitle">
              Why Choose <span className="font-serif-italic brand-accent-text">Primetask Media?</span>
            </h2>
            <p className="whyChooseSubtitle">
              Where strategy meets success. Six foundational principles that make us an irreplaceable growth partner:
            </p>
          </motion.div>

          {/* 2 Rows x 3 Cards Grid with Mouse Hover Translation */}
          <div className="whyChooseGrid">
            {whyChooseUsPoints.map((point, index) => {
              const PointIcon = point.icon;
              const tilt = whyChooseTilt[index] || { x: 0, y: 0 };
              const isHovered = tilt.x !== 0 || tilt.y !== 0;

              return (
                <motion.div
                  key={index}
                  className="advantageCard"
                  style={{
                    transform: isHovered 
                      ? `translate3d(${tilt.x}px, ${tilt.y - 12}px, 0) rotateY(${tilt.x * 0.45}deg) rotateX(${-tilt.y * 0.45}deg) scale(1.03)`
                      : undefined,
                    transition: isHovered 
                      ? 'transform 0.12s ease-out, border-color 0.35s ease, box-shadow 0.4s ease' 
                      : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.4s ease'
                  }}
                  onMouseMove={(e) => handleWhyChooseMouseMove(e, index)}
                  onMouseLeave={() => handleWhyChooseMouseLeave(index)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="advantageTopRow">
                    <div className="advantageIcon">
                      <PointIcon size={20} />
                    </div>
                    <span className="advantageTag">{point.tag}</span>
                  </div>

                  <h3 className="advantageTitle">{point.title}</h3>
                  <p className="advantageDesc">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          5. ABOUT OUR FOUNDER
         ==================================================================== */}
      <motion.section 
        className="founderSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <div className="founderGrid">
            {/* Left Visual Column */}
            <motion.div 
              className="founderVisualCol"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="founderPhotoCard">
                <img 
                  src="/founder.jpg" 
                  alt="Founder & Growth Strategist, Primetask Media" 
                  className="founderPhoto"
                />
                <div className="founderPhotoOverlay" />
                <div className="founderPhotoBadge">
                  <Award size={18} className="founderBadgeIcon" />
                  <div className="founderBadgeInfo">
                    <span className="founderBadgeRole">Founder & Growth Architect</span>
                    <span className="founderBadgeAgency">Primetask Media</span>
                  </div>
                </div>
              </div>

              {/* Founder Credibility Highlights */}
              <div className="founderQuickStats">
                <div className="founderStatItem">
                  <span className="founderStatNum">100%</span>
                  <span className="founderStatLabel">Founder-Led Strategy</span>
                </div>
                <div className="founderStatDivider" />
                <div className="founderStatItem">
                  <span className="founderStatNum">0%</span>
                  <span className="founderStatLabel">Agency Bureaucracy</span>
                </div>
                <div className="founderStatDivider" />
                <div className="founderStatItem">
                  <span className="founderStatNum">360°</span>
                  <span className="founderStatLabel">Phygital Precision</span>
                </div>
              </div>
            </motion.div>

            {/* Right Narrative Column */}
            <motion.div 
              className="founderNarrativeCol"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <span className="sectionTag">LEADERSHIP & PHILOSOPHY</span>
              <h2 className="founderSectionTitle">
                Built By A Founder,{' '}
                <span className="font-serif-italic brand-accent-text">For Founders.</span>
              </h2>

              <div className="founderQuoteBox">
                <Quote size={26} className="founderQuoteIcon" />
                <p className="founderQuoteText">
                  "Most agencies celebrate vanity impressions and clicks. We measure success by packed tables, real-world footfalls, and brand recall that compounds enterprise value."
                </p>
              </div>

              <div className="founderBioText">
                <p>
                  Primetask Media was created to address a critical flaw in modern marketing: <strong>the algorithm trap</strong>. Consumer and hospitality brands spend fortunes chasing transient digital trends, yet remain vulnerable to sudden algorithm swings with zero lasting footprint in their local community.
                </p>
                <p>
                  We believe true brand power is <strong>phygital</strong> — uniting sensory digital storytelling with high-impact cinema screens, on-ground visibility, and direct WhatsApp customer retention. When someone craves dinner, needs a service, or seeks an experience, we ensure your brand is the first name they remember.
                </p>
              </div>

              {/* Leadership Commitments */}
              <div className="founderPillars">
                <div className="founderPillarItem">
                  <div className="pillarBullet" />
                  <div>
                    <h4 className="pillarTitle">Direct Strategic Collaboration</h4>
                    <p className="pillarDesc">You collaborate directly with experienced brand strategists who understand business unit economics, not junior interns.</p>
                  </div>
                </div>

                <div className="founderPillarItem">
                  <div className="pillarBullet" />
                  <div>
                    <h4 className="pillarTitle">Platform-Independent Demand</h4>
                    <p className="pillarDesc">We engineer top-of-mind recall that protects your revenue even when social ad platforms change their algorithms.</p>
                  </div>
                </div>
              </div>

              <div className="founderActionRow">
                <button onClick={handleContactClick} className="btn-primary founderCtaBtn">
                  <span>Speak With Our Founder</span>
                  <ArrowUpRight size={16} />
                </button>
                <div className="founderDeskNote">
                  <div className="founderPulseLive" />
                  <span>Direct Strategic Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====================================================================
          5. CTA BANNER
         ==================================================================== */}
      <motion.section 
        className="aboutCtaSection"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="container">
          <motion.div 
            className="aboutCtaCard"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sectionTag" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              LET'S BUILD SOMETHING UNFORGETTABLE
            </span>

            <h2 className="aboutCtaHeading">
              Choose Primetask Media Where{' '}
              <span className="font-serif-italic" style={{ color: '#ffffff', textDecoration: 'underline wavy var(--accent-magenta) 2px' }}>
                Strategy Meets Success.
              </span>
            </h2>

            <p className="aboutCtaDesc">
              Ready to build lasting brand recall that protects your revenue and fills your tables? Let's engineer your growth roadmap.
            </p>

            <div className="aboutCtaActions">
              <Magnet range={50} strength={0.3}>
                <button 
                  onClick={handleContactClick}
                  className="btn-primary"
                  style={{ background: '#ffffff', color: '#0c1844', padding: '0.9rem 2.2rem', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)' }}
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowUpRight size={17} />
                </button>
              </Magnet>

              <Magnet range={50} strength={0.3}>
                <button 
                  onClick={handlePackagesClick}
                  className="btn-secondary"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: '#ffffff', background: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <span>Explore Growth Packages</span>
                  <ArrowUpRight size={17} />
                </button>
              </Magnet>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
