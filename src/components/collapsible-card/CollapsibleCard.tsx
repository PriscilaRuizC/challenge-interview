import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Minus from '../../icons/Minus'
import Plus from '../../icons/Plus'

interface CollapsibleCardProps {
  content: ReactNode
  collapsibleContent: ReactNode
  isOpen: boolean
  toggleOpen: () => void
}

export default function CollapsibleCard({
  content,
  collapsibleContent,
  isOpen = false,
  toggleOpen,
}: CollapsibleCardProps): React.JSX.Element {
  return (
    <div className="w-full bg-white rounded-3xl">
      <button
        className="w-full p-4 flex flex-row justify-between align-middle"
        onClick={toggleOpen}
      >
        <div className="h-full flex items-center">{content}</div>
        <div>{isOpen ? <Minus /> : <Plus />}</div>
      </button>
      <div
        className={clsx(
          'duration-500 transition-all overflow-hidden w-full px-20 ease-in-out',
          isOpen ? 'h-fit pb-4' : 'h-0'
        )}
      >
        {collapsibleContent}
      </div>
    </div>
  )
}
