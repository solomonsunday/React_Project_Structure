import React from "react";
import paypalImg from "../../assets/images/help/paypal.png";
import { DynamicButtonTwo } from "../Button/DynamicButton";

export default function PayBody() {
  return (
    <div className="d-flex second__section__wrap mx-auto justify-content-center">
      <div className="col col-sm-9 col-md-7 py-3">
        <div className="py-2">
          <div className="d-flex justify-content-between w-100 font-xs font-weight-500">
            <p className="text-black-50">ORDER SUMMARY</p>
            <p className="text-primary">{`SEE DETAILS >`}</p>
          </div>
          <div className="d-flex justify-content-between w-100 my-2 bg-white font-weight-500 p-3 shadow-sm rounded">
            <p className="bold">TOTAL TO PAY</p>
            <p className="text-primary">{`₦ 1,836.00`}</p>
          </div>
        </div>

        <div className="py-2">
          <div className="d-flex justify-content-between w-100 font-xs font-weight-500">
            <p className="text-black-50">YOU WILL PAY WITH</p>
          </div>
          <div className="bg-white shadow-sm rounded">
            <div className="d-flex border-bottom justify-content-between w-100 my-2 font-weight-500 px-3 pt-3 pb-4">
              <div className="">
                <p className="bold">PayPal</p>
                <div className="text-black-50 font-xs pr-3">
                  <span>Amount will be converted and paid in</span>
                  <strong> USD</strong>
                  <span>. Bank might apply charges.</span>
                </div>
              </div>
              <img src={paypalImg} alt="" className="gateway_img" />
            </div>
            <p className="text-center font-weight-500 text-primary py-3">
              USE A DIFFERENT PAYMENT METHOD
            </p>
          </div>
        </div>

        <div className="p-4 rounded bg-white my-3 shadow-sm">
          <DynamicButtonTwo
            color="white"
            width="100%"
            height="42px"
            backgroundColor="var(--woozBlue)"
            boxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
            borderRadius="4px"
            border="none !important"
            marginBottom=""
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
          >
            PAY NOW: ₦ 1,836.00
          </DynamicButtonTwo>
        </div>

        <div className="font-sm text-center">
          <span>By tapping "PAY NOW" you agree to the </span>
          <span className="text-primary">{` Terms & Conditions`}</span>
        </div>

      </div>
    </div>
  );
}
