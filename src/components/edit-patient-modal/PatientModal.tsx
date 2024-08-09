import React from 'react'
import PatientForm from '../edit-patient-form/PatientForm'
import { Patient } from '../../lib/types/Patient'
import Modal from '../modal/Modal'

interface PatientModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onSubmit: (patient: Patient) => void
  patient?: Patient
}

export default function PatientModal({
  isOpen = false,
  setIsOpen,
  onSubmit,
  patient,
}: PatientModalProps): React.JSX.Element | null {
  const handleSubmit = (newPatient: Patient) => {
    setIsOpen(false)
    onSubmit(newPatient)
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      children={
        <div className="w-full">
          <PatientForm patient={patient} onSubmit={handleSubmit} />
        </div>
      }
    />
  )
}
