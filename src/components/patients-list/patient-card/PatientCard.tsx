import React from 'react'
import { Patient } from '../../../lib/types/Patient'
import User from '../../../icons/svg/User.svg'
import CollapsibleCard from '../../collapsible-card/CollapsibleCard'

interface PatientCardProps {
  patient: Patient
  isOpen: boolean
  toggleOpen: (patient: string) => void
}

export default function PatientCard({
  patient,
  isOpen,
  toggleOpen,
}: PatientCardProps): React.JSX.Element {
  const handlePatientToggle = () => {
    toggleOpen(patient.id)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    event.stopPropagation()
    console.log('hola')
  }

  return (
    <CollapsibleCard
      content={
        <div className="gap-4 flex flex-row items-center">
          <div className="rounded-full h-12 w-12 overflow-hidden ">
            <img
              src={patient.avatar ?? User}
              alt="avatar"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-0 items-start">
            <p className="text-lg font-bold leading-none">{patient.name}</p>
            <a
              className="text-sm text-blue-500 underline pointer-events-none"
              onClick={handleLinkClick}
              href={patient.website}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              {patient.website}
            </a>
          </div>
        </div>
      }
      collapsibleContent={<div>{patient.description}</div>}
      isOpen={isOpen}
      toggleOpen={handlePatientToggle}
    />
  )
}
