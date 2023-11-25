import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ img, title, desc, rating, price }) => {


  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[300px]">
      <div>
        <img
          className="w-full h-full"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 text-center">{desc}</p>

      
      </div>
    </div>
  );
};

export default ProductCard;
