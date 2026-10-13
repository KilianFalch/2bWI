import Card from "./Card";
import styles from "./CardContainer.module.css";

type Props = {};

export default function CardContainer({}: Props) {
  return (
    <div>
      <h1>Card Container</h1>
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
  );
}
