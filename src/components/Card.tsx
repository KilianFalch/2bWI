import style from './Card.module.css';

type Props = {
  title: string;
  text: string;
  image: string;  
}

export default function Card({ title, text, image }: Props) {
  return (
       <div className={style.card} >
          <h2>{title}</h2>
          <img src={image} alt="Hero Image" /> 
          <p>{text}w</p>
      </div>
  )
}