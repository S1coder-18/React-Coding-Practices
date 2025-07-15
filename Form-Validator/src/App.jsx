import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormValidator from './Components/FormValidator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FormValidator />
      </div>
    </>
  )
}

export default App
