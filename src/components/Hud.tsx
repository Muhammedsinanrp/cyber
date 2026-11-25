import { useEffect, useState } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { IDENTITY } from '../lib/data'

const NAV = [
  { id: 'home', label: 'HOME' },
  { id: 'terminal', label: 'TERMINAL' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certs', label: 'CERTS' },
  { id: 'contact', label: 'CONTACT' },
]

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const iv = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(iv)
  }, [])
  return now
}

function fmt(d: Date) {
  return d.toLocaleTimeString('en-GB', { hour12: false })
}

export default function Hud() {
  const now = useClock()
  const [session, setSession] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const iv = setInterval(() => setSession((s) => s + 1), 1000)
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const mm = String(Math.floor(session / 60)).padStart(2, '0')
  const ss = String(session % 60).padStart(2, '0')

  return (
    <>
      {/* top-left: identity + clock */}
      <div className="fixed top-0 left-0 z-[70] p-4 md:p-5">
        <button
          onClick={() => scrollTo('home')}
          className="font-terminal text-xs md:text-sm tracking-[0.2em] text-[#00f48e] glow uppercase text-left"
        >
          {IDENTITY.handle}
          <span className="text-faint">:~$</span>
        </button>
        <div className="font-terminal text-[10px] tracking-[0.15em] text-[#2c5741] mt-1">
          {fmt(now)} <span className="text-[#5da583]">IST</span>
        </div>
      </div>

      {/* top-right: nav */}
      <nav className="fixed top-0 right-0 z-[70] p-4 md:p-5 hidden md:block" aria-label="Primary">
        <ul className="flex items-center gap-5 font-terminal text-[11px] tracking-[0.2em]">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollTo(n.id)}
                className="text-[#5da583] hover:text-[#00ff3c] transition-colors duration-150 uppercase"
              >
                /{n.label.toLowerCase()}
              </button>
            </li>
          ))}
          <li>
            <a
              href={IDENTITY.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex text-[#5da583] hover:text-[#00ff3c] transition-colors duration-150"
            >
              <Github size={15} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      </nav>

      {/* mobile menu button */}
      <button
        className="fixed top-4 right-4 z-[72] md:hidden text-[#00f48e] p-2"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {/* mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[71] bg-black flex flex-col items-center justify-center gap-6">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="font-terminal text-2xl tracking-[0.25em] text-[#00f48e] glow uppercase hero-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {n.label}
            </button>
          ))}
          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-terminal text-sm tracking-[0.2em] text-[#5da583]"
          >
            <Github size={16} strokeWidth={1.5} /> GITHUB
          </a>
        </div>
      )}

      {/* bottom-left: REC */}
      <div className="fixed bottom-0 left-0 z-[70] p-4 md:p-5 font-terminal text-[10px] tracking-[0.2em] text-[#5da583] flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#ff3355]" style={{ boxShadow: '0 0 8px rgba(255,51,85,0.8)', animation: 'blink 1.6s steps(2,start) infinite' }} />
        REC · SOC FEED LIVE
      </div>

      {/* bottom-right: session uptime */}
      <div className="fixed bottom-0 right-0 z-[70] p-4 md:p-5 font-terminal text-[10px] tracking-[0.2em] text-[#2c5741]">
        SESSION {mm}:{ss} · <span className="text-[#5da583]">SIEM: ONLINE</span>
      </div>
    </>
  )
}
