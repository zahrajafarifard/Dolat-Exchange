import React, { useState, useEffect } from "react";
import "./style.css";
import uploadImg from "../../assets/image/upload.png";

const Image = () => {
  const [image, setImage] = useState([]);
  const [imageSize, setImageSize] = useState("");

  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/api/getImageName`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const uploadImagesHandler = async () => {
    setUploading(true);
    let response, data;

    const formData = new FormData();

    for (var x = 0; x < image.length; x++) {
      formData.append("image", image[x]);
    }

    try {
      response = await fetch(`${process.env.REACT_APP_URL}/api/uploadImage`, {
        method: "POST",
        body: formData,
      });

      data = await response.json();
      setUploading(false);
      window.reloadApp.reloadApplication();
    } catch (error) {
      console.log(error);
      setUploading(false);

      return window.Notification.showError("عدم بار گزاری عکس");
    }
    setUploading(false);

    if (!response.ok) {
      return window.Notification.showError("عدم بار گزاری عکس");
    }
    if (response.ok) {
      // console.log(data);
    }
  };

  const deleteImageHandler = async () => {
    setDeleting(true);

    let _response, _data;
    try {
      _response = await fetch(`${process.env.REACT_APP_URL}/api/deleteImage`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: selectedItem }),
      });

      _data = await _response.json();
      setDeleting(false);
      window.reloadApp.reloadApplication();
    } catch (error) {
      console.log(error);
      setDeleting(false);
      return window.Notification.showError(" عدم حذف عکس");
    }
  };

  const fileHandler = (e) => {
    setImageSize(false);

    let tem = [];
    let images = e.target.files;

    var i;
    for (i = 0; i < e.target.files.length; i++) {
      tem.push(images[i]);

      if (images[i].size > 5000000) {
        setImageSize(true);
      }
    }
    setImage(tem);
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
        <div>- حداکثر تعداد عکس های انتخابی 6 عدد </div>
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
              multiple
            />
          </div>
        </div>
      </div>

      <div className="my-10 text-sm">
        {imageSize !== "" && imageSize ? (
          <div className="text-red-500 font-bold text-[14px] mt-1">
            ** حجم فایل (های) انتخابی بیشتر از حد مجاز است **
          </div>
        ) : (
          imageSize !== "" && (
            <div className="text-gray-600 font-bold text-[14px] mt-1">
              ** فایل (های) انتخابی مجاز است **
            </div>
          )
        )}
      </div>
      <div className="my-8">
        <button
          onClick={uploadImagesHandler}
          style={{ direction: "rtl" }}
          disabled={imageSize}
          className={`px-4  py-1  text-[14px] shadow-md  shadow-red-900 rounded-xl  font-bold bg-black text-red-700
         disabled:bg-gray-600 disabled:text-gray-300 disabled:shadow-gray-900 disabled:cursor-not-allowed
      ${uploading && "animate-pulse"}
          `}
        >
          {uploading ? " در حال بار گزاری ..." : " بارگزاری عکس ها"}
        </button>
      </div>




      
      <div
        style={{ direction: "rtl" }}
        className="text-right my-4 mr-6 text-gray-700 font-bold text-sm"
      >
        در این قسمت میتوانید با انتخاب عکس آن را حذف کنید :
      </div>

      <div className=" flex flex-row-reverse w-[45%] justify-evenly mx-auto">
        <div>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="rounded-md p-1"
          >
            <option>عکس های گالری</option>;
            {data?.map((item) => {
              // console.log(item.id);
              return (
                <option key={item.id} value={item.id}>
                  {item.images.split("\\")[1]}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={deleteImageHandler}
          style={{ direction: "rtl" }}
          className={`px-6 py-1  text-[14px] shadow-md  shadow-red-900 rounded-xl  font-bold bg-black text-red-700
          ${deleting && "animate-pulse"}
          `}
        >
          {deleting ? " حذف..." : "حذف"}
        </button>
      </div>

    </div>
  );
};

export default Image;
