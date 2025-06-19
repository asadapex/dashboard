import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = ({item}) => {
    return (
                    <NavLink className={`flex items-center gap-[24px] relative text-[16px] font-normal text-[#A4A6B3] py-[20px] pl-[32px]`} to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
    )
}

export default NavItem