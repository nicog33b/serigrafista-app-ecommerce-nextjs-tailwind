'use client';
import React, { useState } from "react";
import CategoryOption from "./categoryOption";
import CategoryOptionGoing from './categoryGoing';

const FiltroAside = () => {
  const [priceRange, setPriceRange] = useState([]);

  return (
    <aside className="w-[15rem] p-4">
      <div className="mb-4">
        <div className="mt-1 p-2 rounded-md w-full">
          <CategoryOption
            optionName="CATEGORIAS"
            subcategories={['Camisetas', 'Remeras']}
          />
          <CategoryOption
            optionName="TALLES"
            subcategories={['XS', 'S','M','L','XL','XXL', 'XXXL']}
          />
          
          <CategoryOption
            optionName="PRECIOS"
            subcategories={[]}
          />
          <CategoryOption
            optionName="COLORES"
            subcategories={[
              'Beige', 'Amarillo', 'Naranja', 'Rojo', 'Rosa', 'Violeta',
              'Azul', 'Verde', 'Marrón', 'Gris', 'Blanco', 'Negro', 'Multicolor', 'Patrón'
            ]}
          />

          <CategoryOptionGoing optionName='ESTAMPADOS' optionLink='estampados'></CategoryOptionGoing>
          <CategoryOptionGoing optionName='COLECCIONABLES' optionLink='stickers'></CategoryOptionGoing>

        </div>
      </div>
    </aside>
  );
};

export default FiltroAside;
