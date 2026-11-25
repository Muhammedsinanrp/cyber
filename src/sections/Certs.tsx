import { Award, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { CERTS, EDUCATION, IDENTITY } from '../lib/data'

export default function Certs() {
  return (
    <section id="certs" className="relative max-w-6xl mx-auto w-full px-6 md:px-10 py-24 scroll-mt-16">
      <Reveal>
        <SectionHeader marker="CH.05 // CREDENTIAL VAULT" title="Certifications" />
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {CERTS.map((c, i) => (
          <Reveal key={c.no} delay={i * 90} className="frame frame-notch p-6 md:p-7 flex flex-col group hover:border-[rgba(0,244,142,0.4)] transition-colors duration-200">
            <div className="flex items-center justify-between mb-5">
              <span className="font-terminal text-faint text-lg">{c.no}</span>
              <Award size={18} strokeWidth={1.5} className="text-[#00f48e] group-hover:text-[#00ff3c] transition-colors duration-200" />
            </div>
            <h3 className="font-terminal text-base md:text-lg font-bold tracking-wide text-[#00f48e] leading-snug">
              {c.title}
            </h3>
            <div className="font-terminal text-[10px] tracking-[0.3em] text-[#ffaa00] uppercase mt-2">{c.issuer}</div>
            <p className="mt-4 text-[13px] leading-[1.75] text-dim flex-1">{c.desc}</p>
          </Reveal>
        ))}
      </div>

      {/* education */}
      <Reveal delay={120} className="mt-6">
        <div className="frame frame-notch p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 md:w-64 shrink-0">
            <GraduationCap size={20} strokeWidth={1.5} className="text-[#00f48e]" />
            <div>
              <div className="font-terminal text-[10px] tracking-[0.3em] text-faint uppercase">Education</div>
              <div className="font-terminal text-sm font-bold text-[#00f48e]">{EDUCATION.school}</div>
            </div>
          </div>
          <div className="font-terminal text-[13px] text-dim md:ml-auto flex flex-col md:items-end gap-1">
            <span>{EDUCATION.degree}</span>
            <span className="text-[#ffaa00] text-[11px] tracking-[0.2em]">{EDUCATION.period}</span>
          </div>
        </div>
      </Reveal>

      {/* contact */}
      <div id="contact" className="mt-24 scroll-mt-24">
        <Reveal>
          <SectionHeader marker="CH.06 // OPEN CHANNEL" title="Initiate Contact" />
        </Reveal>
        <Reveal delay={100} className="frame frame-notch relative overflow-hidden">
          <div className="p-8 md:p-14 text-center relative">
            <div className="font-terminal text-[11px] tracking-[0.35em] text-faint uppercase mb-4">
              // transmission ready
            </div>
            <h3 className="font-terminal text-2xl md:text-4xl font-bold tracking-[0.08em] text-[#00f48e] glow-strong uppercase leading-tight">
              Ready to deploy into
              <br />
              your SOC<span className="text-[#00ff3c]">.</span>
            </h3>
            <p className="mt-5 max-w-xl mx-auto text-[14px] md:text-[15px] leading-relaxed text-dim">
              {IDENTITY.status} — open to SOC Analyst and Junior Penetration Tester roles, blue or red team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="btn-crt" href={IDENTITY.github} target="_blank" rel="noreferrer">
                ▸ OPEN SECURE CHANNEL (GITHUB)
              </a>
              <button className="btn-crt btn-crt-ghost" onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}>
                RUN ./hire
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
