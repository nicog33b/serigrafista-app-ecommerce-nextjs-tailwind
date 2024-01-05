import React from 'react';
import './productCard.css';

const ProductCard = () => {

  const coloresConCodigoHex = [
    { nombre: 'Beige', codigoHex: '#F5F5DC' },
    { nombre: 'Amarillo', codigoHex: '#FFFF00' },
    { nombre: 'Naranja', codigoHex: '#FFA500' },
    { nombre: 'Rojo', codigoHex: '#FF0000' },
    { nombre: 'Rosa', codigoHex: '#FFC0CB' },
    { nombre: 'Violeta', codigoHex: '#8A2BE2' },
    { nombre: 'Azul', codigoHex: '#0000FF' },
    { nombre: 'Verde', codigoHex: '#008000' },
    { nombre: 'Marrón', codigoHex: '#A52A2A' },
    { nombre: 'Gris', codigoHex: '#808080' },
    { nombre: 'Blanco', codigoHex: '#FFFFFF' },
    { nombre: 'Negro', codigoHex: '#000000' },
    { nombre: 'Multicolor', codigoHex: '#FFFFFF' }, // No sé qué código asignar para "Multicolor"
    { nombre: 'Patrón', codigoHex: '#FFFFFF' } // No sé qué código asignar para "Patrón"
  ];

  
  return (
    <div className='card-id w-full'>
      <div className="card">
        <img
          src="https://f.fcdn.app/imgs/5e919a/www.indiewears.uy/iweauy/448c/webp/catalogo/C0300_423_2/2000-2000/camiseta-a-la-base-peso-completo-gris-carbon.jpg"
          alt="t-shirt"
        ></img>

        <section className="details">
          <div className="min-details">
            <h1>Remera <span>azul</span></h1>
            <h1 className="price">$45.99</h1>
          </div>

          <div className="options">
            <div className="options-size">
              <h1>Tamaños</h1>
              <ul className="flex">
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">xs</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">s</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">m</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">l</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">xl</li>
              </ul>
            </div>

            <div className="options-colors">
              <h1>Colores</h1>
              <ul className="flex">
                <li className="border-none h-8 w-8 flex items-center justify-center mr-2 bg-red-500"></li>
                <li className="border-none h-8 w-8 flex items-center justify-center mr-2 bg-black"></li>
                <li className="border-none h-8 w-8 flex items-center justify-center mr-2 bg-red-700"></li>
                <li className="border-none h-8 w-8 flex items-center justify-center mr-2 bg-pink-400"></li>
                <li className="border-none h-8 w-8 flex items-center justify-center mr-2 bg-indigo-800"></li>
              </ul>
            </div>
          </div>
          <a href="#" className="btn">
            Agregar al carro
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
