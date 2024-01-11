






// components/PerfilInfo.js

import React from 'react';

const PerfilInfo = ({ isEditing, handleInputChange, email, nombre, apellido, numero, handleToggleEditing }) => {
  return (
    <div className="lg:w-1/2 mb-4 lg:mb-0 mr-2">

<div className='bg-green-200 rounded-lg shadow-lg w-[30rem] mx-auto'>   
<h1 className='font-bold text-xl text-center text-black'>Informacion personal</h1>
</div>

     
    <div className='max-w-lg mx-auto bg-white p-4 rounded shadow-md my-3'>
   
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Email:</label>
        <input
          type='text'
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
          className={`bg-gray-100 border border-gray-300 p-2 w-full rounded ${isEditing ? '' : 'cursor-not-allowed'}`}
          disabled={!isEditing}
        />
      </div>
    
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Nombre:</label>
        <input
          type='text'
          value={nombre}
          onChange={(e) => handleInputChange(e, setNombre)}
          className={`bg-gray-100 border border-gray-300 p-2 w-full rounded ${isEditing ? '' : 'cursor-not-allowed'}`}
          disabled={!isEditing}
        />
      </div>
    
      <div className='mb-4'>
        <label className='block text-gray-600 mb-2'>Apellido:</label>
        <input
          type='text'
          value={apellido}
          onChange={(e) => handleInputChange(e, setApellido)}
          className={`bg-gray-100 border border-gray-300 p-2 w-full rounded ${isEditing ? '' : 'cursor-not-allowed'}`}
          disabled={!isEditing}
        />
      </div>
    
      <div>
        <label className='block text-gray-600 mb-2'>Número:</label>
        <input
          type='text'
          value={numero}
          onChange={(e) => handleInputChange(e, setNumero)}
          className={`bg-gray-100 border border-gray-300 p-2 w-full rounded ${isEditing ? '' : 'cursor-not-allowed'}`}
          disabled={!isEditing}
        />
      </div>
    
      <div className='text-center'>
      <button
        className={`bg-blue-400 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 ${isEditing ? 'bg-green-500' : ''}`}
        onClick={handleToggleEditing}
      >
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
    </div>
    
    </div>
    
    
    
    
    </div>
  );
};

export default PerfilInfo;




















