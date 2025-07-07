import { useState } from 'react'
import Calculator from './components/Calculator';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>Age Calculator</h1> */}
        <Calculator />
      </div>
      
    </>
  )
}

export default App
