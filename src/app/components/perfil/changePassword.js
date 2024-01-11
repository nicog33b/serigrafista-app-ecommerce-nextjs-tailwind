// components/ChangePassword.js

import React from 'react';

const ChangePassword = ({ oldPassword, newPassword, confirmNewPassword, handleInputChange, handleChangePassword }) => {
  return (

    
    <div className="lg:w-1/2 text-center">
    
    <div className='bg-green-200 rounded-lg shadow-lg w-[30rem] mx-auto'>   
<h1 className='font-bold text-xl text-center text-black'>Cambiar contraseña</h1>
</div>


    <div className='max-w-lg mx-auto bg-white p-4 rounded shadow-md my-3'>
  
<div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Contraseña Actual:</label>
        <input
          type='password'
          value={oldPassword}
          onChange={(e) => handleInputChange(e, setOldPassword)}
          className='bg-gray-100 border border-gray-300 p-2 w-full rounded'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Nueva Contraseña:</label>
        <input
          type='password'
          value={newPassword}
          onChange={(e) => handleInputChange(e, setNewPassword)}
          className='bg-gray-100 border border-gray-300 p-2 w-full rounded'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Confirmar Nueva Contraseña:</label>
        <input
          type='password'
          value={confirmNewPassword}
          onChange={(e) => handleInputChange(e, setConfirmNewPassword)}
          className='bg-gray-100 border border-gray-300 p-2 w-full rounded'
        />
      </div>

      <div className='text-center'>
        <button
          className='bg-green-400 text-white py-2 px-4 rounded hover:bg-green-600'
          onClick={handleChangePassword}
        >
          Cambiar Contraseña
        </button>
      </div>
    </div>


  </div>
  );
};

export default ChangePassword;
