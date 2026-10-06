import React from 'react'

type Props = {}

export default function Card({}: Props) {
  return (
       <div className="card">
          <h2>Susi</h2>
          <img src= "https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" alt="Hero Image" /> 
          <p>made by andi</p>
      </div>
  )
}