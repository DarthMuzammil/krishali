'use client'

import DesktopHeader from '@/components/ui/desktopHeader'
import MobileHeader from '@/components/ui/mobileHeader'
import Logo from '@/components/ui/logo'

export function Header () {
  return (
    <header className='flex bg-white text-zinc-900 py-4  border-b w-full'>
      <div className='flex justify-between container mx-auto px-4 md:px-6'>
        <Logo />
        <DesktopHeader />
        <MobileHeader />
      </div>
    </header>
  )
}
