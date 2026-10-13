import React from "react";
import Gaming from "./Gaming";
import style from "./GamingContainer.module.css";

type Props = {};

export default function GamingContainer({}: Props) {
  return (
    <div>
      <h1>Gaming Container</h1>
      <div className={style.gamingcontainer}>
        <Gaming />
        <Gaming />
        <Gaming />
        <Gaming />
        <Gaming />
        <Gaming />
      </div>
    </div>
  );
}
