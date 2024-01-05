'use client';
import { useState } from 'react';

const TallaSelector = () => {
  const tallas = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'especial'];
  const [selectedTalla, setSelectedTalla] = useState(tallas[0]);

  const actualizarEstilo = (e) => {
    setSelectedTalla(e.target.value);
  };

  return (
    <div className="my-4">
      <label htmlFor="talla" className="block text-sm font-medium text-gray-700">
        Selecciona tu talla:
      </label>
      <select
        id="talla"
        name="talla"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={actualizarEstilo}
        value={selectedTalla}
      >
        {tallas.map((talla) => (
          <option key={talla} value={talla}>
            {talla.toUpperCase()}
          </option>
        ))}
      </select>
      <p className="mt-2 text-sm text-gray-500">
        Seleccionada: <span className="font-semibold">{selectedTalla.toUpperCase()}</span>
      </p>
    </div>
  );
};

export default TallaSelector;
