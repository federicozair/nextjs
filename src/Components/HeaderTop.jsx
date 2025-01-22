import React from  "react";
import {BsFacebook, BsInstagram, BsTiktok, BsTwitterX} from "react-icons/bs"

const HeaderTop = () => {
  return ( <div className="border-b border-gray 200 hidden sm:block">
    <div className="container py-4">
      <div  className="flex justify-between items-center">
        <div className="hidden lg:flex gap-1">
          <div className="header_top_icon_wrapper">
            <BsFacebook/>
          </div>
          <div className="header_top_icon_wrapper">
            <BsTwitterX/>
          </div>
          <div className="header_top_icon_wrapper">
            <BsInstagram/>
          </div>
          <div className="header_top_icon_wrapper">
            <BsTiktok/>
          </div>
        </div>
        <div className="text-gray 500 text-[12px">
          <b>OFERTAS DE VERANO</b>  POR MENOS DE $50.000
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeaderTop;
