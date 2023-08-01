import React from "react";
import { Link } from "react-router-dom";
import "./HyperText.css";

export function HyperText(props) {
  return (
    <div className="hyper_text-button">
      {/* <Link to={props.href}>{props.text}</Link> */}
      <a href={props.href}>{props.text}</a>
    </div>
  );
}
