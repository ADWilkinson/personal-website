'use client'

import { useState } from 'react'
import { WaveIcon } from '@/components/Icons'

export function Footer() {
  const [waveCount, setWaveCount] = useState(0)

  const handleWaveClick = () => {
    setWaveCount(prev => prev + 1)
  }

  return (
    <footer className="flex items-center gap-2 pt-8 text-xs text-[var(--text-muted)]">
      <button
        onClick={handleWaveClick}
        className="group inline-flex items-center gap-1.5 opacity-50 transition-opacity duration-200 hover:opacity-100"
        aria-label="Wave"
      >
        <WaveIcon
          size={14}
          className={`transition-transform duration-300 ${waveCount > 0 ? 'animate-[wave_0.5s_ease-in-out]' : ''} group-hover:text-[var(--accent-primary)]`}
        />
        {waveCount >= 5 && (
          <span className="text-[10px] opacity-60 animate-fade-in">
            {waveCount >= 10 ? '🏴‍☠️' : 'ahoy!'}
          </span>
        )}
      </button>
      <span className="opacity-50">&copy; {new Date().getFullYear()} Andrew Wilkinson</span>
    </footer>
  )
}
