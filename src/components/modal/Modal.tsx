import React, { useEffect } from 'react'
import clsx from 'clsx'
import Button from '../button/Button'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children: React.ReactNode
}

export default function Modal({
  isOpen = false,
  setIsOpen,
  children,
}: ModalProps): React.JSX.Element | null {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  if (!isOpen) return null

  return (
    <div
      className={clsx(
        'max-h-0 max-w-0 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-transparent z-10"
        onClick={handleClose}
      />
      <div className="absolute top-0 left-0 h-screen w-screen bg-black/20 flex items-center justify-center">
        <div className="relative p-8 overflow-y-auto overflow-x-hidden h-full w-full sm:max-h-[600px] sm:max-w-[600px] sm:h-fit sm:w-fit bg-white rounded-3xl z-20 flex items-center justify-center">
          <div className="absolute top-0 right-0 p-2 z-20">
            <Button text="close" onClick={handleClose} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
