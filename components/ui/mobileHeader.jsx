'use client'

import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import MenuIcon from '@/components/icons/MenuIcon'
import { headers } from '@/lib/constants'

export default function MobileHeader ({ itemNames = headers }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='md:hidden mt-2'>
          <MenuIcon className='h-6 w-6' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-white' side='left'>
        <div className='grid gap-4 p-6 bg-white'>
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
                className='flex items-center gap-2 text-sm font-medium transition-colors hover:text-purple-500'
                prefetch={false}
              >
                {itemName.name}
              </Link>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
