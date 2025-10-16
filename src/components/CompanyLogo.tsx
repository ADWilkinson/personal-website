import React from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

interface CompanyLogoProps {
  name: string
  logo: StaticImageData | string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function CompanyLogo({ name, logo, className, size = 'sm' }: CompanyLogoProps) {
  const sizeClasses = {
    sm: {
      container: 'h-5 w-5',
      image: 'h-4 w-4',
      dimensions: { width: 16, height: 16 }
    },
    md: {
      container: 'h-8 w-8',
      image: 'h-8 w-8',
      dimensions: { width: 32, height: 32 }
    },
    lg: {
      container: 'h-10 w-10',
      image: 'h-10 w-10',
      dimensions: { width: 40, height: 40 }
    }
  }

  const { container, image, dimensions } = sizeClasses[size]

  return (
    <span className={clsx('inline-flex items-center font-medium text-[var(--text-primary)]', className)}>
      {name}
      <span
        className={clsx(
          'ml-1 inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--surface-elevated)] shadow-[var(--shadow-xs)] ring-1 ring-[var(--border-default)]/20',
          container,
        )}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          className={clsx('rounded-full object-contain', image)}
          width={dimensions.width}
          height={dimensions.height}
          sizes={`${dimensions.width}px`}
        />
      </span>
    </span>
  )
}
