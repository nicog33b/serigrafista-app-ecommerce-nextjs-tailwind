import React from 'react';
import FiltroAside from '../components/shop/filtroAside';
import ProductCard from '../components/shop/cardProduct';

const Tienda = () => {
  return (
    <div className="flex">
      {/* Filtro Aside habilitado en pc / desabilitado en phone*/}

 <FiltroAside></FiltroAside>

      {/* Contenido principal */}
      <main className="w-3/4 p-4">
        {/* Contenido principal de tu página, como la lista de productos */}
        <section className="productos">
          {/* Aquí van tus productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* Otros detalles del producto */}
          </div>
          {/* ... más productos ... */}
        </section>
      </main>
    </div>
  );
};

export default Tienda;
