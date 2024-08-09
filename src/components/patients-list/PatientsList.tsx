import React, { useEffect, useState } from 'react'
import { Patient } from '../../lib/types/Patient'
import PatientCard from '../patient-card/PatientCard'
import Skeleton from './skeleton/Skeleton'
import { getPatientsInformation } from '../../client/patientClient'
import { formatPatientsInformation } from '../../lib/utils/patientsHelper'
import PatientModal from '../edit-patient-modal/PatientModal'
import Button from '../button/Button'
import Plus from '../../icons/Plus'

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

  const cleanOpenedPatient = () => {
    setOpenedPatient(undefined)
    setIndex(undefined)
  }

  const handlePatientToggle = (newPatient: Patient, newIndex: number) => {
    const isSameID = newPatient.id === openedPatient?.id
    if (isSameID) {
      cleanOpenedPatient()
    }

    if (!isSameID) {
      setOpenedPatient(newPatient)
      setIndex(newIndex)
    }
  }

  const handleSubmit = (newPatient: Patient) => {
    if (openedPatient && index !== undefined && patients) {
      patients[index] = newPatient
      setOpenedPatient(newPatient)
    }

    if (!openedPatient) {
      patients?.unshift(newPatient)
    }
  }

  const handleShowModal = () => {
    setShowEditPatientModal(true)
  }

  const handleCreatePatient = () => {
    cleanOpenedPatient()
    handleShowModal()
  }

  return (
    <div className="list-none w-full md:w-[600px] lg:w-[1000px] self-center">
      {isLoading ? (
        <Skeleton />
      ) : patients ? (
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-row justify-between">
            <h3 className="font-semibold text-3xl">Patients</h3>
            <Button
              text="Add"
              icon={<Plus fill="#FFFFFF" />}
              onClick={handleCreatePatient}
            />
          </div>

          {patients.map((patient, index) => (
            <li key={patient.id}>
              <PatientCard
                patient={patient}
                isOpen={openedPatient?.id === patient.id}
                toggleOpen={(patient) => handlePatientToggle(patient, index)}
                onEdit={handleShowModal}
              />
            </li>
          ))}
        </div>
      ) : null}
      <PatientModal
        onSubmit={handleSubmit}
        patient={openedPatient}
        isOpen={showEditPatientModal}
        setIsOpen={setShowEditPatientModal}
      />
    </div>
  )
}
