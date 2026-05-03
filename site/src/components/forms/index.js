import React from "react";
import { saveAs } from "file-saver";
import ArzNimaiiStep from "./arzNimaiiSteps";

const Froms = () => {
  const downloadLegalClientFormHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/forms/downloadLegalClientForm`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const blob = await response.blob();
    saveAs(blob, "فرم حقوقی.pdf");
  };

  const downloadRealClientFormHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/forms/downloadRealClientForm`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const blob = await response.blob();
    saveAs(blob, "فرم حقیقی.pdf");
  };
  const downloadCommitmentLetterHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/forms/downloadCommitmentLetter`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const blob = await response.blob();
    saveAs(blob, "تهد نامه حواله ارز.pdf");
  };
  return (
    <div className="w-full mx-auto bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] border-b-[2px] border-transparent relative -z-0">
      <div className="text-justify w-[80%] mx-auto  py-10  ">
        <div
          style={{ direction: "rtl" }}
          className="text-2xl font-bold pb-4
           screen1000:text-xl
           screen800:text-base
           screen600:text-sm
          "
        >
          خرید و فروش حواله ارزی
        </div>

        <ArzNimaiiStep />

        <div
          id="forms"
          style={{ direction: "rtl" }}
          className="flex flex-row mb-10 mt-20  w-full justify-start mx-auto 
           screen600:flex-col
           screen600:mb-2
        
          "
        >
          <div
            className="my-auto font-bold text-xl ml-10 screen800:ml-4
              screen1000:text-base
              screen800:text-sm
              screen600:text-xs
              
            "
          >
            فرم حواله :
          </div>
          <div
            className="rounded-2xl bg-[#4c4c4c]  w-fit px-8 py-2 text-white cursor-pointer 
              screen1200:px-4 screen1200:text-sm
              screen900:mx-auto 
              screen700:text-xs"
            onClick={downloadRealClientFormHandler}
          >
            فرم مشتریان حقیقی
          </div>
          <div
            className="rounded-2xl bg-[#4c4c4c]  w-fit px-8 py-2 text-white cursor-pointer mx-10
              screen1200:px-4 screen1200:text-sm
              screen900:mx-auto
              screen700:text-xs
              screen600:my-4
              "
            onClick={downloadLegalClientFormHandler}
          >
            فرم مشتریان حقوقی
          </div>
          <div
            className="rounded-2xl bg-[#4c4c4c]  w-fit px-9 py-2 text-white cursor-pointer 
            screen1200:px-5 screen1200:text-sm
     
            screen900:mx-auto 
            screen700:text-xs"
            onClick={downloadCommitmentLetterHandler}
          >
            تعهد نامه حواله ارز
          </div>
        </div>
      </div>
    </div>
  );
};

export default Froms;
