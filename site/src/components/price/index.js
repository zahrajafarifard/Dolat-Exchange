import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import moment from "jalali-moment";

import Coin from "../price/coin";
import Currency from "../price/currency";
import photoCurrency from "../../assets/img/arz-img.svg";
import photoCoin from "../../assets/img/seke-img.svg";
import arrowImg from "../../assets/img/arrow.png";

const Price = () => {
  const [coins, setCoins] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [currUpdatedAt, setCurrUpdatedAt] = useState();
  const [coinUpdatedAt, setCoinUpdatedAt] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getUpdateAtCoin`)
      .then((response) => {
        if (!response.ok) {
          return new Error(`error ${response.status} occured...`);
        }
        return response.json();
      })
      .then((res) => {
        setCoinUpdatedAt(
          moment(res.updatedAt, "YYYY-MM-DDTHH:mm:ss.SSZ ").format(
            "jYYYY/jM/jD HH:mm z"
          )
        );
      })

      .catch((err) => {
        console.log(err);
      });
  }, [setCoinUpdatedAt]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getUpdateAtCurrency`)
      .then((response) => {
        if (!response.ok) {
          return new Error(`error ${response.status} occured...`);
        }
        return response.json();
      })
      .then((res) => {
        setCurrUpdatedAt(
          moment(res.updatedAt, "YYYY-MM-DDTHH:mm:ss.SSZ ").format(
            "jYYYY/jM/jD HH:mm z"
          )
        );
      })

      .catch((err) => {
        console.log(err);
      });
  }, [setCurrUpdatedAt]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getallcoins`)
      .then((respone) => {
        return respone.json();
      })
      .then((res) => {
        setCoins(res);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`${process.env.REACT_APP_URL}/api/getallcurrencies`)
      .then((respone) => {
        return respone.json();
      })
      .then((res) => {
        setCurrencies(res.AllCurrensies);
      })
      .catch((err) => {
        console.log(err);
      });

    const socket = io(`${process.env.REACT_APP_URL}`, {
      // transports: ["websocket"],
      transports: ["polling"],
    });

    socket.on("getCurrencies", (data) => {
      setCurrencies(data);
    });
    socket.on("getCoins", (data) => {
      setCoins(data);
    });
  }, []);

  return (
    <div className="">
      <div>
        <div className="bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511] py-1 ">
          <div className="border-t-4 border-b-4 border-white  ">
            <div className=" w-full  text-right  flex flex-row-reverse bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511]">
              <div
                className=" my-auto border-white flex flex-row-reverse  w-[20%] 
              screen1400:w-[23%]
              screen1100:w-[27%]
              screen900:w-[35%]
              screen600:w-[42%]
              screen500:w-[45%]
          "
              >
                <img
                  src={photoCurrency}
                  alt="ارز صرافی دولت"
                  className={` w-14 h-fit mx-7 my-auto  
                screen700:w-12
                screen700:mx-4
                screen400:mx-2
                screen400:w-10
              
                `}
                />

                <div
                  className="text-white font-bold my-auto text-2xl   w-full 
              screen700:text-base
              screen400:text-sm
              screen1250:text-xl 
              "
                >
                  نرخ ارز
                </div>

                <div className=" my-auto">
                  <img
                    src={arrowImg}
                    className="w-[100px] 
                  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Currency data={currencies} currUpdatedAt={currUpdatedAt} />
        </div>
      </div>

      <div>
        <div className="bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511] py-1 ">
          <div className="border-t-4 border-b-4 border-white  ">
            <div className=" w-full  text-right  flex flex-row-reverse bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511]">
              <div
                className=" my-auto border-white flex flex-row-reverse  w-[20%]
              screen1400:w-[23%]
              screen1100:w-[27%]
              screen900:w-[35%]
              screen600:w-[42%]
              screen500:w-[45%]

          
          "
              >
                <img
                  src={photoCoin}
                  alt="ارز صرافی دولت"
                  className={` w-14 h-fit mx-7 my-auto
                screen700:w-12
                screen700:mx-4
                screen400:mx-2
                screen400:w-8
            
                `}
                />

                <div
                  className="text-white font-bold my-auto text-2xl   w-full 
              screen700:text-base
              screen470:text-[13px]
              screen1250:text-xl 
              screen330:w-[180%]
                       "
                >
                  نرخ سکه
                </div>

                <div className=" my-auto">
                  <img
                    src={arrowImg}
                    className="w-[110px] 
              
               
                "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  ">
          <Coin data={coins} coinUpdatedAt={coinUpdatedAt} />
        </div>
      </div>
    </div>
  );
};

export default Price;
