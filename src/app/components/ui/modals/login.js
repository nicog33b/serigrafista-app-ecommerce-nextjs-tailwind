import React from 'react';
import jwt from 'jsonwebtoken';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import RegistrationModal from './register';

const LoginModal = ({ isOpen, onClose }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  if (!isOpen) return null;

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
  
        try {
          const storedToken = localStorage.getItem('token');
          console.log(storedToken);
  
          // Decodificar el token para obtener el _id
          const decodedToken = jwt.decode(storedToken);
          const userId = decodedToken._id;
  
          const usersResponse = await fetch(`http://localhost:3000/auth/users/${userId}`, {
            method: 'GET',
            headers: {
              'Authorization': `${storedToken}`,
            },
          });
   
          if (usersResponse.ok) {
            const usersData = await usersResponse.json();
            console.log('Respuesta de /users:', usersData);
            localStorage.setItem ('user', JSON.stringify(usersData));
            window.location.reload();
          } else {
            console.error('Error al obtener usuarios:', usersResponse.statusText);
          }
        } catch (error) {
          console.error('Error de red al obtener usuarios:', error.message);
        }
  
        onClose();
      } else {
        console.error('Error de inicio de sesión:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error.message);
    }
  };
  

  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ zIndex: 25 }}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-end pr-4 pt-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:w-full">
                <img className="mx-auto h-[6rem] w-auto " src="/mutagenoLogoT.jpg" alt="logo" />
                <h6 className="text-lg leading-6 font-medium text-gray-900 text-center">
                  Ingreso de usuario
                </h6>

                <form className="mt-6 space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={credentials.email}
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                  ¿No tienes cuenta? <span className="text-green-600"> <a  onClick={openRegisterModal} className='cursor-pointer'> Regístrate </a> </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegistrationModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
};

export default LoginModal;
