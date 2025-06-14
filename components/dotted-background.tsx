"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DottedBackground() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Dotted pattern */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
           style={{ opacity: isDark ? 0.15 : 0.45 }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dotted-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill={isDark ? "#555555" : "#e5e7eb"} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
        </svg>
      </div>
      
      {/* Diagonal stripes */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
           style={{ opacity: isDark ? 0.1 : 0.25 }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="diagonal-stripes" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M -2,2 l 4,-4 M 0,10 l 10,-10 M 8,12 l 4,-4" 
                stroke={isDark ? "#555555" : "#e5e7eb"} strokeWidth="1.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
        </svg>
      </div>
      
      {/* Theme-colored gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-primary via-transparent to-primary/50 transition-all duration-500"></div>
      </div>
    </>
  )
}