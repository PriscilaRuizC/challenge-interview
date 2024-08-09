import { EditPatientFormErrorType } from '../types/Patient'

export const EDIT_PATIENT_FORM_ERRORS: Record<
  EditPatientFormErrorType,
  string
> = {
  length: 'Too long.',
  invalid: 'Enter a valid value.',
}
