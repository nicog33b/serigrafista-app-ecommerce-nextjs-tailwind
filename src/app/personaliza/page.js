 'use client';
 import React,{useState} from 'react'
 import './personalizada.css';

 
 const Personaliza = () => {
  // Estado para almacenar el espacio actualmente seleccionado
  const [espacioSeleccionado, setEspacioSeleccionado] = useState(null);

  // Función para manejar el clic en los botones de espacio
  const handleEspacioClick = (espacioId) => {
    // Cambiar el espacio seleccionado
    setEspacioSeleccionado(espacioId);

    // Cambiar la opacidad de los elementos según el espacio seleccionado
    for (let i = 1; i <= 7; i++) {
      const elemento = document.getElementById(`espacio-${i}`);
      if (i === espacioId) {
        // Establecer opacidad al 50% para el espacio seleccionado
        elemento.style.opacity = '0.5';
      } else {
        // Establecer opacidad a 0 para los demás espacios
        elemento.style.opacity = '0';
      }
    }
  };


   return (
    <div>
      <div className="bg-white py-8">
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
                {/* Div negro encima de la imagen */}

                {/* espacio-1 remera de frente con espacio en el pecho. */}
                <div id='espacio-1' className="absolute top-[35%] left-1/2 transform -translate-x-[48%] -translate-y-1/2 w-[28%] h-1/4 bg-black opacity-0"></div>
                {/* espacio-2 pecho con espacio mas amplio */}
              <div id='espacio-2' className=" absolute top-[50%] left-1/2 transform -translate-x-[48%] -translate-y-1/2 w-[26%] h-2/4 bg-black opacity-0"></div>
               {/* espacio-3 espalda arriba */}
              <div id='espacio-3' className=" absolute top-[29%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-[15%] bg-black opacity-0 "></div>
                 {/* espacio-4 espalda media */}
              <div id='espacio-4' className=" absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[45%] bg-black opacity-0"></div>
              {/* espacio-5 espalda abajo*/}
              <div id='espacio-5' className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"></div>
              {/* espacio-6 MANGAS IZQUIERDA*/}
              <div id='espacio-6' className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"></div>
              {/* espacio-7 MANGAS DERECHA*/}
              <div id='espacio-6' className=" absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[15%] bg-black opacity-0"></div>

         
              </div>


             <div className="flex -mx-2 mb-4">
                 <div className="w-1/2 px-2">
                     <button className="w-full bg-gray-900 dark:bg-gray-600 text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Agregar al carro</button>
                 </div>
                 <div class="w-1/2 px-2">
                     <button className="w-full bg-gray-200 dark:bg-gray-700 text-black py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Agregar a favoritos</button>
                 </div>
             </div>
         </div>
         <div className="md:flex-1 px-4">
             <h2 className="text-2xl font-bold text-black mb-2">Nombre de producto</h2>
             <p className="text-black text-sm mb-4">
                 Descripcion del producto
             </p>
             <div className="flex mb-4">
                 <div className="mr-4">
                     <span className="font-bold text-black">Precio:</span>
                     <span className="text-black">$29.99</span>
                 </div>
                 <div>
                     <span className="font-bold text-black">Disponible:</span>
                     <span className="text-black">En Stock</span>
                 </div>
             </div>

             <div class="mb-4">
                {/* COLORES A ELEGIR LA REMERA. */}
                 <span className="font-bold text-black">Color:</span>
                 <div className="flex items-center mt-2">
                     <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                     <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                     <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                     <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                 </div>
             </div>



             <div className="mb-4">
                   {/* TAMANIO DE LAS REMERAS */}
                 <span className="font-bold text-gray-700 dark:text-gray-300">Tamaño:</span>
                 <div className="flex items-center mt-2">
                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                 </div>
             </div>



                    {/* ESPACIO DE IMAGEENES START */}
             <div className="md:flex-1 px-4">
          <span className="font-bold text-black">Elegi el espacio y la imagen:</span>
          {/* Espacios */}
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5, 6, 7].map((espacio) => (
              <button
                key={espacio}
                id={`espacio-${espacio}-button`}
                className={`rounded bg-green-100 m-1 p-1 ${
                  espacioSeleccionado === espacio ? 'bg-yellow-100' : ''
                }`}
                onClick={() => handleEspacioClick(espacio)}
              >
                {`Espacio ${espacio}`}
              </button>
            ))}
          </div>
              </div>

                    {/* ESPACIO DE IMAGEENES END */}


                    {/*DESCRIPCION START */}


             <div>
                 <span className="font-bold text-gray-700 dark:text-gray-300">Descripcion:</span>
                 <p className="text-black text-sm mt-2">
                     sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                 </p>
             </div>
             

                    {/*DESCRIPCION END */}

         </div>
     </div>
 </div>
</div>


 </div>
   )
 }
 
 export default Personaliza