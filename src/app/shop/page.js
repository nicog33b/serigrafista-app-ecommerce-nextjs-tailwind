'use client';
import React, {useState, useEffect} from 'react';
import FiltroAside from '../components/shop/filtroAside';
import ProductCard from '../components/shop/cardProduct';

const Tienda = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API
    fetch('http://localhost:3000/shop/ropa')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <div className="flex">
      {/* Filtro Aside habilitado en pc / desabilitado en phone*/}
        <FiltroAside/>
      {/* Contenido principal */}
      <main className="w-3/4 p-4">
        {/* Contenido principal de tu página, como la lista de productos */}
        <section className="productos">
    

           {/* Mostrar productos */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {productos.map(producto => (
              <ProductCard
                key={producto._id}
                tipo={producto.tipo}
                tallas={producto.tallas}
                precioUnitario={producto.precioUnitario}
                colores={producto.colores}
                estampado={producto.estampado}
                genero={producto.genero}

              />
            ))}

          </div>
        </section>
      </main>
    </div>
  );
};

export default Tienda;
