"use client";
import React, { useState } from "react";
import "./personalizada.css";
import Steps from "../components/personaliza/steps";
import TallaSelector from "../components/personaliza/talleSelector";
import Espacios from "../components/personaliza/espacios";
import UploadImage from "../components/personaliza/uploadImage";

const Personaliza = () => {
// Estado para almacenar el espacio actualmente seleccionado
const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);

// Array de las imágenes subidas por el usuario, inicialmente todas null
const [imagenes, setImagenes] = useState(Array(7).fill(null));



  // Función para manejar el clic en los botones de espacio
  const handleEspacioClick = (espacioId) => {
    // Cambiar el espacio seleccionado
    setEspacioSeleccionado(espacioId);

    // Cambiar la opacidad de los elementos según el espacio seleccionado
    for (let i = 1; i <= 7; i++) {
      const elemento = document.getElementById(`espacio-${i}`);
      if (i === espacioId) {
        // Establecer opacidad al 50% para el espacio seleccionado
        elemento.style.opacity = "0.5";
      } else {
        // Establecer opacidad a 0 para los demás espacios
        elemento.style.opacity = "0";
      }
    }
  };


// Función para manejar la URL de la imagen subida
const handleImageUploaded = (imageUrl) => {
  // Imprimir el espacio seleccionado en la consola
  console.log('ESPACIO SELECCIONADO:', espacioSeleccionado);

  // Actualizar el array de imágenes con la URL de la última imagen subida
  setImagenes((prevImagenes) => {
    const nuevasImagenes = [...prevImagenes];
    nuevasImagenes[espacioSeleccionado - 1] = imageUrl; // Restar 1 porque los índices de array comienzan desde 0
    return nuevasImagenes;
  });

  // Obtener el elemento correspondiente al espacio seleccionado
  const elemento = document.getElementById(`espacio-${espacioSeleccionado}`);

  // Actualizar la imagen de fondo con la URL de la última imagen subida
  elemento.style.backgroundImage = `url(${imageUrl})`;

  // Imprimir la URL de la última imagen subida en la consola
  console.log('URL de la última imagen subida:', imageUrl);

  
console.log(imagenes)

};


  return (
    <div>
      <div className="bg-white py-8 mb-[3rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              {/* Imagen a personalizar */}
              <div className="relative h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="/peso-completo/gris.webp"
                  alt="Product Image"
                />

                {/* MUESTRA LOS ESPACIOS DONDE EL USUARIO QUIERE ESTAMPAR. */}

                <div
  id="espacio-1"
  className="absolute top-[35%] left-1/2 transform -translate-x-[48%] -translate-y-1/2 w-[28%] h-1/4 bg-black opacity-0 bg-no-repeat bg-center"
  style={{
    backgroundImage: "url()",
    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
    backgroundPosition: "center", // Centrar la imagen
    backgroundRepeat: "no-repeat", // No repetir la imagen
  }}
>
 
</div>

                {/* espacio-2 pecho con espacio mas amplio */}
                <div
                  id="espacio-2"
                  style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[50%] left-1/2 transform -translate-x-[48%] -translate-y-1/2 w-[26%] h-2/4 bg-black opacity-0"
                ></div>
                {/* espacio-3 espalda arriba */}
                <div
                  id="espacio-3"
                   style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[29%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-[15%] bg-black opacity-0 "
                ></div>
                {/* espacio-4 espalda media */}
                <div
                  id="espacio-4"
                  style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[45%] bg-black opacity-0"
                ></div>
                {/* espacio-5 espalda abajo*/}
                <div
                  id="espacio-5"
                  style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"
                ></div>
                {/* espacio-6 MANGAS IZQUIERDA*/}
                <div
                  id="espacio-6"
                  style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"
                ></div>
                {/* espacio-7 MANGAS DERECHA*/}
                <div
                  id="espacio-7"
                  style={{
                    backgroundImage: "url()",
                    backgroundSize: "100% 100%", // Estirar la imagen para cubrir completamente el contenedor
                    backgroundPosition: "center", // Centrar la imagen
                    backgroundRepeat: "no-repeat", // No repetir la imagen
                  }}
                  className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"
                ></div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <div className="mb-4">
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>

              {/* Seleccionar tallas */}
              <TallaSelector></TallaSelector>

              {/* Espacios de estampado */}

              <Espacios
                espacioSeleccionado={espacioSeleccionado}
                handleEspacioClick={handleEspacioClick}
              />

<UploadImage onImageUploaded={handleImageUploaded} />
            </div>
          </div>
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default Personaliza;
