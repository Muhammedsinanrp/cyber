export default function CrtOverlay() {
  return (
    <>
      <div className="crt-layer crt-vignette" aria-hidden="true" />
      <div className="crt-layer crt-tracking" aria-hidden="true" />
      <div className="crt-layer crt-noise" aria-hidden="true" />
      <div className="crt-layer crt-noise-band" aria-hidden="true" />
      <div className="crt-layer glitch-band glitch-band-1" aria-hidden="true" />
      <div className="crt-layer glitch-band glitch-band-2" aria-hidden="true" />
      <div className="crt-layer glitch-band glitch-band-3" aria-hidden="true" />
    </>
  )
}
