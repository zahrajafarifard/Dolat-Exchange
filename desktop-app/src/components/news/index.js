import React, { useState, useEffect } from "react";
import uploadImg from "../../assets/image/upload.png";
const News = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isUpLoading, setIsUpLoading] = useState(false);

  const [image, setImage] = useState("");
  const [imageSize, setImageSize] = useState("");

  const fileHandler = (e) => {
    setImageSize(false);

    // let tem = [];
    let image = e.target.files[0];

    // var i;
    // for (i = 0; i < e.target.files.length; i++) {
    // tem.push(images[i]);

    if (image.size > 5000000) {
      setImageSize(true);
    }
    // }
    setImage(image);
  };

  const submitHandler = async () => {
    console.log("iiiii", image, imageSize);
    setIsUpLoading(true);
    let response, data;

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);

    try {
      response = await fetch(`${process.env.REACT_APP_URL}/api/registerNews`, {
        method: "POST",
        headers: {
          secretKey: process.env.REACT_APP_SECRET_KEY,
        },
        body: formData,
      });

      data = await response.json();
      setIsUpLoading(false);
      window.reloadApp.reloadApplication();
    } catch (error) {
      // console.log(error);
      setIsUpLoading(false);

      return window.Notification.showError("عدم بار گزاری عکس");
    }
    setIsUpLoading(false);

    if (!response.ok) {
      return window.Notification.showError("عدم بار گزاری عکس");
    }
    if (response.ok) {
      // console.log(data);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="">
      <div
        style={{ direction: "rtl" }}
        className="text-right m-4 text-red-700 font-bold text-sm"
      >
        لطفا در انتخاب عکس به موارد زیر دقت کنید :
      </div>
      <div
        style={{ direction: "rtl" }}
        className="text-right my-4 mr-6 text-gray-700 font-bold text-sm"
      >
        <div>- حداکثر تعداد عکس های انتخابی 1 عدد </div>
        <div>- حداکثر حجم عکس انتخابی 5 مگابایت</div>
        <div>- فرمت های قابل قبول : jpg ، jpeg ، png</div>
      </div>

      <div className="app">
        <div className="parent">
          <div className="file-upload">
            <img src={uploadImg} alt="upload" className=" mx-auto" />
            <span className="text-xs font-bold text-gray-600">انتخاب عکس</span>
            <p className="text-xs">حداکثر سایز مجاز 5 مگابایت</p>
            <input
              name="image"
              id="image"
              type="file"
              accept=".jpg , .jpeg , .png"
              placeholder="Image"
              className="accent-red-700 rounded-md border-red-600 text-red-600"
              title="عکس های مورد نظر را انتخاب کنید"
              onChange={(e) => fileHandler(e)}
            />
          </div>
        </div>
      </div>

      <div style={{ direction: "rtl" }} className=" w-[70%] mx-auto ">
        <div className="text-right pr-1 mt-2 pb-1  text-sm font-bold text-red-700 my-2">
          عنوان خبر :
        </div>
        <input
          className="rounded-md py-1 w-full px-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان خبر "
        />
      </div>
      <div className="w-fit mx-auto my-6">
        <div
          style={{ direction: "rtl" }}
          className="text-right pr-1 mt-2 pb-1  text-sm font-bold text-gray-700 my-2"
        >
          متن خبر :
        </div>
        <div>
          <textarea
            className="rounded-lg py-2 px-3"
            style={{ direction: "rtl" }}
            rows={5}
            cols={65}
            placeholder="متن خبر ... "
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>

      <button
        disabled={!title && !content}
        onClick={submitHandler}
        style={{ direction: "rtl" }}
        className={`px-2  py-1  text-[14px] shadow-md  shadow-red-900 rounded-xl  font-bold bg-black text-red-700 w-24  disabled:cursor-not-allowed
          ${isUpLoading && "animate-pulse"}
       
          `}
      >
        {isUpLoading ? "در حال ذخیره خبر ..." : " ثبت خبر"}
      </button>
    </div>
  );
};

export default News;
