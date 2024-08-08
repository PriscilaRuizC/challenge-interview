import React from 'react'
import { IconProps } from '../lib/types/Icon'

export const Minus = ({
  title,
  width = 32,
  height = 32,
  fill = 'black',
  role = 'presentation',
}: IconProps): React.JSX.Element => {
  const viewBoxSize = 32

  return (
    <svg
      fill={fill}
      focusable="false"
      height={height}
      role={role}
      viewBox={`0 0 24 24`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M6 12L18 12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Minus
