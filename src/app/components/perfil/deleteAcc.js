import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteUserAccount } from '@/app/services/api/usuario/usuario';

const DeleteAccountPrompt = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleConfirmToggle = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleDeleteAccount = async () => {
    try {
      // Retrieve user data and token from localStorage
      const userDataString = localStorage.getItem('user');
      const token = localStorage.getItem('token');
  
      if (!userDataString || !token) {
        console.error('User data or token not found in localStorage');
        return;
      }
  
      // Parse user data to get the _id
      const user = JSON.parse(userDataString);
      const userId = user._id;
  
      // Show a confirmation dialog using SweetAlert2
      const { isConfirmed } = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, quiero eliminar mi cuenta',
      });
  
      if (isConfirmed) {
        // Use deleteUserAccount function instead of direct fetch
        const isDeleted = await deleteUserAccount(userId, token);
  
        if (isDeleted) {
          // Remove user's _id from localStorage
          localStorage.removeItem('user');
  
          // Show a success message using SweetAlert2
          Swal.fire({
            title: 'Cuenta eliminada',
            icon: 'success',
            timer: 2000, // Close after 2 seconds
            showConfirmButton: false,
          }).then(() => {
            // Optional: Redirect or perform any cleanup
            // For example, you can redirect to the homepage:
            window.location.href = '/';
          });
        } else {
          // Show an error message using SweetAlert2
          Swal.fire({
            title: 'Error',
            text: 'No se pudo eliminar la cuenta.',
            icon: 'error',
          });
        }
      }
    } catch (error) {
      console.error('Error deleting user account:', error);
    }
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
      <p className="text-sm text-red-400 mt-2 text-center">Esta acción no se puede deshacer.</p>
    </div>
  );
};

export default DeleteAccountPrompt;
