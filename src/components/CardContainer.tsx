import Card from "./Card";
import styles from "./CardContainer.module.css";

type Props = {};

export default function CardContainer({}: Props) {
  return (
    <div>
      <h1>Card Container</h1>
    <div className={styles.container}>
      <Card title="Card 1" text="This is the first card." image="https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" />
      <Card title="Card 2" text="This is the second card." image="https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" />
      <Card title="Card 3" text="This is the third card." image="https://fastly.picsum.photos/id/1004/200/300.jpg?hmac=U8xLjv1wDsnhRH90oqnEvk2hvspq7UPzpU8Z9TtIxZM" />
    </div>
    </div>
  );
}
