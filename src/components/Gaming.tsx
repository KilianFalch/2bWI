import style from "./Gaming.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Gaming({ title, text, image }: Props) {
  return (
    <div className={style.gaming}>
      <h2>{title}</h2>
      <img
        src={image}
        alt="Hero Image"
      />
      <p>{text}</p>
    </div>
  );
}
