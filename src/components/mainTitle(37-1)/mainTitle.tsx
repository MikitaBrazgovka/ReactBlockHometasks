import * as React from "react";
import "./mainTitleStyles.css";

export function MainTitle(props: any): any {
  return (
    <h1
      onClick={props.onClick}
      style={{
        fontFamily: props.fontFamily,
        color: props.color,
        cursor: "pointer",
      }}
    >
      {props.content}
    </h1>
  );
}
