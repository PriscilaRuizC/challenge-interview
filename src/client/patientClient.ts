import { Patient } from '../lib/types/Patient'

export const getPatientsInformation = async (): Promise<Patient[]> => {
  const res = await fetch(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (res.ok) {
    return Promise.resolve(res.json())
  }
  return Promise.reject(`${res.status}: ${res.statusText}`)
}
