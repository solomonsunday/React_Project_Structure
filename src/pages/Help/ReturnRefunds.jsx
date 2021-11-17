import React from "react";
import returnPolicyImg from "../../assets/images/help/cb-returnss-policy.png";
import Header from "../../components/Header/Header";
import requestReturn from "../../assets/images/help/request-for-return.png";
import { DynamicButtonTwo } from "../../components/Button/DynamicButton";
import bag from "../../assets/images/help/bag.png";
import bus from "../../assets/images/help/bus.png";
import processed from "../../assets/images/help/processed.png";
import easyReturn from "../../assets/images/help/easy-return.png";
import Footer from "../../components/Footer/Footer";

export default function ReturnRefunds() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="mt-3 mb-5">
            <img src={returnPolicyImg} alt="" className="w-100"/>
          </div>
          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="10.6rem"
            backgroundColor="#043F7C"
            boxShadow="none"
            borderRadius="5rem"
            border="none !important"
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
          >
            INITIATE YOUR RETURN
          </DynamicButtonTwo>
          <div className="video__wrap col-6 my-5">
            <img src={requestReturn} alt="" className="w-100" />
          </div>

          <div className="row text-left pt-3">
            <div className="col-12 col-sm-6 col-lg-3  p-2 d-flex flex-column align-items-center">
              <img src={easyReturn} alt="" width="86px" height="86px" />
              <div>
                <div className="pb-2 pt-4 font-weight-bold">
                  ENJOY AN EASY RETURN AND REFUND ONLINE POLICY
                </div>
                <div className="font-sm">
                  You can return all eligible item(s) within 15 days for woozeee
                  Mall and 7 days for Marketplace. Click here to see Frequently
                  asked Questions.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3  p-2 d-flex flex-column align-items-center">
              <img src={bag} alt="" width="86px" height="86px" />
              <div>
                <div className="pb-2 pt-4 font-weight-bold">PREPARE THE ITEM</div>
                <div className="font-sm">
                  Place the item in its original packaging, including any
                  accessories, tags, labels or freebies. If you have created a
                  password on the device you wish to return, please ensure it is
                  removed, otherwise, your return will be invalid.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3  p-2 d-flex flex-column align-items-center">
              <img src={bus} alt="" width="86px" height="86px" />
              <div>
                <div className="pb-2 pt-4 font-weight-bold">
                  DROP OFF THE ITEMS OR SCHEDULE A PICK UP
                </div>
                <div className="font-sm">
                  Return the item at our pickup stations or we can pick up from
                  you within 1 - 4 business days. Always ensure your return slip
                  is signed by our agents as your proof of return.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3  p-2 d-flex flex-column align-items-center">
              <img src={processed} alt="" width="86px" height="86px" />
              <div>
                <div className="pb-2 pt-4 font-weight-bold">REFUND PROCESSED</div>
                <div className="font-sm">
                  Once we receive your returned item, we will inspect it and
                  process your refund within 10 business days into your woozeeePay
                  account. See our timelines here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
