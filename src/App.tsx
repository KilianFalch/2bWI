import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Football from './components/Football'
import Gaming from './components/Gaming'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen</h1>
     <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      

     
     
     </div>

      <div className="football-container">
          <Football />  
          <Football />
          <Football />
          <Football />
          <Football />
          <Football />
      </div>



      <div className="gaming-container">
          <Gaming />  
          <Gaming />
          <Gaming />
          <Gaming />
          <Gaming />
          <Gaming />
      </div>
    </>
  )
}

export default App
