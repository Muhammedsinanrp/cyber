import { useEffect, useRef, useState } from 'react'

const BOOT_LINES = [
  'SINAN-OS v4.2.0 [SECURED] — boot sequence initiated',
  'mounting /dev/portfolio .......... OK',
  'loading threat_intel.module ..... 100%',
  'verifying operator identity ....... SINAN.RP',
  'all systems nominal. access granted.',
]

interface BootProps {
  onDone: () => void
}

export default function Boot({ onDone }: BootProps) {
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const stateRef = useRef({ line: 0, char: 0, acc: '' })
  const timers = useRef<ReturnType<typeof setInterval>[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setLines(BOOT_LINES)
      setProgress(100)
      setReady(true)
      return
    }

    const iv = setInterval(() => {
      const s = stateRef.current
      if (s.line >= BOOT_LINES.length) {
        clearInterval(iv)
        setReady(true)
        return
      }
      const target = BOOT_LINES[s.line]
      s.acc += target[s.char] ?? ''
      s.char += 1
      setLines([...BOOT_LINES.slice(0, s.line), s.acc])
      if (s.char >= target.length) {
        s.line += 1
        s.char = 0
        s.acc = ''
      }
    }, 18)
    timers.current.push(iv)

    const pv = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 9 + 3
        return next >= 100 ? 100 : next
      })
    }, 120)
    timers.current.push(pv)

    return () => timers.current.forEach(clearInterval)
  }, [])

  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black px-6">
      <div className="w-full max-w-xl">
        <div className="frame frame-notch">
          <div className="frame-header">
            <span>SINAN-OS :: SECURE BOOT</span>
            <span className="text-faint">{Math.floor(progress)}%</span>
          </div>
          <div className="font-terminal p-5 text-[13px] leading-7 text-[#00f48e] min-h-[190px]">
            {lines.map((l, i) => (
              <div key={i} className="glow">
                <span className="text-faint">&gt; </span>
                {l}
              </div>
            ))}
            {!ready && <span className="blink">▊</span>}
          </div>
          <div className="h-[3px] w-full bg-[#03140b]">
            <div
              className="h-full bg-[#00f48e] transition-[width] duration-150"
              style={{ width: `${progress}%`, boxShadow: '0 0 12px rgba(0,244,142,0.6)' }}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          {ready ? (
            <button className="btn-crt hero-in" onClick={onDone} autoFocus>
              ▸ LAUNCH INTERFACE
            </button>
          ) : (
            <span className="font-terminal text-xs tracking-[0.3em] text-[#2c5741] uppercase">
              establishing secure channel...
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
