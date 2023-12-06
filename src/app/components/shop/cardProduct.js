import React from 'react';
import './productCard.css';

const ProductCard = () => {
  return (
    <div className='card-id'>
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
              <h1>sizes</h1>
              <ul className="flex">
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">xs</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">s</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">m</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">l</li>
                <li className="border border-solid border-gray-500 rounded-full cursor-pointer h-8 w-8 flex items-center justify-center mr-2">xl</li>
              </ul>
            </div>

            <div className="options-colors">
              <h1>colors</h1>
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
            add to cart
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
