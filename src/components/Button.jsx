import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert = false, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition duration-300 border',
    invert
      ? 'border-neutral-600 bg-neutral-800 text-white hover:border-[#0EA5E9]'
      : 'border-neutral-300 bg-white text-neutral-950 hover:border-[#0EA5E9]',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}