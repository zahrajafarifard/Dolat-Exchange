import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CurrencyItems from "./currencyItems";
import PrevButton from "../../../assets/img/back.svg";
import NextButton from "../../../assets/img/next.svg";

const SwiperCurrency = ({ data }) => {
  const one_9 = data.slice(0, 9);
  const nine_18 = data.slice(9, 18);

  const one_6 = data.slice(0, 6);
  const six_12 = data.slice(6, 12);
  const twelve_18 = data.slice(12, 18);

  return (
    <div>
      <div className="flex flex-row  w-[70%]  mx-auto  h-[540px] my-auto screen1400:h-[530px]  screen1200:hidden  ">
        <Swiper
          className=""
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div
              className=" grid grid-cols-3 justify-items-center 
            screen1200:grid-cols-2
            "
            >
              {one_9.map((item) => {
                return <CurrencyItems key={item.id} items={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" grid grid-cols-3  justify-items-center  ">
              {nine_18.map((item) => {
                return <CurrencyItems key={item.id} items={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" flex justify-between screen1200:hidden  w-[90%] mx-auto    ">
        <div className="swiper-next  ">
          <img alt="بعدی" src={NextButton} className="w-10 h-10 " />
        </div>

        <div className="swiper-prev ">
          <img alt="قبلی" src={PrevButton} className="w-10 h-10 " />
        </div>
      </div>

      <div
        className="screen1200:flex flex-row  w-[80%] mx-auto  h-[530px] my-auto hidden 
            screen500:h-[490px]  screen700:w-full screen400:h-[460px]
       "
      >
        <Swiper
          className=""
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div
              className=" grid grid-cols-2 justify-items-center

            "
            >
              {one_6.map((item) => {
                return <CurrencyItems key={item.id} items={item} />;
              })}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" grid grid-cols-2  justify-items-center  ">
              {six_12.map((item) => {
                return <CurrencyItems key={item.id} items={item} />;
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" grid grid-cols-2  justify-items-center  ">
              {twelve_18.map((item) => {
                return <CurrencyItems key={item.id} items={item} />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="screen1200:flex justify-between hidden  w-[90%] mx-auto">
        <div className="swiper-next  my-auto  ">
          <img alt="بعدی" src={NextButton} className="w-9 h-9 " />
        </div>
        <div className="swiper-prev  my-auto   ">
          <img alt="قبلی" src={PrevButton} className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

export default SwiperCurrency;
