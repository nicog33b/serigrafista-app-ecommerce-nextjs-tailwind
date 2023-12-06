// components/FiltroAside.js
import React from 'react';

const FiltroAside = () => {
  return (
    <aside className="w-1/4 p-4">
      {/* Contenido del filtro, como opciones de categorías, colores, etc. */}
      <h2 className="text-xl font-semibold mb-4">Filtrar por:</h2>
      {/* Agrega aquí las opciones de filtro, por ejemplo: */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Categoría:</label>
        <select className="mt-1 p-2 border border-gray-300 rounded-md w-full">
          {/* Opciones de categoría */}
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          {/* ... otras opciones ... */}
        </select>
      </div>
      {/* Agrega más opciones de filtro según tus necesidades */}
    </aside>
  );
};

export default FiltroAside;
