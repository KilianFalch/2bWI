import React from "react";
import Football from "./Football";
import style from "./FootballContainer.module.css";

type Props = {};

export default function FootballContainer({}: Props) {
  return (
    <div>
      <h1>Football Container</h1>
    <div className={style.footballcontainer}>
      <Football />
      <Football />
      <Football />
      <Football />
      <Football />
      <Football />
    </div>
    </div>
  );
}
