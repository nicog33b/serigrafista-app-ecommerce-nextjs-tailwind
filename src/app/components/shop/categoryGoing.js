import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const CategoryOptionGoing = ({ optionName, optionLink }) => {
  const handleLinkClick = () => {
    // Aquí puedes realizar alguna acción antes de redirigir, si es necesario
    // Por ejemplo, cerrar un menú, enviar datos, etc.
    console.log(`Redirigiendo a: ${optionLink}`);
    window.location.href = optionLink; // Redirige a la URL especificada
  };

  return (
    <div>
      <hr className="bg-black text-black"></hr>
      <p
        className="text-xl fontManrope p-2 hover:bg-gray-100 flex cursor-pointer"
        onClick={handleLinkClick}
      >
        {optionName}
        <span className="ml-3 hover:text-green-500">
          <SlArrowRight></SlArrowRight>
        </span>
      </p>

      <hr className="border-l-black"></hr>
    </div>
  );
};

export default CategoryOptionGoing;
