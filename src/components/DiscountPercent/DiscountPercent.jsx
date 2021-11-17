import React from "react";

const DiscountPercent = (props) => {
  return (
    <span className="discountWrapper">
      <span className="percentDiscount2">
        <span className="percentDiscount__text2">{props.DiscountText}</span>
      </span>
    </span>
  );
};

export default DiscountPercent;
