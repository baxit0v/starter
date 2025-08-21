import type { PropsWithChildren } from 'react'

type Props = {
  className?: string
} & PropsWithChildren

export const Container = ({ className = '', children }: Props) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
}
