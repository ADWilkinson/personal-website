import { forwardRef } from 'react'
import clsx from 'clsx'

// Simplified container system with consistent sizing
export const ContainerOuter = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('w-full', className)} {...props}>
      <div className="mx-auto w-full max-w-4xl">{children}</div>
    </div>
  )
})

export const ContainerInner = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('mx-auto w-full max-w-3xl', className)}
      {...props}
    >
      {children}
    </div>
  )
})

// Main container component - centered by default
export const Container = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }
>(function Container({ children, className, size = 'md', ...props }, ref) {
  const sizeClasses = {
    xs: 'max-w-xl',
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
  }

  return (
    <div
      ref={ref}
      className={clsx(
        'mx-auto w-full',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
