# Dr. Maya Reynolds — Stage 2 internship assignment

Next.js + Tailwind CSS website concept built from the supplied fictional therapist profile.

## Review
- Public website: https://mondradmin.github.io/maya-reynolds-stage-two/
- `/`: Dr. Maya Reynolds redesign, including three services, approach, biography, FAQs and custom office section.
- `/clone/`: faithful reference homepage clone with all nine content sections and both footer sections, original responsive grids, typography, imagery and hierarchy.

## Run
Requires Node.js 20.9+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

The production build exports to `out/`, including a directory index for `/clone/`. Deploy that directory to a static host. `netlify.toml` configures Netlify to build with pnpm and publish `out/` using Node.js 22. The GitHub Pages workflow builds with `NEXT_PUBLIC_BASE_PATH=/maya-reynolds-stage-two` and publishes on pushes to `main`; the default build still supports hosting at a domain root.

## Design
Deep teal, warm ivory and muted copper create a calm coastal identity. Cormorant Infant gives headings an editorial feel; Mulish keeps body text clear. The redesign retains the reference’s primary composition and section order, with the office and FAQs integrated before the closing invitation. Mobile layouts stack imagery and content, replace the desktop navigation with a disclosure menu, and keep links comfortably spaced.

## Content and scope
All clinical claims come from the supplied fictional Dr. Maya Reynolds profile. Adult anxiety/panic, trauma/EMDR, burnout/perfectionism, CBT, mindfulness, body-oriented work, in-person Santa Monica sessions and California telehealth are represented. No fees, insurance policies, contact details, session lengths, reviews or additional qualifications are invented. The supplied address appears malformed, so the concept lists Santa Monica and its supplied ZIP code. The contact disclosure says that the demonstration does not accept appointments or messages. The site is clearly labeled fictional and excluded from search indexing.

The reference route reconstructs the original homepage as native React content with its desktop/mobile grid positions, spacing, hierarchy, image crops and colours. The original fonts load from the original public font delivery URLs; they are not redistributed in this repository. Links to original practice pages remain external where appropriate. The clone includes no original tracking scripts.

## Assets
- Supplied profile: therapist portrait and two office photographs.
- New coastal photography: Brady Bates, Ivan Bandura and Vince Fleming on Unsplash, under the Unsplash license.
  - https://unsplash.com/photos/people-on-beach-during-daytime-fmdvc-bv2Z8
  - https://unsplash.com/es/fotos/vista-aerea-de-cuerpos-de-agua-BVC32LJaSVU
  - https://unsplash.com/photos/woman-sitting-on-rock-near-body-of-water-vSaEm8rL61g
- Reference route: original images and text belong to Conejo Valley Family Counseling and are reproduced solely for this requested evaluation.
- Fonts: Cormorant Infant and Mulish, supplied through Google Fonts under their open-source font licenses.

## Validation
Production compilation, TypeScript checking and static export pass. Desktop and mobile browser review checks the navigation, page structure and horizontal overflow. No real appointments are collected or clinical services offered.
