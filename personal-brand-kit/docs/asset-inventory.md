# Asset Inventory

Curated list of active, production-ready files. Paths are relative to the repository root. Anything under `ASSETS/donotuse/` is archival and should stay out of production builds.

## Marks (`ASSETS/marks`)

| File | Description | Suggested usage |
| ---- | ----------- | ---------------- |
| `ASSETS/marks/Davy Jonesbrand.png` | Primary wordmark lockup on dark background | Hero headers, landing pages, print collateral |
| `ASSETS/marks/Davy Jones.png` | Circular avatar with Davy Jones illustration | Profile images, favicons, social avatars |
| `ASSETS/marks/Duck copy.png` | Square duck illustration with warm background | Secondary avatar, Easter eggs, avatars in community products |
| `ASSETS/marks/Duck.png` | Duck illustration on dark background | Alternate avatar for dark UI contexts |
| `ASSETS/marks/davy-jones-alt-mark.png` | Alternate stacked mark featuring the duck motif | Merch concepts, badges, social graphics |

## Icons (`ASSETS/icons`)

| File | Description | Notes |
| ---- | ----------- | ----- |
| `About-Icon.png` / `About-Icon-Dark.png` | About / story icon in light & dark treatments | Light vs. dark UIs |
| `Application-Icon.png` / `Application-Icon-Dark.png` | App/product launcher icon | Works as CTA embellishment |
| `Community-Icon.png` / `Community-Icon-Dark.png` | Community bubble icon | Use for events, Discord, community pages |
| `Governance-Icon.png` / `Governance-Icon-Dark.png` | Governance/treasury chest icon | Use for DAO or operations sections |
| `Products-Icon.png` | Product collection icon | Supports product catalogue sections |
| `Resources-Icon.png` | Resources/bookmark icon | Documentation and resources nav |
| `Treasury-Icon.png` / `Treasury-Icon-Dark.png` | Treasury icon | Finance dashboards |
| `Group 1export box1.png` | Parcel/loot box icon | Logistics, shipping, rewards |
| `Group 2communitybubble.svg` | Speech bubble SVG | Primary scalable option for chat/community |
| `Group 2speech bubble1.png` | Raster speech bubble | Use when SVG rendering isn’t available |
| `Group 5compass.png` / `Groupbwcompass.png` | Compass icons (color & monochrome) | Navigational UI cues |
| `Group 6bottle.png` / `Groupbwbottle.png` | Message-in-a-bottle icon (color & monochrome) | Messaging, feedback loops |
| `Group 8book.png` | Open book icon | Knowledge base, journal features |
| `Group 9speach bubble.png` | Alternate chat bubble | Secondary messaging context |
| `Groupesport bag1.png` | Bag/satchel icon | Inventory, equipment, IRL kits |
| `layer1.png` | Abstract accent icon | Use as divider graphic or bullet |
| `Resourcesbook 1export.png` | Detailed resources book illustration | Larger highlight card |

SVG files are preferred where available; PNG alternatives support contexts without vector rendering.

## Hero Art (`ASSETS/hero-art`)

| File | Description | Suggested usage |
| ---- | ----------- | ---------------- |
| `Group 10.png` | Large hero composition on light background | Landing page hero (light theme) |
| `Group 10logo3.png` | Hero composition with logomark integration | Presentation covers, slide decks |
| `Group 10map.png` | Map overlay variant | Background for exploration features |
| `Group 11bag.png` | Tooling/kit illustration | Product features, onboarding cards |
| `Group 12.png` | Duo illustration with map & compass | Team or collaboration sections |
| `Group 351brand.png` | High-resolution crew scene | Wide hero banners, posters |
| `Group 352brand.png` | Alternate high-res crew scene | Campaign visuals, hero carousels |
| `Products.png` | Assortment of products illustration | Marketplace, upgrade flows |

## Backgrounds (`ASSETS/backgrounds`)

| File | Description | Usage |
| ---- | ----------- | ----- |
| `crewbrand.png` | Textured crew collage background | Full-bleed hero backgrounds |
| `Frame-1.png` / `Frame.png` | Framed parchment textures | Section dividers, modal backdrops |
| `mapbrand.png` | Nautical map texture | Subtle page background at 20–40% opacity |
| `path826brand.png` | Grainy parchment texture | Card backgrounds, overlay patterns |

## Fonts (`FONTS`)

| Family | Weights | Notes |
| ------ | ------- | ----- |
| Morion | Thin → Bold plus italics | Display serif—embed via `tokens/fonts.css` |
| Wigrum | Regular → Bold plus italics | UI sans—primary body typeface |

> Tip: When packaging assets for vendors, include only the weights you ship to keep bundles lean (e.g. Morion Regular/Bold, Wigrum Regular/Medium/Bold).
