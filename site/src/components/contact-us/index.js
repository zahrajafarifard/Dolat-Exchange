import React, { useState, useEffect } from "react";

import Spinner from "../shared/spinner";

const ContactUs = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [workHour, setWorkHour] = useState("");
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
        setPhone(res?.phone);
        setAddress(res?.address);
        setEmail(res?.email);
        setFax(res?.fax);
        setTelegram(res?.telegram);
        setInstagram(res?.instagram);

        setWorkHour(res?.workHours);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (
    !(phone && address && email && fax && telegram && instagram && workHour)
  ) {
    return <Spinner />;
  }

  return (
    <div className="h-[50vh]  screen360:h-[55vh]">
      <div
        style={{ direction: "rtl" }}
        className="my-10 w-[80%]   mx-auto  text-justify text-[#4c4c4c] leading-8 
      screen1100:w-[90%] 
      
      "
      >
        <div
          className="  screen900:text-base
      screen600:text-sm
      screen400:text-xs
      "
        >
          <div style={{ direction: "rtl" }} className="mt-6">
            <span className="font-bold">تلفن تماس :</span>
            <span dir="ltr" className=" mr-1">
              {phone}
            </span>
          </div>
          <div style={{ direction: "rtl" }} className="mt-6">
            <span className="font-bold"> شماره فکس :</span>
            <span dir="ltr" className=" mr-1">
              {fax}
            </span>
          </div>

          <div style={{ direction: "rtl" }} className="my-6">
            <span className="font-bold">ایمیل :</span>
            <span className=" mr-1"> {email}</span>
          </div>
          <div style={{ direction: "rtl" }} className="">
            <span className="font-bold">تلگرام :</span>
            <span className=" mr-1"> {telegram}</span>
          </div>
          <div style={{ direction: "rtl" }} className="my-6">
            <span className="font-bold">اینستاگرام :</span>
            <span className=" mr-1"> {instagram}</span>
          </div>

          <div style={{ direction: "rtl" }} className="">
            <span className="font-bold">آدرس :</span>
            <span className=" mr-1">{address}</span>
          </div>

          <div style={{ direction: "rtl" }} className="my-6 ">
            <span className="font-bold">ساعت کاری :</span>
            <span className=" mr-1">{workHour}</span>
          </div>
        </div>

        {/* <div className="w-full h-full  mx-auto ">
        <iframe
          title="صرافی دولت"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3236.7905058577817!2d51.4490696!3d35.7805221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0437d10ecc43%3A0xf0931c0436a8f7e4!2sDolat%20Exchange!5e0!3m2!1sde!2sde!4v1702278828127!5m2!1sde!2sde"
          className="rounded-2xl w-[100%] h-[100%]  mx-auto outline-none

          screen1600:h-[80%]
          screen1400:h-[60%]
          screen800:mt-0 
          screen800:w-[40%]
          screen800:h-[130%]
          screen600:h-[100%]
          screen400:w-[60%]
           "
        />
      </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
