import React from 'react';

import './user/user.css';
import NavigationButtons from './user/navigationButtons';
import UserName from './user/nameInModal';

const UserModal = ({ isOpen, onClose }) => {


  const handleBackgroundClick = (event) => {
    // Verificar si el clic se realizó en el fondo borroso
    if (event.target.classList.contains('bg-opacity-50')) {
      // Cerrar el modal
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo borroso */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 z-20 ${isOpen ? 'block' : 'hidden'}`}
        onClick={handleBackgroundClick}
      >

    
        {/* Modal izquierdo */}
        <div className="fixed top-0 left-0 h-screen w-[22rem] bg-white border-2 border-black p-3 shadow-md z-30 rounded-xl overflow-y-auto">
    {/* nameInModal.js // name of the user in the top of modal aside.  */}
    <UserName/>
        
          <div className='h-full'>
            <NavigationButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
