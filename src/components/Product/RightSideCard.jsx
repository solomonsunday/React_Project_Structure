import React from "react";

const RightSideCard = (props) => {
  return (
    <div className="rightSideCard col-lg-12 col-sm-4 col-12 mx-auto">
      <div className="rightSideImg">
        <img src={props.productImage} alt="sponsored product" />
      </div>
      <div className="textgrp__rightSideCard mx-auto">
      <p className="textSmall2">
        Samsung Galaxy A70 6.7-Inch (4GB, 128GB ROM) Android 9 Pie
      </p>
      <p className="textBig2">&#8358; 80,000</p>
      </div>
      
    </div>
  );
};

export default RightSideCard;
