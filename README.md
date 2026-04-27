# Borderlands 2 Recoded Hub

This is a static website for browsing Borderlands 2 Recoded Mod data on the web.  
It helps players quickly explore skill trees, items, drop sources, and other gameplay information.

## Tech Stack

| Area | Details |
|------|------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router), [React](https://react.dev) 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI | shadcn/ui, Radix UI, Lucide |
| State/Data | Zustand, TanStack Query, TanStack Table |
| Utilities | es-toolkit, usehooks-ts, zod |
| Quality Tools | ESLint, Prettier, Husky, lint-staged |

## Project Highlights

- **Static-export ready**: Uses `output: 'export'` in `next.config.ts`.
- **GitHub Pages friendly**: `basePath` and `assetPrefix` are set to `'/borderlands2-recoded-hub'`.
- **Image setting for static export**: Uses `images.unoptimized: true`.
- **WebView-compatible deployment**: The generated static output (`out/`) can be deployed to different hosting and embedded environments.

## Getting Started

### Requirements

- Node.js 20+
- pnpm

### Install

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and Run

```bash
pnpm build
```

The static output is generated in the `out/` directory.

```bash
pnpm start
```

This is the production run script defined in `package.json`.
To preview the static output (`out/`) directly, use:

```bash
pnpm dlx serve out
```

## Scripts

| Command | Description |
|--------|------|
| `pnpm dev` | Run dev server (`next dev`) |
| `pnpm build` | Build production bundle + static export (`next build`) |
| `pnpm start` | Run production server (`next start`) |
| `pnpm lint` | Run ESLint |

## Key Directories

```text
src/
  app/                # App Router pages/layouts
  components/         # UI and domain components
  stores/             # Global/domain state (zustand)
  data/               # Static game data resources
  styles/             # Global styles
public/               # Static assets
.github/workflows/    # GitHub Actions deployment workflow
```

TypeScript alias: `@/*` -> `./src/*`

## Deployment

This project includes an automated GitHub Pages deployment workflow.

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger branch: `deploy`
- Deployment artifact path: `./out`

You can also deploy `out/` to other static hosts (for example S3 or Netlify).

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
