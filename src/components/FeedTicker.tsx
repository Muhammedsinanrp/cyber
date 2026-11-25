import { useEffect, useState } from 'react'
import { FEED_LINES } from '../lib/data'

const LEVEL_COLOR: Record<string, string> = {
  WARN: 'text-[#ffaa00]',
  CRIT: 'text-[#ff3355]',
  INFO: 'text-[#00f48e]',
}

/**
 * Live rotating SOC telemetry feed — one line types out, holds, then rotates.
 */
export default function FeedTicker() {
  const [index, setIndex] = useState(0)
  const [chars, setChars] = useState(0)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const line = FEED_LINES[index]
    if (reduced) {
      setChars(line.text.length)
      return
    }
    if (chars < line.text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 14)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % FEED_LINES.length)
      setChars(0)
    }, 2600)
    return () => clearTimeout(t)
  }, [index, chars, reduced])

  const line = FEED_LINES[index]

  return (
    <div className="frame frame-notch">
      <div className="frame-header">
        <span>LIVE PACKET & SIEM TELEMETRY STREAM</span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff3c]"
            style={{ boxShadow: '0 0 8px rgba(0,255,60,0.9)', animation: 'blink 1.4s steps(2,start) infinite' }}
          />
          STREAMING
        </span>
      </div>
      <div className="font-terminal px-5 py-4 text-[12px] md:text-[13px] leading-6 min-h-[52px]">
        <span className="text-faint">[{line.ts}]</span>{' '}
        <span className={LEVEL_COLOR[line.level]}>[{line.level}]</span>{' '}
        <span className="text-dim">{line.source}:</span>{' '}
        <span className="text-[#b9ffd9]">{line.text.slice(0, chars)}</span>
        <span className="blink text-[#00f48e]">▊</span>
      </div>
    </div>
  )
}
