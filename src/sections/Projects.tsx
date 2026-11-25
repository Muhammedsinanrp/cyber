import { Crosshair } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { PROJECTS } from '../lib/data'

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto w-full px-6 md:px-10 py-24 scroll-mt-16">
      <Reveal>
        <SectionHeader marker="CH.04 // DEPLOYED LAB ARCHITECTURE" title="Projects" sub="8 builds · simulated & production-grade" />
      </Reveal>

      <div className="border-t border-[rgba(0,244,142,0.14)]">
        {PROJECTS.map((p, i) => (
          <Reveal as="article" key={p.id} delay={Math.min(i * 40, 160)}>
            <div className="group grid lg:grid-cols-[180px_1fr] gap-5 lg:gap-8 py-8 md:py-10 border-b border-[rgba(0,244,142,0.14)] hover:bg-[rgba(0,244,142,0.025)] transition-colors duration-200 px-2 md:px-4">
              {/* left: timecode + category */}
              <div className="font-terminal">
                <div className="text-faint text-[11px] tracking-[0.2em]">{p.timecode}</div>
                <div className="text-[#ffaa00] text-[10px] tracking-[0.25em] mt-2 uppercase">{p.category}</div>
                <div className="text-faint text-[10px] tracking-[0.25em] mt-1 uppercase flex items-center gap-1.5">
                  <Crosshair size={10} strokeWidth={1.5} /> {p.env}
                </div>
              </div>

              {/* right: content */}
              <div>
                <h3 className="font-terminal text-lg md:text-2xl font-bold tracking-wide text-[#00f48e] group-hover:text-[#00ff3c] group-hover:glow transition-all duration-200 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] leading-[1.8] text-dim max-w-3xl">{p.desc}</p>

                {/* stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 max-w-xl">
                  {p.stats.map((s) => (
                    <div key={s.label} className="border border-[rgba(0,244,142,0.12)] px-3 py-2.5">
                      <div className="font-terminal text-sm md:text-base font-bold text-[#00f48e] glow truncate">{s.value}</div>
                      <div className="font-terminal text-[9px] tracking-[0.18em] text-faint uppercase mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
