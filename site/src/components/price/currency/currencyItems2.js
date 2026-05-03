import React, { useState, useEffect, Suspense } from "react";

import euroupFlag from "../../../assets/icons/euro-01.svg";

const flag = ["us", "gbb", "gb"];
const CurrencyItems2 = ({ items }) => {
  return (
    <div
      className=" rounded-[75px] w-[90%] p-1  my-4 mx-auto mb-3 border-[3px] border-[#BB841B] 
      bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]  
     screen700:w-[75%]
     screen600:w-[78%]
     "
    >
      <div
        style={{ direction: "rtl" }}
        className={`grid grid-cols-3 font-semibold text-white rounded-[71px]    py-4 px-4
        screen1300:px-2
        screen600:py-3
        screen400:py-2
      screen500:px-2`}
      >
        <div className="flex flex-col w-full mx-auto my-auto justify-center">
          <div
            className={`round-flag-icon round-flag-${
              flag[items?.id - 1]
            } w-14 h-14  mx-auto my-auto screen1400:w-12 screen1400:h-12 screen500:w-10 screen500:h-10 screen400:w-9 screen400:h-9 `}
          >
            {items.id === 2 && (
              <img
                alt="پرچم اروپا"
                src={euroupFlag}
                className="w-14 h-14  mx-auto my-auto screen1400:w-12 screen1400:h-12 screen500:w-10 screen500:h-10 screen400:w-9 screen400:h-9"
              />
            )}
          </div>

          <span
            className={`w-fit mx-auto  text-sm   my-1 
            screen950:text-[12px]
            ${items.id === 3 && "screen950:text-[11px]"}

            `}
          >
            {items.Currency.name}
          </span>

          <span className="w-fit mx-auto text-white font-normal  leading-tight text-[10px] screen950:text-[10px]  ">
            {items.Currency.symbol}
          </span>
        </div>

        <div
          className=" rounded-[45px] col-start-2 col-span-2   p-2 my-auto 
          screen950:px-2  screen500:px-1
          bg-black  bg-opacity-20

        "
        >
          <div className="flex flex-row justify-between m-3  ">
            <span className="my-auto  screen900:text-[13px] screen400:text-[11px]">
              خرید
            </span>
            <span className="screen950:text-[16px] ">
              {items.buyPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-row justify-between m-3">
            <span className="my-auto  screen900:text-[13px] screen400:text-[11px]">
              فروش
            </span>
            <span className="screen950:text-[16px] ">
              {items.sellPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyItems2;
