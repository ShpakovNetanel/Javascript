import React from "react";
import { IconELement } from "./IconElement.tsx";
import { BiSolidDashboard, BiSolidGroup } from "react-icons/bi"
import { BsFillPersonFill, BsCardList, BsFillPersonPlusFill, BsFillBookmarkHeartFill } from "react-icons/bs"
import './IconPackage.css'

export function IconPackage() {
  return (
    <ul className="icon_package">
      <IconELement element="Dashboard" component={<BiSolidDashboard className="page_icon"/>} />
      <IconELement element="Profile"  component={<BsFillPersonFill className="page_icon"/>} />
      <IconELement element="My_Blogs" component={<BsCardList className="page_icon"/>} />
      <IconELement element="Groups" component={<BiSolidGroup className="page_icon"/>}/>
      <IconELement element="Following" component={<BsFillPersonPlusFill className="page_icon"/>}/>
      <IconELement element="Saved" component={<BsFillBookmarkHeartFill className="page_icon"/>}/>
    </ul>
  );
}
