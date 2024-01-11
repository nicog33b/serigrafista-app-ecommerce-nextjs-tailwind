import Swal from 'sweetalert2';

const apiUrl = 'http://localhost:3000'; // Update the API URL according to your configuration

const handleResponse = async (response) => {
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
};

const checkEmailAvailability = async (email) => {
    try {
      const response = await fetch(`${apiUrl}/auth/check-email?email=${email}`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error checking email availability:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al verificar la disponibilidad del correo electrónico. Por favor, intenta nuevamente.',
      });
      throw error;
    }
  };
  

const login = async (credentials) => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await handleResponse(response);

    return data;
  } catch (error) {
    console.error('Error de red:', error.message);
    Swal.fire({
      icon: 'error',
      title: 'Error de red',
      text: 'Error de red, intenta más tarde',
    });
    throw error;
  }
};

const getUserData = async (userId, token) => {
  try {
    const response = await fetch(`${apiUrl}/auth/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `${token}`,
      },
    });

    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('Error al obtener datos de usuario:', error.message);
    throw error;
  }
};

const register = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    Swal.fire({
      icon: 'error',
      title: 'Error al registrar usuario',
      text: 'Hubo un problema al registrar el usuario. Por favor, intenta nuevamente.',
    });
    throw error;
  }
};

export { login, getUserData, register,checkEmailAvailability };
