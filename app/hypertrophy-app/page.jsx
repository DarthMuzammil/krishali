'use client'

import { LandingPage } from '@/components/landing-page'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

function Container ({ children, ...props }) {
  return <main {...props}>{children}</main>
}

export default function HypertrophyPage () {
  return (
    <Container className='flex min-h-screen flex-col items-center justify-between bg-white w-full'>
      <Header />
      <LandingPage />
      <Footer />
    </Container>
  )
}
