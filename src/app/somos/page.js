'use client'
import React, { useState, useEffect } from 'react';
import './somos.css'

const Somos = () => {
  const [showSection1, setShowSection1] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setShowSection1(false);
      } else {
        setShowSection1(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>

        <div className="container mx-auto flex flex-col items-center">
        <div className='fondoNegroTransparente p-3 py-6 px-3 w-full text-center '>
      <h2 className="text-4xl font-bold mb-8 text-green-300">Serigrafista con 11 años de experiencia </h2>
    </div>
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src="/matiAlbin.jpg"  // Reemplaza con la ruta de tu imagen
                alt="Nosotros"
                className="w-full h-auto rounded-md shadow-md object-cover"
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Praesent suscipit sem nec leo varius, vitae aliquet
                neque lobortis. Integer ut bibendum odio. Proin nec imperdiet
                eros. Vestibulum eu ex vel elit hendrerit auctor a sit amet
                lectus.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sed convallis dolor sed ipsum cursus, eget varius lectus
                condimentum. Phasellus auctor leo vel nunc congue, eget
                ullamcorper velit aliquam. Sed cursus euismod diam, nec cursus
                odio fermentum a.
              </p>
            </div>
          </div>
        </div>
   


        <div className="container mx-auto flex flex-col items-center">

        <div className='fondoNegroTransparente p-3 py-6 px-3  w-full text-center '>
      <h2 className="text-4xl font-bold mb-8 text-green-300">Talleres</h2>
    </div>
    

          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Praesent suscipit sem nec leo varius, vitae aliquet
                neque lobortis. Integer ut bibendum odio. Proin nec imperdiet
                eros. Vestibulum eu ex vel elit hendrerit auctor a sit amet
                lectus.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sed convallis dolor sed ipsum cursus, eget varius lectus
                condimentum. Phasellus auctor leo vel nunc congue, eget
                ullamcorper velit aliquam. Sed cursus euismod diam, nec cursus
                odio fermentum a.
              </p>
            </div>

            <div className="md:w-1/2 mb-4 md:mb-0 ">
              <img
                src="/taller1.jpeg "  // Reemplaza con la ruta de tu imagen
                alt="Nosotros"
                className="w-full h-[900px] rounded-md shadow-md "
              />
            </div>

            <div className='flex justify-center items-center  mt-4 mb-4'>
              <button className='bg-green-600 text-white hover:text-green-800 py-2 px-4 rounded-full text-center focus:outline-none'>
                ¡Inscríbete al taller!
              </button>
            </div>
          </div>
        </div>


    </div>
  );
};

export default Somos;
