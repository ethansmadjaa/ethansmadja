# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev**: `bun dev`
- **Build**: `bun run build`
- **Lint**: `bun run lint` (ESLint via `next lint`; ignored during builds)
- **Package manager**: bun

No test runner is configured.

## Stack

Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS v4, shadcn/ui (Radix primitives), Framer Motion, next-themes (class-based dark mode). Email via Resend + React Email. hCaptcha on contact form. Deployed on Vercel.

## Architecture

**Page pattern**: Each route has a thin server `page.tsx` (exports `metadata`, renders structured data) and a `'use client'` content component in `src/components/pages/*-content.tsx`. Follow this split for new pages.

**Data is static**: All site content lives in `src/data/` as TypeScript arrays (`projects.ts`, `skills.ts`, `experiences.ts`). No database, no server-side fetching. The only dynamic endpoint is `src/app/api/contact/route.ts`.

**Styling**: Tailwind v4 with CSS custom properties (HSL) defined in `globals.css`. Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes. shadcn/ui config in `components.json` (neutral base, CSS variables).

**Animations**: Shared Framer Motion wrappers in `src/components/animations.tsx` (`AnimatedDiv`, `AnimatedSection`, `StaggerContainer`, `StaggerItem`, etc.). Pages wrapped in `PageWrapper` for fade-in.

**Path alias**: `@/*` maps to `src/*`.

## SEO

Every page exports `metadata`. Root layout includes `PersonJsonLd` + `WebsiteJsonLd`. Inner pages use `BreadcrumbJsonLd`. Sitemap generated via `src/app/sitemap.ts`. Security headers set in `next.config.js`.
