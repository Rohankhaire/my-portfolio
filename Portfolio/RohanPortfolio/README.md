# ⚡ Rohan's Cyberpunk Portfolio
    
> *A high-performance, immersive web experience built with next-gen frontend technologies.*

![Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk_v2.0-00f0ff?style=for-the-badge&logo=cyberpunk&logoColor=black)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 🌌 Overview

This is no ordinary portfolio. It is a **fully interactive, immersive digital experience** designed to demonstrate advanced frontend engineering capabilities. Built with a "Cyberpunk" aesthetic, it features complex animations, 3D transformations, and a unique narrative user journey.

**Live Demo:** [https://rohankhaire.github.io/my-portfolio/](https://rohankhaire.github.io/my-portfolio/)

## ✨ Key Features

### 🖥️ Immersive User Interface
- **Terminal Boot Sequence**: A realistic BIOS-style boot-up animation that "initializes" the system before access is granted.
- **Code Typer Hero**: Dynamic text typing effect on the landing page simulating a developer's terminal.
- **Glitch Transitions**: Custom "Cyber Shutter" page transitions that wipe the screen with digital artifacts when navigating.

### ⚡ Advanced Animations
- **"Circuit Board" Connectivity**: A glowing energy line on the *Experience* page that draws itself as you scroll, connecting your timeline.
- **Holographic Project Cards**: 3D tilt and reveal effects on the *Projects* page using CSS perspective and GSAP transformations.
- **Magnetic Interactions**: (Optional) Micro-interactions that respond fluidly to cursor movement.

### 🛠️ Engineering Excellence
- **Performance Optimized**: Built with Vite for instant HMR and optimized production bundles.
- **Type Safety**: 100% TypeScript codebase for robustness.
- **Responsive Architecture**: Fluid layouts that adapt seamlessly from Ultrawide monitors to mobile devices.

## 🛠️ Tech Stack

| Category | Technology | Usage |
|----------|------------|-------|
| **Core** | React 19, TypeScript | Component architecture & Type safety |
| **Build Tool** | Vite | Blazing fast development server |
| **Styling** | Tailwind CSS | Utility-first styling engine |
| **Animation** | GSAP (GreenSock) | Complex timelines & ScrollTrigger effects |
| **Micro-FX** | Framer Motion | Layout transitions & mounting animations |
| **Routing** | React Router v6 | Client-side routing with *AnimatePresence* |
| **Icons** | Lucide React | Modern, consistent icon set |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohankhaire/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI (Navbar, BootScreen, PageTransition, etc.)
├── pages/          # Main Views (Home, Experience, Projects)
├── assets/         # Static assets
├── App.tsx         # Main Layout & Routing Logic
└── index.css       # Global Styles, Tailwind & Custom @layer components
```

## 🚢 Deployment

The project is configured for automated deployment to **GitHub Pages**.

```bash
# Deploy to GitHub Pages
npm run deploy
```

## 📄 License

This project is licensed under the MIT License.

---
*System.Identity: Rohan_Khaire // Status: ONLINE*
