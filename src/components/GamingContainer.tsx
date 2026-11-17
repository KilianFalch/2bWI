import Gaming from "./Gaming";
import style from "./GamingContainer.module.css";

type Props = {};

export default function GamingContainer({}: Props) {
  return (
    <div>
      <h1>Gaming Container</h1>
      <div className={style.gamingcontainer}>
        <Gaming title="Game 1" text="This is the first game." image="https://fastly.picsum.photos/id/227/200/300.jpg?hmac=t3Ir7I6CJr-OrWOq4QVsRQTjpp03ce7vtDA3-NLdm-c" />
        <Gaming title="Game 2" text="This is the second game." image="https://fastly.picsum.photos/id/227/200/300.jpg?hmac=t3Ir7I6CJr-OrWOq4QVsRQTjpp03ce7vtDA3-NLdm-c" />
        <Gaming title="Game 3" text="This is the third game." image="https://fastly.picsum.photos/id/227/200/300.jpg?hmac=t3Ir7I6CJr-OrWOq4QVsRQTjpp03ce7vtDA3-NLdm-c" />
      </div>
    </div>
  );
}
