import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";
import Style from "./clock.module.css";
import NewClock from "./NewClock";

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
    <div className={`${Style.container} `}>
      <div
        className=" border-[3px] rounded-full p-0.5 border-[#4c4c4c] 
          screen1600:mx-4
          screen1500:mx-3
          screen1100:mx-0 "
      >
        <NewClock title="چین" datediff={4} minutesdiff={30} />
      </div>

      <div
        className=" border-[3px] rounded-full p-0.5 border-[#4c4c4c]  mx-14 
      screen1600:mx-4
      screen1500:mx-3
      screen1100:mx-1 "
      >
        <NewClock title="ترکیه" datediff={0} minutesdiff={-25} />
      </div>
      <div
        className=" border-[3px] rounded-full p-0.5 border-[#4c4c4c] 
          screen1600:mx-4
          screen1500:mx-3
          screen1100:mx-0"
      >
        <NewClock title="امارات" datediff={0} minutesdiff={35} />
      </div>
    </div>
  );
}
export default Clocks;
