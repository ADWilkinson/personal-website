# Davy Jones Brand Kit

This repository packages the visual identity for the Davy Jones personal brand so designers and engineers can reskin products without digging through scattered files. It contains curated assets, cross-framework design tokens, and implementation playbooks for Vite, Next.js, and vanilla front-end stacks.

## What's Inside

- `ASSETS/` – production-ready artwork grouped into `marks/`, `icons/`, `hero-art/`, `backgrounds/`, plus `donotuse/` for retired Galleon graphics.
- `FONTS/` – the Morion (display) and Wigrum (body) font families with all supplied weights.
- `tokens/` – reusable design tokens in CSS, JSON, and Tailwind formats.
- `docs/` – the written brand guidelines, developer handbook, and asset inventory (the original Galleon PDFs live under `docs/archive/` for reference only).

## Quick Start

1. Copy the `ASSETS`, `FONTS`, and `tokens` directories into your project (or import them straight from this repo if you're using it as a submodule).
2. Follow the framework-specific instructions in `docs/developer-handbook.md` to wire up typography, color variables, and Tailwind (optional).
3. Keep `ASSETS/donotuse/` out of production builds—those files are strictly archival.

If you only need the brand primitives, you can import from `tokens/colors.json`, `tokens/colors.css`, or the Tailwind snippet in `tokens/tailwind.config.js`.

## Need More Detail?

- Brand foundation, tone, and visual guidance: `docs/davy-jones-brand-guidelines.md`
- Step-by-step integration patterns: `docs/developer-handbook.md`
- File-by-file asset reference: `docs/asset-inventory.md`

Pull requests that add new assets should update both the inventory and the appropriate token files.
