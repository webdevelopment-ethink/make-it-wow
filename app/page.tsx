import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Highlights from '@/components/Highlights'
import Gallery from '@/components/Gallery'
import Packages from '@/components/Packages'
import Reviews from '@/components/Reviews'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhatWeDo />
        <Highlights />
        <Gallery />
        <Packages />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

