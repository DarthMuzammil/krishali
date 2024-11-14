'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Logo () {
  return (
    <Link href='/' className='flex items-center gap-2' prefetch={false}>
      <Image
        width={100}
        height={100}
        src='/logo.svg'
        alt='a'
        className='aspect-video object-cover rounded-lg'
      />
    </Link>
  )
}
