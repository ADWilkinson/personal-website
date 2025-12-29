# andrewwilkinson.xyz

Personal website and portfolio built with Next.js, Tailwind CSS, and MDX. Features articles, project showcases, and AI tooling prompts.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for articles
- **Typography**: Custom fonts (Morion, Wigrum)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your site URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── articles/  # MDX blog posts
│   ├── projects/  # Project showcase
│   └── about/     # About page
├── components/    # Reusable UI components
├── lib/           # Utility functions
├── styles/        # Global styles & tokens
└── images/        # Static assets
```

## Writing Articles

Create a new directory in `src/app/articles/` with a `page.mdx` file:

```jsx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  author: 'Your Name',
  date: 'YYYY-MM-DD',
  title: 'Article Title',
  description: 'Brief description'
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />

Your markdown content here...
```

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for details.

The base template is from [Tailwind Plus](https://tailwindcss.com/plus) (Spotlight template), used under their commercial license which permits open-source end products.
