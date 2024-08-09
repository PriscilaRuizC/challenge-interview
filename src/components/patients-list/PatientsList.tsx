import React, { useEffect, useState } from 'react'
import { Patient } from '../../lib/types/Patient'
import PatientCard from '../patient-card/PatientCard'
import Skeleton from './skeleton/Skeleton'
import { getPatientsInformation } from '../../client/patientClient'
import { formatPatientsInformation } from '../../lib/utils/patientsHelper'
import EditPatientModal from '../edit-patient-modal/EditPatientModal'

export default function PatientsList(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const [patients, setPatients] = useState<Patient[]>()
  const [openedPatient, setOpenedPatient] = useState<Patient>()
  const [index, setIndex] = useState<number>()
  const [showEditPatientModal, setShowEditPatientModal] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    try {
      getPatientsInformation().then((rawPatients) =>
        setPatients(formatPatientsInformation({ patients: rawPatients }))
      )
    } catch (error) {
      //TODO
    }
    setIsLoading(false)
  }, [])

  const handlePatientToggle = (newPatient: Patient, newIndex: number) => {
    const isSameID = newPatient.id === openedPatient?.id
    if (isSameID) {
      setOpenedPatient(undefined)
      setIndex(undefined)
    }

    if (!isSameID) {
      setOpenedPatient(newPatient)
      setIndex(newIndex)
    }
  }

  const handleSubmit = (newPatient: Patient) => {
    if (openedPatient && index && patients) patients[index] = newPatient
  }

  const handleEdit = () => {
    setShowEditPatientModal(true)
  }

  return (
    <div className="list-none w-full md:w-[600px] lg:w-[1000px] self-center">
      {isLoading ? (
        <Skeleton />
      ) : patients ? (
        <div className="grid grid-cols-1 gap-4">
          <h3 className="font-semibold text-3xl">Patients</h3>
          {patients.map((patient, index) => (
            <li key={patient.id}>
              <PatientCard
                patient={patient}
                isOpen={openedPatient?.id === patient.id}
                toggleOpen={(patient) => handlePatientToggle(patient, index)}
                onEdit={handleEdit}
              />
            </li>
          ))}
        </div>
      ) : null}
      <EditPatientModal
        onSubmit={handleSubmit}
        patient={openedPatient}
        isOpen={showEditPatientModal}
        setIsOpen={setShowEditPatientModal}
      />
    </div>
  )
}
