// components/Hoodies.js
import React from 'react';
import './hoodies.css'



const Hoodies = () => {
  return (
    <div className='container'>
    <div className="product-grid-container mb-0 m-1 ">
      <div className="product-container ">
      
        <div className="product-image-wrapper border hover:border-green-400 cursor-pointer">
          <img src="/fem1.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container ">
     
        <div className="product-image-wrapper border hover:border-green-400 cursor-pointer">
          <img src="/white3.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container">
    
        <div className="product-image-wrapper border hover:border-green-400 cursor-pointer">
          <img src="/niños.jpg" alt="" className="product-image" />
        </div>
      </div>
      <div className="product-container ">
       
        <div className="product-image-wrapper border hover:border-green-400 cursor-pointer">
          <img src="/adolescentes3.jpg" alt="" className="product-image " />
        </div>
      </div>
    </div>

    <div className="container mx-auto p-4">
  <div className="grid  lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-8">
 
    <div className="bg-gray-200 p-4 h-[12rem]">
      <div className="product-image-wrapper border hover:border-green-400 cursor-pointer">
        <img src="/estampadas2.jpg" alt="" className="product-image banner-option h-full w-full" />
      </div>
    </div>


    <div className="bg-gray-200 p-4 h-[12rem]">
      <div className="product-image-wrapper border hover:border-green-400 cursor-pointer h-full w-full">
        <img src="/coleccionables6.jpg" alt="" className="product-image banner-option" />
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
