import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="button">
    <input type="submit" className="input-button" value={props.value} onClick={() => {
     <Link to={props.link} />
    }} />
    </div>
  );
}
