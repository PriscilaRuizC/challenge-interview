import React, { useState } from 'react'
import Input from './components/input/Input'
import Header from './components/header/Header'
import CollapsibleCard from './components/collapsible-card/CollapsibleCard'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-gray-100 h-fit min-h-v">
      <Header />
      <Input placeholder="Test" />
      <CollapsibleCard
        content={<p className="h-full text-center">Hola</p>}
        collapsibleContent={<p>Raton sin cola</p>}
        isOpen={isOpen}
        toggleOpen={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default App
