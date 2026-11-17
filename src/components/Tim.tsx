import style from './tim.module.css';

type Props = {
    title: string;
    text: string;
    image: string;
}

export default function Tim({ title, text, image }: Props) {
  return (
    <div className={style.tim}>
      <h2>{title}</h2>
      <img
        src={image}
        alt="Hero Image"
      />
      <p>{text}</p>
    </div>
)};