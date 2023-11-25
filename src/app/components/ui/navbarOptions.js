import React from "react";
import Link from 'next/link'


const NavbarOptions = () => {

  return (
    
    <div className='hidden  lg:block'>
<div className="container">
  <div className="flex w-fit gap-10 mx-auto font-meduium py-4 text-blackish">

     <Link className="navbar_link relative" href='#'>Inicio</Link>
     <Link className="navbar_link relative" href='#'>Crea tu remera</Link>
     <Link className="navbar_link relative" href='#'>Somos</Link>
     <Link className="navbar_link relative" href='#'>Talleres</Link>
  </div>
</div>

    </div>


  );
};

export default NavbarOptions;
