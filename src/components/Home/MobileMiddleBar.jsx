import React from "react";
import Swiper from "react-id-swiper";
import summerSale from "../../assets/images/summerSale.png";
import yearSale from "../../assets/images/2021Sale.png";
import oldBlackFriday from "../../assets/images/oldBlackFriday.png";
import newBlackFriday from "../../assets/images/newBlackFriday.png";

const FreeModeNoFixedPositions = () => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <Swiper {...params}>
      <span className="mr-2" style={{ width: "80%" }}>
        <img
          src={oldBlackFriday}
          alt=""
          className="d-block h-100 w-100 imgSize"
        />
      </span>
      <span className="mr-2" style={{ width: "80%" }}>
        <img src={summerSale} alt="" className="d-block h-100 w-100 imgSize" />
      </span>
      <span className="mr-2" style={{ width: "80%" }}>
        <img src={yearSale} alt="" className="d-block h-100 w-100 imgSize" />
      </span>
      <span className="mr-2" style={{ width: "80%" }}>
        <img
          src={newBlackFriday}
          alt=""
          className="d-block h-100 w-100 imgSize"
        />
      </span>
    </Swiper>
  );
};
export default FreeModeNoFixedPositions;
