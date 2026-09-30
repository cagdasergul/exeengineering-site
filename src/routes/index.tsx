import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import Header, { Logo } from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import { company, disciplines, fms, img, lifecycle, projects, sectors, stats } from '@/data/site'

export const Route = createFileRoute('/')({
  component: Home,
})

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] ${
        dark ? 'text-amber' : 'text-amber-dark'
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}

function Home() {
  return (
    <div id="top">
      <Header />
      <Hero />
      <Disciplines />
      <Sectors />
      <Projects />
      <Lifecycle />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-white">
      <img
        src={img('hero.png', 1920)}
        srcSet={`${img('hero.png', 960)} 960w, ${img('hero.png', 1920)} 1920w`}
        sizes="100vw"
        alt="Engineers reviewing drawings on a large construction site at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
        <Eyebrow dark>Engineering design & consultancy</Eyebrow>
        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          {company.tagline.replace('built.', '')}
          <span className="text-amber">built.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {company.name} is a premier multidisciplinary firm specializing in seamless, end-to-end project
          delivery. We unite electrical, mechanical, HVAC, piping, automation, and architectural design under
          one strategic vision. By taking full ownership of the project lifecycle—from initial concept to final
          handover—we ensure uncompromising quality, precision, and fully integrated engineering solutions.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-amber px-7 py-4 font-semibold text-ink transition-colors hover:bg-white"
          >
            Discuss your project
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#sectors"
            className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:border-amber hover:text-amber"
          >
            Explore our sectors
          </a>
        </div>
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 font-mono text-xs uppercase tracking-widest text-white/60">
          {sectors.map((s) => (
            <span key={s.id}>{s.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured discipline: takes the full width of the Disciplines section.
function FmsPanel() {
  return (
    <div className="blueprint mt-16 bg-ink p-8 text-white md:p-14">
      <div>
        <Eyebrow dark>Primary discipline</Eyebrow>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{fms.title}</h2>
            <p className="mt-4 font-display text-2xl font-semibold text-amber">{fms.headline}</p>
          </div>
          <p className="text-lg leading-relaxed text-white/75">{fms.text}</p>
        </div>

        <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-3">
          {fms.integrations.map((i) => (
            <li key={i.code} className="bg-ink-2 p-8">
              <span className="font-mono text-2xl font-medium text-amber">{i.code}</span>
              <p className="mt-3 text-white/80">{i.name}</p>
            </li>
          ))}
        </ul>

        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {fms.outcomes.map((o, idx) => (
            <li key={o.name} className="relative border-t-2 border-white/30 pt-6">
              <span className="absolute -top-[5px] left-0 h-2 w-2 bg-amber" />
              <span className="font-mono text-sm text-amber">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{o.name}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{o.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 border-l-2 border-amber bg-white/5 p-6 text-lg leading-relaxed text-white/90">
          {fms.scalability}
        </p>
      </div>
    </div>
  )
}

function Disciplines() {
  return (
    <section id="disciplines" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>Disciplines</Eyebrow>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Every system, one coordinated team.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/70">
            Our engineers work side by side across disciplines, so interfaces are resolved in design — not
            discovered on site.
          </p>
        </div>
        <FmsPanel />
        <div className="mt-6 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d) => (
            <article
              key={d.code}
              className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-medium text-amber-dark group-hover:text-amber">
                  {d.code}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                />
              </div>
              <h3 className="mt-10 font-display text-2xl font-bold">{d.name}</h3>
              <p className="mt-3 leading-relaxed text-ink/70 group-hover:text-white/70">{d.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {d.scope.map((s) => (
                  <li
                    key={s}
                    className="border border-ink/15 px-2.5 py-1 text-xs font-medium text-ink/70 group-hover:border-white/20 group-hover:text-white/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sectors() {
  const [active, setActive] = useState(sectors[0].id)
  const sector = sectors.find((s) => s.id === active) ?? sectors[0]

  return (
    <section id="sectors" className="blueprint scroll-mt-16 bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow dark>Sectors</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          Experience where complexity is the norm.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="Sectors" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0">
            {sectors.map((s, i) => {
              const selected = s.id === active
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(s.id)}
                  className={`flex shrink-0 items-center gap-4 border-l-2 px-5 py-4 text-left transition-colors lg:py-5 ${
                    selected
                      ? 'border-amber bg-white/5 text-white'
                      : 'border-white/10 text-white/50 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg font-semibold">{s.name}</span>
                </button>
              )
            })}
          </div>

          <div key={sector.id} className="grid overflow-hidden bg-ink-2 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={img(sector.image, 900)}
                alt={sector.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-amber">{sector.name}</p>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight">{sector.headline}</h3>
              <p className="mt-4 leading-relaxed text-white/70">{sector.description}</p>
              <ul className="mt-8 grid gap-3">
                {sector.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="h-1.5 w-1.5 bg-amber" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>Projects</Eyebrow>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Completed and ongoing projects.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink/70">
            A selection of the projects we have delivered and are currently delivering.
          </p>
        </div>
        <ul className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li
              key={p.name}
              className="group bg-paper p-8 transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              <span className="font-mono text-sm font-medium text-amber-dark group-hover:text-amber">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/50 group-hover:text-white/60">
                {p.sector}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Lifecycle() {
  return (
    <section id="lifecycle" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>Services across the lifecycle</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            From the first sketch to the final handover.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Our team has designed, built and managed projects through every stage. Engage us for a single phase
            or as your partner from start to finish.
          </p>
        </div>
        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {lifecycle.map((l) => (
            <li key={l.step} className="relative border-t-2 border-ink pt-6">
              <span className="absolute -top-[5px] left-0 h-2 w-2 bg-amber" />
              <span className="font-mono text-sm text-amber-dark">{l.step}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{l.name}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{l.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={img('datacenter.png', 900)}
            alt="Data center hall with server racks and cooling pipework"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden bg-amber p-6 font-display text-ink md:block">
            <p className="text-4xl font-extrabold">Design → Build</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest">One accountable team</p>
          </div>
        </div>
        <div>
          <Eyebrow>About {company.name}</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Engineers who have stood on site.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Our people have designed, constructed and managed railway, metro, airport, data center, life science
            and retail projects. That hands-on experience shapes every drawing we issue: buildable details,
            realistic programmes and systems that are easy to operate.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            We integrate architecture with electrical, mechanical, HVAC, piping and automation engineering —
            giving clients a single point of responsibility across the whole project.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Our primary focus is Facility Management System (FMS) automation, and we are scalable at any
            moment: with our partner, we grow the team to match your project.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px bg-ink/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="font-mono text-xs uppercase tracking-widest text-ink/50">{s.label}</dt>
                <dd className="mt-2 font-display text-4xl font-extrabold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="blueprint scroll-mt-16 bg-ink py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow dark>Contact</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let’s engineer your next project.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Share a few details about your project and the stage it’s at. An engineer — not a salesperson — will
            reply.
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-10 inline-flex items-center gap-4 border border-white/15 p-5 transition-colors hover:border-amber"
          >
            <span className="grid h-11 w-11 place-items-center bg-amber text-ink">
              <Mail size={20} />
            </span>
            <span>
              <span className="block font-mono text-xs uppercase tracking-widest text-white/50">Email us</span>
              <span className="font-display text-lg font-semibold">{company.email}</span>
            </span>
          </a>
        </div>
        <div className="text-ink">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <Logo />
        <p className="text-sm">
          Electrical · Mechanical · HVAC · Piping · Automation · Architecture
        </p>
        <p className="text-sm">© {new Date().getFullYear()} {company.name}</p>
      </div>
    </footer>
  )
}
