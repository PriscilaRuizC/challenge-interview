import { Patient } from '../types/Patient'
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
