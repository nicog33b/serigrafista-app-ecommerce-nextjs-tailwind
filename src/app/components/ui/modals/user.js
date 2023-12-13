
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-screen w-[12rem] bg-gray-50 p-1 shadow-md"  style={{ zIndex: 25}}>
     <div className='h-full'>
        {/* Botón de cierre */}
        <div className='text-right'>
          <button onClick={onClose} className="text-lg text-gray-500" title="Cerrar Modal">
            <AiOutlineClose />
          </button>
        </div>

        {/* Opciones de usuario */}
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Preguntas frecuentes</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Información personal</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Cambiar Contraseña</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Metodos de pago</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Compras</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Cerrar Sesión</button>
      </div>

  </div>
         
     
  
  );
};

export default UserModal;
