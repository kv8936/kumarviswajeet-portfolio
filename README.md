# Kumar Portfolio

Modern 3D developer portfolio built with React, TypeScript, Vite, Three.js, and GSAP.

This project is designed as a single-page interactive portfolio with:

- animated hero and section transitions
- 3D visuals and physics-based interactions
- project carousel and skills showcase
- clean component structure for easy profile customization

![Portfolio Preview](public/images/preview1.png)

## What this project includes

### 1) Personal Branding Sections

- Hero intro ([src/components/Landing.tsx](src/components/Landing.tsx))
- About summary ([src/components/About.tsx](src/components/About.tsx))
- Career timeline ([src/components/Career.tsx](src/components/Career.tsx))
- Contact and social links ([src/components/Contact.tsx](src/components/Contact.tsx), [src/components/SocialIcons.tsx](src/components/SocialIcons.tsx))

### 2) Technical Showcase

- 3D tech stack visualization ([src/components/TechStack.tsx](src/components/TechStack.tsx))
- “What I Do” cards ([src/components/WhatIDo.tsx](src/components/WhatIDo.tsx))
- Project carousel ([src/components/Work.tsx](src/components/Work.tsx))

### 3) 3D Character Scene

- Character/scene setup and utilities under [src/components/Character](src/components/Character)
- Environment assets under [public/models](public/models)

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### 3D / Animation

- Three.js
- @react-three/fiber
- @react-three/drei
- @react-three/rapier
- @react-three/postprocessing
- GSAP + @gsap/react

### UI / Utilities

- react-icons
- react-fast-marquee

## Project Structure (high-level)

```text
.
├── public/
│   ├── images/          # Static images (projects, logos, preview)
│   ├── models/          # 3D assets
│   └── draco/           # Decoder files
├── src/
│   ├── components/
│   │   ├── Character/
│   │   ├── styles/
│   │   └── *.tsx        # Main sections
│   ├── context/
│   ├── data/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Run locally

### Prerequisites

- Bun (recommended) or Node.js + npm

### Install

```bash
bun install
```

### Start dev server

```bash
bun run dev
```

### Build production bundle

```bash
bun run build
```

### Preview build

```bash
bun run preview
```

## How to customize quickly

Update these files first:

- Name/role headline: [src/components/Landing.tsx](src/components/Landing.tsx)
- About bio: [src/components/About.tsx](src/components/About.tsx)
- Career timeline: [src/components/Career.tsx](src/components/Career.tsx)
- Education + links: [src/components/Contact.tsx](src/components/Contact.tsx)
- Social icons + resume URL: [src/components/SocialIcons.tsx](src/components/SocialIcons.tsx)
- Projects list/cards: [src/components/Work.tsx](src/components/Work.tsx)
- Skills and logos: [src/components/TechStack.tsx](src/components/TechStack.tsx)

## Deployment notes (important)

This project uses many static asset paths from `public/` (for example images/models).

- If hosting at root domain (like `username.github.io`), setup is usually direct.
- If hosting under a subpath (like `username.github.io/repo-name`), configure Vite `base` in [vite.config.ts](vite.config.ts) and ensure asset paths are subpath-safe.

## Troubleshooting

- Build/type issues:
  - run `bun run build` and fix reported TypeScript errors
- Missing image/model:
  - verify file exists in `public/` and path is correct
- 3D performance on low-end devices:
  - reduce postprocessing intensity and scene complexity

## License

See [LICENSE](LICENSE).
