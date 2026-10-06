import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen</h1>
      <Card />
     <div className="card-container">
       <div className="card">
          <h2>Susi</h2>
          <img src= "https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" alt="Hero Image" /> 
      </div>
       <div className="card">
          <h2>Susi</h2>
          <img src= "https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" alt="Hero Image" /> 
      </div>
       <div className="card">
          <h2>Susi</h2>
          <img src= "https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" alt="Hero Image" /> 
      </div>
     </div>
    </>
  )
}

export default App
