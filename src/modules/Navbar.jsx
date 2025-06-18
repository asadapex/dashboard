import React from "react";
import { LogoSvg } from "../assets/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="w-[20%] h-[100vh] bg-[#363740] pl-[32px] pt-[37px]">
        <div className="flex gap-[12px] items-center cursor-pointer">
          <LogoSvg />
          <h2 className="font-bold text-[19px] leading-[100%] text-[#A4A6B3]">
            Dashboard Kit
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
