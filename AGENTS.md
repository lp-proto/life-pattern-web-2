# Repository Guidelines

## Project Structure & Module Organization

This is an Astro blog/portfolio starter configured for Cloudflare Workers. Source files live in `src/`. Route files are in `src/pages/`, including `src/pages/blog/[...slug].astro` for blog detail pages and `src/pages/rss.xml.js` for the RSS endpoint. Reusable Astro components belong in `src/components/`, layouts in `src/layouts/`, and global styles in `src/styles/global.css`. Blog content is stored as Markdown or MDX in `src/content/blog/` and validated by `src/content.config.ts`. Static assets such as fonts, images, and `favicon.svg` belong in `public/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies. Requires Node `>=22`.
- `npm run dev`: start the Astro dev server, usually at `http://localhost:4321`.
- `npm run build`: build the production site into `dist/`.
- `npm run preview`: build, then preview locally with `wrangler dev`.
- `npm run check`: run `astro build`, `tsc`, and a Wrangler dry-run deploy.
- `npm run deploy`: deploy the built site to Cloudflare Workers.
- `npm run cf-typegen`: regenerate Cloudflare Worker type definitions.

## Coding Style & Naming Conventions

Use TypeScript and Astro’s strict configuration. Match the surrounding file style: tabs are common in existing Astro, JSON, CSS, and TypeScript files. Keep Astro component names in PascalCase, for example `BaseHead.astro` and `FormattedDate.astro`. Use descriptive route filenames in `src/pages/`; dynamic routes should follow Astro bracket syntax such as `[...slug].astro`. Blog frontmatter must include `title`, `description`, and `pubDate`; `updatedDate` and `heroImage` are optional.

## Testing Guidelines

There is no dedicated test framework or coverage requirement currently configured. Treat `npm run build` as the minimum validation for content, routes, and Astro compilation. Use `npm run check` before deployment-sensitive changes because it also runs TypeScript and Wrangler’s dry-run deploy.

## Commit & Pull Request Guidelines

Git history currently contains only `source repo import`, so no detailed convention is established. Use short, imperative commit subjects such as `Add blog post schema` or `Update Cloudflare config`. Pull requests should include a concise summary, validation commands run, linked issues when applicable, and screenshots for visible UI changes.

## Security & Configuration Tips

Do not commit Cloudflare secrets or local environment files. Keep deployment configuration in `wrangler.json`, and update `astro.config.mjs` when changing canonical site URLs or integrations.
