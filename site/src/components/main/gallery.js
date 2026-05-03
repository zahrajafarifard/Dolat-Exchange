import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import Spinner from "../shared/spinner";
import galleryIcon from "../../assets/img/gallery-black.svg";
import {
  yesterdayVisitors,
  todayVisitors,
  totalVisitors,
} from "../../store/action";

const Gallery = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    let _response, _data;
    const fetchImages = async () => {
      try {
        _response = await fetch(`${process.env.REACT_APP_URL}/api/getImages`);
        if (!_response.ok) {
          throw new Error("err occurred...");
        }

        _data = await _response.json();

        dispatch(yesterdayVisitors(_data.yesterdayCountVal));
        dispatch(todayVisitors(_data.todayCountVal));
        dispatch(totalVisitors(_data.totalCountVal));
      } catch (error) {
        console.log(error);
      }
      switch (_response.status) {
        case 200:
          setImages(_data.imgs);
          break;
        case 404:
          console.log("404...");
          break;
        case 500:
          console.log("500...");
          break;
        default:
          console.log("error occured...");
          break;
      }
    };
    fetchImages();
  }, [setImages]);

  const closeHandler = () => {
    setShowModal(false);
  };
  const showImageHandler = (img) => {
    setSelectedPhoto(img);
    setShowModal(true);
  };

  if (!images) {
    return <Spinner />;
  }

  return (
    <div className="border-t-4  border-transparent  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]">
      <div className="pt-1  bg-white ">
        <div
          style={{ direction: "rtl" }}
          className="relative grid grid-cols-3  bg-white  "
        >
          <div
            className="rounded-xl w-[12%]  absolute  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] z-10
            justify-center h-fit mx-auto inset-x-0 my-auto inset-y-0
            screen1200:w-[14%]
            screen900:w-[16%]
            screen700:w-[19%]
            screen600:w-[22%]
            screen500:w-[28%]
            "
          >
            <div
              className="flex flex-row py-4 justify-evenly mx-auto my-auto 
              screen1400:py-3
              screen1000:py-2
              "
            >
              <img
                src={galleryIcon}
                className=" w-11 h-full my-auto  screen1000:w-9 screen500:w-6 screen400:w-5"
              />
              <div className="my-auto font-bold screen1000:text-sm">گالری</div>
            </div>
          </div>
          {images?.map((img) => {
            return (
              <div
                key={img.id}
                className="border-2 border-transparent  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] "
              >
                <div
                  className="bg-white w-full h-[380px] grayscale
                screen1300:h-[300px]
                screen1100:h-[250px]
                screen900:h-[200px]
                screen700:h-[160px]
                screen550:h-[140px]
                screen470:h-[110px]
                screen400:h-[100px]
                screen330:h-[90px]
                "
                >
                  <img
                    src={
                      `${process.env.REACT_APP_URL}/images/` +
                      img.images.split("\\")[1]
                    }
                    onClick={() =>
                      showImageHandler(
                        `${process.env.REACT_APP_URL}/images/` +
                          img.images.split("\\")[1]
                      )
                    }
                    className="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${showModal && " relative"} `}>
        {showModal &&
          ReactDOM.createPortal(
            <div>
              <div
                className="w-full h-full bg-[#4c4c4c]   opacity-60 fixed top-0 left-0 z-20 "
                onClick={closeHandler}
              />

              <div
                className="z-30 fixed justify-center h-fit mx-auto inset-x-0 my-auto inset-y-0
                  w-[800px]
                  screen1200:w-[60%] 
                  screen500:w-[70%]"
              >
                <img
                  src={selectedPhoto}
                  className="mx-auto my-auto rounded-sm"
                />
              </div>
            </div>,

            document.getElementById("modals")
          )}
      </div>
    </div>
  );
};

export default Gallery;
