import React from "react";
import { saveAs } from "file-saver";

import Froms from "../forms";
const Rules = () => {
  const downloadImportsHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/rules/downloadImportsPDF`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      const blob = await response.blob();
      saveAs(blob, " واردات کالا و خدمات.pdf");
    }
  };
  const downloadLawAgainstMoneyHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/rules/downloadLawAgainstMoneyPDF`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      const blob = await response.blob();
      saveAs(blob, "قوانین مبارزه با پولشویی.pdf");
    }
  };
  const downloadMonetaryRulesHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/rules/downloadMonetaryRulesPDF`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      const blob = await response.blob();
      saveAs(blob, "قوانین پولی و بانکی.pdf");
    }
  };
  return (
    <div
      id="rules"
      className=" border-t-4  my-1 border-transparent  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]"
    >
      <Froms />
      <div className="py-1  bg-white ">
        <div
          style={{ direction: "rtl" }}
          className="w-[80%] mx-auto text-justify py-10"
        >
          <div
            className="font-bold text-2xl
              screen1000:text-xl
              screen800:text-base
              screen600:text-sm
            "
          >
            قوانین و مقررات
          </div>
          <div
            className="font-bold  py-6 text-xl
              screen1000:text-base
              screen800:text-sm
              screen600:text-xs
            "
          >
            دستور العمل اجرایی مبارزه با پولشویی در صرافی ها
          </div>
          <div
            className="mx-auto text-center font-bold bg-[#4c4c4c]
          rounded-2xl w-fit px-8 py-2 text-white cursor-pointer 
          screen1200:px-4 screen1200:text-sm
          screen900:mx-auto 
          screen700:text-xs
          "
            onClick={downloadLawAgainstMoneyHandler}
          >
            قوانین مبارزه با پولشویی
          </div>
          <div
            className="font-bold  py-6 text-xl
              screen1000:text-base
              screen800:text-sm
              screen600:text-xs
            "
          >
            ﻣﺠﻤﻮﻋﻪ ﻣﻘﺮﺭﺍﺕ ﺍﺭﺯﻱ
          </div>
          <div
            className=" mx-auto text-center font-bold bg-[#4c4c4c]
          rounded-2xl w-fit px-10 py-2 text-white cursor-pointer 
          screen1200:px-6 screen1200:text-sm
          screen900:mx-auto 
          screen700:text-xs"
            onClick={downloadImportsHandler}
          >
            واردات کالا و خدمات
          </div>
          <div
            className="font-bold  py-6 text-xl
              screen1000:text-base
              screen800:text-sm
              screen600:text-xs
            "
          >
            قوانین پولی و بانکی کشور
          </div>
          <div
            className="mx-auto text-center font-bold bg-[#4c4c4c]
          rounded-2xl w-fit px-7 py-2 text-white cursor-pointer 
          screen1200:px-3 screen1200:text-sm
          screen900:mx-auto 
          screen700:text-xs"
            onClick={downloadMonetaryRulesHandler}
          >
            قوانین پولی و بانکی کشور
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
