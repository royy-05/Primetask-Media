// ============================================================================
// Primetask Media - Central Content Source
// Every section imports from this file. Edit copy here, nowhere else.
//
// TODO markers = data I could NOT source from the client portfolio.
// Fill these before launch. Do not ship the TODO placeholder text.
// ============================================================================

export const brand = {
  name: "Primetask Media",
  tagline: "Phygital Marketing for Brands People Remember",
  // Real positioning line from the client's own copy:
  positioningLine: "We don't chase clicks. We build memory.",
};

// ----------------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------------
export const hero = {
  // "Remember" is the word to style in serif italic (replaces "Move")
  headlinePlain: "We Build Brands People",
  headlineAccent: "Remember",
  subtext:
    "A phygital marketing agency for hospitality, QSR and consumer brands. We blend digital channels with real world visibility so customers think of you before they open an app, search Google, or see an offer.",
  primaryCta: { label: "Book a Free Strategy Call", target: "#contact" },
  secondaryCta: { label: "Explore Services", target: "#services" },
  chatBubble: "Hey! Let's grow your business together.",
  // Swap /hero-video.mp4 for a reel of real client work when available
  video: "/hero-video.mp4",
};

// ----------------------------------------------------------------------------
// SERVICES  (6 real services, replaces the 12 placeholder cards)
// ----------------------------------------------------------------------------
export const services = [
  {
    title: "Integrated Phygital Campaigns",
    desc: "Digital and physical touchpoints working as one system, so demand does not depend on any single platform.",
    // image: "/services/phygital.jpg",
  },
  {
    title: "Cinema & On-Ground Visibility",
    desc: "Cinema screens, experiential touchpoints and on-ground media that build real world presence and footfall.",
  },
  {
    title: "Retention & WhatsApp Marketing",
    desc: "Automated WhatsApp and email flows, reminders, offers and re-activation nudges that turn buyers into repeat customers.",
  },
  {
    title: "Social Media & Content",
    desc: "Review-led, story-led and feeling-led content that builds recall, not just reach.",
  },
  {
    title: "Brand Recall Strategy",
    desc: "Positioning and creative systems that keep you top of mind when customers are ready to choose.",
  },
  {
    title: "Customer Loyalty Programs",
    desc: "Points, rewards and QR loyalty cards with VIP tiers for cafés, QSRs and boutiques.",
  },
];

// ----------------------------------------------------------------------------
// GROWTH PACKAGES
// ----------------------------------------------------------------------------
export const packagesMeta = {
  tagline: "GROWTH PACKAGES",
  headingPlain: "Engineered For",
  headingAccent: "Scalable Growth.",
  desc: "Structured, high-impact marketing systems tailored to your stage of business—from solid digital foundations to an elite outsourced CMO powerhouse.",
};

export const growthPackages = [
  {
    id: "core",
    number: "01",
    name: "PRIMETASK CORE",
    tagline: "Build Your Digital Foundation.",
    target: "For businesses that need a professional, consistent online presence.",
    badge: "Foundation",
    highlight: false,
    contentVolume: "8–12 Monthly Content Pieces",
    includesPrevious: null,
    features: [
      "Social Media Management",
      "Content Strategy",
      "Content Creation",
      "8–12 Monthly Content Pieces",
      "Reels & Static/Carousel Content",
      "Caption & Hashtag Strategy",
      "Google Business Profile Management",
      "Basic Performance Marketing",
      "Monthly Performance Report",
      "Basic Growth Recommendations"
    ],
    bestFor: "Startups, local businesses & brands building their digital presence.",
    cta: "GET STARTED"
  },
  {
    id: "growth",
    number: "02",
    name: "PRIMETASK GROWTH",
    tagline: "Turn Attention Into Growth.",
    target: "For businesses ready to increase visibility, engagement and customer acquisition.",
    badge: "High Velocity",
    highlight: false,
    contentVolume: "16 Monthly Content Pieces",
    includesPrevious: "Everything in Core",
    features: [
      "Everything in Core",
      "16 Monthly Content Pieces",
      "Short-Form/Reel Content",
      "Carousel & Static Content",
      "Advanced Content Strategy",
      "Meta Ads Management",
      "Google Ads Management",
      "Google Business Profile Management",
      "Audience & Competitor Research",
      "Campaign Optimization",
      "Retargeting Strategy",
      "Monthly Performance Analysis",
      "Growth Strategy Calls"
    ],
    bestFor: "Growing businesses looking for consistent customer acquisition.",
    cta: "START GROWING"
  },
  {
    id: "premium",
    number: "03",
    name: "PRIMETASK PREMIUM",
    tagline: "Accelerate Your Growth.",
    target: "An integrated content + performance marketing system designed to turn visibility into measurable business results.",
    badge: "Most Popular",
    highlight: true,
    contentVolume: "20 Monthly Content Pieces",
    includesPrevious: "Everything in Growth",
    features: [
      "Everything in Growth",
      "20 Monthly Content Pieces",
      "High-Quality Reel Production",
      "UGC-Style Content",
      "Advanced Meta Ads",
      "Google Search & Display Ads",
      "YouTube Ads",
      "Retargeting Campaigns",
      "Conversion-Focused Campaign Strategy",
      "Influencer Marketing Coordination",
      "Google Business Profile Management",
      "Landing Page/Website Optimization",
      "Detailed Performance Reporting",
      "ROI & Conversion Analysis",
      "Monthly Strategy Review"
    ],
    bestFor: "Established brands ready to scale acquisition and revenue.",
    cta: "GO PREMIUM"
  },
  {
    id: "vip",
    number: "04",
    name: "PRIMETASK VIP",
    tagline: "Your Growth. Our Priority.",
    target: "A high-touch marketing partnership for brands that want Primetask Media to operate as an extension of their internal marketing team.",
    badge: "Elite Partnership",
    highlight: false,
    vipTier: true,
    contentVolume: "25+ Monthly Content Pieces",
    includesPrevious: "Everything in Premium",
    features: [
      "Everything in Premium",
      "25+ Monthly Content Pieces",
      "Dedicated Content Strategy",
      "Premium Video & Creative Production",
      "UGC & Influencer Campaigns",
      "Full-Funnel Performance Marketing",
      "Meta + Google + YouTube Ads",
      "Advanced Retargeting",
      "Conversion Funnel Optimization",
      "Website & Landing Page Optimization",
      "Google Business Profile Management",
      "Customer Acquisition Strategy",
      "Competitor Intelligence",
      "Campaign-Level ROI Tracking",
      "Detailed Performance Dashboard",
      "Weekly Performance Monitoring",
      "Priority Support",
      "Dedicated Account Management",
      "Monthly Strategic Growth Meeting",
      "Quarterly Growth Planning"
    ],
    bestFor: "Brands seeking an outsourced marketing department rather than a traditional social media agency.",
    cta: "TALK TO OUR TEAM"
  }
];


// ----------------------------------------------------------------------------
// CLIENTS  (hover-split showcase)
// ----------------------------------------------------------------------------
export const clientsMeta = {
  tagline: "PROVEN IMPACT",
  headingPlain: "Brands We've Built",
  headingAccent: "Memory For.",
  desc: "We partner with category leaders and disruptive startups to engineer high-velocity scale and unforgettable brand recall.",
};
export const clients = [
  {
    name: "Royal Enfield",
    category: "Automotive & Lifestyle",
    result: "High-intent test-ride bookings & experiential community growth",
    logo: "/clients/RE.png"
  },
  {
    name: "Masala Code",
    category: "Hospitality & QSR",
    result: "Zero to premium brand in a saturated market",
    logo: "/clients/Masala_code.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "Masala Code - Indore",
      tag: "Hospitality & Modern Café · 0 to 1 Launch",
      location: "Indore / Kolkata Market",
      startingFromZero: {
        title: "Starting From Zero",
        text: "Masala code launched in 2025 with no digital presence, zero followers, zero brand awareness, zero online footprint. A new restaurant entering a saturated Kolkata café market with nothing but a good product and an untold story."
      },
      challenge: {
        title: "The Challenge",
        text: "Build a premium brand identity from scratch, generate consistent organic reach, and convert digital visibility into physical footfall — without relying on paid ads in the early stage. Every post had to work harder than the competition."
      },
      strategyPhases: [
        {
          badge: "PHASE 01 · FOUNDATION",
          title: "Review-Based Content",
          desc: "Built social proof from the ground up. Every piece of content engineered to generate genuine reactions: real customer experiences, honest product highlights, atmosphere-driven storytelling. The goal: make the café feel already established before it truly was."
        },
        {
          badge: "PHASE 02 · DEEPENING",
          title: "Story-Based Content",
          desc: "Shifted from showcasing the product to telling the story behind it. Why this café exists. What makes the space different. The people behind it. This phase built emotional connection — turning casual followers into invested community members who felt part of the journey."
        },
        {
          badge: "PHASE 03 · PREMIUM POSITIONING",
          title: "Feeling-Based Content",
          desc: "Content stopped describing the café and started making people feel something. Atmosphere, mood, sensory cues, every post designed to create a visceral desire to be there. This is what separates premium brands: they sell an experience, not a product."
        },
        {
          badge: "PHASE 04 · PAID ACTIVATION",
          title: "Sensory Ad Campaign",
          desc: "Launched a targeted ad campaign built entirely around sensory triggers: unique products positioned through sight, texture, and atmosphere. The brief: make someone physically crave the experience before they've ever stepped inside. Premium positioning reinforced at every touchpoint."
        }
      ],
      metrics: [
        { value: "1,094", label: "Followers Gained", note: "100% organic" },
        { value: "45–50%", label: "Engagement Rate", note: "Industry avg is 1–3%" },
        { value: "100K+", label: "Avg Monthly Reach", note: "Consistent & growing" },
        { value: "Steady", label: "Revenue Trajectory", note: "Launch to profitability" }
      ],
      sensoryCampaign: {
        title: "The Sensory Campaign",
        desc: "Designed and executed a paid ad campaign built entirely around sensory triggers — not discounts, not offers, not generic messaging. Instead, Café Indoor's unique products were positioned through sight, texture, colour, and atmosphere, making the viewer physically crave the experience before they've stepped inside. The result: a premium restaurant that feels desirable not because we said so, but because every piece of communication made the audience feel it."
      }
    }
  },
  {
    name: "Chaa Kahon",
    category: "Beverage & Quick Service",
    result: "Content-led viral reach for a local tea brand",
    logo: "/clients/Chaa_kahon.webp",
    hasCaseStudy: true,
    caseStudy: {
      title: "Chaa Kahon",
      tag: "Budget-Friendly Tea Café · Hyper-Local Franchise Expansion",
      about: {
        title: "The Brand Vision",
        text: "At Chaa Kahon, it is believed that a great cup of tea doesn't need to come with a heavy price tag. Born from the love for conversation and comfort, we're your neighborhood tea spot where flavor meets affordability. With a cozy vibe, a variety of teas, and wallet-friendly snacks, every sip is memorable—because every story deserves a great cup of tea."
      },
      challenge: {
        title: "The Franchise Challenge",
        text: "Chaa Kahon aimed to expand its presence via franchising. While the brand resonated well with younger crowds and small-town entrepreneurs, higher operational and setup costs from existing outlets severely constrained the franchise marketing budget."
      },
      strategyTitle: "Hyper-Localized Franchise Branding",
      strategyPhases: [
        {
          badge: "TACTIC 01",
          title: "Localized Digital Campaigns",
          desc: "Used hyper-local targeting on Instagram, Facebook & WhatsApp, focusing on aspiring entrepreneurs in cities with low setup costs."
        },
        {
          badge: "TACTIC 02",
          title: "Emphasis on ROI Messaging",
          desc: "Shifted messaging from cost to 'earn more with less'—showcasing low investment, quick returns, and simple operations."
        }
      ],
      metrics: [
        { value: "100+", label: "Franchise Inquiries", note: "Qualified leads in 4 weeks" },
        { value: "₹17", label: "Cost Per Lead (CPL)", note: "Ultra-efficient ad spend" },
        { value: "8.6%", label: "Higher Engagement", note: "Above industry average" },
        { value: "1 Outlet", label: "Signed Under FOCO", note: "Immediate launch commitment" }
      ],
      takeaway: {
        title: "Franchise Scaling Outcome",
        text: "With Primetask Media's hyper-localized positioning, Chaa Kahon transitioned into a rapidly scaling brand with over 100 qualified franchise inquiries and immediate expansion commitments."
      }
    }
  },
  {
    name: "Chowdhury Jewellers",
    category: "Heritage Jewellery",
    result: "First 40 online orders & record festive sales",
    logo: "/clients/Chowdhury Jewellers.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "Chowdhury Jewellers",
      tag: "Heritage Jewellery House · Rath Yatra Festive Omnichannel Scale",
      about: {
        title: "About the Brand",
        text: "Chowdhury Jewellers is a heritage jewellery house known for its timeless craftsmanship and trusted legacy since 2000. With a strong local presence, the brand wanted to embrace digital-first strategies to expand its customer base, increase festival sales, and build a modern identity without losing its cultural roots."
      },
      challenge: {
        title: "The Festive Challenge",
        text: "Rath Yatra is a key festive season where jewellery purchases peak amidst fierce multi-brand competition. Chowdhury Jewellers wanted to stand out in the crowded festive market, boost store footfall and online conversions, and establish its digital footprint with its first-ever 40 online orders."
      },
      strategyTitle: "Tradition Meets Commerce: 4-Layer Festive Push",
      strategyPhases: [
        {
          badge: "LAYER 01",
          title: "Festive Creative Direction",
          desc: "Designed campaign creatives highlighting 'Divinity in Every Ornament', blending Rath Yatra's spiritual essence with Chowdhury Jewellers' heirloom legacy."
        },
        {
          badge: "LAYER 02",
          title: "Hyper-Targeted Paid Campaigns",
          desc: "Geo-targeted ads across the city to attract local buyers with Instagram & WhatsApp lead ads for 'Online Order, Collect In-Store'."
        },
        {
          badge: "LAYER 03",
          title: "Omnichannel Engagement & Booking",
          desc: "Introduced first-time online reservation landing pages, festive email greetings, and VIP WhatsApp broadcast lists for warm leads."
        },
        {
          badge: "LAYER 04",
          title: "Conversion Scarcity & Retargeting",
          desc: "Created urgency with limited festival-exclusive designs paired with retargeting for abandoned carts and profile drop-offs."
        }
      ],
      metrics: [
        { value: "Record", label: "Highest Festive Sales", note: "Surpassed all previous years" },
        { value: "40", label: "Confirmed Online Orders", note: "Brand's first-ever online sales" },
        { value: "2.3X", label: "Social Engagement Rise", note: "Across campaign window" },
        { value: "35%", label: "Digital-Origin Customers", note: "Online to in-store phygital" }
      ],
      takeaway: {
        title: "Modernizing a Heritage Legacy",
        text: "Primetask Media's Rath Yatra campaign didn't just bring sales—it modernized Chowdhury Jewellers' customer journey, making digital a trusted sales channel for a traditional brand."
      }
    }
  },
  {
    name: "ViralBlues",
    category: "Media & Digital Entertainment",
    result: "Multi-million organic views & viral digital reach",
    logo: "/clients/viralblues.png"
  },
  {
    name: "Mishael",
    category: "Luxury Fashion",
    result: "500K+ reach & 4X engagement in 2 months",
    logo: "/clients/Mishal.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "Mishael Luxury Fashion",
      tag: "Luxury Couture & Apparel · Viral Instagram Reels Strategy",
      challenge: {
        title: "The Luxury Challenge",
        text: "Mishael, a luxury fashion house, wanted to increase brand awareness and engagement but struggled with low organic reach on Instagram."
      },
      strategyTitle: "Aspirational Luxury Reel Strategy",
      strategyPhases: [
        {
          badge: "STEP 01",
          title: "Viral Video & Reel Content",
          desc: "Created high-quality, trend-driven cinematic reels showcasing luxury outfits in motion with fluid editorial styling."
        },
        {
          badge: "STEP 02",
          title: "Storytelling & Visual Aesthetics",
          desc: "Focused on aspirational lifestyle visuals and couture details designed to resonate with discerning luxury buyers."
        },
        {
          badge: "STEP 03",
          title: "Hashtag & Trend Optimization",
          desc: "Leveraged trending luxury audio signatures and strategic tagging to capture high algorithmic distribution."
        },
        {
          badge: "STEP 04",
          title: "Luxury Influencer Features",
          desc: "Collaborated with premium fashion creators and stylists to reinforce couture credibility and aspirational appeal."
        }
      ],
      metrics: [
        { value: "500K+", label: "Organic Reach", note: "In just 2 months" },
        { value: "4X", label: "Engagement Increase", note: "High follower participation" },
        { value: "+15%", label: "Follower Growth", note: "Targeted luxury buyers" },
        { value: "Viral", label: "Instagram Presence", note: "Redefined brand perception" }
      ],
      takeaway: {
        title: "From Niche Luxury to Viral Sensation",
        text: "Mishael's reels strategy redefined its Instagram presence, demonstrating that luxury fashion can achieve explosive viral reach while preserving prestige and exclusivity."
      }
    }
  },
  {
    name: "Pool Cafe",
    category: "Dining & Experience",
    result: "25K+ reach & 80+ WhatsApp queries in 3 weeks",
    logo: "/clients/Polo Cafe.webp",
    hasCaseStudy: true,
    caseStudy: {
      title: "Pool Café - Konnagar",
      tag: "Snooker, Gaming & Casual Dining · Local Paid Footfall Engine",
      quote: "“We had regulars who were friends. But we needed paying customers.”",
      about: {
        title: "The Dilemma: Great Ambiance, Zero Footfall",
        text: "Pool Café, a newly opened pool & snooker café in Konnagar, featured great ambiance, top-tier tables, and fair pricing—yet almost zero footfall as local residents didn't know it existed."
      },
      challenge: {
        title: "The Challenge",
        text: "Transform an unknown neighborhood cafe into a bustling hangout spot within a strict initial budget of just ₹200–₹300 per day."
      },
      strategyTitle: "2-Pronged Local Paid Footfall Campaign",
      strategyPhases: [
        {
          badge: "PRONG 01",
          title: "Local Awareness Meta Ads",
          desc: "Geo-targeted within a 3–5 km radius. Deployed high-energy gameplay and interior visuals with the hook: 'Your Weekend Just Got Cooler 🎱 Konnagar's First Pool Café!'"
        },
        {
          badge: "PRONG 02",
          title: "Limited-Time Offer Ads",
          desc: "Ran 'Play for ₹99' and 'Bring 2, Play Free' campaigns paired with automated WhatsApp CTAs for rapid booking confirmations (daily ad budget: ₹200–₹300 only)."
        }
      ],
      metrics: [
        { value: "25K+", label: "Youth & College Reach", note: "Local radius saturation" },
        { value: "2 Weeks", label: "Fully Booked Weekends", note: "Tables at 100% capacity" },
        { value: "80+", label: "WhatsApp Inquiries", note: "High-intent booking leads" },
        { value: "40+", label: "New Walk-In Customers", note: "Directly attributed to ads" }
      ],
      takeaway: {
        title: "Key Takeaway",
        text: "With a modest daily budget of ₹200–₹300, high-impact visuals combined with hyper-local targeting brought packed weekend tables and enduring community buzz."
      }
    }
  },
  {
    name: "R3 Marketing",
    category: "Interior & Space Design",
    result: "32 high-intent leads in 21 days with 2 projects confirmed",
    logo: "/clients/R3 Marketting.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "R3 Interiors & Marketing",
      tag: "Interior Architecture & Space Design · Performance Lead Funnel",
      quote: "“People would ask prices on DMs and disappear. No serious buyers.”",
      about: {
        title: "The Problem: Random Inquiries vs Real Buyers",
        text: "R3 Interiors offered premium design services and a beautiful portfolio, but was plagued by inconsistent leads and tire-kicking inquiries who would ask for prices and disappear."
      },
      strategyTitle: "Performance Lead Gen & Nurture Architecture",
      strategyPhases: [
        {
          badge: "ACTION 01",
          title: "High-Trust Creative Proof",
          desc: "Showcased real client makeovers with Before/After transformations and the hook: 'Booked your brand new home?'"
        },
        {
          badge: "ACTION 02",
          title: "Meta Lead Form Ad Campaign",
          desc: "Targeted new home buyers, NRI property owners, and real estate professionals. Captured budget, timeline, and location with urgency: 'Limited Project Slots'."
        },
        {
          badge: "ACTION 03",
          title: "Instant Follow-Up Funnel",
          desc: "Automated immediate WhatsApp and email follow-ups, delivering portfolio decks and consultation booking links to hot prospects instantly."
        }
      ],
      metrics: [
        { value: "32", label: "High-Intent Leads", note: "Avg budget ₹3L–₹8L" },
        { value: "21 Days", label: "Campaign Window", note: "Rapid qualified pipeline" },
        { value: "5 Calls", label: "Consultations Booked", note: "12 responded in 48 hours" },
        { value: "2 Deals", label: "Projects Confirmed", note: "Including Srijan Realty" }
      ],
      takeaway: {
        title: "Positioning for High-Ticket Conversion",
        text: "By positioning R3 as premium, approachable, and urgent, we eliminated tire-kickers and connected the design studio with serious property owners ready to invest."
      }
    }
  },
  {
    name: "YR Fitness",
    category: "Health & Gym",
    result: "0 to 88.9K+ reach & 20+ walk-ins in 4 weeks",
    logo: "/clients/Yr Fitness.webp",
    hasCaseStudy: true,
    caseStudy: {
      title: "YR Fitness",
      tag: "Gym & Fitness Community · Hyper-Local Footfall Reignite",
      quote: "“People nearby didn't even know we existed.” – YR Fitness Owner",
      about: {
        title: "The Problem: Invisible Local Gym",
        text: "YR Fitness had a state-of-the-art facility and solid trainers, but zero visibility in their local area. Instagram was dormant, word-of-mouth was cold, and membership footfall was declining."
      },
      strategyTitle: "Hyper-Local Content & Seasonal Hook",
      strategyPhases: [
        {
          badge: "TACTIC 01",
          title: "Hyper-Local Workout Reels",
          desc: "Produced geo-targeted, high-energy gym reels featuring real trainers, genuine member progress, and behind-the-scenes workout culture."
        },
        {
          badge: "TACTIC 02",
          title: "Festival Hook Campaign",
          desc: "Created a limited-time festive membership offer with a buddy referral hook to incentivize group workout visits."
        }
      ],
      metrics: [
        { value: "88.9K+", label: "Instagram Reach", note: "0 to 88.9K in 4 weeks" },
        { value: "20+", label: "Local Walk-Ins", note: "New visitors to the gym" },
        { value: "6", label: "Yearly Memberships", note: "High-value annual commitments" },
        { value: "4 Weeks", label: "Turnaround Time", note: "From invisible to top-of-mind" }
      ],
      takeaway: {
        title: "The Real Win",
        text: "YR Fitness went from virtually invisible to a talked-about neighborhood favorite within 30 days purely through strategic content and local awareness."
      }
    }
  },
  {
    name: "Cafe Coutume",
    category: "Artisanal Cafe",
    result: "5X ROAS & 35% drop in customer acquisition cost",
    logo: "/clients/cafe countume.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "Cafe Coutume",
      tag: "Artisanal Specialty Cafe · Meta Ads Scaling & ROAS Optimization",
      about: {
        title: "The Challenge: High Ad Costs, Low Conversions",
        text: "Cafe Coutume, a premium specialty cafe, was burning ad spend on Facebook with low conversions and unrefined audience targeting. Ads were failing to generate a positive return on investment."
      },
      strategyTitle: "Full-Funnel Meta Ad Restructuring",
      strategyPhases: [
        {
          badge: "PHASE 01",
          title: "Audience Targeting Optimization",
          desc: "Analyzed existing customer data to eliminate waste and narrow focus strictly onto high-intent cafe patrons."
        },
        {
          badge: "PHASE 02",
          title: "Creative Revamp & A/B Testing",
          desc: "Designed aesthetic ad creatives across carousel, video, and static formats, continuously iterating on top-performing assets."
        },
        {
          badge: "PHASE 03",
          title: "Retargeting & Lookalike Audiences",
          desc: "Deployed retargeting for past visitors and engagers alongside custom Lookalike audiences to attract similar high-value buyers."
        },
        {
          badge: "PHASE 04",
          title: "Ad Copy & Offer Urgency",
          desc: "Introduced limited-time seasonal offers and reallocated budget from underperforming ad sets to winning campaigns."
        }
      ],
      metrics: [
        { value: "5X", label: "Return on Ad Spend (ROAS)", note: "Optimized conversion rate" },
        { value: "-35%", label: "Drop in CPA", note: "Lower customer acquisition cost" },
        { value: "Surge", label: "Footfall & Table Bookings", note: "Direct in-store traffic" },
        { value: "+40%", label: "Online Delivery Orders", note: "Consistent delivery volume" }
      ],
      tools: ["Meta Ads Manager", "Google Ads", "Canva Pro", "Adobe Photoshop", "Google Analytics", "Facebook Pixel", "Hotjar", "Lookalike Audiences"],
      takeaway: {
        title: "The Solution & Impact",
        text: "By optimizing creatives, tightening geo-targeting, and introducing retargeting funnels, Primetask Media achieved a 5X ROAS and turned ad spend into a profitable growth engine."
      }
    }
  },
  {
    name: "Fullfilled 4 You",
    category: "E-Commerce & Logistics",
    result: "Scaled fulfillment reach & streamlined B2B client acquisition",
    logo: "/clients/fullfilled4u.jpeg"
  },
  {
    name: "Wah Boutique",
    category: "Apparel & Retail",
    result: "+47% sales, 3X ROAS, 250K+ reach in 60 days",
    logo: "/clients/Wah Boutique.png",
    hasCaseStudy: true,
    caseStudy: {
      title: "Wah Boutique (WOW!)",
      tag: "Ethnic & Contemporary Fashion · E-Commerce & Footfall Scale",
      about: {
        title: "The Challenge: Low Engagement & Abandoned Carts",
        text: "WOW! Boutique wanted to boost its online sales and in-store footfall, but struggled with low social media engagement and high cart abandonment rates on digital touchpoints."
      },
      strategyTitle: "Multi-Pillar Retail & E-Commerce Scale",
      strategyPhases: [
        {
          badge: "PILLAR 01",
          title: "Engagement-Driven Visual Content",
          desc: "Produced visually appealing product showcases, high-energy fashion reels, and curated carousels."
        },
        {
          badge: "PILLAR 02",
          title: "Targeted Paid Ads & Retargeting",
          desc: "Launched Facebook & Instagram retargeting funnels designed to re-engage warm audiences and cart drop-offs."
        },
        {
          badge: "PILLAR 03",
          title: "Fashion Model Collaborations",
          desc: "Partnered with professional fashion models for authentic, aspirational styling shoots for organic reach."
        },
        {
          badge: "PILLAR 04",
          title: "Footfall & Cart Recovery Funnels",
          desc: "Implemented automated reminders and localized ads to recover lost purchases and drive in-store visits."
        }
      ],
      metrics: [
        { value: "+47%", label: "Increase in Sales", note: "Across online & retail" },
        { value: "3X", label: "ROAS on Ads", note: "High return on ad spend" },
        { value: "250K+", label: "Organic Reach", note: "Generated in 60 days" },
        { value: "Top Tier", label: "Local Fashion Recall", note: "Consistent boutique footfall" }
      ],
      takeaway: {
        title: "From Stagnant Footfall to Thriving Brand",
        text: "From struggling to maintain consistent customer traffic to becoming a thriving local fashion powerhouse—Wah Boutique's success story proves the power of performance-led creative marketing."
      }
    }
  }
];

// ----------------------------------------------------------------------------
// WORKS / CASE STUDIES  (9 real projects, replaces 24 placeholders)
// Filter tabs derived from real category field below.
// ----------------------------------------------------------------------------
export const workCategories = [
  "All",
  "Social Media Growth",
  "Paid Ads",
  "Lead Generation",
  "Festive Campaign",
];

export const works = [
  {
    title: "Masala Code, Indore",
    category: "Social Media Growth",
    result: "Zero to premium brand in a saturated market",
    summary:
      "Launched with no digital presence. Built social proof, then story, then a sensory ad campaign that made people crave the experience before stepping inside.",
    // image: "/works/masala-code.jpg",
    link: "https://www.instagram.com/masalacodeindore/",
  },
  {
    title: "Chaa Kahon, Uttarpara",
    category: "Social Media Growth",
    result: "Content-led growth for a local tea brand",
    summary:
      "Review-led and meme-led content that drove reach and recall for a neighbourhood tea brand.",
    // image: "/works/chaa-kahon.jpg",
    link: "https://www.facebook.com/reel/930458005807765",
  },
  {
    title: "Wah Boutique, Kolkata",
    category: "Paid Ads",
    result: "+47% sales, 3X ROAS, 250K+ reach in 60 days",
    summary:
      "Engagement-driven content, model collaboration shoots and retargeting ads recovered lost sales and lifted a local fashion brand.",
    // image: "/works/wah-boutique.jpg",
  },
  {
    title: "Mishael",
    category: "Social Media Growth",
    result: "500K+ reach, 4X engagement, 15% follower growth in 2 months",
    summary:
      "Trend-driven luxury reels, aspirational storytelling and influencer features took a niche label to viral reach.",
    // image: "/works/mishael.jpg",
    link: "https://www.instagram.com/mishael_official/",
  },
  {
    title: "R3 Interiors, Kolkata",
    category: "Lead Generation",
    result: "32 high-intent leads in 21 days, 2 projects confirmed",
    summary:
      "High-trust before/after creative, Meta lead-form ads and a WhatsApp follow-up funnel replaced time-wasting DMs with serious buyers.",
    // image: "/works/r3-interiors.jpg",
  },
  {
    title: "YR Fitness",
    category: "Social Media Growth",
    result: "0 to 88.9K+ reach, 20+ walk-ins in 4 weeks",
    summary:
      "Hyper-local reels and a festival referral hook took an invisible gym to a talked-about local brand in a month.",
    // image: "/works/yr-fitness.jpg",
    link: "https://www.instagram.com/yrfitnessofficial/",
  },
  {
    title: "Pool Cafe, Konnagar",
    category: "Paid Ads",
    result: "25K+ reach, 40+ walk-ins, 80+ WhatsApp queries in 3 weeks",
    summary:
      "Geo-targeted awareness ads and limited-time offers on a tiny daily budget filled weekends at a new pool cafe.",
    // image: "/works/pool-cafe.jpg",
    link: "https://www.instagram.com/poolcafe_official/",
  },
  {
    title: "Cafe Coutume",
    category: "Paid Ads",
    result: "5X ROAS, 35% drop in cost per acquisition",
    summary:
      "Refined targeting, creative A/B testing and retargeting turned high ad costs into high profit for a premium cafe.",
    // image: "/works/cafe-coutume.jpg",
    link: "https://www.instagram.com/reel/DRSScsBEhUT/",
  },
  {
    title: "Chowdhury Jewellers",
    category: "Festive Campaign",
    result: "First 40 online orders, record festive sales, 2.3x engagement",
    summary:
      "A Rath Yatra 2025 phygital campaign blended heritage with an online booking system, converting digital reach into in-store visits.",
    // image: "/works/chowdhury-jewellers.jpg",
    link: "https://www.instagram.com/reel/DOJSppclENQ/",
  },
];

// ----------------------------------------------------------------------------
// TESTIMONIALS
// TODO: paste exact quote text from the Mishael and Indoor Hotel review
// screenshots. The three below are real clients; wording is paraphrased and
// MUST be replaced with the client's actual words before launch.
// Video reels are real and can embed directly.
// ----------------------------------------------------------------------------
export const testimonials = [
  {
    brand: "Mishael",
    name: "Anshuman Jaiswal & Naman Kanodia",
    role: "Founders of Mishael",
    stars: 5,
    quote:
      "Primetask Media has been a game-changer for Mishael. In just six months, they helped us break past regional barriers, expand into new markets, and significantly boost our sales. Their strategic marketing, targeted ads, and branding expertise positioned our brand as a true luxury fragrance brand. Highly recommend their expertise!"
  },
  {
    brand: "Masala Code",
    name: "Vedant Newatia",
    role: "Founders & Head Chef of Masala code",
    stars: 5,
    quote:
      "A 45–50% engagement rate on organic content means nearly half of everyone who sees it is actively responding. In an industry where 3% is considered good this is what premium brand building looks like."
  },
];

export const videoTestimonials = [];

// ----------------------------------------------------------------------------
// STATS  (real campaign results, replaces invented 340%/4.8x/120M+/99.4%)
// These are genuine per-campaign highlights. If the client can give aggregate
// numbers across all clients, swap those in and relabel.
// ----------------------------------------------------------------------------
export const stats = [
  { value: 5, suffix: "X", label: "Best Ad Return on Spend (ROAS)" },
  { value: 500, suffix: "K+", label: "Organic Reach on a Single Campaign" },
  { value: 88.9, suffix: "K", label: "Reach for a Local Gym in 4 Weeks" },
  { value: 40, suffix: "+", label: "First-Ever Online Orders for a Client" },
];

// ----------------------------------------------------------------------------
// CONTACT
// TODO: real email, phone and location. Do not ship the placeholders.
// The client is India-based (clients in Kolkata, Uttarpara, Konnagar, Indore).
// ----------------------------------------------------------------------------
export const contact = {
  tagline: "LET'S CONNECT",
  headingPlain: "Ready to Build",
  headingAccent: "Recall?",
  desc:
    "Have a project in mind, or want to audit your brand presence? Drop us a line and our team will get back within 24 hours.",
  email: "contact@primetaskmedia.com",
  phone: "+91 8420736756",
  location: "Kolkata, West Bengal, India",
  services: [
    "Primetask Core Package",
    "Primetask Growth Package",
    "Primetask Premium Package",
    "Primetask VIP Package",
    "Integrated Phygital Campaigns",
    "Cinema & On-Ground Visibility",
    "Retention & WhatsApp Marketing",
    "Social Media & Content",
    "Brand Recall Strategy",
    "Customer Loyalty Programs",
  ],
};

// ----------------------------------------------------------------------------
// FOOTER
// ----------------------------------------------------------------------------
export const footer = {
  brandName: "PRIMETASK MEDIA",
  summary:
    "A phygital marketing agency helping hospitality, QSR, and consumer brands build recall that protects revenue. We blend digital channels with real-world visibility so demand doesn't depend on platforms alone.",
  nav: ["Home", "About Us", "Services", "Contact Us"],
  capabilities: [
    "Integrated Phygital Campaigns",
    "Cinema & On-Ground Visibility",
    "Retention & WhatsApp Marketing",
    "Social Media & Content",
    "Brand Recall Strategy",
    "Customer Loyalty Programs",
  ],
  contacts: {
    email: "contact@primetaskmedia.com",
    phone: "+91 8420736756",
    address: "Kolkata, West Bengal, India",
  },
  socials: {
    facebook: "https://www.facebook.com/BarnavoPrimemedia/",
    instagram: "https://www.instagram.com/primetask_media/",
    twitter: "https://x.com/PrimetaskS84903",
    linkedin: "https://www.linkedin.com/company/primetask-media/home/",
  },
  copyright: `© ${new Date().getFullYear()} PRIMETASK MEDIA. All rights reserved.`,
  operatingName: "Operating Trade Name: PRIMETASK MEDIA • Kolkata, India",
  policies: ["Privacy Policy", "Terms of Service", "Cancellation & Refund"]
};

