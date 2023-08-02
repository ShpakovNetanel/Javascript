import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { PiSketchLogoFill } from "react-icons/pi";
import './SidebarHeader.css'

export default function SidebarHeader(props) {
  return (
    <div className="header">
      <div className="logo">
        <PiSketchLogoFill />
        <div data-text="Note...d" className="title"></div>
      </div>
      <AiOutlineBars
        className="menu_button"
        onClick={() => props.setCollapse(!props.collapse)} />
    </div>
  );
}
