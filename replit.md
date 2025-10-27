# Akhil B - Dual-Mode Interactive Portfolio

## Project Overview
An advanced, futuristic developer portfolio featuring two dynamic interaction modes:
- **Terminal View**: Interactive Linux-style shell with working command system
- **GUI View**: Professional glassmorphic interface with smooth animations

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **Backend**: Express.js (for future API endpoints)
- **Storage**: In-memory storage (MemStorage)

## Project Structure
```
client/
  src/
    components/
      gui/                 - GUI view components (Hero, About, Skills, Projects, etc.)
      terminal/            - Terminal view components
      ui/                  - Shadcn UI components
      MatrixBackground.tsx - Matrix-style background effect
      ParticleBackground.tsx - Floating particle effects
    hooks/
      useTerminalCommands.ts - Terminal command execution logic
    lib/
      portfolio-data.ts    - All portfolio content (projects, skills, achievements)
    pages/
      Home.tsx            - Main portfolio page with view switching
shared/
  schema.ts              - TypeScript types and Zod schemas
```

## Features Implemented

### Terminal View
- ✅ Fully functional command system (help, ls, cat, cd, open, resume, leetcode, gfg, theme, whoami, motivation, stats, clear)
- ✅ Typing animation with blinking cursor
- ✅ Command history (↑↓ arrow keys)
- ✅ Tab autocomplete
- ✅ Theme switcher (neon-green, matrix-blue, amber-crt)
- ✅ Easter egg: sudo rm -rf / with ASCII art
- ✅ System status bar (uptime, memory usage)
- ✅ Matrix-style background animation

### GUI View
- ✅ Responsive navigation with smooth scroll
- ✅ Hero section with gradient text and CTAs
- ✅ About section with education, specialization, passion cards
- ✅ Skills section with animated progress bars (6 categories)
- ✅ Projects showcase (4 featured projects with tech stacks)
- ✅ Achievements with statistics and platform links
- ✅ Contact section with social links
- ✅ Particle background effects
- ✅ Framer Motion animations throughout

### Cross-View Features
- ✅ Smooth view switching with animated transitions
- ✅ Local storage persistence for view mode and theme
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ SEO optimization with meta tags

## Portfolio Content

### Projects
1. E-Commerce Website (MERN Stack)
2. TrackIt Platform (Task Tracker)
3. Grocery List & To-Do App
4. Portfolio v1 (This site!)

### Skills (6 Categories)
- Languages: JavaScript, C++, Python, Java
- Frontend: React, Redux, Tailwind CSS, Bootstrap
- Backend: Node.js, Express.js, REST APIs, JWT, Socket.IO
- Database & Hosting: MongoDB, Mongoose, Firebase, Cloudinary
- Tools: Git, GitHub, VS Code, Vercel
- Core Competencies: Data Structures, Algorithms, Problem Solving

### Achievements
- 300+ DSA problems solved
- Active competitive programmer
- DSA/Open Source mentor
- Hackathon participant
- Community contributor

### Social Links
- GitHub: github.com/Boyinaakhil
- LinkedIn: linkedin.com/in/akhil-boyina
- LeetCode: leetcode.com/u/Akhil_boyina
- GeeksforGeeks: geeksforgeeks.org/user/akhilboybvvi
- Email: akhilboyina2005@gmail.com

## Design Philosophy
- **Terminal Mode**: Hacker aesthetic with green-on-black, matrix blue, or amber CRT themes
- **GUI Mode**: Glassmorphic cards, smooth animations, professional polish
- **Accessibility**: Full keyboard navigation, ARIA labels, proper contrast
- **Performance**: 60fps animations using transform and opacity only

## Recent Changes
- 2024-10: Initial project setup
- 2024-10: Implemented complete dual-mode portfolio
- 2024-10: Added all terminal commands and Easter eggs
- 2024-10: Created responsive GUI with Framer Motion animations
