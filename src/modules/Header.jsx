import React from "react";
import { useLocation } from "react-router-dom";
import { navList } from "../hooks/paths";
import { NotificationIcon, SearchIcon, StickIcon } from "../assets/icons";
import AvatarIMG from "../assets/images/avatar.png";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between mb-[58px]">
      <strong className="font-bold text-[24px] text-[#252733]">
        {navList.find((item) => item.path == pathname)?.title}
      </strong>
      <div className="flex items-center gap-[24px]">
        <SearchIcon />
        <NotificationIcon />
        <StickIcon />
        <strong>Jones Ferdinand</strong>
        <img src={AvatarIMG} alt="" />
      </div>
    </div>
  );
};

export default Header;
