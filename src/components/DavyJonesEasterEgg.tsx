'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import davyJonesImage from '@/images/galleon/davy-profile.png'

export function DavyJonesEasterEgg() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  // Store easter egg state in localStorage
  useEffect(() => {
    setMounted(true)
    // Check if easter egg was previously discovered
    const eggDiscovered = localStorage.getItem('davyJonesDiscovered') === 'true'
    if (eggDiscovered) {
      setShowEasterEgg(true)
    }
  }, [])

  // Save state when easter egg is discovered
  useEffect(() => {
    if (mounted && showEasterEgg) {
      localStorage.setItem('davyJonesDiscovered', 'true')
    }
  }, [showEasterEgg, mounted])

  // Special combo: click 5 times to reveal Davy Jones mode
  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1
      if (newCount >= 5) {
        setShowEasterEgg(true)
        return 0 // Reset count
      }
      return newCount
    })
  }

  if (!mounted) return null

  // If not dark mode, only show the trigger
  if (!isDark) {
    return (
      <div
        className="fixed bottom-5 right-5 z-50 h-2 w-2 cursor-pointer rounded-full border border-[var(--border-default)] bg-transparent transition-all duration-90 hover:border-[var(--border-default)]"
        onClick={handleClick}
      />
    )
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showEasterEgg ? (
        <div
          className="cursor-pointer rounded-full bg-[var(--surface-elevated)] p-2 shadow-[var(--shadow-md)] transition-all duration-90 hover:shadow-[var(--shadow-lg)]"
          onClick={() => setShowEasterEgg(false)}
          title="Davy Jones"
        >
          <Image
            src={davyJonesImage}
            alt="Davy Jones"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      ) : (
        <div
          className="h-3 w-3 cursor-pointer rounded-full border border-[var(--border-default)] bg-transparent transition-all duration-90 hover:border-[var(--accent-primary)]"
          onClick={handleClick}
        />
      )}
    </div>
  )
}
