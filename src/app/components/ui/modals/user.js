import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa'; // Importa el ícono de usuario de React Icons
import { IoHomeOutline } from "react-icons/io5";
import './user/user.css'


const UserModal = ({ isOpen, onClose }) => {
  const [nombreDeUsuario, setNombreDeUsuario] = useState('');

  useEffect(() => {
    // Obtener nombre y apellido del localStorage
    const usuarioString = localStorage.getItem('user');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      console.log(usuario);

      const nombre = usuario.nombre;
      const apellido = usuario.apellido;

      // Concatenar nombre y apellido con un espacio en el medio
      const nombreCompleto = `${nombre} ${apellido}`;

      // Establecer el nombre de usuario en el estado
      setNombreDeUsuario(nombreCompleto);
    }
  }, []);

  if (!isOpen) return null;

  const handleLogout = () => {
    // Borrar todos los datos en localStorage
    localStorage.clear();
    window.location.reload();

    // Cerrar el modal
    onClose();
  };

  const handlePreguntas = () => {
    window.location.href = 'frecuentes';
    // Cerrar el modal
    onClose();
  };

  return (
    <>
      {/* Fondo borroso */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-20 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Botón de cierre fuera del modal */}
        <button onClick={onClose} className="absolute top-2 right-2 lg:right-4 sm:right-2 xs:right-4 text-lg text-gray-500 border-2 border-gray-500 bg-red-500 p-2 rounded-full" title="Cerrar Modal">
          <AiOutlineClose />
        </button>

        {/* Modal izquierdo */}
        <div className="fixed top-0 left-0 h-screen w-[22rem] bg-white border-2 border-black p-3 shadow-md z-30 rounded-xl ">
          <div className='h-full'>



  {/* Opciones de usuario */}
          <p id="nombreDeUsuario" className="mb-[3rem] flex items-center justify-center text-black p-6 font-serif text-xl bg-green-200">
  <FaUser className="mr-2 text-blue-600" /> {nombreDeUsuario}
</p>


    <div className="flex flex-col items-center justify-center text-2x">
      <hr className="w-full h-1 bg-gray-100 border-1 rounded" />

      <button
        onClick={handlePreguntas}
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Inicio</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <button
        onClick={handlePreguntas}
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Coleccionables</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <button
        onClick={handlePreguntas}
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Crea tu remera</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <hr className="w-full h-1 bg-gray-100 border-1 rounded" />

      <button
        onClick={handlePreguntas}
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Mutageno</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <hr className="w-full h-1 bg-gray-100 border-1 rounded" />

      <button
        onClick={handlePreguntas}
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Preguntas frecuentes</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <button
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Privacidad</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <button
        className="nav_link w-full my-2 p-4 text-left rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Compras</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>

      <button
        onClick={handleLogout}
        className="nav_link w-full my-2 p-4 text-left text-orange-200 rounded-md transition-all duration-300 hover:text-red-500 hover:bg-gray-100 hover:shadow-md"
      >
        <span className="flex items-center justify-between">
          <span>Cerrar Sesión</span>
          <SlArrowRight className="text-gray-400" />
        </span>
      </button>
    </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
