import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Terminal from '../components/Terminal'
import FeedTicker from '../components/FeedTicker'
import { IDENTITY } from '../lib/data'

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto w-full px-6 md:px-10 py-24">
      <Reveal>
        <SectionHeader marker="CH.01 // EXECUTIVE SUMMARY" title="Operator Profile" />
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal className="frame frame-notch p-6 md:p-8">
          <p className="text-[15px] md:text-base leading-[1.8] text-dim">
            Practical experience gained through extensive{' '}
            <strong className="text-[#00f48e] font-medium">TryHackMe (100+ labs)</strong> and{' '}
            <strong className="text-[#00f48e] font-medium">Hack The Box</strong> labs covering Active Directory,
            Windows/Linux security, web application security, digital forensics, threat hunting, and the{' '}
            <strong className="text-[#00f48e] font-medium">MITRE ATT&CK</strong> framework. Proficient with Splunk,
            Microsoft Sentinel, ELK Stack, Wireshark, Nmap, Nessus, Burp Suite, Python, Bash, and PowerShell
            fundamentals.
          </p>

          <div className="mt-6 border-l-2 border-[rgba(0,244,142,0.4)] pl-5">
            <div className="font-terminal text-[10px] tracking-[0.3em] text-faint uppercase mb-2">Target Objective</div>
            <p className="text-[15px] leading-relaxed text-[#b9ffd9]">
              "To land an entry-level role as a <strong className="text-[#00ff3c]">SOC Analyst</strong> or{' '}
              <strong className="text-[#00ff3c]">Junior Penetration Tester</strong> where I can contribute
              immediately while continuing to grow."
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Immediate Availability', 'Blue & Red Team Mindset', 'Continuous Learner'].map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="frame frame-notch p-6 md:p-8">
            <div className="font-terminal text-[10px] tracking-[0.3em] text-faint uppercase mb-4">
              // deployment readiness
            </div>
            <ul className="space-y-3 font-terminal text-[13px] leading-6">
              {[
                ['SOC LEVEL 1', 'READY'],
                ['SIEM ACTIVE', 'SPLUNK / WAZUH'],
                ['EDR COVERAGE', 'DEFENDER 100%'],
                ['CERTS', 'CEH & CPT'],
                ['LAB TIME', 'TRYHACKME · HTB'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between gap-4 border-b border-[rgba(0,244,142,0.08)] pb-2">
                  <span className="text-dim">{k}</span>
                  <span className="text-[#00ff3c] glow flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-[#00ff3c]" style={{ boxShadow: '0 0 6px rgba(0,255,60,0.8)' }} />
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="frame frame-notch p-6 md:p-8">
            <div className="font-terminal text-[10px] tracking-[0.3em] text-faint uppercase mb-4">// operator note</div>
            <p className="text-[14px] leading-[1.8] text-dim">
              Ready to deploy technical rigor and disciplined incident triage into high-impact security operations
              centers and red teams — <span className="text-[#00f48e]">{IDENTITY.location.split(',')[1]?.trim()}</span>{' '}
              based, remote-ready.
            </p>
          </div>
        </Reveal>
      </div>

      {/* live telemetry */}
      <Reveal delay={150} className="mt-6">
        <FeedTicker />
      </Reveal>

      {/* interactive terminal */}
      <div id="terminal" className="mt-16 scroll-mt-24">
        <Reveal>
          <SectionHeader marker="CH.02 // INTERACTIVE SHELL" title="SOC Terminal" sub="try: whoami · skills · hire · nmap" />
        </Reveal>
        <Reveal delay={100}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  )
}
