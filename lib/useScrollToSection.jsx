'use client'

import { useCallback } from 'react'

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return scrollToSection
}

export default useScrollToSection
