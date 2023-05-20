import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import cx from '~/lib/cx'

interface Props {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  active?: boolean
  href?: string
  variant?: 'filled' | 'outlined'
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}

export const Button: React.FC<Props> = ({
  children,
  className,
  href,
  disabled,
  active,
  onClick,
  type = 'button',
  variant = 'filled',
}) => {
  const clasess = cx(
    'hover:bg-[#4396A1] rounded-3xl py-3 px-10',
    variant === 'outlined'
      ? 'text-[#52B6C4] border border-[#52B6C4] hover:text-white'
      : 'text-white',
    variant === 'filled' ? 'bg-[#52B6C4]' : 'bg-transparent',
    active ? 'bg-[#0E535C] border-none text-white' : undefined,
    disabled ? 'opacity-50 cursor-not-allowed' : undefined,
    className
  )

  if (href) {
    return (
      <Link href={href}>
        <a className={clasess} onClick={onClick}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button type={type} className={clasess} onClick={onClick}>
      {children}
    </button>
  )
}
