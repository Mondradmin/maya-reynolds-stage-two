# Dr. Maya Reynolds — Stage 2 internship assignment

Next.js + Tailwind CSS website concept built from the supplied fictional therapist profile.

## Review
- `/`: Dr. Maya Reynolds redesign, including three services, approach, biography, FAQs and custom office section.
- `/clone/`: reference homepage study, preserving its main section order, image/text splits, service grid and footer structure.

## Run
Requires Node.js 20.9+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

The production build exports to `out/`. Deploy that directory to a static host. The Sites deployment identity is in `.openai/hosting.json`.

## Design
Deep teal, warm ivory and muted copper create a calm coastal identity. Cormorant Infant gives headings an editorial feel; Mulish keeps body text clear. The redesign retains the reference’s primary composition and section order, with the office and FAQs integrated before the closing invitation. Mobile layouts stack imagery and content, replace the desktop navigation with a disclosure menu, and keep links comfortably spaced.

## Content and scope
All clinical claims come from the supplied fictional Dr. Maya Reynolds profile. Adult anxiety/panic, trauma/EMDR, burnout/perfectionism, CBT, mindfulness, body-oriented work, in-person Santa Monica sessions and California telehealth are represented. No fees, insurance policies, contact details, session lengths, reviews or additional qualifications are invented. The supplied address appears malformed, so the concept lists Santa Monica and its supplied ZIP code. The contact disclosure explains that a real booking destination must be supplied before a clinical launch. The site is clearly labeled fictional and excluded from search indexing.

The reference route is an evaluation study, not a pixel-perfect reproduction. Open-source typography substitutes for the reference’s proprietary fonts. Links to original practice pages remain external where appropriate.

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
