import React from "react";

const VerticalLine = () => {
  return (
    <div className="relative  h-[493px]  w-[5px] mx-auto ">
      <div className="absolute bg-[#d9c16b]  top-0 w-2 h-2 rounded-full "></div>
      <div className="absolute -bottom-0  w-2 h-2 rounded-full bg-[#d9c16b] "></div>
      <div className="border-l-2 border-[#d9c16b]  h-[493px]"></div>
    </div>
  );
};

export default VerticalLine;
