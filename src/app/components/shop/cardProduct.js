import React from 'react';
import Image from 'next/image'
import { MdOutlineAttachMoney } from "react-icons/md";
import ColorCarousel from './cardProduct/colorsCarrousel';

import './productCard.css';

const ProductCard = ({ tipo, tallas, precioUnitario, colores }) => {
  // Obtener la imagen frontal del primer color (asumiendo que siempre hay al menos un color)
  const imagenFrente = colores[0].imagenes.frente+'.webp' || '';


  const handleTesting = () =>{
  
  }

  return (
    <div className='card-id group hover:border-green-300 border-2'>
  <h1 className='p-1 shadow-md shadow-black font-bold text-sm text-center group-hover:border-green-300 group-hover:border-2'>
    {tipo} 
  </h1>


      <div className="card" style={{  }}>
        <Image
        className='cursor-pointer w-full h-full'
          src={imagenFrente}
          alt={`${tipo} - ${colores[0]?.nombre}`}
          layout="fill"
         

        ></Image>

        <section className="details ">
          <div className="min-details ">
            

            <h1 className="price flex items-center ">
  <div className="price text-green-500">
    <MdOutlineAttachMoney />
  </div>
  <div className="price ml-2 text-3xl font-bold"> {precioUnitario}</div>
</h1>


          </div>

          <div className="options">
            <div className="options-size">
              <h1>Tamaños</h1>
              <ul className="flex">
                {tallas.map((talla) => (
                  <li
                    key={talla._id}
                    className={`border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2 ${talla.disponible ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {talla.talle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              {/*Carrousel de colores disponibless*/}
             <ColorCarousel colores={colores} />
            </div>

          </div>
          
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
