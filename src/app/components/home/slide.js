import Image from "next/image";
import React from "react";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h2 className="text-accent text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
            {mainTitle}
          </h2>

          <h3 className="text-[24px] text-gray-500">
            Desde{" "}
            <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
          </h3>
          <div className=" text-center hover:bg-green-200 bg-green-500 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer  w-6/12">
            Crear
          </div>
        </div>

        <Image
          className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
          src={img}
          alt="banner"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Slide;
