import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button className={"component-Button button-" + props.color} id={props.id}>
      {props.value}
    </button>
  );
}
