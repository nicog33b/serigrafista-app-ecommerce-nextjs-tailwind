// components/DeleteAccountPrompt.js
import React, { useState } from 'react';

const DeleteAccountPrompt = ({ onDeleteAccount }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleConfirmToggle = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleDeleteAccount = () => {
    onDeleteAccount(); // Aquí deberías implementar la lógica para eliminar la cuenta
  };

  return (
    <div className="container mx-auto mt-4 text-center">
      <div className="max-w-md mx-auto p-2 bg-white">
        <h2 className="text-2xl font-serif mb-4">Eliminar Cuenta</h2>

        {!confirmDelete ? (
          <>
            <button
              onClick={handleConfirmToggle}
              className="ml-auto bg-red-300 text-white px-4 py-2 rounded-md mr-2"
            >
              Sí, quiero eliminar mi cuenta
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleDeleteAccount}
              className="ml-auto bg-red-300 text-white px-4 py-2 rounded-md mr-2"
            >
              Confirmar Eliminación
            </button>
            <button
              onClick={handleConfirmToggle}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
            >
              Volver
            </button>
          </>
        )}
      </div>
      <p className="text-sm text-red-400 mt-2] text-center">Esta acción no se puede deshacer.</p>
    </div>
  );
};

export default DeleteAccountPrompt;
