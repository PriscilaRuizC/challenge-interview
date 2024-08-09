import React, { useEffect } from 'react'
import clsx from 'clsx'
import Button from '../button/Button'
import Close from '../../icons/Close'

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
        className="fixed top-0 left-0 h-screen w-screen bg-transparent z-10"
        onClick={handleClose}
      />
      <div className="fixed top-0 left-0 h-screen w-screen bg-black/20 flex items-center justify-center z-20">
        <div className="relative py-12 px-16 overflow-y-auto overflow-x-hidden w-full sm:max-h-[600px] sm:max-w-[600px] sm:h-fit sm:w-fit bg-white rounded-3xl flex items-center justify-center">
          <div className="absolute top-0 right-0 p-2 z-20">
            <Button icon={<Close fill="#FFFFFF" />} onClick={handleClose} />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
