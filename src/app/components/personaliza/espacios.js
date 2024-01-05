// Espacios.js
import React from 'react';

const Espacios = ({ espacioSeleccionado, handleEspacioClick }) => {
  return (
    <div>
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
  );
};

export default Espacios;
