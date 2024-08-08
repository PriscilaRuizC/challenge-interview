import React from 'react'
import Header from './components/header/Header'
import PatientsList from './components/patients-list/PatientsList'

function App() {
  return (
    <div className="bg-gray-100 h-fit min-h-v">
      <Header />
      <div className="p-8 w-full flex align-center flex-col">
        <PatientsList
          patients={[
            {
              createdAt: '2023-03-06T12:34:59.472Z',
              name: 'Pedro',
              avatar:
                'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
              description: 'Hola me llamo Pedro',
              website: 'www.facebook.com',
              id: '1',
            },
            {
              createdAt: '2023-03-06T12:34:59.472Z',
              name: 'Paula',
              avatar:
                'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
              description: 'Hola me llamo Paula',
              website: 'www.instagram.com',
              id: '2',
            },
          ]}
        />
      </div>
    </div>
  )
}

export default App
