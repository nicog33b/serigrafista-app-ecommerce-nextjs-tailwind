import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

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

  return (
    <div className="fixed top-0 right-0 h-screen w-[12rem] bg-gray-50 p-1 shadow-md" style={{ zIndex: 25 }}>
      <div className='h-full'>
        {/* Botón de cierre */}
        <div className='text-right'>
          <button onClick={onClose} className="text-lg text-gray-500" title="Cerrar Modal">
            <AiOutlineClose />
          </button>
        </div>
        {/* Mostrar nombre de usuario */}
        <p id="nombreDeUsuario" className="text-center text-gray-500">
          {nombreDeUsuario}
        </p>
        {/* Opciones de usuario */}
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Preguntas frecuentes</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Información personal</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Cambiar Contraseña</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Métodos de pago</button>
        <button className="block my-2 ml-1 p-1 hover:text-green-500">Compras</button>
        <button onClick={handleLogout} className="block my-2 ml-1 p-1 hover:text-green-500">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default UserModal;
