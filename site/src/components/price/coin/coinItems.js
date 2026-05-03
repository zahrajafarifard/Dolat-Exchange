import React, { useEffect, useState, Suspense } from "react";
import ememi from "../../../assets/icons/emami.svg";
import tamam from "../../../assets/icons/coin-farapic-01.png";

const CoinItems = ({ items }) => {
  return (
    <div
      className="rounded-[54px] w-[98%] p-1  mx-auto mb-3
      bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]"
    >
      <div
        style={{ direction: "rtl" }}
        className=" rounded-[50px] p-4 bg-white text-[#444] font-semibold  screen600:px-2 "
      >
        <div className=" flex flex-row  mx-auto w-full justify-between my-auto">
          <div className="flex flex-row">
            <div className={`mx-auto my-auto h-20 screen500:h-16 `}>
              <img
                alt="سکه"
                src={`${items.id === 1 ? ememi : tamam}`}
                className={`
              ${
                items.id === 1 &&
                "my-auto  mx-auto  w-[70px] h-[70px]  screen1200:w-14 screen1200:h-14 screen1200:mt-3  screen700:w-10 screen700:h-10 screen700:mt-5 screen500:mt-3   "
              }  
              ${
                items.id === 2 &&
                "my-auto  mx-auto  w-[70px] h-[70px]  screen1200:w-14 screen1200:h-14 screen1200:mt-3  screen700:w-10 screen700:h-10 screen700:mt-5 screen500:mt-3 "
              }  
              ${
                items.id === 3 &&
                "w-14 h-14  mx-auto mt-3  screen1200:w-10 screen1200:h-10 screen1200:mt-5 screen700:w-7 screen700:h-7 screen700:mt-6  screen500:mt-4"
              }  
              ${
                items.id === 4 &&
                "w-12 h-12  mx-auto mt-4 screen1200:w-8 screen1200:h-8 screen1200:mt-6 screen700:w-6 screen700:h-6 screen700:mt-7 screen500:mt-5 "
              }  
              ${
                (items.id === 5 || items.id === 6) &&
                "w-10 h-10  mx-auto mt-5  screen1200:w-7 screen1200:h-7 screen1200:mt-6 screen700:w-5 screen700:h-5 screen700:mt-7 screen500:mt-5"
              }  
              `}
              />
            </div>
            <div className=" my-auto  ">
              <div className="mr-2 screen700:mr-1">
                <div className="w-[120%]  text-base screen600:text-[14px]">
                  {items.Coin.name}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="screen700:px-3 screen500:px-1">
          <div className="flex flex-row justify-between ">
            <span className="my-auto  screen900:text-[13px] screen400:text-[11px] ">
              خرید
            </span>
            <span className="screen800:text-[16px] ">
              {items.buyPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="my-auto  screen900:text-[13px] screen400:text-[11px] ">
              فروش
            </span>
            <span className="screen800:text-[16px] ">
              {items.sellPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinItems;
