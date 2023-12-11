// components/Hoodies.js
import React from 'react';
import './hoodies.css'
const Hoodies = () => {
  return (
    <div className='container'>
    <div className="product-grid-container mb-0 m-1 ">
      <div className="product-container ">
        <h1 className='font-sans'>Mujeres</h1>
        <div className="product-image-wrapper border hover:border-pink-400">
          <img src="/Black.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container ">
        <h1 className='font-sans'>Hombres</h1>
        <div className="product-image-wrapper border hover:border-blue-400">
          <img src="/White.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container">
        <h1 className='font-sans'>Niños</h1>
        <div className="product-image-wrapper border hover:border-green-400">
          <img src="/niños.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container ">
        <h1 className='font-sans'>Estampadas</h1>
        <div className="product-image-wrapper border hover:border-yellow-400">
          <img src="/createyourprint.jpg" alt="" className="product-image" />
        </div>
      </div>
    </div>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-8">
        {/* Aquí van tus dos rectángulos */}
        <div className="bg-gray-200 p-4 h-[12rem]">
        <div className="product-image-wrapper border hover:border-yellow-400">
          <img src="/createyourprint.jpg" alt="" className="product-image" />
        </div>
        </div>
        <div className="bg-gray-200 p-4 h-[12rem]">
        <div className="product-image-wrapper border hover:border-yellow-400">
          <img src="/createyourprint.jpg" alt="" className="product-image" />
        </div>
        </div>
      </div>
    </div>


{/*
      <div class="mt-16 grid grid-cols-2 gap-4 p-4">
    <div class="bg-gray-100 p-4">
        <img className='' src='/coleccionables.jpg'></img>
    </div>
    <div class="bg-gray-100 p-4">Item 2</div>

</div>
*/}
    



    </div>
  );
};

export default Hoodies;
