import Football from "./Football";
import style from "./FootballContainer.module.css";

type Props = {};

export default function FootballContainer({}: Props) {
  return (
    <div>
      <h1>Football Container</h1>
      <div className={style.footballcontainer}>
        <Football title="Football 1" text="This is the first football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
        <Football title="Football 2" text="This is the second football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
        <Football title="Football 3" text="This is the third football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
        <Football title="Football 4" text="This is the fourth football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
        <Football title="Football 5" text="This is the fifth football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
        <Football title="Football 6" text="This is the sixth football match." image="https://fastly.picsum.photos/id/1054/200/300.jpg?hmac=2AMkQJkHozCbGVYoPJsFwSYmOfmPcPMYd0RtXMm-I2A" />
      </div>
    </div>
  );
}
