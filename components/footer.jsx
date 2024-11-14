import Link from 'next/link'
import { footer } from '@/lib/constants'

function Copyright () {
  return (
    <p className='text-xs text-muted-foreground'>
      &copy; 2024 Krishali Sports and Fitness. All rights reserved.
    </p>
  )
}

function Links () {
  return (
    <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
      {footer[1].links.map((itemName, index) => {
        return (
          <Link
            href={itemName.link}
            key={index}
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}
          >
            {itemName.name}
          </Link>
        )
      })}
    </nav>
  )
}

function FooterWrapper ({ children, className = '' }) {
  return <footer className={className}>{children}</footer>
}

export default function Footer () {
  return (
    <FooterWrapper className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <Copyright />
      <Links />
    </FooterWrapper>
  )
}
