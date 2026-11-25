import { ArrowUp, Github } from 'lucide-react'
import { DOMAINS, IDENTITY } from '../lib/data'

export default function Footer() {
  const items = [...DOMAINS, ...DOMAINS]
  return (
    <footer className="relative border-t border-[rgba(0,244,142,0.14)]">
      {/* marquee divider */}
      <div className="overflow-hidden border-b border-[rgba(0,244,142,0.1)] py-3" aria-hidden="true">
        <div className="marquee-track font-terminal text-[11px] tracking-[0.35em] text-faint uppercase">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0">
              {items.map((d, i) => (
                <span key={`${half}-${i}`} className="mx-6 flex items-center gap-6">
                  {d} <span className="text-[#00f48e]">//</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-terminal text-[11px] tracking-[0.2em] text-faint uppercase text-center md:text-left">
          <div className="text-[#00f48e] glow mb-1">{IDENTITY.handle}:~$</div>
          <div>
            © 2026 {IDENTITY.name} — all packets monitored
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-[#5da583] hover:text-[#00ff3c] transition-colors duration-150"
          >
            <Github size={17} strokeWidth={1.5} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-crt btn-crt-ghost !px-4 !py-2.5"
            aria-label="Back to top"
          >
            <ArrowUp size={14} strokeWidth={1.5} /> REWIND
          </button>
        </div>
      </div>
    </footer>
  )
}
