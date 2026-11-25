import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { SKILL_GROUPS } from '../lib/data'

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto w-full px-6 md:px-10 py-24 scroll-mt-16">
      <Reveal>
        <SectionHeader marker="CH.03 // ARSENAL MATRIX" title="Skills & Tooling" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 70} className="frame frame-notch group">
            <div className="frame-header group-hover:text-[#00ff3c] transition-colors duration-150">
              <span>{g.title}</span>
              <span className="text-faint">{g.timecode}</span>
            </div>
            <div className="p-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
