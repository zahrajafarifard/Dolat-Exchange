import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";
import Style from "./clock.module.css";
import NewClock from "./NewClock-iran";
import moment from "jalali-moment";

function Clocks() {
  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }

  const [value, setValue] = useState(convertTZ(new Date(), "Asia/Tehran"));
  const [value2, setValue2] = useState(convertTZ(new Date(), "Asia/Istanbul"));
  const [value3, setValue3] = useState(
    convertTZ(new Date(), "America/New_York")
  );
  const [value4, setValue4] = useState(convertTZ(new Date(), "Asia/Dubai"));

  useEffect(() => {
    const interval1 = setInterval(function () {
      setValue(convertTZ(new Date(), "Asia/Tehran"));
    }, 1000);
    const interval2 = setInterval(function () {
      setValue2(convertTZ(new Date(), "Asia/Istanbul"));
    }, 1000);

    const interval3 = setInterval(function () {
      setValue3(convertTZ(new Date(), "America/New_York"));
    }, 1000);
    const interval4 = setInterval(function () {
      setValue4(convertTZ(new Date(), "Asia/Dubai"));
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div
      className={`${Style.container} 
    screen750:relative screen750:left-14 screen750:top-4 
    screen700:left-12
    screen600:left-11
  
    `}
    >
      <div
        className=" flex flex-row border-[3px] rounded-full  border-[#4c4c4c] 
      
        
      "
      >
        <div className=" p-0.5  my-auto screen1250:text-xs ">
          <NewClock title="تهران" datediff={0} minutesdiff={0} />
        </div>
      </div>

      <div
        className="border-[3px] rounded-full  border-[#4c4c4c] my-auto py-3 px-2 ml-4 
       screen1300:ml-1 screen1300:px-1 screen1500:py-2 screen1400:py-1 screen550:hidden"
      >
        <span className="mr-2 font-bold screen1350:text-xs screen950:text-[10px] screen1300:mr-1">
          امروز:
        </span>
        <span className="mr-1 screen1350:text-xs screen950:text-[10px] screen1300:mr-0.5">
          {moment(new Date(), "YYYY-MM-DD ").format("jYYYY/jM/jD")}
        </span>
        <span className="ml-2 mr-1 screen1350:text-xs screen950:text-[10px] screen1300:ml-2 screen1300:mr-0.5 screen950:ml-0">
          شمسی
        </span>
        <span className="mr-2 screen1350:text-xs screen950:text-[10px] screen1300:mr-1 screen950:mr-0">
          {moment(new Date(), "YYYY-MM-DD ").format("YYYY/M/D")}
        </span>
        <span className="screen1350:text-xs screen950:text-[10px]">میلادی</span>
      </div>
    </div>
  );
}
export default Clocks;
