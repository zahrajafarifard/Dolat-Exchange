import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import euroupFlag from "../../assets/image/euro.svg";
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

const CurrencyItems = (props) => {
  const [buyPriceState, setBuyPriceState] = useState(props.item.buyPrice);
  const [sellPriceState, setSellPriceState] = useState(props.item.sellPrice);
  const deleteStatusFromStore = useSelector(
    (state) => state.Reducer.deleteStatus
  );

  useEffect(() => {
    setBuyPriceState(props.item.buyPrice);
    setSellPriceState(props.item.sellPrice);
  }, [deleteStatusFromStore]);

  const changeBuyHandeler = (event) => {
    event.target.value === ""
      ? setBuyPriceState(0)
      : setBuyPriceState(
          parseInt(event.target.value.replace(/,/g, "")).toLocaleString()
        );
    props.onbuyPriceChangeCurr(
      event.target.value === "" ? 0 : event.target.value,
      props.item.id
    );
  };
  
  const changeSellHandeler = (event) => {
    event.target.value === ""
      ? setSellPriceState(0)
      : setSellPriceState(
          parseInt(event.target.value.replace(/,/g, "")).toLocaleString()
        );
    props.onsellPriceChangeCurr(
      event.target.value === "" ? 0 : event.target.value,
      props.item.id
    );
  };
  return (
    <div
      style={{ direction: "rtl", webkitAppRegion: "no-drag" }}
      className={`grid grid-cols-3 my-2 ${
        props.item.id % 2 === 0 ? "text-gray-700 " : "text-red-700 "
      }`}
    >
      <div className=" font-semibold  flex flex-row ">
        <div
          className={`round-flag-icon   round-flag-${
            flag[props.item.id - 1]
          } w-6 h-6  mx-auto my-auto  `}
        >
          {props.item.id === 2 && (
            <img alt="پرچم اروپا" src={euroupFlag} className="w-6 h-6" />
          )}
        </div>
        <span className=" w-[100px]">{props.item.Currency.name}</span>
      </div>

      <div>
        <input
          dir="ltr"
          type="text"
          value={buyPriceState.toLocaleString()}
          onChange={changeBuyHandeler}
          className=" rounded-lg w-24 text-red-700 shadow-md shadow-[#5c5b5b] outline-none px-1  mx-auto "
        />
      </div>

      <div>
        <input
          dir="ltr"
          value={sellPriceState.toLocaleString()}
          onChange={changeSellHandeler}
          className=" rounded-lg w-24 text-red-700 shadow-md shadow-[#5c5b5b] outline-none px-1 mx-auto "
        />
      </div>
    </div>
  );
};

export default CurrencyItems;
