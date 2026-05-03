import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "jalali-moment";
const News = () => {
  const { state } = useLocation();

  const [news, setNews] = useState(state?.news);
  const [selectedNews, setSelectedNews] = useState(state?.selectedNews);

  // console.log("selectedNews ::::", selectedNews);
  return (
    <div className="flex flex-col place-items-end w-[80%] mx-auto my-10">
      <img
        src={
          `${process.env.REACT_APP_URL}/NewsPhoto/` +
          selectedNews.image.split("\\")[1]
        }
        className="w-72 h-48 rounded-xl my-2 
        screen400:mx-auto
        "
      />
      <div className="mt-4 screen600:text-sm">
        {moment(selectedNews.updatedAt, "YYYY-MM-DDTHH:mm:ss.SSZ ").format(
          "jYYYY/jM/jD HH:mm z"
        )}
      </div>
      <div
        className="text-2xl font-bold my-4 
      screen600:text-xl
      "
      >
        {selectedNews?.title}
      </div>
      <div
        style={{ direction: "rtl" }}
        className="text-justify screen600:text-sm"
      >
        {selectedNews && (
          <div>
            {selectedNews &&
              selectedNews?.content.split("\n").map((element, index) => {
                return (
                  <div
                    key={index}
                    style={{ direction: "rtl" }}
                    className={`  text-justify `}
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

export default News;

{
  /* {news?.map((element) => {
  return <div key={element.id}>{element.title}</div>;
})} */
}
