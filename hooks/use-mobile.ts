"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Listen for changes
    const handleChange = () => {
      setMatches(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    // Remove listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

