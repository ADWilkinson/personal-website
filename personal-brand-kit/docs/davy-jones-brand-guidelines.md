# Davy Jones Brand Guidelines

## Brand Essence

Davy Jones is a confident, adventurous operator with a modern-pirate flair. The brand voice mixes nautical nostalgia with pragmatic optimism—think "seasoned captain with a product mindset." Communications should feel:

- **Assured** – decisive language that avoids hedging.
- **Inviting** – inclusive, human, and a little mischievous.
- **Curious** – ready to explore new ideas and technologies.
- **Resourceful** – solutions-oriented, focused on craft.

Use first-person where it helps build connection, but keep prose sharp and free of filler.

## Visual Principles

1. **Contrast & clarity** – Anchor layouts with the deep midnight navy and offset with warm neutrals. Maintain WCAG AA contrast minimums (4.5:1 for text smaller than 18 pt).
2. **Heritage meets future** – Combine vintage textures, hand-drawn iconography, and serif typography with structured modern layouts.
3. **Narrative imagery** – Every illustration should suggest a journey, a tool, or a map. Use backgrounds sparingly so content remains the hero.
4. **No Galleon marks** – Anything under `ASSETS/donotuse/` stays in the archive; all active assets reference the Davy Jones identity.

## Color System

Core palette, also exported as CSS variables in `tokens/colors.css` and JSON in `tokens/colors.json`:

| Token             | Hex      | Usage notes                                   |
| ----------------- | -------- | --------------------------------------------- |
| `--dj-midnight`   | `#040728`| Primary background, overlays, dominant text   |
| `--dj-cerulean`   | `#025BEE`| Action color, interactive states, highlights  |
| `--dj-sand`       | `#FDE6C4`| Warm neutral backgrounds, panels              |
| `--dj-parchment`  | `#FEF3E2`| Secondary surface, cards, document textures   |
| `--dj-aqua`       | `#59F4F4`| Accents, supporting data visualization        |
| `--dj-copper`     | `#DC7F5A`| Alerts, emphasis strokes, CTA hover states    |
| `--dj-charcoal`   | `#27272A`| Neutral text, borders                         |
| `--dj-navigator`  | `#0072B5`| Desaturated accent, charts, info callouts     |
| `--dj-canvas`     | `#F4EEE8`| Base light background, large sections         |
| `--dj-white`      | `#FFFFFF`| Pure white, text on dark surfaces             |

Pair cool hues (`midnight`, `cerulean`, `aqua`) with one warm neutral (`sand`, `parchment`, or `copper`) to keep compositions balanced. Avoid using more than three accent colors in a single screen.

## Typography

- **Display / Headlines** – Morion (serif). Use semibold or bold above 32 px. Tracking should be slightly tightened for large headlines (−2 to −4).
- **Body / UI** – Wigrum (sans). Regular for body copy, medium for navigation or key UI elements.
- **Fallbacks**:
  - Morion: `"Morion", "Times New Roman", serif`
  - Wigrum: `"Wigrum", "Inter", "Helvetica Neue", sans-serif`

Line height guidance:

| Context      | Font   | Weight | Size | Line height |
| ------------ | ------ | ------ | ---- | ----------- |
| H1 hero      | Morion | Bold   | 56px | 110%        |
| H2 section   | Morion | Semibold | 40px | 115%     |
| Lead text    | Wigrum | Medium | 22px | 140%       |
| Body         | Wigrum | Regular | 18px | 150%      |
| Small label  | Wigrum | Medium | 14px | 130%      |

When using system fonts (e.g. for fallbacks or email clients), opt for Georgia and Inter to keep the serif/sans structure intact.

## Iconography & Illustration

- Icons live under `ASSETS/icons/` and are intentionally hand-drawn with mixed line weights. Maintain those weights when scaling; if you must redraw, keep corner radii irregular and avoid perfect symmetry.
- The duck and bag motifs reinforce Davy's explorer persona. `ASSETS/marks/` contains avatar-friendly crops; `ASSETS/hero-art/` contains larger compositions for hero sections.
- Background textures (`ASSETS/backgrounds/`) provide parchment-like depth. Use at low opacity over solid fills to avoid overpowering content.

### Clear Space

For the primary logo (`ASSETS/marks/Davy Jonesbrand.png`), maintain clear space equal to the height of the "D" around all edges. For circular avatars (`ASSETS/marks/Davy Jones.png`), keep edges unobstructed and avoid applying drop shadows directly to the asset—add shadows to the container instead.

## Motion & Interaction

Subtlety wins. Favor:

- Slide/fade transitions under 200 ms.
- Hover states that shift color (`cerulean` → `aqua`) with 90 ms ease-out timing.
- Button focus states that overlay a `2px` `--dj-aqua` outline plus underline on text buttons.

Avoid skeuomorphic animations or aggressive bounce effects; the experience should feel crisp and purposeful.

## Voice & Copy Examples

| Scenario           | Guidance                                                |
| ------------------ | ------------------------------------------------------- |
| Product launch     | Lead with the outcome (“Chart a new course…”) and back it up with a single proof point. |
| Support messaging  | Speak in first person (“I’ve got you—here’s what to do next.”) and offer a concise action. |
| Community updates  | Use collective language (“Crew”, “We’re hoisting…”) and invite participation. |

Taglines and CTAs should be directive: “Hoist the sails”, “Chart your map”, “Unlock the vault”.

## Governance

- All new assets should save into the relevant `ASSETS` subfolder with kebab-case filenames.
- Update `docs/asset-inventory.md` and, if colors or fonts change, refresh `tokens/`.
- Keep a changelog for public releases (see `docs/developer-handbook.md` for versioning tips).

Questions or new requests? Treat `docs/davy-jones-brand-guidelines.md` as the source of truth—update it alongside any visual shifts.
