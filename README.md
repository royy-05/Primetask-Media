# ⚡ Primetask Media

> **"We don't chase clicks. We build memory."**  
> *A high-impact phygital marketing agency web platform for hospitality, QSR, and consumer brands.*

---

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.475-F05032?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

---

## 📖 Overview

**Primetask Media** is a digital agency that blends digital acquisition channels with real-world visibility (cinema, on-ground media, experiential touchpoints, and loyalty programs). This web application serves as the flagship digital showroom, client conversion funnel, and service showcase for the agency.

Built with performance, luxury aesthetics, and smooth interactivity in mind, the platform delivers a memorable digital experience through bespoke typography, fluid micro-animations, glassmorphic interfaces, and seamless scheduling.

---

## ✨ Key Features & Experience

- **Phygital Marketing Showcase**: Comprehensive breakdown of integrated digital + physical marketing services, including cinema advertising, WhatsApp retention funnels, and customer loyalty systems.
- **Dynamic Growth Packages**: Interactive multi-tier pricing cards (*Primetask Core*, *Primetask Scale*, *Primetask Elite*) detailing deliverables, feature checklists, and quick-action inquiries.
- **Interactive Agency Portfolios**:
  - **Selected Works**: Filterable case studies and video production highlights.
  - **Live Instagram Showcase**: Dynamic social grid embedding authentic reels and review-driven creator content.
  - **Client Proof & Testimonials**: Verified testimonials and impact metrics.
- **Conversion-Driven Funnels**:
  - **Calendly Integration**: Direct embedded scheduling for 1-on-1 strategy sessions.
  - **Floating Action Dock**: Instant access to WhatsApp direct chat, consultation bookings, and social links.
  - **Contact & Inquiry System**: Dynamic contact forms for custom business proposals.
- **Crafted User Experience**:
  - Custom branded cursor effects (`CustomCursor`).
  - Fluid route transitions powered by `framer-motion`.
  - Smart smooth-scrolling with header offset awareness for hash anchors (`/#packages`, `/#services`).
  - Dark-mode forward luxury palette featuring **Outfit**, **Instrument Serif**, and **Inter** typography.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Animation & Motion** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Styling** | Modern Vanilla CSS (Custom Design System, Tokens, Glassmorphism) |
| **Typography** | Instrument Serif, Outfit, Inter (via Google Fonts) |
| **Third-Party Integrations** | Calendly Widget API, Instagram Embeds, WhatsApp API |

---

## 📁 Project Architecture

```text
primetask-media/
├── public/                 # Static public assets (logos, branding, media)
├── src/
│   ├── components/         # Reusable presentation & layout components
│   │   ├── Animations/     # Framer motion variants & effects
│   │   ├── Clients/        # Client logos & brand marquee
│   │   ├── Contact/        # Inline contact & booking sections
│   │   ├── Cursor/         # Interactive custom pointer
│   │   ├── FloatingActions/# Sticky quick-action dock (WhatsApp, Booking)
│   │   ├── Footer/         # Site-wide navigation footer
│   │   ├── Header/         # Responsive navigation navbar with active states
│   │   ├── Hero/           # High-impact agency hero with video background
│   │   ├── InstagramShowcase/ # Embedded social proof & reels grid
│   │   ├── OurWorks/       # Project case studies & portfolio showcase
│   │   ├── Packages/       # Growth packages & tier comparisons
│   │   ├── ScrollToTop.jsx # Automatic scroll reset on route changes
│   │   ├── Services/       # Interactive service pillars
│   │   ├── Stats/          # Metric counters & credibility figures
│   │   └── Testimonials/   # Client reviews & quote sliders
│   ├── data/
│   │   └── content.js      # Central source of truth for copy, packages & metadata
│   ├── pages/              # Application views & page routes
│   │   ├── About.jsx       # Agency story, philosophy, and team
│   │   ├── Contact.jsx     # Full-page contact & Calendly booking
│   │   ├── Home.jsx        # Landing page orchestrating all core sections
│   │   └── Services.jsx    # Detailed service breakdown & deep-dives
│   ├── App.jsx             # Top-level routing and layout wrapper
│   ├── index.css           # Global CSS variables, reset, and utilities
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell & font definitions
├── package.json            # Project dependencies and npm scripts
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/royy-05/Primetask-Media.git
cd Primetask-Media
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

The optimized static production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Content Management

All website copy, pricing tiers, service descriptions, and company details are centralized in:

📂 `src/data/content.js`

To update copy, testimonials, or growth packages:
1. Open `src/data/content.js`.
2. Edit the corresponding export (`brand`, `hero`, `services`, `growthPackages`, etc.).
3. Save the file — the application will automatically reflect the changes across all components.

---

## 📄 License

This project is proprietary and confidential.  
© 2026 **Primetask Media**. All rights reserved.
