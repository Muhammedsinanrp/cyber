import { useEffect, useRef } from 'react'

interface Blip {
  x: number
  y: number
  born: number
}

/**
 * Sweeping radar canvas with fading contact blips — decorative, aria-hidden.
 */
export default function RadarCanvas({ size = 340 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const r = size / 2 - 8
    const blips: Blip[] = []
    let sweep = 0
    let raf = 0

    // seeded pseudo-random blips
    const seedBlips = [
      { a: 0.6, d: 0.55 },
      { a: 2.1, d: 0.8 },
      { a: 3.4, d: 0.35 },
      { a: 4.6, d: 0.7 },
      { a: 5.5, d: 0.9 },
    ]

    const spawnBlip = (a: number, d: number) => {
      blips.push({
        x: cx + Math.cos(a) * r * d,
        y: cy + Math.sin(a) * r * d,
        born: performance.now(),
      })
      if (blips.length > 24) blips.shift()
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, size, size)

      // rings + cross
      ctx.strokeStyle = 'rgba(0,244,142,0.22)'
      ctx.lineWidth = 1
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath()
        ctx.arc(cx, cy, (r / 3) * i, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(cx - r, cy)
      ctx.lineTo(cx + r, cy)
      ctx.moveTo(cx, cy - r)
      ctx.lineTo(cx, cy + r)
      ctx.stroke()

      // sweep trail
      const grad = ctx.createConicGradient ? ctx.createConicGradient(sweep, cx, cy) : null
      if (grad) {
        grad.addColorStop(0, 'rgba(0,255,60,0.35)')
        grad.addColorStop(0.12, 'rgba(0,244,142,0.08)')
        grad.addColorStop(0.25, 'rgba(0,244,142,0)')
        grad.addColorStop(1, 'rgba(0,244,142,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }

      // sweep line
      ctx.strokeStyle = 'rgba(0,255,60,0.9)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(cx + Math.cos(sweep) * r, cy + Math.sin(sweep) * r)
      ctx.stroke()

      // blips with fade
      const now = t
      for (let i = blips.length - 1; i >= 0; i--) {
        const b = blips[i]
        const age = (now - b.born) / 5000
        if (age >= 1) {
          blips.splice(i, 1)
          continue
        }
        const alpha = age < 0.15 ? age / 0.15 : 1 - (age - 0.15) / 0.85
        ctx.fillStyle = `rgba(0,255,60,${alpha * 0.9})`
        ctx.beginPath()
        ctx.arc(b.x, b.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // center dot
      ctx.fillStyle = 'rgba(0,244,142,1)'
      ctx.beginPath()
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2)
      ctx.fill()
    }

    if (reduced) {
      // static render: sweep at fixed angle, all blips visible
      sweep = -Math.PI / 3
      seedBlips.forEach((s) => spawnBlip(s.a, s.d))
      blips.forEach((b) => (b.born = performance.now() - 1000))
      draw(performance.now())
      return
    }

    let lastSpawn = 0
    const tick = (t: number) => {
      sweep += 0.018
      if (t - lastSpawn > 1400) {
        lastSpawn = t
        const s = seedBlips[Math.floor(Math.random() * seedBlips.length)]
        spawnBlip(s.a + (Math.random() - 0.5) * 0.4, Math.min(s.d + (Math.random() - 0.5) * 0.2, 0.95))
      }
      draw(t)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={canvasRef} style={{ width: size, height: size }} aria-hidden="true" />
}
