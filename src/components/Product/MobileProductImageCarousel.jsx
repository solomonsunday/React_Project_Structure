import React from "react";
import Swiper from "react-id-swiper";

const MobileProductImageCarousel = (props) => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const detailedImages = props.current?.detailedImages
//   const detailedImages = Object.values(props.current.detailedImages)
//   console.log(`"${props.current?.productImg}"`)

  return (
    <div className="d-flex"> 
      {/* SWIPPER DISAPEARS WHEN CLICKED FROM ANY OTHER PLACE, BUT SHOW WHEN COMING FROM HOMEPAGE  */}
    <Swiper {...params}>
      <span className="bg-white mr-2 rounded h-100" style={{ width: "60%" }}>
        <img
          src={props.current?.productImg}
          alt=""
          className="d-block h-100 w-100 py-2 object-fit-cover"
        />
      </span>
   
     {detailedImages ? Object.values(detailedImages).map((data, index)=>
        <span className="bg-white mr-2 rounded h-100" style={{ width: "60%" }} key={index}>
        <img src={data} alt="" className="d-block h-100 w-100 p-2 object-fit-cover" />
      </span>
     ) :""}
    </Swiper>
    </div>

  );
};
export default MobileProductImageCarousel;
