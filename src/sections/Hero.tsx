import { ArrowDown, Github, MapPin, ShieldCheck } from 'lucide-react'
import RadarCanvas from '../components/RadarCanvas'
import { IDENTITY, DOMAINS, STATS } from '../lib/data'

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,244,142,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,244,142,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10 pt-32 md:pt-36 pb-28 md:pb-16 grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center min-h-[100dvh]">
        <div>
          <div className="hero-in font-terminal text-[11px] tracking-[0.35em] text-dim uppercase mb-5 flex items-center gap-3" style={{ animationDelay: '0.1s' }}>
            <ShieldCheck size={14} strokeWidth={1.5} className="text-[#00f48e]" />
            {IDENTITY.tagline}
          </div>

          <h1 className="hero-jitter font-terminal font-extrabold uppercase leading-[0.9] tracking-tight text-[#00f48e] glow-strong text-[clamp(2.6rem,9vw,6.5rem)]">
            Muhammed
            <br />
            Sinan
            <span className="text-[#00ff3c]"> R P</span>
          </h1>

          <div className="hero-in mt-5 font-terminal text-sm md:text-base tracking-[0.3em] text-[#00ff3c] uppercase" style={{ animationDelay: '0.5s' }}>
            &gt; {IDENTITY.role}
            <span className="blink">_</span>
          </div>

          <p className="hero-in mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-dim" style={{ animationDelay: '0.65s' }}>
            {IDENTITY.summary}
          </p>

          <div className="hero-in mt-6 flex flex-wrap gap-2" style={{ animationDelay: '0.8s' }}>
            {DOMAINS.map((d) => (
              <span key={d} className="chip">
                {d}
              </span>
            ))}
          </div>

          <div className="hero-in mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.95s' }}>
            <button className="btn-crt" onClick={() => scrollTo('projects')}>
              ▸ VIEW DEPLOYED LABS
            </button>
            <a
              className="btn-crt btn-crt-ghost"
              href={IDENTITY.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} strokeWidth={1.5} /> GITHUB
            </a>
          </div>

          <div className="hero-in mt-8 font-terminal text-[11px] tracking-[0.2em] text-faint uppercase flex items-center gap-2" style={{ animationDelay: '1.1s' }}>
            <MapPin size={12} strokeWidth={1.5} />
            {IDENTITY.location} · {IDENTITY.status}
          </div>
        </div>

        {/* radar column */}
        <div className="hidden lg:flex flex-col items-center gap-3 hero-in" style={{ animationDelay: '0.7s' }}>
          <RadarCanvas size={360} />
          <div className="font-terminal text-[10px] tracking-[0.35em] text-faint uppercase">
            RADAR SWEEP: 360° ACTIVE
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative border-t border-[rgba(0,244,142,0.14)]">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-10 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="hero-in py-6 md:py-8 flex flex-col items-start gap-1 border-l border-[rgba(0,244,142,0.1)] first:border-l-0 pl-4 md:pl-8"
              style={{ animationDelay: `${1.1 + i * 0.1}s` }}
            >
              <span className="font-terminal text-3xl md:text-4xl font-bold text-[#00f48e] glow">{s.value}</span>
              <span className="font-terminal text-[10px] tracking-[0.25em] text-[#00ff3c] uppercase">{s.label}</span>
              <span className="font-terminal text-[10px] tracking-[0.15em] text-faint uppercase">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-40 md:bottom-48 left-1/2 -translate-x-1/2 text-[#5da583] hover:text-[#00ff3c] transition-colors"
      >
        <ArrowDown size={18} strokeWidth={1.5} className="animate-bounce" />
      </button>
    </section>
  )
}
