import React, { useState } from 'react'
import { Patient } from '../../lib/types/Patient'
import PatientCard from './patient-card/PatientCard'

interface PatientListProps {
  patients: Patient[]
}

export default function PatientsList({
  patients,
}: PatientListProps): React.JSX.Element {
  const [openedPatient, setOpenedPatient] = useState<string>()

  const handlePatientToggle = (newPatientID: string) => {
    const isSameID = newPatientID === openedPatient
    if (isSameID) {
      setOpenedPatient(undefined)
    }

    if (!isSameID) setOpenedPatient(newPatientID)
  }

  return (
    <div className="grid grid-cols-1 gap-4 list-none w-full md:w-[600px] self-center">
      <h3 className="font-semibold text-3xl">Patients</h3>
      {patients.map((patient) => (
        <li key={patient.id}>
          <PatientCard
            patient={patient}
            isOpen={openedPatient === patient.id}
            toggleOpen={handlePatientToggle}
          />
        </li>
      ))}
    </div>
  )
}
