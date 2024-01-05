// Importar las bibliotecas necesarias
import React, { useState } from 'react';

// Definir el componente UploadImage
const UploadImage = ({ onImageUploaded }) => {
  // Estado para almacenar la URL de la imagen
  const [image, setImage] = useState(null);

  // Función para manejar la subida de la imagen
  const handleImageUploadInternal = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    const apiKey = 'adbfeafcddb9646dd435ce2300f68d52';
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    // Establecer la URL de la imagen en el estado
    setImage(data.data.url);

    // Ejecutar la función de devolución de llamada con la URL de la imagen
    onImageUploaded(data.data.url);
  };

  // Renderizar el componente
  return (
    <div>
      <h1>{image}</h1>
      <input type="file" onChange={handleImageUploadInternal} />
    </div>
  );
};

// Exportar el componente
export default UploadImage;
