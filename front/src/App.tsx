import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DiceRoller } from './components/DiceRoller.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DiceRoller />
    </>
  )
}

export default App
