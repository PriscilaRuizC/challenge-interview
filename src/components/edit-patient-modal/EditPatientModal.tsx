import React from 'react'
import EditPatientForm from '../edit-patient-form/EditPatientForm'
import { Patient } from '../../lib/types/Patient'
import Modal from '../modal/Modal'

interface EditPatientModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onSubmit: (patient: Patient) => void
  patient?: Patient
}

export default function EditPatientModal({
  isOpen = false,
  setIsOpen,
  onSubmit,
  patient,
}: EditPatientModalProps): React.JSX.Element | null {
  const handleSubmit = (newPatient: Patient) => {
    setIsOpen(false)
    onSubmit(newPatient)
  }

  if (!patient) return null

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      children={
        <div className="w-full">
          <EditPatientForm patient={patient} onSubmit={handleSubmit} />
        </div>
      }
    />
  )
}
