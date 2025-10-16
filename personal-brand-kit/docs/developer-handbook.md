# Developer Handbook

This playbook shows how to wire the Davy Jones brand into common front-end stacks. The design tokens intentionally mirror the assets and guidance in `docs/davy-jones-brand-guidelines.md`.

## Directory Layout

```
ASSETS/
  backgrounds/     # parchment, map, and texture backdrops
  hero-art/        # large compositions for hero sections
  icons/           # hand-drawn spot illustrations per product area
  marks/           # primary logos, avatars, duck motif
  donotuse/        # retired Galleon marks (keep out of builds)
FONTS/
  Morion/          # display serif (OTF)
  Wigrum/          # UI sans (OTF)
tokens/
  colors.css       # CSS Custom Properties
  colors.json      # token data for JS/TS consumption
  fonts.css        # @font-face declarations (relative to FONTS/)
  tailwind.config.js  # Tailwind preset ready for extension
```

Copy the folders you need into your app. Keep relative paths between `tokens/fonts.css` and the `FONTS` directory intact or adjust the `src` URLs accordingly.

## Global CSS (all stacks)

1. Import the font faces and color variables once at the root of your app:

```css
/* app.css */
@import "./tokens/fonts.css";
@import "./tokens/colors.css";

:root {
  color: var(--dj-midnight);
  background-color: var(--dj-canvas);
  font-family: "Wigrum", "Inter", "Helvetica Neue", sans-serif;
  line-height: 1.5;
}

body {
  margin: 0;
  background: var(--dj-canvas);
}

h1, h2, h3, h4 {
  font-family: "Morion", "Times New Roman", serif;
  color: var(--dj-midnight);
}
```

2. Reference color tokens with `var(--dj-*)` throughout the project. Essential tokens live in `tokens/colors.json` if you prefer JS or TS imports.

## Tailwind Setup

The provided config is a drop-in preset. Extend your project configuration rather than replacing it so tree-shaking still works.

```js
// tailwind.config.js
const davyPreset = require("./tokens/tailwind.config.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./index.html"],
  presets: [davyPreset],
  theme: {
    extend: {
      // your overrides here
    },
  },
};
```

Install the companion plugins if your project uses them:

```
npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

## Framework Recipes

### Next.js (App Router)

1. Place `ASSETS`, `FONTS`, and `tokens` under `src/` or `public/` (keep fonts inside the repo to prevent Next optimizing them away).
2. Import `tokens/fonts.css` and `tokens/colors.css` inside `app/layout.tsx`:

```tsx
import "../tokens/fonts.css";
import "../tokens/colors.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davy Jones",
  description: "Charting new courses on the modern web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dj-canvas text-dj-midnight">{children}</body>
    </html>
  );
}
```

3. If you use the Next.js font optimization API, preload Morion and Wigrum via `next/font/local` pointing at the `.otf` files in `FONTS/`.

### Vite + React

1. Drop the kit directories at the project root.
2. Import the CSS tokens in `src/main.tsx` or `src/main.jsx` before rendering:

```tsx
import "../tokens/fonts.css";
import "../tokens/colors.css";
import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

3. If you're using Tailwind, follow the preset instructions above and import the generated stylesheet in `main`.

### Design Token Consumption (Vanilla JS / Node)

```js
import tokens from "./tokens/colors.json" assert { type: "json" };

const primary = tokens.palette.primary.midnight; // "#040728"
```

You can also require the Tailwind config for tooling scripts:

```js
const { theme } = require("./tokens/tailwind.config.js");
console.log(theme.extend.colors["dj-midnight"]);
```

## QA Checklist

- ✅ Fonts render with correct weights across browsers (check at 300, 400, 500, 700).
- ✅ All interactive elements meet contrast standards (use WebAIM contrast checker).
- ✅ No imports from `ASSETS/donotuse/`.
- ✅ Favicon or avatars use assets from `ASSETS/marks/`.
- ✅ Tailwind build includes the `presets` array so tokens remain available.

## Versioning & Release Notes

- Tag releases using `brand-kit-vX.Y.Z`.
- Document asset additions or token tweaks in your project changelog.
- When delivering to third parties, bundle `README.md`, the relevant `ASSETS` subfolder, `FONTS`, `tokens`, and a PDF export of `docs/davy-jones-brand-guidelines.md` (optional).
