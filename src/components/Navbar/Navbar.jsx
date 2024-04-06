import React from "react";
import Logo from "./../../assets/logo/logo.svg";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DDD0C8] text-[#323232]">
      {/* ------------- Logo ------------- */}
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
      </div>

      {/* ------------- Navbar ------------- */}
    </div>
  );
};

export default Navbar;
