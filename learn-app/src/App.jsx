import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("hello")

  return (
    <>
      <h1>React {count}</h1>
      
    </>
  )
}

export default App
