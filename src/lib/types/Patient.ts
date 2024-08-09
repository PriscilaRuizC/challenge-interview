export interface Patient {
  createdAt?: string
  name: string
  description?: string
  website?: string
  id: string
  avatar?: string
}

export type PatientFormErrorType = 'long' | 'short'
