# Kumar Portfolio

This repository contains the source code for a modern personal 3D portfolio built with React, TypeScript, Vite, Three.js, React Three Fiber, and GSAP.

It includes animated sections, an interactive character/3D experience, custom cursor effects, and a project showcase that is easy to customize.

## Live Website

- GitHub Pages: [https://kv8936.github.io/kumarviswajeet-portfolio/](https://kv8936.github.io/kumarviswajeet-portfolio/)


![Portfolio Preview](public/images/preview1.png)

## Table of Contents

- [Features](#features)
- [What this project includes](#what-this-project-includes)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [GSAP License Note](#gsap-license-note)
- [License](#license)

## Features

- Responsive one-page portfolio layout with reusable section components.
- 3D character scene powered by Three.js and React Three Fiber.
- GSAP-powered transitions and scroll effects.
- Interactive cursor, hover states, and motion-driven UI details.
- Organized component architecture for quick content updates.

## What this project includes

### 1) Personal Branding Sections

- Hero intro ([src/components/Landing.tsx](src/components/Landing.tsx))
- About summary ([src/components/About.tsx](src/components/About.tsx))
- Career timeline ([src/components/Career.tsx](src/components/Career.tsx))
- Contact and social links ([src/components/Contact.tsx](src/components/Contact.tsx), [src/components/SocialIcons.tsx](src/components/SocialIcons.tsx))

### 2) Technical Showcase

- 3D tech stack visualization ([src/components/TechStack.tsx](src/components/TechStack.tsx))
- What I Do cards ([src/components/WhatIDo.tsx](src/components/WhatIDo.tsx))
- Project carousel ([src/components/Work.tsx](src/components/Work.tsx))

### 3) 3D Character Scene

- Character/scene setup and utilities in [src/components/Character](src/components/Character)
- Environment/model assets in [public/models](public/models)

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### Animation and 3D

- GSAP + @gsap/react
- Three.js
- @react-three/fiber
- @react-three/drei
- @react-three/postprocessing
- @react-three/cannon
- @react-three/rapier

### Supporting Libraries

- react-icons
- react-fast-marquee
- @vercel/analytics

## Project Structure

```text
.
├── public/                    # Static assets (images, models, draco, resume)
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   └── *.tsx              # Main sections
│   ├── context/               # Global providers
│   ├── data/                  # Static content/data files
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Bun (recommended), or Node.js 18+ with npm

### Installation

```bash
bun install
```

### Run development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

## Available Scripts

- `bun run dev` — Starts Vite dev server.
- `bun run build` — Type-checks and builds production bundle.
- `bun run preview` — Serves the production build locally.
- `bun run lint` — Runs ESLint checks.

## Customization Guide

For quick personalization, update these files first:

- Name/role headline: [src/components/Landing.tsx](src/components/Landing.tsx)
- About section: [src/components/About.tsx](src/components/About.tsx)
- Career timeline: [src/components/Career.tsx](src/components/Career.tsx)
- Education + contact links: [src/components/Contact.tsx](src/components/Contact.tsx)
- Social icons + resume path: [src/components/SocialIcons.tsx](src/components/SocialIcons.tsx)
- Projects: [src/components/Work.tsx](src/components/Work.tsx)
- Skills + logos: [src/components/TechStack.tsx](src/components/TechStack.tsx)

## Deployment

This project can be deployed to GitHub Pages, Netlify, Vercel, and similar hosts.

### General deployment flow

1. Build:

   ```bash
   bun run build
   ```

2. Verify:

   ```bash
   bun run preview
   ```

3. Deploy `dist/` (or use CI workflow).

### GitHub Pages note

If deploying under a subpath like `username.github.io/repo-name`, make sure [vite.config.ts](vite.config.ts) has the correct `base` and asset paths are subpath-safe.

## Troubleshooting

- Blank page after deploy:
  - Check `base` path in [vite.config.ts](vite.config.ts).
- Type/build issues:
  - Run `bun run build` and resolve reported errors.
- Missing image/model:
  - Verify file exists under `public/` and path is correct.
- Slow 3D performance:
  - Reduce postprocessing/scene complexity in 3D components.

## GSAP License Note

This project uses the standard `gsap` package.

- Install dependencies normally with Bun or npm.
- If migrating from older setups, remove `gsap-trial` if present.

Reference: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## License

This project is available under the [MIT License](LICENSE).

