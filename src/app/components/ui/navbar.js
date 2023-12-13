
import { BsFacebook, BsInstagram, BsBehance } from 'react-icons/bs';

import React from "react";
const Navbar = () => {

  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsBehance />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>Remeras personalizadas</b> Personalizada por vos mismo! 
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="UYU $">UYU $</option>
              <option value="USD €">USD $</option>
             
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">Español</option>
            

            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
