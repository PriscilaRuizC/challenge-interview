import React from 'react'
import Header from './components/header/Header'
import PatientsList from './components/patients-list/PatientsList'

function App() {
  return (
    <div className="bg-gray-100 h-fit min-h-v">
      <Header />
      <div className="p-8 w-full flex align-center flex-col">
        <PatientsList />
      </div>
    </div>
  )
}

export default App
