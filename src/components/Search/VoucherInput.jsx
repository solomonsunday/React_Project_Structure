import React from "react";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { DynamicButtonTwo } from "../Button/DynamicButton";

export const VoucherInput = () => {
  const {width} = useWindowDimensions()
    return (
      <div className="header__voucher py-3">
        <input
          type="text"
          className="header__voucherInput rounded-0"
          placeholder= { width > 480 ? "Enter voucher / SureGifts code here" : "Enter voucher"}
        />
        <DynamicButtonTwo
            color="white"
            width={ width > 480 ? "10rem" : "6rem"}
            height="40px"
            backgroundColor="var(--woozBlue)"
            boxShadow="none"
            borderRadius="0px"
            border="none !important"
            marginBottom=""
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
          >
           { width > 480 ? "ADD VOUCHER" : "ADD"}
          </DynamicButtonTwo>
      </div>
    );
  };
  