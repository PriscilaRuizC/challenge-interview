import { DateFormatType } from '../types/Date'

interface getDateTimeOptionsInterface {
  date: Date
  dateFormatType?: DateFormatType
}
const getDateTimeOptions = ({
  dateFormatType,
}: getDateTimeOptionsInterface): Intl.DateTimeFormatOptions => {
  // DatePicker formats
  if (dateFormatType === 'short') {
    return { month: 'numeric', day: 'numeric', year: 'numeric' }
  }
  // Default DateTimeOption return has dateFormatType 'long': e.g. March 6, 2024
  return { month: 'long', day: 'numeric', year: 'numeric' }
}

interface formatDateInterface {
  date: Date
  dateFormatType?: DateFormatType
}
export function formatDate({
  date,
  dateFormatType = 'long',
}: formatDateInterface): string {
  return Intl.DateTimeFormat(
    'en',
    getDateTimeOptions({ date, dateFormatType })
  ).format(date)
}
