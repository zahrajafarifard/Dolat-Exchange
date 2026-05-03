import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center  py-[10%]">
      <div className="w-24 h-24 border-l-2 border-[#deca75] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
