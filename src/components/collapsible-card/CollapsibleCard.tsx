import React, { ReactNode } from 'react'
import clsx from 'clsx'
import ArrowDown from '../../icons/ArrowDown'

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
        className="w-full p-4 flex flex-row justify-between items-center"
        onClick={toggleOpen}
      >
        <div className="h-full flex items-center">{content}</div>
        <div
          className={clsx(
            'duration-300 transition-all',
            isOpen ? 'rotate-180' : ''
          )}
        >
          <ArrowDown />
        </div>
      </button>
      <div
        className={clsx(
          'duration-500 transition-all overflow-hidden w-full sm:px-20 px-4 ease',
          isOpen ? 'max-h-[700px] h-fit pb-4' : 'max-h-0'
        )}
      >
        {collapsibleContent}
      </div>
    </div>
  )
}
