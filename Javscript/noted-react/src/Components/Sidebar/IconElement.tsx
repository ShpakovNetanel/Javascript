import React from "react";
import './IconElement.css'

export function IconELement(props) {
  return (
    <li className="icon_element">
      <div className="sidebar_navigator">
        {props.component}
        <span className="page_text">{props.element}</span>
      </div>
      <span className="tooltip">{props.element}</span>
    </li>
  );
}
