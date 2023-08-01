import React, { useState } from "react";
import { IconPackage } from "./IconPackage.tsx";
import { SidebarHeader } from "./SidebarHeader.tsx";
import "./Sidebar.css";

export function Sidebar() {
  const [collapse, setCollapse] = useState(true);

  const sidebarClass = () => {
    console.log(collapse);
    return collapse ? "collapsed" : "open";
  };

  return (
    <div className={sidebarClass()}>
      <SidebarHeader collapse={collapse} setCollapse={setCollapse} />
      <IconPackage />
    </div>
  );
}
