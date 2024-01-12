'use client';
import React, { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import UserModal from "./modals/user";


const NavbarMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);


  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const openUserModal = () => {
    setUserModalOpen(true);
  };

  const closeUserModal = () => {
    setUserModalOpen(false);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div
      className={`border-b border-gray-200 py-1 ${
        isScrolled ? "fixed top-0 w-full bg-white shadow-md" : ""
      }`}
      style={{ zIndex: 5 }}
    >
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
        <img className="mx-auto h-[6rem] w-auto " src="/mutagenoLogoT.jpg" alt="logo" />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
         
            <BiUser className="hover:text-green-500 cursor-pointer" onClick={openUserModal} />
       
          <div className="relative">
            <FiHeart className="hover:text-yellow-500 cursor-pointer" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag className="hover:text-red-500 cursor-pointer" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>


        <UserModal isOpen={isUserModalOpen} onClose={closeUserModal} />
    



    </div>
  );
};

export default NavbarMain;
