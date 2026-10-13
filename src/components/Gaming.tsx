import React from 'react'
import style from './Gaming.module.css'

type Props = {}

export default function Gaming({}: Props) {
  return (
    <div className={style.gaming}>
        <h2>Gaming</h2>
        <img src= "https://fastly.picsum.photos/id/227/200/300.jpg?hmac=t3Ir7I6CJr-OrWOq4QVsRQTjpp03ce7vtDA3-NLdm-c" alt="Hero Image" />
        <p>made by Tim</p>
     </div>
  )
}