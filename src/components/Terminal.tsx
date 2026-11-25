import { useEffect, useRef, useState } from 'react'
import { IDENTITY, PROJECTS, SKILL_GROUPS, CERTS, SPL_QUERY } from '../lib/data'

interface Line {
  kind: 'in' | 'out' | 'ok' | 'warn' | 'ascii'
  text: string
}

const BANNER = [
  '  ____  _ _   _    _    _',
  ' / ___|(_| \\ | |  / \\  | |',
  ' \\___ \\| |  \\| | / _ \\ | |',
  '  ___) | | |\\  |/ ___ \\| |___',
  ' |____/|_|_| \\_/_/   \\_\\_____|  SEC',
]

const QUICK = ['help', 'whoami', 'skills', 'projects', 'certs', 'contact', 'hire', 'clear']

function outputFor(cmd: string): Line[] {
  const c = cmd.trim().toLowerCase()
  const out = (...lines: string[]): Line[] => lines.map((text) => ({ kind: 'out' as const, text }))
  const ok = (...lines: string[]): Line[] => lines.map((text) => ({ kind: 'ok' as const, text }))

  if (c === 'help')
    return [
      ...out('AVAILABLE COMMANDS:'),
      ...ok(
        '  whoami     operator identity & status',
        '  skills     detection, offensive & scripting arsenal',
        '  projects   deployed lab architecture index',
        '  certs      earned credentials',
        '  contact    reach the operator',
        '  hire       initiate acquisition protocol',
        '  clear      wipe the console',
      ),
    ]
  if (c === 'whoami')
    return [
      ...ok(`OPERATOR : ${IDENTITY.name}`),
      ...out(
        `ROLE     : ${IDENTITY.role} — ${IDENTITY.tagline}`,
        `LOCATION : ${IDENTITY.location}`,
        `STATUS   : ${IDENTITY.status}`,
        `SUMMARY  : ${IDENTITY.summary}`,
      ),
    ]
  if (c === 'skills')
    return SKILL_GROUPS.flatMap((g) => [
      { kind: 'ok' as const, text: `[${g.title}]` },
      { kind: 'out' as const, text: `  ${g.items.join(' · ')}` },
    ])
  if (c === 'projects')
    return PROJECTS.flatMap((p, i) => [
      { kind: 'ok' as const, text: `${String(i + 1).padStart(2, '0')} :: ${p.title}` },
      { kind: 'out' as const, text: `     ${p.tags.join(' | ')}` },
    ])
  if (c === 'certs')
    return CERTS.map((cert) => ({ kind: 'ok' as const, text: `${cert.no} ${cert.title} — ${cert.issuer}` }))
  if (c === 'contact')
    return [
      ...ok('CHANNELS OPEN:'),
      ...out(`  github : ${IDENTITY.github}`, `  region : ${IDENTITY.location}`, `  status : ${IDENTITY.status}`),
    ]
  if (c === 'hire' || c === 'sudo hire sinan' || c === 'sudo hire me')
    return [
      ...ok('[ACCESS GRANTED] acquisition protocol engaged.'),
      ...out(
        '  › operator meets all baseline requirements',
        '  › 100+ labs verified · SIEM pipeline validated',
        '  › recommend: schedule technical interview immediately',
        '  › contact channel: github.com/muhammedsinanrp',
      ),
    ]
  if (c === 'ls') return out('about/  skills/  projects/  certs/  contact/  flag.txt')
  if (c === 'cat flag.txt' || c === 'cat flag')
    return out('flag{sinan_is_ready_for_the_soc} — nice try, blue team wins this round.')
  if (c === 'sudo rm -rf /' || c === 'rm -rf /')
    return [{ kind: 'warn' as const, text: 'nice try. this filesystem is hardened.' }]
  if (c === 'nmap' || c.startsWith('nmap '))
    return [
      ...out('Starting Nmap 7.94 ( https://nmap.org )'),
      ...ok('  22/tcp   open  ssh      OpenSSH 8.9'),
      ...ok('  443/tcp  open  https    nginx (hardened)'),
      ...out('Nmap done: skill level detected = HIGH.'),
    ]
  if (c.startsWith('spl ') || c.startsWith('search '))
    return [
      ...out(`Query: ${SPL_QUERY}`),
      ...ok('  src_ip        count', '  185.220.xx.xx  1,204', '  10.0.0.44      642'),
      ...out('2 results returned in 0.14s — threats contained.'),
    ]
  if (c === 'exit' || c === 'logout') return out('there is no exit. the SOC never sleeps.')
  if (c === '')
    return []
  return [{ kind: 'warn' as const, text: `command not found: ${c} — type 'help'` }]
}

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    { kind: 'ascii', text: BANNER.join('\n') },
    { kind: 'out', text: '[CYBER-OS v4.2.0-SECURED] Terminal ready. Type help or click quick commands below.' },
  ])
  const [input, setInput] = useState('')
  const [cmdIndex, setCmdIndex] = useState(-1)
  const cmdCache = useRef<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history])

  const run = (cmd: string) => {
    const lines: Line[] = [{ kind: 'in', text: cmd }]
    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([{ kind: 'out', text: '[console wiped] type help to continue.' }])
      return
    }
    lines.push(...outputFor(cmd))
    setHistory((h) => [...h, ...lines])
    cmdCache.current.push(cmd)
    setCmdIndex(-1)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = cmdIndex < 0 ? cmdCache.current.length - 1 : Math.max(0, cmdIndex - 1)
      if (cmdCache.current[next] !== undefined) {
        setCmdIndex(next)
        setInput(cmdCache.current[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (cmdIndex < 0) return
      const next = cmdIndex + 1
      if (next >= cmdCache.current.length) {
        setCmdIndex(-1)
        setInput('')
      } else {
        setCmdIndex(next)
        setInput(cmdCache.current[next])
      }
    }
  }

  return (
    <div className="frame frame-notch overflow-hidden relative">
      <div className="frame-header">
        <span>sinan@sec : interactive shell</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff3355]" />
          <span className="inline-block w-2 h-2 rounded-full bg-[#ffaa00]" />
          <span className="inline-block w-2 h-2 rounded-full bg-[#00f48e]" />
        </span>
      </div>

      {/* scanline shimmer inside terminal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 h-10"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(0,244,142,0.05), transparent)',
          animation: 'scan-y 5s linear infinite',
        }}
      />

      <div
        ref={scrollRef}
        className="font-terminal h-[380px] md:h-[440px] overflow-y-auto p-5 text-[13px] leading-6"
        onClick={() => inputRef.current?.focus()}
        role="log"
        aria-label="Terminal output"
      >
        {history.map((l, i) => {
          if (l.kind === 'in')
            return (
              <div key={i} className="mt-2">
                <span className="text-faint">sinan@sec:~$ </span>
                <span className="text-[#00ff3c]">{l.text}</span>
              </div>
            )
          if (l.kind === 'ascii')
            return (
              <pre key={i} className="text-[#00f48e] glow text-[10px] md:text-[11px] leading-[1.2] mb-3 whitespace-pre overflow-x-auto">
                {l.text}
              </pre>
            )
          return (
            <div
              key={i}
              className={
                l.kind === 'ok' ? 'text-[#00f48e]' : l.kind === 'warn' ? 'text-[#ffaa00]' : 'text-dim'
              }
            >
              {l.text}
            </div>
          )
        })}
        <div className="flex items-center mt-1">
          <span className="text-faint shrink-0">sinan@sec:~$ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="bg-transparent border-none outline-none focus-visible:outline-none ml-2 text-[#00ff3c] font-terminal max-w-full"
            style={{ width: `${input.length + 1}ch`, caretColor: '#00f48e' }}
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="blink text-[#00f48e]">▊</span>
        </div>
      </div>

      <div className="border-t border-[rgba(0,244,142,0.14)] px-4 py-3 flex flex-wrap gap-2">
        {QUICK.map((q) => (
          <button key={q} onClick={() => run(q)} className="chip cursor-pointer">
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
