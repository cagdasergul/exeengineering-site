import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company } from '@/data/site'

const links = [
  { href: '#disciplines', label: 'Disciplines' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#projects', label: 'Projects' },
  { href: '#lifecycle', label: 'Services' },
  { href: '#about', label: 'About' },
]

export function Logo() {
  return (
    <a href="#top" className="block shrink-0" aria-label={`${company.name} home`}>
      {/* Vector logo: served directly (not through the raster image CDN) so it stays sharp at any size. */}
      <img
        src="/logo.svg"
        alt={company.name}
        width={1609}
        height={677}
        className="h-14 w-auto ring-1 ring-white/15 md:h-[72px]"
      />
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 whitespace-nowrap lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Start a project
          </a>
        </nav>
        <button
          className="p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 lg:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 font-medium text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
