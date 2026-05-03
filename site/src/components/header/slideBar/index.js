import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CancelIcon from "../../../assets/icons/cancel icon-01.svg";
import menuIcon from "../../../assets/icons/menu.svg";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-[12px] items-center cursor-pointer fixed left-4 top-5  z-50  screen600:left-2   "
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          <img
            className=" w-4 h-4  mt-2 screen600:w-3 screen600:h-3   "
            src={CancelIcon}
            alt="بستن"
          />
        </button>
      ) : (
        <img
          alt="منو صرافی روبین"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          className="absolute z-30   items-center cursor-pointer left-10  top-8 w-10 h-10 
          screen750:left-6
          screen700:w-8
          screen550:left-4
          "
          src={menuIcon}
        />
      )}

      <div
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
        className={`top-0 left-0 w-full px-2 text-center  h-fit bg-[#6d6e70]   fixed  z-40   ${
          showSidebar
            ? "transition duration-1000 ease-in-out -translate-y-0"
            : "transition duration-1000 ease-in-out -translate-y-full"
        }`}
      >
        <ul
          style={{ direction: "rtl" }}
          className="flex flex-row justify-center   my-2 py-5 text-sm text-white  duration-700 font-bold   tracking-tighter
            screen600:text-xs
            screen500:text-[10px]
        
        "
        >
          <NavLink
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/"
          >
            <li className="text-center "> خانه</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/price"
          >
            <li className="text-center px-6 screen600:px-3 screen360:px-2">
              {" "}
              ارز و سکه
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/rules-forms"
          >
            <li>قوانین و فرم ها </li>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/news-questions"
          >
            <li className="px-6 screen600:px-3 screen360:px-2">
              اخبار و سوالات
            </li>
          </NavLink>

          <NavLink
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/about-us"
          >
            <li className="text-center  ">درباره ما</li>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
            to="/contact-us"
          >
            <li className="text-center px-6 screen600:px-3 screen360:px-2">
              تماس با ما
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
