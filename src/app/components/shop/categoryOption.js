'use client';
import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import PriceFilter from './priceFilter';



const Subcategory = ({ subcategoryName }) => {
  return (
    <p className="text-sm fontManrope p-2 pl-8 hover:bg-gray-100 cursor-pointer">
      {subcategoryName}
    </p>
  );
};

const CategoryOption = ({ optionName, subcategories }) => {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);

  const toggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
    setShowPriceFilter(false); // Ocultar PriceFilter cuando se hace clic en la flecha
  };

  const togglePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  return (
    <div>
      <hr className="bg-black text-black"></hr>
      <p
        className="text-xl fontManrope p-2 hover:bg-gray-100 flex cursor-pointer"
        onClick={optionName === 'PRECIOS' ? togglePriceFilter : toggleSubcategories}
      >
        {optionName}
        <span className="ml-3 hover:text-green-500">
          {optionName === 'PRECIOS' ? (showPriceFilter ? <SlArrowUp /> : <SlArrowDown />) : (showSubcategories ? <SlArrowUp /> : <SlArrowDown />)}
        </span>
      </p>
      {showSubcategories && subcategories && subcategories.length > 0 ? (
        <div>
          {subcategories.map((subcategory, index) => (
            <Subcategory key={index} subcategoryName={subcategory} />
          ))}
        </div>
      ) : (
        optionName === 'PRECIOS' && showPriceFilter && <PriceFilter />
      )}
      <hr className="border-l-black"></hr>
    </div>
  );
};

export default CategoryOption;
