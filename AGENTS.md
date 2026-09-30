# AGENTS.md

## Project overview

Single-page marketing site for EXE Engineering (engineering design & consultancy for construction). Built with TanStack Start + React 19 + Tailwind CSS 4, deployed on Netlify.

## Structure

```
src/
  data/site.ts            # ALL site content: company info, disciplines, sectors, lifecycle, stats, img() helper
  components/Header.tsx   # Fixed header with anchor nav + mobile menu; exports <Logo/>
  components/ContactForm.tsx  # Netlify Forms enquiry form (AJAX)
  routes/__root.tsx       # HTML shell, SEO meta, Google Fonts (Archivo, Inter, JetBrains Mono)
  routes/index.tsx        # Home page sections: Hero, Disciplines, Sectors (tabbed), Lifecycle, About, Contact, Footer
  styles.css              # Tailwind theme tokens (ink, paper, amber, steel) and .blueprint grid background
public/
  img/                    # AI-generated sector/hero photography (PNG originals)
  contact-form.html       # Hidden static form so Netlify registers the "contact" form at build time
```

## Conventions & non-obvious decisions

- Content is data-driven: change copy in `src/data/site.ts`, not in components.
- Always reference images via `img(file, width)` which routes through the Netlify Image CDN (`/.netlify/images?...&fm=webp`); never link the full-size PNGs directly.
- The logo is a vector: `public/logo.svg` (letters converted to outlines from Poppins Bold). Reference it directly as `/logo.svg`, not through `img()`, so it is not rasterised.
- Primary focus is FMS automation: its copy lives in `fms` in `src/data/site.ts` and renders as the featured `FmsPanel` at the top of the Disciplines section. It is deliberately not in the header nav.
- The contact form POSTs URL-encoded data to `/contact-form.html` (not `/`) so the SSR function does not intercept it. Any new field must also be added to `public/contact-form.html`.
- Netlify Forms has been enabled for the site via the netlify-forms skill's enable script.
- Design language: dark navy "ink" + warm amber accent, square corners, mono eyebrow labels, blueprint grid on dark sections.
- Navigation uses in-page anchors (`#disciplines`, `#sectors`, `#lifecycle`, `#about`, `#contact`).
