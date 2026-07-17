# Repository Guidelines

## Project Structure & Module Organization

This is the Astro marketing site for LifePattern AI, configured for Cloudflare Workers. Source files live in `src/`. Route files are in `src/pages/`, including the home page, feature pages, practitioner pages, privacy page, thank-you pages, and the signup API at `src/pages/api/signup.ts`. Reusable Astro components belong in `src/components/`; the shared document shell is `src/components/Layout.astro`, with navigation in `Header.astro`, footer content in `Footer.astro`, and cookie consent in `CookieBanner.astro`. Shared site metadata is in `src/site/config.ts`, while reusable marketing feature copy is in `src/site/content.ts`. Global styles live in `src/styles/global.css`. Static assets such as fonts, images, illustrations, favicons, and `robots.txt` belong in `public/`.

The project still includes starter blog content and a collection schema in `src/content/blog/` and `src/content.config.ts`, but there are currently no active blog routes. Do not add or update blog instructions unless a blog route is reintroduced.

## Build, Test, and Development Commands

- `npm install`: install dependencies. Requires Node `>=22`.
- `npm run dev`: start the Astro dev server, usually at `http://localhost:4321`.
- `npm run build`: build the production site into `dist/`.
- `npm run preview`: build, then preview locally with `wrangler dev`.
- `npm run check`: run `astro build`, `tsc`, and a Wrangler dry-run deploy.
- `npm run deploy`: deploy the built site to Cloudflare Workers.
- `npm run cf-typegen`: regenerate Cloudflare Worker type definitions.

## Coding Style & Naming Conventions

Use TypeScript and Astro’s strict configuration. Match the surrounding file style: tabs are common in existing Astro, JSON, CSS, and TypeScript files. Keep Astro component names in PascalCase, for example `FeatureRow.astro` and `SignupForm.astro`. Use descriptive route filenames in `src/pages/`; dynamic routes should follow Astro bracket syntax if introduced. Put reusable product and feature copy in `src/site/content.ts` when it is displayed in more than one place or rendered through `FeatureRow`. Keep one-off page copy inside the relevant route file.

Use `Layout.astro` for pages that need the standard metadata, header, footer, cookie banner, and global styles. Set `activePage` to `"home"`, `"features"`, or `"practitioners"` when a page should highlight a main navigation item. Use `blankHeader` and `hideFooter` only for focused signup or confirmation flows where the standard navigation/footer would distract.

## Testing Guidelines

There is no dedicated test framework or coverage requirement currently configured. Treat `npm run build` as the minimum validation for content, routes, and Astro compilation. Use `npm run check` before deployment-sensitive changes because it also runs TypeScript and Wrangler’s dry-run deploy. For visible UI changes, run the dev server and check the affected page in a browser when practical.

## Commit & Pull Request Guidelines

Git history currently contains only `source repo import`, so no detailed convention is established. Use short, imperative commit subjects such as `Add blog post schema` or `Update Cloudflare config`. Pull requests should include a concise summary, validation commands run, linked issues when applicable, and screenshots for visible UI changes.

## Security & Configuration Tips

Do not commit Cloudflare secrets or local environment files. Keep deployment configuration in `wrangler.json`, and update `astro.config.mjs` when changing canonical site URLs, integrations, or Cloudflare adapter behavior. Runtime signup configuration is read from Cloudflare bindings or `import.meta.env`; expected variables include `API_URL` and `RECAPTCHA_SECRET_KEY`. Keep public reCAPTCHA/site-key usage in client-facing code separate from private secret keys.
