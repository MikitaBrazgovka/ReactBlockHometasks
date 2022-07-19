import * as React from "react";
import "./mainTitleStyles.css";

export function MainTitle(props: any): any {
  return <h1 className="mainTitle">{props.content}</h1>;
}
