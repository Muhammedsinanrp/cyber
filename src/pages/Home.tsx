import { useEffect, useState } from 'react'
import Boot from '../components/Boot'
import CrtOverlay from '../components/CrtOverlay'
import Hud from '../components/Hud'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Certs from '../sections/Certs'
import Footer from '../sections/Footer'

export default function Home() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('sinan-os-booted') === '1')

  useEffect(() => {
    if (booted) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [booted])

  const launch = () => {
    sessionStorage.setItem('sinan-os-booted', '1')
    setBooted(true)
  }

  return (
    <div className="min-h-[100dvh] bg-black">
      {!booted && <Boot onDone={launch} />}
      <CrtOverlay />
      <Hud />
      <main aria-hidden={!booted}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certs />
      </main>
      <Footer />
    </div>
  )
}
