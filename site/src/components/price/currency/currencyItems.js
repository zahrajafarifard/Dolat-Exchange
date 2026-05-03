import React, { useState, useEffect, Suspense } from "react";

import euroupFlag from "../../../assets/icons/euro-01.svg";

const flag = [
  "us",
  "gbb",
  "gb",
  "ca",
  "ae",
  "au",
  "ch",
  "se",
  "no",
  "dk",
  "tr",
  "cn",
  "my",
  "th",
  "rs",
  "am",
  "az",
  "iq",
];
const CurrencyItems = ({ items }) => {
  const [archiveCurrencyState, setArchiveCurrencyState] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getArchiveForCurrencyChart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: items.id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArchiveCurrencyState(data.data);
      })
      .catch((err) => console.log(err));
  }, [items.id]);

  return (
    <div
      className=" rounded-[54px] w-[98%] p-1  mx-auto mb-3
      bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]
     
     "
    >
      <div
        style={{ direction: "rtl" }}
        className={` bg-white font-semibold text-[#4c4c4c]  rounded-[50px] p-7 px-6 
        screen1600:px-4    screen500:py-6     
      screen500:px-2`}
      >
        <div className="flex flex-row   w-fit  ">
          <div
            className={`round-flag-icon round-flag-${
              flag[items?.id - 1]
            } w-14 h-14  mx-auto my-auto screen1400:w-12 screen1400:h-12 screen500:w-10 screen500:h-10 screen400:w-9 screen400:h-9 `}
          >
            {items.id === 2 && (
              <img
                alt="پرچم اروپا"
                src={euroupFlag}
                className="w-14 h-14 mx-auto my-auto screen1400:w-12 screen1400:h-12 screen500:w-10 screen500:h-10 screen400:w-9 screen400:h-9"
              />
            )}
          </div>

          <div className="flex flex-col mr-2  screen1200:mr-1  my-auto ">
            <span
              className={` text-sm  screen400:text-[13px]  w-[123%] screen1200:text-[16px] screen800:text-[14px]
              ${
                (items.id === 7 ||
                  items.id === 10 ||
                  items.id === 13 ||
                  items.id === 16) &&
                "screen400:text-[12px] screen1250:text-[12.5px]"
              }
              ${
                items.id === 17 &&
                "screen1300:-mr-1 screen1300:text-[12px] screen400:text-[12px]"
              }
              
              `}
            >
              {items.Currency.name}
            </span>

            <span
              className={` text-[#4c4c4c]  font-normal  h-fit leading-tight  
              ${"text-[10px] "}  `}
            >
              {items.Currency.symbol}
            </span>
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

export default CurrencyItems;
