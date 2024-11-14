'use client'

import Link from 'next/link'
import { headers } from '@/lib/constants'

export default function DesktopHeader ({ itemNames = headers }) {
  return (
    <nav className='hidden items-center gap-4 md:flex'>
      {itemNames.map((itemName, index) => {
        return (
          <Link
            key={index}
            href={
              itemName.type === 'page'
                ? `/${itemName.link}`
                : itemName.type === 'pageSection'
                  ? `/${itemName.page}#${itemName.section}`
                  : `#${itemName}`
            }
            className='text-sm font-medium transition-colors hover:text-purple-500'
            prefetch={false}
          >
            {itemName.name}
          </Link>
        )
      })}
    </nav>
  )
}
