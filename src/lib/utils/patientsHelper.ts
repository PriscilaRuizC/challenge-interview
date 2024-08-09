import { Patient, PatientFormErrorType } from '../types/Patient'
import { formatDate } from './dateHelper'
import { DateFormatType } from '../types/Date'

interface FormatPatientsInformationInterface {
  patients: Patient[]
  dateFormatType?: DateFormatType
}
export function formatPatientsInformation({
  patients,
  dateFormatType = 'long',
}: FormatPatientsInformationInterface): Patient[] {
  return patients.map((patient): Patient => {
    return {
      ...patient,
      createdAt: patient.createdAt
        ? formatDate({
            date: new Date(patient.createdAt),
            dateFormatType,
          })
        : undefined,
    }
  })
}

export const getPatientFormError = (
  type: PatientFormErrorType,
  charCount?: number | string
) => {
  switch (type) {
    case 'long':
      return `Too Long. Must be shorter than ${charCount} chars`
    case 'short':
      return `Too Short. Must be longer than ${charCount} chars`
    case 'invalid':
      return `Enter a valid value.`
  }
}
