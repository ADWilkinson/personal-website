'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import davyJonesImage from '@/images/galleon/davyjones.png'

export function DavyJonesEasterEgg() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Special combo: click 3 times to reveal Davy Jones mode
  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1
      if (newCount >= 3) {
        setShowEasterEgg(true)
        return 0 // Reset count
      }
      return newCount
    })
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-0 transition-opacity duration-500 hover:opacity-100">
      {showEasterEgg && isDark && (
        <div 
          className="mb-2 p-2 rounded-full bg-zinc-800/70 cursor-pointer backdrop-blur-sm"
          onClick={() => setShowEasterEgg(false)}
        >
          <Image 
            src={davyJonesImage} 
            alt="Davy Jones" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <div className="absolute -top-10 right-0 text-xs p-2 bg-zinc-800 rounded text-zinc-300 whitespace-nowrap">
            Davy Jones is here
          </div>
        </div>
      )}
      <div
        className="w-4 h-4 rounded-full bg-transparent border border-zinc-500/20 dark:border-zinc-400/30 cursor-pointer"
        onClick={handleClick}
        title="Find the secret"
      />
    </div>
  )
}