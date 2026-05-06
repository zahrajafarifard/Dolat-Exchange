import React from "react";

import CoinItems from "./coinItems";

import Spinner from "../../shared/spinner/spinner-skeleton";

const Coin = ({ data, coinUpdatedAt }) => {
  if (data === undefined || data.length === 0) {
    return <Spinner />;
  }
  return (
    <div className=" pt-2 pb-10 ">
      <div
        style={{ direction: "rtl" }}
        className="flex justify-end w-[67%]  mx-auto  py-8 
        screen1500:w-[78%]
        screen1200:w-[87%]
        screen900:w-[93%]
        screen700:justify-center
        screen700:ml-0
        screen700:w-full
      "
      >
        <div
          className={`text-[#BB841B] my-auto  text-sm font-semibold screen500:text-xs screen400:text-[9px] screen500:-mr-1  
     
        `}
        >
          <span className="screen700:hidden">تاریخ آخرین</span>

          <span> به روز رسانی : </span>

          {coinUpdatedAt ? (
            <>
              <span>{coinUpdatedAt?.split(" ")[0]}</span>
              <span className="mx-3 screen400:mx-1">
                {coinUpdatedAt?.split(" ")[1]}
              </span>
            </>
          ) : (
            "--:--"
          )}
        </div>
      </div>

      <div
        style={{ direction: "rtl" }}
        className="grid grid-cols-3   mx-auto w-[40%] screen1500:w-[54%] screen1200:w-[64%] screen1000:w-[74%]
        screen800:grid-cols-2 
        screen800:w-[64%]
        screen700:w-[75%]
        screen500:w-[93%]
        screen400:grid-cols-1
        screen400:w-[70%]"
      >
        {data.map((item) => {
          return <CoinItems key={item.id} items={item} />;
        })}
      </div>
    </div>
  );
};

export default Coin;
