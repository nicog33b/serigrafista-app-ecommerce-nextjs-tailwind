'use client';

import React, { useState } from 'react';
import NotificationSettings from '../components/perfil/notifcation';
import PerfilInfo from '../components/perfil/userInfo';
import ChangePassword from '../components/perfil/changePassword';
import DeleteAccountPrompt from '../components/perfil/deleteAcc';

function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('ejemplo@email.com');
  const [nombre, setNombre] = useState('Nombre');
  const [apellido, setApellido] = useState('Apellido');
  const [numero, setNumero] = useState('123456789');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

const handleBackToHome = () => {
window.location.href = '/';
}

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña
    console.log('Cambiar contraseña:', oldPassword, newPassword, confirmNewPassword);
  };

  return (
    <div>
      <hr />
      <h1 className='text-3xl font-serif mb-4 text-center'>Perfil</h1>
      <hr className='mb-6' />



      <div className="flex flex-col lg:flex-row justify-between p-4 mb-[2rem] mt-[6rem]">

      {/* Renderiza el componente PerfilInfo       a la izquierda.*/}
      <PerfilInfo
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        email={email}
        nombre={nombre}
        apellido={apellido}
        numero={numero}
        handleToggleEditing={handleToggleEditing}
      />



      {/* Renderiza el componente ChangePassword      a la derecha */}
      <ChangePassword
        oldPassword={oldPassword}
        newPassword={newPassword}
        confirmNewPassword={confirmNewPassword}
        handleInputChange={handleInputChange}
        handleChangePassword={handleChangePassword}
      />


      
      <hr className='my-6' />


    </div>

    <hr></hr>


   <div  className='mb-6'>
      <NotificationSettings></NotificationSettings>
</div>
   
      <hr className=''></hr>
     <DeleteAccountPrompt></DeleteAccountPrompt>
      <hr className='mb-[3rem]'></hr>
    
<div className='text-center mb-[3rem]'>
  <button 

  className='rounded-md shadow-lg bg-green-300 p-3'
  onClick={handleBackToHome}
  >

    Volver al inicio

    </button>
</div>


    </div>
  );
}

export default Perfil;
