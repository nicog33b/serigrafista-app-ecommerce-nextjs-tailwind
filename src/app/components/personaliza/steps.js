import React from 'react';

const Steps = () => {
  return (
    <div className="flex justify-center mb-[6rem]">
    
    {/*  
    
    bg-yellow-500 / FALTAN DATOS PARA LLENAR.
    bg-green-500 / ESTA SECCION YA ESTA LISTA.
    bg-gray-500 / SECCION QUE NO HA SIDO MODIFCADA.
    
    */}


      <div className="flex items-center space-x-5 mb-[rem]">
        <div className="flex items-center justify-center w-3 h-3 border-2 rounded-full bg-yellow-500 border-black">
          <div className="w-1 h-1  rounded-full"></div>
        </div>
        <div className="flex items-center justify-center w-3 h-3 border-2 bg-green-500 border-black rounded-full">
          <div className="w-1 h-1  rounded-full"></div>
        </div>
        <div className="flex items-center justify-center w-3 h-3 border-2 bg-green-500 border-black rounded-full">
          <div className="w-1 h-1  rounded-full"></div>
        </div>
        <div className="flex items-center justify-center w-3 h-3 border-2 bg-green-500 border-black rounded-full">
          <div className="w-1 h-1  rounded-full"></div>
        </div>
      </div>
   


    </div>
    
  );
};

export default Steps;