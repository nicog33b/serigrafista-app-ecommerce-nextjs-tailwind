import React from "react";
import Link from 'next/link'


const NavbarOptions = () => {

  return (
    
    <div className='hidden  lg:block'>
<div className="container">
  <div className="flex w-fit gap-10 mx-auto font-extrabold py-4 text-blackish mb-12">

     <Link className="navbar_link relative" href='http://localhost:3000/'>Inicio</Link>
     <Link className="navbar_link relative" href='http://localhost:3000/shop'>Colecciones</Link>
     <Link className="navbar_link relative" href='http://localhost:3000/productReview'>Estampadas</Link>
     <Link className="navbar_link relative" href='http://localhost:3000/personaliza'>Crea tu remera</Link>
     <Link className="navbar_link relative" href='http://localhost:3000/somos'>Somos</Link>
  </div>
</div>

    </div>


  );
};

export default NavbarOptions;
