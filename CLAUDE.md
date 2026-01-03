# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/portfolio built using Next.js and Tailwind CSS. It's based on the "Spotlight" template from Tailwind Plus. The site includes pages for a personal bio, articles/blog posts, projects, CV, and contact information. The site has been personalized with custom company logos, pirate-themed illustrations, and content based on Andrew Wilkinson's professional experience.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Environment Variables

Set up a `.env.local` file in the project root with:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Architecture

### Framework
- **Next.js**: Uses the App Router introduced in Next.js 13+
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **MDX**: For writing articles with Markdown + JSX

### Key Directories and Files
- `/src/app/`: Contains all the page routes using Next.js App Router
- `/src/components/`: Reusable UI components
- `/src/lib/`: Utility functions and shared logic
- `/src/images/`: Static images used throughout the site
  - `/logos/`: Company logos (rounded style)
  - `/photos/`: Custom images for the homepage (pirate-themed illustrations)
- `/src/styles/`: Global styles and Tailwind configuration

### Content Management
Articles are written in MDX format in `/src/app/articles/` with each article in its own directory:
- Each article directory contains a `page.mdx` file with frontmatter metadata
- Images for articles are stored in the same directory as the article
- Articles are loaded dynamically using the utility functions in `/src/lib/articles.ts`

### Page Structure
- Each page uses standard Next.js App Router patterns
- Most pages use various shared components like `Container`, `Layout`, etc.
- The `layout.tsx` provides the site-wide layout and structure

### Theme
- Supports both light and dark modes using `next-themes`
- Color scheme is primarily based around zinc/teal color palette from Tailwind

### Custom Components
- `CompanyLogo`: Displays company names with their logos in a consistent, rounded style
- Layout components such as `Container`, `Section`, and `SimpleLayout` provide consistent page structures
- Custom styling for images in the homepage photo gallery (desaturated pirate-themed illustrations)

## Working with MDX Articles

When creating a new article:
1. Create a new directory under `/src/app/articles/`
2. Create a `page.mdx` file with the following structure:
```jsx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  author: 'Author Name',
  date: 'YYYY-MM-DD',
  title: 'Article Title',
  description: 'Brief description of the article'
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />

// Article content in Markdown format
```

## Verification

After making changes, run:
```bash
# Lint
npm run lint

# Build to catch type errors
npm run build

# For UI changes, run dev and visually verify
npm run dev
```