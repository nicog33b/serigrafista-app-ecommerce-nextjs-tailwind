import React, {useEffect, useState} from 'react';
import { SlArrowRight } from 'react-icons/sl';


const NavigationButtons = ({ }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
      // Check if user data exists in localStorage
      const userDataString = localStorage.getItem('user');
      setIsUserAuthenticated(!!userDataString);
    }, []);
  

  const handleLogout = () => {
    // Borrar todos los datos en localStorage
    localStorage.clear();
    window.location.reload(); 
  };


  const handleGoToHome = () => {
    window.location.href = '/';
    // Cerrar el modal
    onClose();
  };


  // Funciones de linkeado del nav aside

  const handleGoToColeccionables = () => {
    window.location.href = 'shop';
  };

  const handleGoToPersonaliza = () => {
    window.location.href = 'personaliza';
  };

  const handleGoToSomos = () => {
    window.location.href = 'somos';
  };

  const handleGoToFrecuentes = () => {
    window.location.href = 'frecuentes';
  };

  
  const handleGoToPerfil = () => {
    window.location.href = 'perfil';
  };

  
  const handleGoToBuys = () => {
    window.location.href = 'compras';
  };



    return(
        <div className="flex flex-col items-center justify-center text-2xl">
        <hr className="w-full h-1 bg-gray-100 border-1 rounded" />
  
        <button
          onClick={handleGoToHome}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Inicio</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <button
          onClick={handleGoToColeccionables}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Coleccionables</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <button
          onClick={handleGoToPersonaliza}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Crea tu remera</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <hr className="w-full h-1 bg-gray-100 border-1 rounded" />
  
        <button
          onClick={handleGoToSomos}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span className='hover:text-green-500'>Mutageno</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <hr className="w-full h-1 bg-gray-100 border-1 rounded" />
  
        <button
          onClick={handleGoToFrecuentes}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Preguntas frecuentes</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <button
        onClick={handleGoToPerfil}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Privacidad</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        <button
        onClick={handleGoToBuys}
          className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Compras</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
  
        {isUserAuthenticated && (
        <button
          onClick={handleLogout}
          className="nav_link w-full my-2 p-4 text-left text-orange-200 rounded-md transition-all duration-300 hover:text-red-500 hover:bg-gray-200 hover:shadow-md"
        >
          <span className="flex items-center justify-between">
            <span>Cerrar Sesión</span>
            <SlArrowRight className="text-gray-400" />
          </span>
        </button>
      )}


        <hr className="w-full h-1 bg-gray-100 border-1 rounded" />
     

      </div>
    )
};

export default NavigationButtons;
