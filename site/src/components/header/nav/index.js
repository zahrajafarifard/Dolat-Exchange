import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import whatsAppIcon from "../../../assets/img/whatsApp-gray.svg";
import telegramIcon from "../../../assets/img/telegram.svg";
import Menu from "../slideBar";

const Navigation = () => {
  return (
    <div className=" flex flex-row-reverse  justify-between font-semibold  text-[#4c4c4c]    ">
      <ul
        className=" flex flex-row-reverse justify-center  text-xl my-auto screen750:hidden
        screen1400:text-lg screen1300:text-base screen1100:text-sm screen1000:-mr-8
      screen900:text-xs
      screen900:tracking-tighter

      "
      >
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
          to="/"
        >
          <li>صفحه اصلی</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
          to="/price"
        >
          <li className="px-10 screen1250:px-6 screen1200:px-4 screen900:px-3">
            نرخ ارز و سکه
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
          <li className="px-10 screen1250:px-6 screen1200:px-4 screen900:px-3">
            اخبار و سوالات متداول
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
          to="/about-us"
        >
          <li>درباره ما</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#c08d26]" : "")}
          to="/contact-us"
        >
          <li className="px-10 screen1250:px-6 screen1200:px-4 screen900:px-3">
            تماس با ما
          </li>
        </NavLink>
      </ul>

      <div className="flex flex-row  screen750:hidden ">
        <div className="w-fit h-fit mx-auto my-auto">
          <a
            href="https://wa.me/+989121111378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsAppIcon}
              className="w-10 h-10 screen1300:w-8 screen1300:h-8 screen1000:w-6 screen1000:h-6 screen900:w-5 screen900:h-5"
            />
          </a>
        </div>
        <div className="w-fit h-fit ml-4 screen1000:ml-2">
          <a
            href="https://wa.me/+989121111378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={telegramIcon}
              className="w-10 h-10 screen1300:w-8 screen1300:h-8 screen1000:w-6 screen1000:h-6 screen900:w-5 screen900:h-5"
            />
          </a>
        </div>
      </div>
      <div className="hidden screen750:grid   ">
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
