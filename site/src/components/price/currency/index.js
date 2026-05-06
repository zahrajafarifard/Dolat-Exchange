import * as React from "react";

import CurrencyItems2 from "./currencyItems2";
import Spinner from "../../shared/spinner/spinner-skeleton";
import SwiperCurrency from "./swiperCurrency";
import VerticalLine from "../../shared/verticalLine";

const Currency = ({ data, currUpdatedAt }) => {
  if (data === undefined || data.length === 0) {
    return <Spinner />;
  }
  return (
    <div className="pt-2 pb-16  ">
      <div
        style={{ direction: "rtl" }}
        className="flex flex-row  w-[80%]  mx-auto
        screen1200:w-[90%] screen900:w-[98%] screen700:flex-col 
        "
      >
        <div
          className="w-[25%]   text-[#4c4c4c]  
        screen1500:w-[30%]
        screen1200:w-[35%] screen700:w-[60%] screen700:mx-auto screen600:w-[70%] screen500:w-[80%] screen400:w-[95%]
        "
        >
          <div
            className="my-4 font-bold flex flex-row -ml-16 
          screen700:justify-between screen700:-mr-24 screen600:-mr-12 screen500:-mr-0 screen500:-ml-2 "
          >
            <div className="text-xl screen800:text-lg screen470:text-base">
              ارز های پر مخاطب :
            </div>
            <div
              style={{ direction: "rtl" }}
              className="w-fit  hidden  screen700:grid "
            >
              <div
                className={`text-[#BB841B] my-auto  text-sm font-semibold screen500:text-xs screen400:text-[10px] screen330:text-[9px]
                
                screen500:-ml-4
                screen400:-ml-0
                screen500:-mr-1
                `}
              >
                <span className="screen700:hidden">تاریخ آخرین</span>

                <span> به روز رسانی : </span>

                {currUpdatedAt ? (
                  <>
                    <span>{currUpdatedAt?.split(" ")[0]}</span>
                    <span className="mx-3 screen500:mx-2 screen400:mx-1">
                      {currUpdatedAt?.split(" ")[1]}
                    </span>
                  </>
                ) : (
                  "--:--"
                )}
              </div>
            </div>
          </div>
          <div className=" py-4">
            {data?.slice(0, 3).map((item) => {
              return <CurrencyItems2 key={item.id} items={item} />;
            })}
          </div>
        </div>
        <div className="w-[1%] mt-20 screen700:hidden">
          <VerticalLine />
        </div>

        <div
          className="  w-[67%]   text-[#4c4c4c]  
        screen1500:w-[70%] 
        screen1200:w-[65%]  screen700:w-[98%] screen700:mx-auto
        "
        >
          <div className="my-4 font-bold screen700:mr-10  flex flex-row justify-between ">
            <span className="text-xl screen800:text-lg screen470:text-base">
              سایر ارزها :
            </span>
            <div
              style={{ direction: "rtl" }}
              className=" w-fit ml-4 screen700:hidden"
            >
              <div
                className={`text-[#BB841B] my-auto  text-sm font-semibold screen500:text-xs screen400:text-[9px] screen500:-mr-1`}
              >
                <span className="screen700:hidden">تاریخ آخرین</span>

                <span> به روز رسانی : </span>

                {currUpdatedAt ? (
                  <>
                    <span>{currUpdatedAt?.split(" ")[0]}</span>
                    <span className="mx-3 screen400:mx-1">
                      {+(
                        Number(currUpdatedAt?.split(" ")[1]?.split(":")[0]) + 1
                      ) +
                        ":" +
                        currUpdatedAt?.split(" ")[1]?.split(":")[1]}
                    </span>
                  </>
                ) : (
                  "--:--"
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 ">
            <SwiperCurrency data={data?.slice(0, 18)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
