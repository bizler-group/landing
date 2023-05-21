import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import cx from '~/lib/cx'

interface Props {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  active?: boolean
  href?: string
  external?: boolean
  variant?: 'filled' | 'outlined'
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  children,
  className,
  href,
  external,
  disabled,
  active,
  onClick,
  type = 'button',
  variant = 'filled',
}) => {
  let bg = 'bg-transparent'
  let color = 'text-white'

  if (variant === 'filled') {
    bg = 'bg-[#52B6C4]'
  }

  // else if (variant === 'outlined') {
  //   color = 'text-[#52B6C4]'
  // }

  if (active) {
    bg = 'bg-[#0E535C]'
  }

  const clasess = cx(
    bg,
    color,
    'hover:bg-[#4396A1] rounded-3xl py-3 px-10',
    variant === 'outlined'
      ? 'border border-[#52B6C4] hover:text-white'
      : undefined,
    active ? 'border-none text-white' : undefined,
    disabled ? 'opacity-50 cursor-not-allowed' : undefined,
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={clasess}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={clasess} onClick={onClick}>
      {children}
    </button>
  )
}
