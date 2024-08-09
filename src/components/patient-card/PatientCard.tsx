import React from 'react'
import { Patient } from '../../lib/types/Patient'
import User from '../../icons/svg/User.svg'
import CollapsibleCard from '../collapsible-card/CollapsibleCard'
import Button from '../button/Button'

const lineStyles = 'flex flex-row gap-2 items-center justify-start'

interface PatientCardProps {
  patient: Patient
  isOpen: boolean
  toggleOpen: (patient: Patient) => void
  onEdit: () => void
}

export default function PatientCard({
  patient,
  isOpen,
  toggleOpen,
  onEdit,
}: PatientCardProps): React.JSX.Element {
  const handlePatientToggle = () => {
    toggleOpen(patient)
  }

  const handleEditPatient = () => {
    onEdit()
  }

  return (
    <CollapsibleCard
      content={
        <div className="gap-4 flex flex-row items-center">
          <div className="rounded-full min-h-12 min-w-12 h-12 w-12 overflow-hidden object-contain border-gray-300 border">
            <img src={patient.avatar ?? User} alt="avatar" />
          </div>
          <p className="text-lg font-bold leading-none">{patient.name}</p>
        </div>
      }
      collapsibleContent={
        <div className="flex flex-col gap-2 items-start">
          {patient.description}
          <div className={lineStyles}>
            <p className="font-bold">Website:</p>
            <a
              className="text-sm text-blue-500 underline text-left"
              href={patient.website}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              {patient.website}
            </a>
          </div>
          <div className={lineStyles}>
            <p className="font-bold">Join Date:</p>
            <p className="text-sm text-left">{patient.createdAt}</p>
          </div>
          <div className="w-full flex justify-end">
            <Button
              className="w-full sm:w-20"
              onClick={handleEditPatient}
              text={'Edit'}
            />
          </div>
        </div>
      }
      isOpen={isOpen}
      toggleOpen={handlePatientToggle}
    />
  )
}
