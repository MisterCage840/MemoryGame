import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Score from './score.jsx'

function App() {
  const [score,setScore] = useState(0)  
  const [highScore,setHighScore] = useState(0)

  return (
    <div>
      <Score/>
    </div>  
  )
}

export default App
