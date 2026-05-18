# About This Project - Portfolio Website Knowledge Base

## Project Overview

- **Project Name**: Mostafa Aidrous Personal Portfolio
- **Package Name**: shar-portfolio
- **Version**: 0.0.0
- **Type**: React SPA (Single Page Application)

## Personal Information

### Owner
- **Name**: Mostafa Aidrous / Mostafa Aidroustch
- **Title**: Civil Engineer, vibe coder and Designer
- **Email**: mostafaaidroustch@gmail.com / mostafaaidrous.contact@gmail.com
- **GitHub**: @Mustafa-devx (https://github.com/Mustafa-devx)

### About Content
```
Hey there! I'm Mostafa Aidrous, a creative professional who loves bringing ideas to life through Civil Engineering, vibe coding, and Designing.
I work across engineering, design, and web technologies to deliver practical, well-structured solutions. My experience includes AutoDesk and CSI applications, UI/UX design, web development, and professional use of Microsoft tools.
```

### Skills
- AutoCAD
- ETABS
- Revit
- UI/UX Design
- Microsoft programs
- Web Development
- Prompt Engineering

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.0 | UI Framework |
| TypeScript | ~5.9.3 | Type Safety |
| Vite | ^7.2.4 | Build Tool |
| Tailwind CSS | ^4.1.17 | Styling |
| Framer Motion | ^12.23.26 | Animations |
| Lucide React | ^0.559.0 | Icons |

### Dev Dependencies
- @eslint/js
- @types/node, @types/react, @types/react-dom
- @vitejs/plugin-react
- eslint + plugins
- typescript-eslint

---

## Project Structure

```
src/
├── App.tsx              # Main app component, theme & intro handling
├── main.tsx            # React entry point
├── index.css           # Tailwind config & CSS custom properties
├── assets/             # Static assets
└── components/
    ├── App.tsx
    ├── BrowserWindow.tsx       # Main browser-like container with side panel
    ├── Certificates.tsx        # Certificates section with modal
    ├── IntroSplash.tsx          # Cinematic loading animation
    ├── NavigationIcons.tsx      # Navigation buttons (About, Certs, Works, FAQ, PayPal)
    ├── SocialLinks.tsx          # Social media links (YouTube, Twitter, Instagram, GitHub, LinkedIn, Email)
    └── ThemeToggle.tsx          # Dark/Light mode toggle
```

---

## Components Documentation

### 1. App.tsx
**State**: `isDarkMode`, `showIntro`
**Features**:
- Dark/Light theme toggle
- Cinematic intro splash
- Animated starfield background with nebula effects

### 2. BrowserWindow.tsx
**Sections**: about, certificates, works, faq, paypal
**Features**:
- Browser-style window with traffic light buttons (close, minimize, maximize)
- Side panel for content display
- Share functionality
- Fullscreen mode
- URL bar display: mostafaaidrous.com

### 3. Certificates.tsx
**Certificates Data**:
```typescript
[
  {
    id: '1',
    title: 'BIM Fundamentals for Engineers',
    issuer: 'Coursera - National Taiwan University',
    date: '2025',
    image: 'coursera_cert-1.png'
  },
  {
    id: '2',
    title: 'PMP Project Management',
    issuer: 'Alison',
    date: '2025',
    image: 'alison_cert-1.png'
  },
  {
    id: '3',
    title: 'Programming Foundations with Python',
    issuer: 'CodeSignal',
    date: '2025',
    image: 'signal_cert-1.png'
  }
]
```
**Certificate Images Location**: `/Certificates/*.png`
**Background**: Animated black-purple gradient

### 4. SocialLinks.tsx
**Social Links**:
```typescript
{
  youtube: "https://youtube.com/@YourChannel",     // Inactive
  twitter: "https://twitter.com/YourHandle",        // Inactive
  instagram: "https://instagram.com/As.k1n",       // Active
  github: "https://github.com/Mustafa-devx",       // Active
  linkedin: "https://linkedin.com/in/YourProfile", // Inactive
  email: "mailto:mostafaaidrous.contact@gmail.com" // Active
}
```

### 5. NavigationIcons.tsx
**Navigation Items**:
- About (Info icon)
- Certificates (Award icon)
- Works (FolderOpen icon)
- FAQ (HelpCircle icon)
- PayPal (DollarSign icon)

### 6. IntroSplash.tsx
**Animation Duration**: 3500ms progress + 1000ms fade out
**Features**:
- Circular progress indicator with animated gradient
- Pulsing glow effects
- Floating particles
- Name signature reveal

### 7. ThemeToggle.tsx
**Icons**: Moon (dark mode), Sun (light mode)
**Colors**: 
- Dark: Amber (#fbbf24)
- Light: Gold (#d4af37)

---

## FAQ Content

| Question | Answer |
|----------|--------|
| Are you available for freelance work? | Yes! I'm currently open to new projects and collaborations. |
| What software do you use? | I primarily use AntiGravity by Google for development and AutoCAD, ETABS, Revit for Civil Engineering. |
| How do you use prompt engineering? | I use prompt engineering to optimize workflows, generate structured content, improve designs, and automate repetitive tasks, making projects faster and smarter without sacrificing quality. |
| What is your typical turnaround time? | It depends on the project scope, but usually 2-4 weeks for standard projects. |

---

## Design System

### Color Palette

#### Light Mode
| Variable | Hex | Usage |
|----------|-----|-------|
| --app-bg | #f2efe4 | Background (warm white) |
| --app-text | #1a0b2e | Text (deep purple) |
| --app-accent | #d4af37 | Accent (gold) |
| --app-surface | #ffffff | Cards/Panels |

#### Dark Mode
| Variable | Hex | Usage |
|----------|-----|-------|
| --app-bg | #000000 | Background (pure black) |
| --app-text | #f3f4f6 | Text (light gray) |
| --app-accent | #fbbf24 | Accent (amber gold) |
| --app-surface | #000000 | Cards/Panels |

#### Custom Colors
```css
--color-gold: #fbbf24
--color-gold-dim: #d97706
--color-champagne: #d4af37
--color-royal-purple: #9333ea
--color-royal-purple-dark: #7e22ce
--color-deep-purple: #581c87
--color-deep-purple-dark: #3b0764
--color-luxury-black: #0f0a1e
--color-luxury-dark: #1a0b2e
--color-luxury-card: #2d1b4e
```

### Typography
- **Font Family**: Inter, system-ui, sans-serif

---

## Visual Effects

### Starfield Background
- 3 layers of animated stars (different speeds: 80s, 120s, 200s)
- Nebula glow effects (purple & amber)
- Parallax-like animation

### Glass Morphism
```css
.glass-panel {
  background: color-mix(in srgb, var(--app-surface) 60%, transparent);
  backdrop-filter: blur(12px);
  border: 1px solid var(--app-border);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
}
```

### Custom Scrollbar
- Gradient: royal-purple-dark → gold → deep-purple-dark

---

## Animations

### Easing Curves
```typescript
[0.16, 1, 0.3, 1]  // Custom modern ease
[0.22, 1, 0.36, 1] // Custom cinematic ease
```

### Key Animations
- Intro splash fade out with blur
- Starfield parallax movement
- Certificate gradient shift (4s cycle)
- Modal/panel slide transitions
- Icon hover lift effects

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build (tsc + vite)
npm run lint     # ESLint check
npm run preview  # Preview production build
```

---

## Files & Assets

### Certificates (PDF → PNG converted)
- `/Certificates/Alison_Certificate-1.pdf`
- `/Certificates/Coursera Certificate.pdf`
- `/Certificates/Signal Code Certificate 2.pdf`

### Converted PNGs
- `/Certificates/alison_cert-1.png`
- `/Certificates/coursera_cert-1.png`
- `/Certificates/signal_cert-1.png`

### Screenshots
- `/screenshots/main-view.png`

---

## PayPal Configuration

**Link**: `https://www.paypal.com/paypalme/ask1n2k?utm_source=ig&utm_medium=social&utm_content=link_in_bio`

---

## Future Hosting

For free hosting options:
- Vercel (recommended for Vite/React)
- Netlify
- GitHub Pages

Build command: `npm run build`
Output directory: `dist/`

---

## Configuration Files

| File | Purpose |
|------|---------|
| package.json | Dependencies & scripts |
| vite.config.ts | Vite configuration |
| tsconfig.json | TypeScript configuration |
| eslint.config.js | ESLint rules |
| tailwind.config.js | Tailwind v4 (via @theme in CSS) |

---

*Last Updated: May 18, 2026*