import Tim from "./Tim";
import style from "./TimContainer.module.css";

type Props = {};

export default function TimContainer({}: Props) {
  return (
    <div>
      <h1>Tim Container</h1>
      <div className={style.timcontainer}>
        <Tim title="Tim 1" text="This is the first Tim." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
        <Tim title="Tim 2" text="This is the second Tim." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
        <Tim title="Tim 3" text="This is the third Tim." image="https://www.oefb.at/oefb2/images/1278650591628556536_967ea43db5d34e1180d4-1,0-320x320.png" />
      </div>
    </div>
  );
}
