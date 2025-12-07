# Davy Jones Design System

A minimalist, nautical-inspired design system for personal portfolio websites. Built with Next.js 14, Tailwind CSS 4, and a strict 3-color palette.

---

## Philosophy

**Less is more.** This design system embraces restraint—using only three colors, two typefaces, and subtle animations to create an elegant, professional aesthetic. The nautical "Davy Jones" theme is expressed through bespoke icons and easter eggs rather than heavy visual decoration.

---

## Color Palette

### Core Colors (3-Color System)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Canvas** | `#f4eee8` | `244, 238, 232` | Light mode background, dark mode text |
| **Charcoal** | `#27272a` | `39, 39, 42` | Light mode text, dark mode background |
| **Navigator** | `#0072b5` | `0, 114, 181` | Accent color (links, highlights, interactive states) |

### Extended Palette (Available but rarely used)

| Name | Hex | Usage |
|------|-----|-------|
| Midnight | `#040728` | Deep backgrounds, shadows |
| Cerulean | `#025bee` | Alternative accent |
| Sand | `#fde6c4` | Warm highlights |
| Parchment | `#fef3e2` | Light backgrounds |
| Aqua | `#59f4f4` | Highlight accents |
| Copper | `#dc7f5a` | Warm accent |

### CSS Custom Properties

```css
:root {
  /* Brand tokens */
  --dj-canvas: #f4eee8;
  --dj-charcoal: #27272a;
  --dj-navigator: #0072b5;

  /* Semantic tokens (Light theme) */
  --surface-default: var(--dj-canvas);
  --surface-muted: var(--dj-canvas);
  --text-primary: var(--dj-charcoal);
  --text-muted: var(--dj-charcoal);
  --border-default: var(--dj-charcoal);
  --accent-primary: var(--dj-navigator);
}

:root.dark {
  /* Dark theme - colors swap */
  --surface-default: var(--dj-charcoal);
  --text-primary: var(--dj-canvas);
  --border-default: var(--dj-canvas);
  --accent-primary: var(--dj-navigator);
}
```

---

## Typography

### Typefaces

| Font | Type | Usage | Fallbacks |
|------|------|-------|-----------|
| **Morion** | Serif | Headlines, page titles | Times New Roman, serif |
| **Wigrum** | Sans-serif | Body text, UI elements | Inter, Helvetica Neue, sans-serif |

### Type Scale

```css
--text-xs: 0.75rem;    /* 12px - Labels, captions */
--text-sm: 0.875rem;   /* 14px - Body text, UI */
--text-base: 1rem;     /* 16px - Default body */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Subheadings */
--text-2xl: 1.5rem;    /* 24px - Section headers */
--text-3xl: 1.875rem;  /* 30px - Page titles */
--text-4xl: 2.25rem;   /* 36px - Hero text */
--text-5xl: 3rem;      /* 48px - Display */
```

### Typography Rules

1. **Headlines (h1-h6)**: Morion, semibold/bold, tight letter-spacing (-0.02em to -0.03em)
2. **Body text**: Wigrum, regular weight, -0.01em letter-spacing, 1.5 line-height
3. **UI elements**: Wigrum, 14px (text-sm), medium weight for emphasis
4. **Labels/Captions**: Wigrum, 12px (text-xs), muted color

```css
h1, h2, h3, h4, h5, h6 {
  font-family: "Morion", serif;
  font-weight: 600;
}

h1 {
  font-weight: 700;
  letter-spacing: -0.03em;
}

body {
  font-family: "Wigrum", sans-serif;
  line-height: 1.5;
  letter-spacing: -0.01em;
}
```

---

## Layout

### Container

Single-column, centered layout with maximum width of `max-w-xl` (576px). This creates an intimate reading experience.

```css
.container {
  max-width: 36rem; /* 576px */
  margin: 0 auto;
  padding: 0 1.5rem; /* 24px horizontal padding */
}
```

### Spacing Scale

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Border Radius

```css
--radius-sm: 8px;   /* Buttons, inputs, small cards */
--radius-md: 12px;  /* Cards, panels */
--radius-lg: 8px;   /* Large containers */
```

---

## Components

### Page Header Structure

Each page has:
1. **Icon** (40x40px bespoke SVG)
2. **Title** (Morion, text-3xl)
3. **Intro** (Wigrum, text-sm, muted)

```jsx
<SimpleLayout
  icon={HelmIcon}
  title="Projects"
  intro="Things I've built—DeFi protocols, trading tools, and side projects."
>
```

### Navigation

**Desktop**: Horizontal nav with underline indicator on active state
**Mobile**: Popover menu with "Menu" button

```jsx
// Active link indicator
{isActive && (
  <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent-primary)] opacity-60" />
)}
```

### List Items (Experience, Projects, Articles)

Two-row layout for mobile-friendliness:

```
[LOGO] Company Name               2024-2025
       Job Title
```

```jsx
<li className="group flex gap-3 py-3">
  <div className="h-10 w-10 rounded-lg border bg-muted">
    <Image className="h-6 w-6 object-contain grayscale group-hover:grayscale-0" />
  </div>
  <div className="flex flex-1 flex-col">
    <div className="flex justify-between">
      <span className="font-medium">{company}</span>
      <span className="text-xs opacity-40">{date}</span>
    </div>
    <span className="text-muted">{title}</span>
  </div>
</li>
```

### Expandable Sections

```jsx
<button className="text-xs text-muted hover:text-accent">
  Show {count} more
  <ArrowRightIcon className="rotate-90" />
</button>
```

### Company Logo Treatment

- Container: 40x40px, rounded-lg, subtle border
- Image: 24x24px, `object-contain`
- Filter: `grayscale` by default, color on hover
- Transition: 300ms scale on hover

```jsx
<div className="h-10 w-10 rounded-lg border border-[var(--border-default)]/20 bg-[var(--surface-muted)]">
  <Image className="h-6 w-6 object-contain grayscale transition-all group-hover:grayscale-0" />
</div>
```

---

## Icons

### Bespoke Nautical Icons

Hand-crafted SVG icons with consistent styling:

- **Stroke width**: 1.5px
- **Size**: 20px default (configurable via `size` prop)
- **Stroke caps**: Round
- **Color**: `currentColor` (inherits from parent)

| Icon | Usage |
|------|-------|
| `CompassIcon` | Navigation, direction |
| `AnchorIcon` | Stability, trading |
| `HelmIcon` | Projects, building |
| `QuillIcon` | Writing, articles |
| `SpyglassIcon` | About, discovery |
| `WaveIcon` | Footer, decorative |
| `TreasureIcon` | DeFi, vaults |
| `ChartIcon` | Analytics |
| `BotIcon` | AI projects |
| `CoinIcon` | Payments, crypto |
| `MusicIcon` | Music projects |
| `TerminalIcon` | Developer tools |
| `ArrowRightIcon` | Links, CTAs |
| `ExternalLinkIcon` | External links |
| `MailIcon` | Email |

### Icon Component Pattern

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function HelmIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* paths */}
    </svg>
  )
}
```

---

## Animations

### Entrance Animations

All animations use the easing curve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

| Animation | Duration | Effect |
|-----------|----------|--------|
| `fade-in` | 400ms | Opacity 0 → 1 |
| `fade-up` | 500ms | Opacity + translateY(12px → 0) |
| `fade-up-subtle` | 400ms | Opacity + translateY(6px → 0) |
| `slide-in-right` | 400ms | Opacity + translateX(-8px → 0) |

### Staggered List Animation

Items animate in sequence with 50ms delays:

```jsx
<li
  className="opacity-0 animate-fade-up-subtle"
  style={{
    animationDelay: `${100 + index * 50}ms`,
    animationFillMode: 'forwards'
  }}
>
```

### Hover Transitions

- **Color transitions**: 200ms
- **Transform transitions**: 300ms
- **Scale on hover**: 1.05x for interactive elements

```css
.group-hover:scale-105 {
  transition: transform 300ms;
}
```

### Link Underline Animation

```css
.link-underline::after {
  content: '';
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms;
}

.link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

---

## Interactive States

### Hover States

```css
/* Text color change */
.hover:text-[var(--accent-primary)]

/* Background reveal */
.hover:bg-[var(--text-primary)]/[0.03]

/* Icon color change */
.group-hover:text-[var(--accent-primary)]

/* Grayscale removal */
.group-hover:grayscale-0

/* Scale up */
.group-hover:scale-105
```

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
```

### Selection

```css
::selection {
  background: var(--accent-primary);
  color: var(--dj-canvas);
}
```

---

## Background Texture

Subtle nautical texture overlay on the page:

```css
html::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url('/brand/backgrounds/path826brand.png');
  background-size: cover;
  opacity: 0.30;
  filter: grayscale(80%) contrast(0.8);
  pointer-events: none;
  z-index: -1;
}

html.dark::before {
  opacity: 0.05;
  filter: grayscale(90%) contrast(0.7);
}
```

---

## Easter Eggs

### Dark Mode Portrait Reveal

On the About page, hovering over the portrait in dark mode reveals a "Davy Jones" image:

```jsx
<div className="group relative">
  <Image
    src={portraitImage}
    className="grayscale dark:group-hover:opacity-0"
  />
  <Image
    src={davyjonesImage}
    className="absolute inset-0 opacity-0 dark:group-hover:opacity-100"
  />
  <span className="opacity-0 dark:group-hover:opacity-60">ahoy</span>
</div>
```

### Footer Wave Counter

Clicking the wave icon 5+ times reveals "ahoy!", 10+ times reveals a pirate flag:

```jsx
const [waveCount, setWaveCount] = useState(0)

{waveCount >= 5 && (
  <span>{waveCount >= 10 ? '🏴‍☠️' : 'ahoy!'}</span>
)}
```

---

## Mobile Considerations

### Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Desktop**: ≥ 768px

### Mobile-Specific Patterns

1. **Navigation**: Popover menu instead of horizontal nav
2. **Experience items**: 2-row layout (company+date / title)
3. **Tags**: Hidden on mobile (`hidden sm:flex`)
4. **Padding**: `px-6` (24px) container padding

### Mobile Menu

```jsx
<PopoverPanel className="fixed inset-x-4 top-4 z-[110] rounded-xl bg-[var(--dj-canvas)] dark:bg-[var(--dj-charcoal)] p-6 shadow-2xl">
```

---

## Shadows

```css
--shadow-xs: 0 1px 2px rgba(4, 7, 40, 0.08);
--shadow-sm: 0 2px 4px rgba(4, 7, 40, 0.1);
--shadow-md: 0 4px 8px rgba(4, 7, 40, 0.12);
--shadow-lg: 0 8px 16px rgba(4, 7, 40, 0.14);
--shadow-brand-soft: 0 18px 60px -30px rgba(4, 7, 40, 0.6);
```

Dark mode uses darker, higher opacity shadows.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4
- **Fonts**: Custom (Morion, Wigrum)
- **UI Components**: Headless UI v2
- **Theme**: next-themes
- **Deployment**: Vercel

---

## File Structure

```
src/
├── app/                    # Next.js pages
├── components/
│   ├── Icons.tsx          # Bespoke SVG icons
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer with easter egg
│   ├── Layout.tsx         # Page wrapper
│   └── SimpleLayout.tsx   # Page template
├── styles/
│   ├── tailwind.css       # Main styles + animations
│   └── fonts.css          # Font definitions
├── tokens/
│   └── colors.css         # Color tokens
├── images/
│   └── logos/             # Company logos
└── lib/
    └── constants.ts       # Site config, work experience
```

---

## Quick Reference

### Color Usage

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | Canvas `#f4eee8` | Charcoal `#27272a` |
| Text | Charcoal `#27272a` | Canvas `#f4eee8` |
| Accent | Navigator `#0072b5` | Navigator `#0072b5` |

### Common Classes

```css
/* Text colors */
text-[var(--text-primary)]
text-[var(--text-muted)]
text-[var(--accent-primary)]

/* Backgrounds */
bg-[var(--surface-default)]
bg-[var(--surface-muted)]

/* Borders */
border-[var(--border-default)]/20

/* Hover states */
hover:text-[var(--accent-primary)]
hover:bg-[var(--text-primary)]/[0.03]
group-hover:text-[var(--accent-primary)]
```

---

*Design system version 1.0 — November 2024*
