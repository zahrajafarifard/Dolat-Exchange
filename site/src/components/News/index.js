import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CommonQuestions from "./commonQuestions";
const News = () => {
  const [news, setNews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let _response, _data;

    const fetchData = async () => {
      try {
        _response = await fetch(`${process.env.REACT_APP_URL}/api/getNews`);
        if (!_response.ok) {
          throw new Error("err occurred...");
        }
        _data = await _response.json();
      } catch (error) {
        console.log(error);
      }
      switch (_response.status) {
        case 200:
          setNews(_data);
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
    fetchData();
  }, []);

  return (
    <div
      id="news"
      style={{ direction: "rtl" }}
      className="  mb-1 border-transparent  bg-gradient-to-r  from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511]"
    >
      <div className="py-1  bg-white ">
        <div className="w-[80%] mx-auto py-10">
          <div
            className="text-2xl font-bold mb-4
           screen1000:text-xl
           screen800:text-base
           screen600:text-sm"
          >
            اخبار و مقالات
          </div>
          <div className="grid grid-cols-2 screen500:grid-cols-1">
            {news?.map((element) => {
              return (
                <div
                  title="برای دیدن متن کامل خبر کلیک کنید"
                  onClick={() =>
                    navigate("/news", {
                      state: {
                        news: news,
                        selectedNews: element,
                      },
                    })
                  }
                  key={element.id}
                >
                  <img
                    alt="عکس خبر"
                    src={
                      `${process.env.REACT_APP_URL}/NewsPhoto/` +
                      element.image.split("\\")[1]
                    }
                    className="w-64 h-40 rounded-xl mx-auto my-2 screen950:w-48 screen950:h-28"
                  />

                  <div
                    className="font-bold text-xl my-2 mr-16 screen1100:mr-8
                  screen1000:text-base
                  screen800:text-sm
                  screen600:text-xs "
                  >
                    {element.title}
                  </div>
                  <div
                    className="text-justify w-[80%] mx-auto my-4 px-2 text-lg text-[#4c4c4c]  line-clamp-2
                hover:cursor-text hover:whitespace-normal hover:overflow-visible hover:flex hover:flex-1 
                screen800:line-clamp-3
                screen1000:text-base
                screen800:text-sm
                screen600:text-xs "
                  >
                    {element.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CommonQuestions />
    </div>
  );
};

export default News;
