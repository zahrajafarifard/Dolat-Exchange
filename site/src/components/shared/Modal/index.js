import React, { useState, Suspense } from "react";
// import ChartImg from "../../assets/icons/chart.svg";
import ReactDOM from "react-dom";
// const ModalComponent = React.lazy(() => import("./modal-chart"));

const Chart = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const showChartHandler = () => {
    setShowModal(true);
  };

  const closeChartHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={`${showModal && " relative z-10"} `}>
      <span onClick={showChartHandler} className=" cursor-pointer ">
        <img
          src={"ChartImg"}
          alt="چارت صرافی روبین"
          className="w-6 screen700:w-[18px] screen370:w-[14px] "
        />
      </span>

      <div
        className=" fixed top-[200px] left-[33%] grid screen1200:left-[25%]  screen1000:left-[20%] screen900:left-[12%]  screen700:-left-[1%]  screen600:right-[18%] 
      screen500:-left-[10%]  "
      >
        <Suspense>
          {showModal &&
            ReactDOM.createPortal(
              //   <ModalComponent data={data} closeHandler={closeChartHandler} />,
              <div>sala,</div>,
              document.getElementById("modals")
            )}
        </Suspense>
      </div>
    </div>
  );
};

export default Chart;
