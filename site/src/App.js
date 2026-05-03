import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Price from "./components/price";

import Rules from "./components/rules";
import RelatedLinks from "./components/main/relatedLinks";

import WhatsAppIcon from "./assets/img/whatsApp-black.svg";
import "./App.css";
import News from "./components/News/news-detailed";
import NewsQuestions from "./components/News";

function App() {
  return (
    <div className=" relative font-face-IRANSansWeb">
      <div className="  fixed right-4 bottom-10 z-50   ">
        <a
          href="https://wa.me/+989121111378"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className=" text-black border border-black shadow-md shadow-black font-bold flex flex-row-reverse 
          bg-gradient-to-r mx-auto from-[#BB841B]  via-[#F4EEA0]  to-[#AC7511] px-4 p-1 rounded-lg mb-2
          screen1100:text-sm
          screen700:text-xs
          screen700:px-2
          "
          >
            <div className="mx-auto my-auto ml-2">نیاز به مشاوره دارید ؟</div>
            <img
              src={WhatsAppIcon}
              className="w-7 h-7 mx-auto my-auto screen1100:w-6 screen1100:h-6 screen700:w-5 screen700:h-5 "
            />
          </div>
        </a>
      </div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/queue" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/rules-forms" element={<Rules />} />
          <Route path="/rules-forms" element={<Rules />} />
          <Route path="/news-questions" element={<NewsQuestions />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
