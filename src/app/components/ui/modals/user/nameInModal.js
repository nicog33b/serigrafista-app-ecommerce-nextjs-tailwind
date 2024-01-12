import React, { useState, useEffect } from 'react';

import LoginModal from '../login';


const UserName = () => {
  const [nombreDeUsuario, setNombreDeUsuario] = useState('');
const [isLoginModalOpen, setLoginModalOpen] = useState(false);

const openLoginModal = () => {
  setLoginModalOpen(true);
  };
  
  const closeLoginModal = () => {
  setLoginModalOpen(false);
  };
  

  useEffect(() => {
    // Obtener nombre y apellido del localStorage
    const usuarioString = localStorage.getItem('user');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      const nombre = usuario.nombre;
      const apellido = usuario.apellido;

      // Concatenar nombre y apellido con un espacio en el medio
      const nombreCompleto = `${nombre} ${apellido}`;

      // Establecer el nombre de usuario en el estado
      setNombreDeUsuario(nombreCompleto);
    }
  }, []);

  const handleGoToPrivacity = () => {
    window.location.href = 'perfil';
  };

  return (
    <div>
      {/* Opciones de usuario */}
      {nombreDeUsuario ? (
        <p
        style={{ backgroundColor: '#94ffa3' }}
          id="nombreDeUsuario"
          onClick={handleGoToPrivacity}
          className="shadow-lg shadow-black rounded-lg border-2 border-blue-300  mb-[3rem] flex items-center justify-center text-black p-6 font-bold text-2xl  my-auto w-full cursor-pointer"
        >
          {nombreDeUsuario}
        </p>
      ) : (
        <p
        style={{ backgroundColor: '#94ffa3' }}
        id="nombreDeUsuario"
          onClick={openLoginModal}
          className="shadow-lg shadow-black rounded-lg border-2 border-blue-300  mb-[3rem] flex items-center justify-center text-black p-6 font-bold text-2xl  my-auto w-full cursor-pointer"
        >
          Entrar / Registrarse
        </p>
      )}

       {/*
      MODALS
      */}
      
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

    </div>
  );
};

export default UserName;
