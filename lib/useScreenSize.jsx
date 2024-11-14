'use client'

import { useState, useEffect } from 'react'

export default function useScreenSize () {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      handleResize() // Set initial value based on current window size
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
