# Design Guidelines: Akash Mourya Portfolio

## Design Approach: Reference-Based Modern Developer Portfolio

Drawing inspiration from leading tech portfolios (Linear, Vercel, GitHub profiles) with a focus on clean typography, strategic use of color, and professional presentation that showcases the transition from MERN developer to AI/ML specialist.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 15% 12% (elevated surfaces)
- Primary: 265 100% 65% (vibrant purple - represents AI/ML innovation)
- Accent: 190 95% 55% (cyan - for interactive elements, links)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Strategic Color Usage:**
- Purple gradient overlays for hero and key CTAs
- Cyan for project links, skill badges, and hover states
- Minimal use - let content breathe with dark backgrounds

### B. Typography

**Font Stack:**
- Headings: 'Space Grotesk' (700, 600) - modern, tech-forward
- Body: 'Inter' (400, 500) - exceptional readability
- Code/Technical: 'JetBrains Mono' (for project tech stacks)

**Scale:**
- Hero Title: text-6xl lg:text-7xl font-bold
- Section Headers: text-4xl lg:text-5xl font-bold
- Project Titles: text-2xl font-semibold
- Body: text-base lg:text-lg
- Labels/Captions: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 lg:py-32
- Component gaps: gap-8 lg:gap-12
- Card padding: p-6 lg:p-8
- Container: max-w-6xl mx-auto px-4

**Grid Strategy:**
- Single column on mobile (always)
- 2-column for projects/skills on tablet/desktop (md:grid-cols-2)
- Asymmetric layouts for visual interest

---

## Component Library

### 1. Hero Section (100vh)
Full-viewport immersive introduction with gradient background (purple to dark gradient), centered content with:
- Large animated name reveal
- Subtitle: "Full Stack Developer → AI/ML Specialist"
- Three-line bio highlighting education progression
- Dual CTAs: "View Projects" (filled purple) + "Download Resume" (outline with blur backdrop)
- Scroll indicator at bottom

### 2. Professional Journey Section
Horizontal timeline card with three nodes:
- BCA @ Baddi University
- Currently: TCS Developer + MCA AI/ML @ Manipal
- Future: AI/ML Developer
Connected with animated line, each node expands on hover with details

### 3. Featured Projects Showcase
Two large project cards in staggered layout (not symmetric grid):
- **NxMeet Card:** Left-aligned, larger
  - Live preview screenshot placeholder
  - Tech stack badges (MERN, Socket.io, WebRTC)
  - Description with key features
  - "View Live" + "Learn More" CTAs
- **Wonderlust Card:** Right-aligned, offset vertically
  - Preview screenshot
  - Tech badges (MongoDB, Leaflet, Authentication)
  - Feature highlights
  - Live demo link

### 4. Technical Skills Grid
Three-column categorized skill cards (1 column mobile, 2 tablet, 3 desktop):
- **MERN Stack:** MongoDB, Express, React, Node.js with proficiency bars
- **AI/ML Toolkit:** Python, NumPy, Pandas, Matplotlib, Seaborn, Statistics with animated icons
- **Tools & Tech:** Socket.io, WebRTC, Leaflet, Authentication systems
Each category card has icon, list of skills with visual progress indicators

### 5. Experience Section
Clean card layout:
- TCS logo placeholder
- Role, duration, current status indicator (green dot)
- Brief description of responsibilities
- Skills being applied/learned

### 6. Contact Footer
Two-column layout (single on mobile):
- Left: Large heading "Let's Connect" with subtext
- Right: Contact cards for email (with click-to-copy) and LinkedIn (with profile preview on hover)
- Social links with hover lift effect
- Copyright and "Built with React" badge

---

## Interactions & Animations

**Use Sparingly:**
- Hero name fade-in on load
- Scroll-triggered fade-ups for sections (subtle, 20px translate)
- Project card hover lift (translate-y-2)
- Skill badge hover glow effect
- Timeline node expansion on hover

**Prohibited:**
- No parallax scrolling
- No continuous/looping animations
- No auto-playing carousels

---

## Images

**Large Hero Background:**
Yes - Abstract gradient mesh or geometric pattern (purple/cyan) as background, not a photograph. This creates atmosphere without competing with content.

**Project Previews:**
- NxMeet: Screenshot of video conferencing interface (browser mockup)
- Wonderlust: Map view with listings (browser mockup)
Both as placeholder images with blur-load effect

**Professional Photo:**
Small circular avatar in navigation or hero section (optional, can use initials avatar if photo not available)

---

## Accessibility & Polish

- All interactive elements have focus states (cyan ring)
- Text contrast ratios exceed WCAG AA standards
- Semantic HTML throughout
- Smooth scroll behavior for anchor links
- Mobile-first responsive breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- Loading states for external project links
- Meta tags for social sharing with custom OG image

**Navigation:**
Minimal fixed header with logo (AM), nav links (About, Projects, Skills, Contact), smooth scroll anchors, and contact CTA button.