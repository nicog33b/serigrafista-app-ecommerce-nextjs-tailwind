import React from "react";
import { BsFacebook,BsInstagram, BsBehance } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="  bg-green-700 text-white py-6 border-top border-blackish">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <nav className="flex flex-wrap gap-4 mb-6">
          <a className="hover:underline">Inicio</a>
          <a className="hover:underline">Crea tu remera</a>
          <a className="hover:underline">Somos</a>
          <a className="hover:underline">Talleres</a>
        </nav>
        <nav className="flex gap-4">
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <BsFacebook></BsFacebook>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <BsInstagram></BsInstagram>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <BsBehance></BsBehance>
            </svg>
          </a>
        </nav>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2023 - All rights reserved by Mutageno</p>
      </div>
    </footer>
  );
};

export default Footer;
