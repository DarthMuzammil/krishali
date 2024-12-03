'use client'

import { useSearchParams } from 'next/navigation'

export function SearchParamGetter({ children }) {
  const searchParams = useSearchParams()
  const locationId = searchParams.get('locationId')
  
  return <>{children(locationId)}</>
}

