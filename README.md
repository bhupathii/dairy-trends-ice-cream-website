# 🍨 Dairy Trends Ice Creams

> Taste the Trend of Happiness! A premium, fully responsive, and highly interactive landing page built with modern web technologies and a mouth-watering pastel aesthetic.

[![Framework - Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Style - TailwindCSS](https://img.shields.io/badge/Style-Tailwind%20v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Animation - Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-FF69B4?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)
[![Language - TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Hosting - Vercel](https://img.shields.io/badge/Hosting-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## ✨ Features

*   🌸 **Dreamy Pastel Design:** Warm, vibrant cream and pink aesthetics wrapped in glassmorphic headers and floating ice cream illustrations.
*   🎠 **Interactive Flavour Swiper:** A highly responsive carousel of trending flavours using touch-friendly slider components.
*   💎 **3D Card Transitions:** Smooth interactive cards detailing product lines with modern micro-animations.
*   📦 **Pre-built UI Primitives:** Completely customized styling leveraging Radix UI primitives for professional-grade layout structures.
*   📱 **Mobile & Tablet Optimized:** Perfect fluid design scaling seamlessly from 320px mobile viewports up to large desktop grids.
*   ⚡ **Zero Hydration Mismatch:** Engineered to suppress third-party browser extension attributes cleanly at the root layout.
*   📈 **Vercel Analytics Pre-configured:** Pre-integrated with Vercel's analytics packages for immediate production audience telemetry.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | High-performance React application framework with static rendering |
| **React 19** | Modern UI composition & client-side rendering |
| **Tailwind CSS v4** | CSS-first configuration and premium custom utility designs |
| **Framer Motion** | Advanced fluid components and entry animations |
| **Lucide React** | Clean, premium SVG vector iconography |
| **Radix UI Primitives** | Fully accessible underlying interactive structural primitives |

---

## 📂 Project Architecture

```bash
dairy-trend-website/
├── app/                  # Next.js App Router root layout and primary landing page
│   ├── globals.css       # Core typography styles and background patterns
│   ├── layout.tsx        # HTML wrapper, Google Font setup, and Vercel Analytics setup
│   └── page.tsx          # Main entry assembling navbar, sections, and footer
├── components/           # Reusable UI sections and components
│   ├── ui/               # Radix UI primitives and styled components
│   ├── navbar.tsx        # Sticky glassmorphic header with navigation
│   ├── hero-section.tsx  # Landing page introduction with animated call-to-actions
│   ├── footer.tsx        # Chocolate-brown footer with logo capsule and category maps
│   └── ...               # Section-specific components (Flavours, Products, Gallery, etc.)
├── public/               # Public assets and graphics
│   └── images/           # High-fidelity brand logos and product placeholders
└── lib/                  # Application utilities and shared data
    ├── data.ts           # Easy-to-configure data arrays for flavours, offers, and contacts
    └── utils.ts          # Helper utilities (clsx and tailwind-merge integrations)
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) installed.

### 2. Clone and Setup
```bash
# Navigate to the project folder
cd dairy-trend-website

# Install high-performance package dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application with Hot Reload enabled.

### 4. Build for Production
To generate a fully compiled, statically optimized production bundle:
```bash
npm run build
```

---

## 🌍 Vercel Deployment

Deploy directly to **Vercel** with zero custom configuration:

1. Push your repository to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import this repository.
4. Vercel will automatically detect the **Next.js** framework, configure the build commands, and deploy it live to a global CDN within seconds!

---

## 📝 Customization Guide

All website data (flavours, product ranges, contact details, background gradients) is structured cleanly inside `lib/data.ts`. Simply modify the static arrays to change content across the entire page instantly!

---

*Made with 💖 for ice cream lovers everywhere.*