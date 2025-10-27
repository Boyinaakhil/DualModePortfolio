# Design Guidelines: Akhil B — Dual-Mode Interactive Portfolio

## Design Approach
**Hybrid Creative Experience**: This portfolio breaks conventional patterns by offering two distinct interaction modes—Terminal and GUI—each serving different audience segments (technical recruiters vs. general visitors). Drawing inspiration from developer tool aesthetics (VSCode, terminals) and modern portfolio sites (Linear, Vercel), while maintaining a cohesive brand identity across both modes.

## Core Design Philosophy
**Dual Personality System**: The design must seamlessly support two completely different visual languages that represent the same person—technical prowess (Terminal) and professional polish (GUI). Transition between modes should feel intentional and smooth, not jarring.

## Typography System

### Terminal Mode
- **Monospace Foundation**: Use JetBrains Mono or Fira Code via Google Fonts CDN
- **Hierarchy**: Single weight (400), rely on spacing and character styling (bold via ANSI codes simulation)
- **Sizing**: Base 14px-16px for optimal terminal readability, 12px for metadata/timestamps

### GUI Mode  
- **Display**: Inter or Outfit (weights: 400, 500, 600, 700) for headings and navigation
- **Body**: Inter (weights: 400, 500) for all content text
- **Code snippets**: Same monospace as terminal for consistency
- **Scale**: 
  - H1: 3xl to 5xl (responsive)
  - H2: 2xl to 3xl
  - H3: xl to 2xl
  - Body: base to lg
  - Small/Meta: sm to base

## Layout System

### Spacing Primitives
Use Tailwind units: **1, 2, 3, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Micro spacing (within components): 1-4
- Component internal: 4-8
- Section padding: 12-24
- Major section breaks: 20-32

### Terminal Mode Layout
- **Full viewport takeover**: 100vh, 100vw experience
- **Container**: Single column, max-width constrained to 1200px centered
- **Padding**: Consistent 4-6 units around terminal window
- **Command area**: Fixed height footer (12-16 units) with input
- **Output area**: Flex-grow scrollable region

### GUI Mode Layout
- **Hero Section**: 70vh minimum, centered content with max-w-4xl
- **Content Sections**: 
  - Desktop: 2-column grid for Skills (grid-cols-2), Projects (grid-cols-2 lg:grid-cols-3)
  - Single column for About and Contact
  - Max-width container: max-w-6xl
- **Cards**: Consistent padding p-6 to p-8, rounded-xl to rounded-2xl

## Component Architecture

### Terminal Mode Components
1. **Terminal Window**
   - Header bar: Includes close/minimize/maximize buttons, session info
   - Output area: Line-by-line command history with timestamps
   - Input area: Prompt (akhilb@portfolio:$) + input field + blinking cursor
   - Status bar: System uptime, memory usage (mock data)

2. **Command Results**
   - File listings: Grid layout with icons, 2-3 columns
   - Text output: Left-aligned, monospace, line-height 1.6
   - ASCII art: Centered, preserved formatting
   - Modals: Overlay for resume viewer, centered with backdrop

3. **Theme Switcher**
   - Three visual themes with distinct character sets and effects
   - Smooth transition between themes (200-300ms)

### GUI Mode Components
1. **Navigation**
   - Sticky header with blur backdrop
   - Logo/name left, navigation links center/right
   - Mode toggle button (prominent, top-right)

2. **Hero Section**
   - Large heading with gradient text effect
   - Animated subtitle with typing effect
   - CTA buttons: Primary and secondary actions
   - Animated background particles/matrix effect

3. **About Card**
   - Profile image (circular, 120-150px)
   - Bio text with proper line-height (1.7-1.8)
   - Social links row with icon buttons

4. **Skills Grid**
   - Category-based organization
   - Progress bars with animated fill on scroll
   - Hover state: Scale + glow effect
   - Icon + label + proficiency indicator

5. **Project Cards**
   - Image/thumbnail (16:9 aspect ratio)
   - Title, description (2-3 lines)
   - Tech stack tags (pills)
   - Action links (GitHub, Live Demo)
   - Glassmorphic backdrop with subtle border

6. **Achievements Section**
   - Stats counter with count-up animation
   - Platform badges (LeetCode, GFG) with icons from Heroicons
   - Problem-solving heatmap visualization

7. **Contact Form**
   - Two-column layout: Form + contact info
   - Input fields: Consistent height (12 units), rounded borders
   - Floating labels or inline labels
   - Success/error states with color-neutral icons

## Animation Strategy

### Terminal Mode Animations
- **Typing effect**: Character-by-character with 20-50ms delay
- **Cursor blink**: 500ms interval, smooth opacity fade
- **Command execution**: 100-300ms delay before output
- **Theme switch**: 250ms cross-fade
- **Minimal motion**: Focus on functional feedback, not decoration

### GUI Mode Animations
- **Page transitions**: 300-400ms ease-in-out
- **Scroll triggers**: Fade-up + slide elements on viewport entry (stagger by 100ms)
- **Hover states**: 150-200ms smooth scale (1.02-1.05) + glow
- **Background particles**: Subtle, slow-moving (20-30s duration)
- **Progress bars**: Animate from 0 to value over 800ms on scroll reveal
- **Mode switch**: 400ms transition with fade + slide

### Critical Animation Rules
- **60fps performance**: Use transform and opacity only for smooth animations
- **Respect reduced motion**: Disable non-essential animations
- **Stagger timing**: 50-100ms between sequential elements
- **Loading states**: Skeleton screens during data fetch

## Interaction Patterns

### Terminal Mode
- **Tab autocomplete**: Show suggestion dropdown below input
- **Arrow key history**: Cycle through previous commands
- **Click-to-copy**: Commands and output sections
- **Sound effects**: Optional typing click, command success/error tones

### GUI Mode
- **Smooth scroll**: Snap to section behavior for navigation clicks
- **Card interactions**: Hover lift effect, click expands or navigates
- **Form validation**: Inline real-time feedback
- **Toast notifications**: Bottom-right corner for actions

## Responsive Behavior

### Terminal Mode
- **Mobile**: Reduce font size to 12-14px, smaller padding
- **Tablet**: Maintain desktop layout with adjusted margins
- **Desktop**: Full experience with all features

### GUI Mode
- **Mobile (< 768px)**: 
  - Single column for all grids
  - Stack hero content vertically
  - Hamburger navigation menu
  - Reduce section padding to 8-12 units
- **Tablet (768px - 1024px)**:
  - 2-column grids for projects/skills
  - Maintain two-column contact layout
- **Desktop (> 1024px)**:
  - Full multi-column layouts
  - Maximum content width enforcement

## Special Features

### Mode Toggle Component
- **Prominent placement**: Fixed position (top-right or bottom-right)
- **Visual indicator**: Icon + label showing current/next mode
- **Backdrop**: Blur effect when over content
- **Size**: Large touch target (48px minimum)

### Easter Eggs
- **Placement**: Hidden in terminal, triggered by specific commands
- **Visual treatment**: ASCII art centered, with animation
- **Dismissal**: Click anywhere or press Enter

### Background Effects
- **Matrix rain**: Subtle, low opacity (10-15%), slow fall speed
- **Particles**: 20-30 elements, gentle movement, blur effect
- **Performance**: Canvas-based or CSS-only, throttled animation frames

## Images

**No hero images required** for this portfolio. The design relies on:
- Matrix/particle effects as background ambiance
- Project cards may include thumbnail screenshots (16:9, 400x225px minimum)
- Profile photo in About section (circular, 150x150px recommended)
- Platform icons/badges for achievements (use Heroicons or Font Awesome)

Images should be optimized, lazy-loaded, and use placeholders during loading.

## Accessibility Requirements
- **Keyboard navigation**: Full support in both modes
- **Screen reader**: Proper ARIA labels, semantic HTML
- **Focus indicators**: Clear, visible on all interactive elements
- **Contrast**: Maintain WCAG AA standards even in terminal mode
- **Font scaling**: Support browser zoom up to 200%