'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import PunchSection from './components/PunchSection'
import Divider from './components/Divider'
import GreenDivider from './components/GreenDivider'
import StorySection from './components/StorySection'
import ConnectSection from './components/ConnectSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider className='relative -top-6' />
      <PunchSection />
      <GreenDivider className='relative top-6' />
      <StorySection />
      <ConnectSection />
      <Footer />
    </main>
  )
}
