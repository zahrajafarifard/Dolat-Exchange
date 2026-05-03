import React from "react";

import swiftIcon from "../../assets/img/swift.png";
import mobadelatIcon from "../../assets/img/mobadelat.png";
import kanoonIcon from "../../assets/img/kanoon.jpg";
import xeIcon from "../../assets/img/xe.png";
import bankIcon from "../../assets/img/bank.jpg";

const RelatedLinks = () => {
  return (
    <div
      style={{ direction: "rtl" }}
      className="border-t-4  mb-1 border-transparent  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]"
    >
      <div className="pt-1   bg-white  ">
        <div className="w-[80%] mx-auto py-10">
          <div
            className="font-bold text-2xl
           screen1000:text-xl
           screen800:text-base
           screen600:text-sm
        "
          >
            لینک های مرتبط
          </div>
          <div
            style={{ direction: "rtl" }}
            className="flex flex-row  w-full mx-auto justify-evenly my-4
        screen700:grid screen700:grid-cols-3 screen700:place-items-center screen700:gap-y-5
        
        "
          >
            <div>
              <a href="https://www.swift.com" target="_blank" rel="noreferrer">
                <img
                  alt="swift icon"
                  src={swiftIcon}
                  className="w-20 h-20 rounded-full  shadow-lg shadow-[#4c4c4c]  mx-auto screen600:w-16 screen600:h-16"
                />
                <div className=" text-center mt-3 font-bold screen800:text-sm screen470:text-[10px]">
                  SWIFT
                </div>
              </a>
            </div>

            <div>
              <a
                href="https://www.kanoonsarafan.ir"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="kanoon icon"
                  src={kanoonIcon}
                  className="w-20 h-20 rounded-full  shadow-lg shadow-[#4c4c4c]  mx-auto screen600:w-16 screen600:h-16"
                />
                <div className=" text-center mt-3 font-bold screen800:text-sm screen470:text-[10px]">
                  کانون صرافان
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.ice.ir" target="_blank" rel="noreferrer">
                <img
                  alt="markaz mobaddelat icon"
                  src={mobadelatIcon}
                  className="w-20 h-20 rounded-full  shadow-lg shadow-[#4c4c4c]   mx-auto screen600:w-16 screen600:h-16"
                />
                <div className=" text-center mt-3 font-bold screen800:text-sm screen470:text-[10px]">
                  مرکز مبادلات
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.cbi.ir" target="_blank" rel="noreferrer">
                <img
                  alt="center bank icon"
                  src={bankIcon}
                  className="w-20 h-20 rounded-full  shadow-lg shadow-[#4c4c4c]  mx-auto screen600:w-16 screen600:h-16"
                />
                <div className=" text-center mt-3 font-bold screen800:text-sm screen470:text-[10px]">
                  بانک مرکزی
                </div>
              </a>
            </div>
            <div>
              <a href="https://www.xe.com" target="_blank" rel="noreferrer">
                <img
                  alt="xe icon"
                  src={xeIcon}
                  className="w-20 h-20 rounded-full  shadow-lg shadow-[#4c4c4c]  mx-auto screen600:w-16 screen600:h-16"
                />
                <div className=" text-center mt-3 font-bold screen800:text-sm screen470:text-[10px] ">
                  XE
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedLinks;
