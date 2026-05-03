import React, { useState, useEffect } from "react";

import Spinner from "../shared/spinner";
const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState("");
  // console.log("aaaa", !aboutUs);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getConfig`)
      .then((response) => {
        if (!response.ok) {
          return new Error(`error ${response.status} occured...`);
        }
        return response.json();
      })
      .then((res) => {
        setAboutUs(res.aboutUs.split("\n"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!aboutUs) {
    return <Spinner />;
  }
  return (
    <div className="h-[45vh] screen950:h-[55vh] screen600:h-[65vh] screen400:h-[82vh]">
      <div
        className=" w-[75%]  mx-auto  text-justify text-gray-600 leading-8 
  
    screen500:leading-7
    screen400:leading-6
    screen500:text-sm

    my-32
    screen900:my-28
    screen800:my-6
    
    "
      >
        {aboutUs && (
          <div className="my-10">
            {aboutUs?.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ direction: "rtl" }}
                  className={`font-bold  text-justify ${
                    index === 0 && "text-[#c29a3d] my-4 font-extrabold text-xl"
                  }`}
                >
                  {element}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
