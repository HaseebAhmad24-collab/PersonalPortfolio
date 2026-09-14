<div align="center">

# ⚡ Haseeb Ahmad — DevOps & Cloud Platform Portfolio

[![Live Production](https://img.shields.io/badge/Production-www.haseebxdev.online-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://www.haseebxdev.online)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>An ultra-performant, blueprint-engineered personal portfolio designed for Cloud, DevOps, and Platform Engineering showcases.</strong>
</p>

[🌐 Live Demo](https://www.haseebxdev.online) • [📄 Resume](https://www.haseebxdev.online/resume) • [💼 LinkedIn](https://www.linkedin.com/in/haseebahmad/) • [📬 Get in Touch](mailto:contact@haseebxdev.online)

---

</div>

## 📌 Architectural Philosophy

This portfolio was designed from the ground up to reflect the exact discipline of modern **DevOps & Cloud Engineering**: precision, high availability, zero bloat, and surgical attention to performance.

Instead of generic template designs, it features a custom **Blueprint / Terminal aesthetic** with:
- Monospaced typography hierarchy (`Albert Sans` + `Fragment Mono`).
- Subtle blueprint grid overlays and micro-interactions powered by hardware-accelerated transforms.
- 100% static route pre-generation via **Next.js 16 Turbopack** for instantaneous sub-100ms page transitions.
- Fully responsive design optimized across desktop, tablet, and mobile breakpoints.

---

## 🚀 Key Features

- **⚡ Next.js 16 (Turbopack) + React 19:** Powered by the Next.js App Router with 11 static routes pre-rendered at build time.
- **🎨 Tailwind CSS v4 + Dynamic Glassmorphism:** Clean, modern, accessible color tokens with responsive layout structures.
- **🎯 Dynamic Custom Cursor:** Adaptive desktop pointer (`pointer: fine` query) with hover detection and zero latency.
- **🖼️ WebP Asset Optimization Pipeline:** All imagery compressed and converted to WebP, resulting in an **82% payload reduction** (from 6.8 MB to ~1.2 MB) without visible fidelity loss.
- **📑 Embedded Resume Engine:** Dedicated `/resume` route and interactive full-screen modal with instant download triggers.
- **🤝 Industry Endorsements Section:** Verified LinkedIn recommendations from senior engineering leadership & academia.
- **🔍 SEO & Social Card Engine:** Built-in dynamic `sitemap.xml`, `robots.txt`, and OpenGraph / Twitter meta cards customized for `haseebxdev.online`.
- **🛠️ Blueprint 404 Diagnostic Terminal:** Custom not-found error route designed as an interactive DevOps system diagnosis log.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.2.6](https://nextjs.org/) | App Router, Turbopack builds, static generation |
| **Core** | [React 19.2.4](https://react.dev/) | Component architecture & concurrent rendering |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety across all components and data models |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine with zero runtime overhead |
| **Motion** | [Framer Motion 12](https://www.framer.com/motion/) | Orchestrated micro-interactions and route animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Fonts** | Google Fonts | `Albert Sans` (Primary UI) & `Fragment Mono` (Code/Data) |
| **Hosting** | [Vercel](https://vercel.com/) | Edge deployment, automatic SSL, CI/CD pipeline |

---

## 📂 Project Structure

```bash
PersonalPortfolio/
├── public/                 # Static assets, WebP images, and resume documents
│   ├── assets/             # Compressed project screenshots & diagrams
│   └── resume.pdf          # Production resume artifact
├── src/
│   ├── app/                # Next.js App Router routes & metadata
│   │   ├── about/          # Engineering background & LinkedIn endorsements
│   │   ├── education/      # Academic degrees & certifications
│   │   ├── experience/     # Production DevOps roles & CI/CD achievements
│   │   ├── resume/         # Standalone resume route
│   │   ├── work/           # Architecture case studies & projects
│   │   ├── icon.svg        # Scalable dynamic favicon
│   │   ├── layout.tsx      # Root layout, fonts, and custom cursor wrapper
│   │   ├── not-found.tsx   # Blueprint 404 diagnostic terminal
│   │   ├── page.tsx        # Hero landing page
│   │   ├── robots.ts       # Automated robots.txt generator
│   │   └── sitemap.ts      # Automated sitemap.xml generator
│   ├── components/
│   │   ├── layout/         # Navbar, mobile drawer, and footer components
│   │   ├── landing/        # Interactive hero sections & metric counters
│   │   └── ui/             # Modals, buttons, badges, and card primitives
│   └── styles/             # Global CSS and custom typography utilities
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🗺️ Route Architecture

| Route | Purpose | Key Details |
| :--- | :--- | :--- |
| `/` | **Landing / Command Center** | Hero overview, infrastructure status, stats, and quick actions |
| `/about` | **Engineering Background** | Philosophy, core platform stack, and LinkedIn recommendations |
| `/experience` | **Career & Production Impact** | Enterprise roles, SLA metrics, automated pipelines, Kubernetes |
| `/work` | **Case Studies & Architecture** | Deep-dive expandable architecture specs and live repository links |
| `/education` | **Credentials & Academics** | Degrees, certifications, and specialized cloud training |
| `/resume` | **Resume Preview & Download** | Fast PDF rendering with responsive modal fallback |
| `/*` | **Diagnostic 404** | Terminal-style status log with quick rerouting |

---

## ⚡ Performance & Optimization Benchmarks

- **Zero Layout Shifts (CLS = 0):** Exact dimension reservations on all image assets and icon containers.
- **WebP Compression:** High-resolution screenshots optimized with custom lossless/near-lossless pipeline.
- **CSS Keyframe Acceleration:** Ambient glows and grid lines leverage GPU-accelerated `opacity` and `transform` properties.
- **Tree-Shaking:** Pure ES module imports for Lucide icons and Framer Motion primitives.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: `v20.x` or later
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/HaseebAhmad24-collab/PersonalPortfolio.git
cd PersonalPortfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 🏷️ Release History

- **`v2.0.0`** — *Major Architecture Overhaul*
  - Added verified LinkedIn recommendations section on About page.
  - Upgraded to Next.js 16.2.6 & Tailwind CSS v4.
  - Implemented 82% WebP image asset payload reduction.
  - Added dedicated `/resume` preview engine and interactive modal.
  - Deployed custom OpenGraph preview cards for `haseebxdev.online`.
- **`v1.0.0`** — *Initial Portfolio Launch*
  - Base architecture, responsive navigation, and core route foundation.

---

## 👤 Author & Connect

**Haseeb Ahmad** — Cloud & DevOps Platform Engineer

- **Website:** [www.haseebxdev.online](https://www.haseebxdev.online)
- **LinkedIn:** [linkedin.com/in/haseebahmad](https://www.linkedin.com/in/haseebahmad/)
- **GitHub:** [@HaseebAhmad24-collab](https://github.com/HaseebAhmad24-collab)
- **Email:** [contact@haseebxdev.online](mailto:contact@haseebxdev.online)

---

<div align="center">
  <sub>Engineered with precision. Built with Next.js & Tailwind CSS. © 2026 Haseeb Ahmad. All rights reserved.</sub>
</div>