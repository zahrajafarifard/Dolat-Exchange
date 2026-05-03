import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/img/logo.svg";
import nobatDehiIcon from "../../assets/img/nobatdehi.svg";
import formIcon from "../../assets/img/form.svg";
import arzIcon from "../../assets/img/arz-black.svg";
const Links = () => {
  return (
    <div className="w-[80%] mx-auto screen700:w-[90%]">
      <div
        style={{ direction: "rtl" }}
        className="flex justify-between my-10  w-full"
      >
        <div
          className=" w-[70%] my-auto text-xl text-justify tracking-wide  text-slate-500 font-bold
      screen1000:text-base
      screen800:text-sm
      screen600:text-xs
      screen400:tracking-normal
      screen400:px-1
      "
        >
          شرکت تضامنی حمید میر لشکری و شرکاء با نام تجاری صرافی دولت تحت شماره
          438669 در سال 1392 در اداره ثبت شرکت ها و موسسات غیر تجاری شهر تهران
          به ثبت رسیده و همچنین به موجب مجوز شماره 38736بانک مرکزی جمهوری اسلامی
          ایران اجازه فعالیت شرکت صرافی را دریافت نموده است.
        </div>
        <div className="screen400:my-auto">
          <div>
            <img
              src={Logo}
              className="w-[200px] h-[200px]  rounded-full 
            screen1200:w-[170px] screen1200:h-[170px]
            screen1000:w-[150px] screen1000:h-[150px]
            screen900:w-[135px] screen900:h-[135px]
            screen600:w-[120px] screen600:h-[120px]
            screen500:w-[100px] screen500:h-[100px]
            "
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-row-reverse justify-evenly w-[80%]  mx-auto mb-10 
    screen900:w-[90%]
    screen600:w-[100%]
    "
      >
        <Link
          className=" w-[20%] mx-auto text-center  bg-[#4c4c4c]  rounded-2xl  screen600:rounded-xl 
        screen1300:w-[30%]
        "
          to="queue"
        >
          <div className=" flex flex-row-reverse justify-evenly w-full h-full mx-auto my-auto py-3 screen600:py-2">
            <img
              src={nobatDehiIcon}
              className="w-7 screen800:w-6
            screen600:w-5
            screen400:w-3
            "
            />
            <div
              className="my-auto text-white font-bold screen800:text-sm screen500:text-xs
          screen400:text-[10px]
          "
            >
              نوبت دهی
            </div>
          </div>
        </Link>
        <Link
          className=" w-[20%] mx-auto text-center  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] rounded-2xl  screen600:rounded-xl
        screen1300:w-[30%]
        screen500:w-[34%]
        "
          to="/price"
        >
          <div className=" flex flex-row-reverse justify-evenly w-full h-full mx-auto my-auto py-3 screen600:py-2">
            <img
              src={arzIcon}
              className="w-14 h-full my-auto screen800:w-12
            screen600:w-9
            screen400:w-7
            "
            />
            <div
              className="my-auto font-bold screen800:text-sm screen500:text-xs
          screen400:text-[10px]
          "
            >
              نرخ ارز و سکه
            </div>
          </div>
        </Link>
        <Link
          className=" w-[20%] mx-auto text-center  bg-[#4c4c4c]  rounded-2xl  screen600:rounded-xl
        screen1300:w-[30%]
        "
          to="/rules-forms"
        >
          <div className=" flex flex-row-reverse justify-evenly w-full h-full mx-auto my-auto py-3 screen600:py-2">
            <img
              src={formIcon}
              className="w-6 screen800:w-5 
          screen600:w-4
          screen400:w-3
          "
            />
            <div
              className="my-auto text-white font-bold screen800:text-sm screen500:text-xs 
          screen400:text-[10px]
          "
            >
              فرم ها
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Links;
