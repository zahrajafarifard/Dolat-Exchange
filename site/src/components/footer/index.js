import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import TelegramIcon from "../../assets/img/telegram.svg";
import InstagramIcon from "../../assets/img/insta.svg";
import View from "../../assets/img/visit1.svg";
import arrowImg from "../../assets/img/arrow.png";

const Footer = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getConfig`)
      .then((response) => {
        if (!response.ok) {
          return new Error(`error ${response.status} occured...`);
        }
        return response.json();
      })
      .then((res) => {
        setPhone(res.phone);
        setAddress(res.address);
        setEmail(res.email);
        setTelegram(res.telegram);
        setInstagram(res.instagram);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [todayVisitorsState, setTodayVisitorsState] = useState(0);
  const [yesterdayVisitorsState, setYesterdayVisitorsState] = useState(0);
  const [totalVisitorsState, setTotalVisitorsState] = useState(0);
  const _yesterdayVisitors = useSelector((state) => state.yesterdayVisitors);
  const _todayVisitors = useSelector((state) => state.todayVisitors);
  const _totalVisitors = useSelector((state) => state.totalVisitors);

  useEffect(() => {
    setYesterdayVisitorsState(_yesterdayVisitors);
    setTodayVisitorsState(_todayVisitors);
    setTotalVisitorsState(_totalVisitors);
  }, [_todayVisitors, _yesterdayVisitors, _totalVisitors]);

  return (
    <div className="caret-transparent ">
      <div className="bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511] py-1 ">
        <div className="border-t-4 border-b-4 border-white  ">
          <div className=" w-full  text-right  flex flex-row-reverse bg-gradient-to-r from-[#BB841B] via-[#F4EEA0] to-[#AC7511]">
            <div
              className=" my-auto border-white flex flex-row-reverse  w-[20%] h-fit
              screen1400:w-[23%]
              screen1100:w-[27%]
              screen900:w-[35%]
              screen600:w-[42%]
              screen500:w-[45%]          
          "
            >
              <div
                className="text-white font-bold my-auto text-2xl   w-full mx-14 
                screen1300:mx-12
                screen1100:text-xl 
                screen700:text-base
                screen400:text-sm 
                
                screen1200:mx-10
                screen1100:mx-9
                screen900:mx-8
                screen500:mx-7
                screen470:mx-6
                screen400:mr-4
                screen350:mr-3
                screen400:w-[180%]
              "
              >
                تماس با ما
              </div>

              <div className=" my-auto">
                <img
                  src={arrowImg}
                  className="w-[130px] 
                screen700:w-[110px]  
                screen600:w-[130px] 
                "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ direction: "rtl" }}
        className={` text-[#4c4c4c]  text-base my-6 flex flex-row justify-evenly text-justify  mx-auto w-full
        screen1350:text-sm
        screen1200:text-xs
        screen600:flex-col
        screen600:w-[90%]
        screen600:mx-auto
        `}
      >
        <div className=" screen800:hidden">
          <iframe
            title="صرافی دولت"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3236.7905058577817!2d51.4490696!3d35.7805221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0437d10ecc43%3A0xf0931c0436a8f7e4!2sDolat%20Exchange!5e0!3m2!1sde!2sde!4v1702278828127!5m2!1sde!2sde"
            className="rounded-2xl w-[200px] h-[140px]  mx-auto my-auto outline-none
            screen1350:w-[170px] screen1350:h-[120px]
            "
          />
        </div>

        <div
          className=" my-auto place-self-center  w-[27%] screen1200:w-[25%]
        screen1000:w-[26%]
        screen800:w-[35%]
        screen600:place-self-start
        screen600:pr-2
        screen600:w-full
        "
        >
          <div>
            <span>آدرس :</span>
            <span className="font-bold  leading-7 ">{address}</span>
          </div>

          <div style={{ direction: "rtl" }} className="my-2">
            <span>تلفن :</span>
            <span dir="ltr" className="font-bold">
              {phone}
            </span>
          </div>

          <span>ایمیل :</span>
          <span className="font-bold"> {email}</span>
        </div>

        <div
          className=" flex flex-row my-auto justify-between w-80 py-4 px-2 border-r-2 border-l-2 border-[#4c4c4c] 
        screen1350:w-72
        screen1200:w-64
        screen1000:w-60
        screen600:border-0
        screen600:w-fit
        "
        >
          <div className="font-bold screen600:hidden">
            <p className="tracking-wider">ما را در شبکه های</p>
            <p>اجتماعی دنبال کنید</p>
          </div>

          <div className="font-bold hidden screen600:flex my-auto ">
            <p className="">ما را در شبکه های اجتماعی دنبال کنید</p>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            //  href={`https://t.me/${telegram}`}
            href={`${telegram}`}
          >
            <div className="  w-10 h-10 screen1200:w-8 screen1200:h-8 screen800:w-6 screen800:h-6 screen600:w-5 screen600:h-5 screen600:mx-4 screen480:mx-2">
              <img alt="تلگرام صرافی دولت" src={TelegramIcon} />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            // href={`https://www.instagram.com/${instagram}`}
            href={`${instagram}`}
          >
            <div className=" w-10 h-10 screen1200:w-8 screen1200:h-8  screen800:w-6 screen800:h-6 screen600:w-5 screen600:h-5">
              <img alt="اینستاگرام صرافی دولت" src={InstagramIcon} />
            </div>
          </a>
        </div>

        <div className=" my-auto pr-2 ">
          <div className="flex flex-row ">
            <span className="w-8 h-8 my-auto   ">
              <img
                src={View}
                className="w-8 h-5  my-auto mt-1 screen1200:w-8 screen1200:h-8 screen800:w-6 screen800:h-6 screen600:w-5 screen600:h-5"
              />
            </span>
            <span className="my-auto mr-1 font-bold">بازدید ها</span>
          </div>
          <div className="flex flex-row mt-1 screen1000:flex-col ">
            <div>
              بازدید امروز :
              <span className="font-bold">{todayVisitorsState}</span>
            </div>
            <div className="mx-3 screen1000:mx-0">
              بازدید دیروز :
              <span className="font-bold">
                {yesterdayVisitorsState !== null ? yesterdayVisitorsState : 0}
              </span>
            </div>
            <div>
              بازدید کل :<span className="font-bold">{totalVisitorsState}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ direction: "rtl" }}
        className={` bg-[#6d6e70] text-white text-sm py-2  `}
      >
        <div
          className=" flex flex-row justify-between  w-[80%] mx-auto
        screen1000:text-xs
        screen1000:w-[90%]
        screen800:text-[10px]
        screen800:w-[95%]
        screen600:flex-col
        screen600:text-center
        
        "
        >
          <div>
            کلیه حقوق مادی و معنوی این سایت متعلق به صرافی دولت می باشد و کپی از
            آن پیگرد قانونی دارد.
          </div>

          <div>
            طراحی شده توسط شرکت &nbsp;
            <a
              className="cursor-pointer "
              href="https://telmis.ir/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-bold">تلمیس</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
