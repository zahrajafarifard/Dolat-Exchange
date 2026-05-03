import * as React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo1.svg";

import Navigation from "./nav";
import Clocks from ".././shared/Clock/clocks";
import ClockTehran from ".././shared/Clock/clock-iran";
const Header = () => {
  const location = useLocation();
  return (
    <div
      className={` 
      bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] border-b-[4px] border-transparent
    ${location.pathname === "/price" && "border-b-0"}
    `}
    >
      <div
        className={`flex flex-row-reverse justify-start   bg-white
      ${location.pathname === "/price" && "mb-0"}
      `}
      >
        <div className="place-self-end w-fit my-auto  ">
          <img
            src={Logo}
            className="w-80
            screen1400:w-72
            screen1000:w-64
            screen600:w-52
            screen500:w-48
            screen400:w-40
            "
          />
        </div>
        <div className=" w-full mx-auto ">
          <div
            className="flex flex-row-reverse place-content-between my-auto  mx-3  screen900:place-content-start   
              
            "
          >
            <div className="flex flex-row-reverse my-auto  screen1000:-mr-5 screen900:hidden">
              <Clocks />
            </div>
            <div className="my-auto screen900:w-full screen550:w-fit">
              <ClockTehran />
            </div>
          </div>
          <div className=" mx-auto  bg-white  py-4 px-10 screen1000:pl-6 ">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
