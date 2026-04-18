# Foxteck Portfolio — www.foxteck.com

Personal portfolio website for Blake Fox (VP of Engineering · CTO · AI Specialist).  
Built with [Astro](https://astro.build) + Tailwind CSS, deployed to Azure Static Web Apps.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

---

## Content Guide

### Updating an Existing Project

Each project is a single Markdown file in `src/content/projects/`.

```
src/content/projects/
├── faceware-studio.md
├── hia-medical.md
├── ikin-asimov.md
├── ikin-ryz-arc.md
├── foxteck-grading-assistant.md
└── ... (14 files total)
```

Every file has two parts:

**1. Frontmatter** (structured data between the `---` fences) — controls what appears on cards, filters, and the detail page header.

**2. Body** (below the second `---`) — the full project description in plain Markdown. Supports `**bold**`, `## headings`, bullet lists, etc.

**To update copy:** open the `.md` file, edit the body text or any frontmatter field, save.

---

### Adding a New Project

1. Copy an existing file in `src/content/projects/` and rename it (use lowercase-with-dashes, e.g. `new-company-product.md`).
2. Update every frontmatter field (see reference below).
3. Replace the body with the project description.
4. Copy any media into `public/assets/projects/new-company-product/`.
5. Add paths to `heroImage`, `heroVideo`, `images`, or `videos` in the frontmatter.
6. To feature it on the homepage, set `featured: true`.

---

### Frontmatter Field Reference

```yaml
---
title:        "Project Display Name"
company:      "Company Full Name"
companySlug:  "company"          # lowercase, used for filtering — see slugs below
role:         "Your Role Title"
startYear:    2022
endYear:      2024               # or the string: present
order:        10                 # controls sort order on /projects and /timeline (lower = earlier)
tags:         ["React", "AI"]    # technology/skill chips shown on cards and detail pages
domains:      ["ai", "web"]      # filter categories — see domains below
summary:      "One sentence shown on the project card."
heroImage:    "/assets/projects/slug/hero.png"    # optional — card + detail page header image
heroVideo:    "/assets/projects/slug/demo.mp4"    # optional — autoplays muted in banner
images:       ["/assets/projects/slug/img1.png"]  # optional — shown in media gallery
videos:       ["/assets/projects/slug/clip.mp4"]  # optional — shown as thumbnails in gallery
youtubeUrls:  ["https://www.youtube.com/watch?v=XXXX"]  # optional — embedded below description
externalUrl:  "https://product-website.com"       # optional — "Visit Project Site" link
featured:     false              # true = appears in homepage Featured Projects section
---
```

**Valid `companySlug` values**

| Slug | Company |
|---|---|
| `ikin` | IKIN Technologies |
| `faceware` | Faceware Technologies |
| `ibm` | IBM Watson |
| `madcatz` | Madcatz / Saitek |
| `foxteck` | Foxteck / Livestalk / Grading Assistant / True Value Hub |
| `hia` | HIA Technologies |

**Valid `domains` values** (used for the filter tabs on `/projects`)

`ai` · `hardware` · `games` · `web` · `medical` · `leadership` · `firmware` · `startup`

---

### Adding Media to an Existing Project

1. Copy the file into `public/assets/projects/[project-slug]/`
2. Open `src/content/projects/[project-slug].md`
3. Add the path to the appropriate frontmatter array:

```yaml
images:
  - "/assets/projects/ikin-ryz-arc/new-screenshot.png"
videos:
  - "/assets/projects/ikin-ryz-arc/new-demo.mp4"
```

> **Note on video file sizes:** Large videos (>25MB) will hurt page load. Compress before adding:
> ```bash
> ffmpeg -i input.mp4 -vcodec h264 -crf 23 -acodec aac output.mp4
> ```

---

### Updating the Career Timeline

File: `src/data/timeline.ts`

Each entry is an object in the `timeline` array. Add a new stop or edit an existing one:

```ts
{
  id:           'company-id',
  company:      'Company Name',
  role:         'Your Role',
  startYear:    2020,
  endYear:      'present',       // or a number
  location:     'City, ST',
  description:  'What you did here.',
  projectSlugs: ['project-slug-1', 'project-slug-2'],  // links to project detail pages
  highlight:    'Key win · metric · partnership',       // optional — shown in rust color
},
```

---

### Updating the Homepage

| What | File |
|---|---|
| Hero statement text + CTAs | `src/components/home/HeroSection.astro` |
| Stat bar numbers (15+ years, etc.) | `src/components/home/StatBar.astro` |
| Philosophy quote block | `src/pages/index.astro` |
| Featured projects | set `featured: true` in any project's frontmatter |

---

### Updating the About Page

File: `src/pages/about.astro`

- **Bio paragraphs** — edit the `<p>` blocks in the bio section
- **Skills grid** — edit the `skills` object at the top of the frontmatter script block
- **Education** — edit the two education cards in the HTML

---

### Updating Contact Info

File: `src/pages/contact.astro` and `src/components/contact/ContactForm.astro`

- **Email address** — search for `bfox1981@gmail.com` and replace
- **Formspree form ID** — replace `YOUR_FORM_ID` in `ContactForm.astro` line 6 with your actual Formspree form ID
- **LinkedIn URL** — search for `linkedin.com/in/blake-fox/` and replace

---

### Adding LinkedIn Recommendations

1. Save the screenshot PNG to `public/assets/recommendations/rec-[name].png`
2. Open `src/components/recommendations/RecommendationCarousel.astro`
3. Add an entry to the `recs` array:

```ts
{ src: '/assets/recommendations/rec-newname.png', name: 'New Name' },
```

---

## Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── personal/          # headshot, logo
│   │   ├── projects/          # media per project (14 subfolders)
│   │   └── recommendations/   # LinkedIn recommendation screenshots
│   ├── resume/
│   │   └── Fox_Blake_Resume_2026.pdf
│   └── favicon.svg
│
├── src/
│   ├── content/projects/      # 14 Markdown files — one per project
│   ├── data/timeline.ts       # career timeline data
│   ├── layouts/               # BaseLayout, ProjectLayout
│   ├── pages/                 # index, about, contact, timeline, projects/[slug]
│   ├── components/            # layout, home, projects, timeline, recommendations, contact
│   └── styles/global.css      # CSS custom properties (design tokens)
│
├── Content/                   # source of truth for raw assets — NOT served
├── astro.config.mjs
├── tailwind.config.mjs
└── staticwebapp.config.json   # Azure Static Web Apps routing + cache headers
```

---

## Deployment

Push to `main` → Azure Static Web Apps automatically builds and deploys.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** configured in Azure Portal → `www.foxteck.com`

---

## Before Going Live Checklist

- [ ] Register at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in `src/components/contact/ContactForm.astro`
- [ ] Compress large video files in `public/assets/projects/ikin-asimov/` and `ikin-ryz-arc/` (several are 60–360MB)
- [ ] Connect GitHub repo to Azure Static Web Apps in the Azure Portal
- [ ] Configure custom domain `www.foxteck.com` in Azure Portal
