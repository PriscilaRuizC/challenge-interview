import React from 'react'
import { Patient } from '../../lib/types/Patient'

interface PatientListProps {
  patients: Patient[]
}

export default function PatientsList({
  patients,
}: PatientListProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-8">
      {patients.map((patient) => (
        <li key={patient.id}></li>
      ))}
    </div>
  )
}
