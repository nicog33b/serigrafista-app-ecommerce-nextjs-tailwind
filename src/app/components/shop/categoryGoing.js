'use client';
import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';


const CategoryOptionGoing = ({ optionName}) => {


  return (
    <div>
      <hr className="bg-black text-black"></hr>
      <p
        className="text-xl fontManrope p-2 hover:bg-gray-100 flex cursor-pointer"
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
