import React from "react";
import "./HyperText.css";

export default function HyperText(props) {
  return (
    <div className="hyper_text-button">
      <a href={props.href}>{props.text}</a>
    </div>
  );
}
