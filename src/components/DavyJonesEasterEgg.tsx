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
        className="fixed bottom-5 right-5 z-50 w-2 h-2 rounded-full bg-transparent border border-zinc-300/10 cursor-pointer hover:border-zinc-300/20 transition-all duration-300"
        onClick={handleClick}
      />
    )
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showEasterEgg ? (
        <div
          className="p-2 rounded-full bg-zinc-800/70 cursor-pointer backdrop-blur-sm ring-1 ring-zinc-700/50 shadow-lg transition-all duration-300 hover:ring-zinc-600/50"
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
          className="w-3 h-3 rounded-full bg-transparent border border-zinc-500/10 cursor-pointer hover:border-zinc-500/30 transition-all duration-300"
          onClick={handleClick}
        />
      )}
    </div>
  )
}