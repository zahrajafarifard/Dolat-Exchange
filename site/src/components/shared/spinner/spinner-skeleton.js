import React from "react";

const SpinnerSkeleton = () => {
  return (
    <div className="grid grid-cols-2 screen800:grid-cols-1 w-[60%] mx-auto  my-10 gap-8">
      <div className="max-w-[250px] min-w-min screen800:mx-auto  border border-[#d9c16b]    rounded-full shadow animate-pulse md:p-6 screen800:py-4 screen800:px-6">
        <div className="flex items-center justify-between ">
          <div>
            <div className="h-2.5 bg-[#d9c16b]  rounded-full  w-24 mb-2.5"></div>
            <div className="w-24 h-2 bg-[#d9c16b]  rounded-full "></div>
          </div>
          <div className="h-12 bg-[#d9c16b]  rounded-full  w-12"></div>
        </div>
      </div>

      <div className="max-w-[250px] min-w-min  screen800:mx-auto border border-[#d9c16b]    rounded-full shadow animate-pulse  md:p-6 screen800:py-4 screen800:px-6 ">
        <div className="flex items-center justify-between ">
          <div>
            <div className="h-2.5 bg-[#d9c16b]  rounded-full  w-24 mb-2.5"></div>
            <div className="w-24 h-2 bg-[#d9c16b]  rounded-full "></div>
          </div>
          <div className="h-12 bg-[#d9c16b]  rounded-full  w-12"></div>
        </div>
      </div>

      <div
        className="max-w-[250px] min-w-min   border border-[#d9c16b]    rounded-full shadow animate-pulse  md:p-6 
      screen800:hidden
      "
      >
        <div className="flex items-center justify-between ">
          <div>
            <div className="h-2.5 bg-[#d9c16b]  rounded-full  w-24 mb-2.5"></div>
            <div className="w-24 h-2 bg-[#d9c16b]  rounded-full "></div>
          </div>
          <div className="h-12 bg-[#d9c16b]  rounded-full  w-12"></div>
        </div>
      </div>

      <div
        className="max-w-[250px] min-w-min   border border-[#d9c16b]    rounded-full shadow animate-pulse  md:p-6 
      screen800:hidden
      "
      >
        <div className="flex items-center justify-between ">
          <div>
            <div className="h-2.5 bg-[#d9c16b]  rounded-full  w-24 mb-2.5"></div>
            <div className="w-24 h-2 bg-[#d9c16b]  rounded-full "></div>
          </div>
          <div className="h-12 bg-[#d9c16b]  rounded-full  w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerSkeleton;
