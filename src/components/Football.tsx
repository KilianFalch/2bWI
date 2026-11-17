import React from 'react'
import style from './Football.module.css'

type Props = {
  title: string;
  text: string;
  image: string;
}

export default function Football({ title, text, image }: Props) {
  return (
    <div className={style.football}>
        <h2>{title}</h2>
        <img src={image} alt="Hero Image" />
        <p>{text}</p>
    </div>
  )
}