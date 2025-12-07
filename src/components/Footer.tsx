'use client'

import { useState, useCallback, useRef } from 'react'
import { WaveIcon } from '@/components/Icons'
import clsx from 'clsx'

export function Footer() {
  const [waveCount, setWaveCount] = useState(0)
  const [isWaving, setIsWaving] = useState(false)
  const waveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleWaveClick = useCallback(() => {
    setWaveCount(prev => prev + 1)
    setIsWaving(true)

    // Clear existing timeout
    if (waveTimeoutRef.current) {
      clearTimeout(waveTimeoutRef.current)
    }

    // Reset waving state after animation
    waveTimeoutRef.current = setTimeout(() => {
      setIsWaving(false)
    }, 600)
  }, [])

  // Determine easter egg state
  const isPirate = waveCount >= 10
  const isAhoy = waveCount >= 5

  return (
    <footer className="flex items-center gap-2 pt-8 text-xs text-[var(--text-muted)]">
      <button
        onClick={handleWaveClick}
        className={clsx(
          'group inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 -mx-1.5 -my-1',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-default)]',
          isAhoy ? 'opacity-70' : 'opacity-50',
          'hover:opacity-100',
        )}
        style={{
          transitionProperty: 'opacity',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-label={`Wave${isAhoy ? ` - ${isPirate ? 'Pirate mode!' : 'ahoy!'}` : ''}`}
      >
        <WaveIcon
          size={14}
          className={clsx(
            'group-hover:text-[var(--accent-primary)]',
            isWaving && 'animate-wave-playful',
          )}
          style={{
            transitionProperty: 'color, transform',
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        {isAhoy && (
          <span
            className={clsx(
              'text-[10px] animate-easter-egg-reveal',
              isPirate ? 'opacity-80' : 'opacity-60',
            )}
          >
            {isPirate ? '\u{1F3F4}\u{200D}\u{2620}\u{FE0F}' : 'ahoy!'}
          </span>
        )}
      </button>
      <span className="opacity-50">&copy; {new Date().getFullYear()} Andrew Wilkinson</span>
    </footer>
  )
}
