# EXE Engineering — Company Website

Marketing website for **EXE Engineering**, a multidisciplinary engineering design and consultancy firm serving the construction industry. The site presents the company's disciplines (electrical, mechanical, HVAC, piping, automation, architecture), its sectors (railway & metro, airports, data centers, life science & pharma, retail), its services across the full project lifecycle, and a project enquiry form.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router) on Vite 7
- Tailwind CSS 4
- Netlify Forms for project enquiries (view submissions in the Netlify UI → Forms)
- Netlify Image CDN for responsive WebP delivery of site imagery (`/public/img`)

## Running locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

Netlify Forms submissions only work on a deployed site (deploy previews included), not in local dev.

## Editing content

All copy — company name, email, disciplines, sectors, lifecycle services and stats — lives in `src/data/site.ts`. Update the placeholder enquiries email (`info@exe-engineering.com`) there.

## Possible next steps

- Case-study pages for flagship projects
- Team / leadership page and careers
- Client logos and testimonials
