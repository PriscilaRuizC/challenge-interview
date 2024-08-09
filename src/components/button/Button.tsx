import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonVariants = 'default' | 'unstyled'

const VariantStyles: Record<ButtonVariants, string> = {
  default:
    'bg-black h-10 rounded-full px-4 text-sm uppercase text-white hover:border-gray-200 hover:bg-black/85 disabled:bg-gray-300 disabled:text-gray-400 font-bold',
  unstyled: '',
}

export type ButtonSizes = 'medium'

const SizeStyles: Record<ButtonSizes, string> = {
  medium: '',
}

interface ButtonProps {
  onClick?: () => void
  text?: string
  variant?: ButtonVariants
  size?: ButtonSizes
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  onClick,
  text,
  variant = 'default',
  size = 'medium',
  icon,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={clsx(
        'flex flex-row items-center justify-center gap-1',
        className,
        VariantStyles[variant],
        SizeStyles[size]
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
      {icon}
    </button>
  )
}
