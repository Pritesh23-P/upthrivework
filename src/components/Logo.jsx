import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ filled = false, invert = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" {...props}>
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <circle
        cx="16"
        cy="16"
        r="15"
        stroke={`url(#${id}-grad)`}
        strokeWidth="1.5"
        fill={filled ? `url(#${id}-grad)` : 'none'}
        className="transition-all duration-300"
      />

      {/* Upward arrow */}
      <path
        d="M16 22V10M16 10L11 15M16 10L21 15"
        stroke={filled ? 'white' : `url(#${id}-grad)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Circuit dots */}
      <circle cx="10" cy="22" r="1.5" fill={`url(#${id}-grad)`} opacity="0.7" />
      <circle cx="16" cy="25" r="1.5" fill={`url(#${id}-grad)`} opacity="0.5" />
      <circle cx="22" cy="22" r="1.5" fill={`url(#${id}-grad)`} opacity="0.7" />

      {/* Circuit lines */}
      <line x1="10" y1="22" x2="16" y2="25" stroke={`url(#${id}-grad)`} strokeWidth="1" opacity="0.4" />
      <line x1="22" y1="22" x2="16" y2="25" stroke={`url(#${id}-grad)`} strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  let id = useId()

  return (
    <svg
      viewBox="0 0 180 32"
      aria-hidden="true"
      fill="none"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Icon mark */}
      <circle cx="16" cy="16" r="15" stroke="#0EA5E9" strokeWidth="1.5" />
      <path
        d="M16 21V11M16 11L12 15M16 11L20 15"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="22" r="1.2" fill="#0EA5E9" opacity="0.7" />
      <circle cx="16" cy="24.5" r="1.2" fill="#0EA5E9" opacity="0.5" />
      <circle cx="21" cy="22" r="1.2" fill="#0EA5E9" opacity="0.7" />
      <line x1="11" y1="22" x2="16" y2="24.5" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.4" />
      <line x1="21" y1="22" x2="16" y2="24.5" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.4" />

      {/* Wordmark */}
      <text
        x="40"
        y="22"
        fontFamily="Mona Sans, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.4"
        fill="#0EA5E9"
      >
        Upthrive
      </text>

      <text
        x="101"
        y="22"
        fontFamily="Mona Sans, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="-0.4"
        fill="#0EA5E9"
      >
        Work
      </text>
    </svg>
  )
}