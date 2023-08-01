import React from "react";
import "./Input.css";

export function Input(props) {
  return (
    <div className="input">
      <div className="input-title">{props.title}</div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input-value"
        required={props.required}
      ></input>
    </div>
  );
}
