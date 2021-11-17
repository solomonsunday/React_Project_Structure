import React from "react";
import Header from "../../components/Header/Header";
import IconStore from "../../assets/icons/IconStore";
import payAcc from "../../assets/images/help/payment-account-related---otherss.png";
import wpay from "../../assets/images/help/wpay.png";
import payCheckout from "../../assets/images/help/paymentCheckout.png";
import { DynamicButtonTwo } from "../../components/Button/DynamicButton";
import Footer from "../../components/Footer/Footer";

export default function HowToPay() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div class="-header my-3 mb-lg-5 py-4 w-100 bg-cover bg-center">
            how to pay
          </div>

          <div className="row pt-0 pt-lg-3 align-items-center">
            <div className="col-12 col-sm-6 col-lg-auto  p-2 mb-3 d-flex flex-column align-items-center justify-content-between">
              <img
                src={wpay}
                alt=""
                width="128px"
                height="105px"
                className="object-fit-contain"
              />
              <div>
                <div className="py-2 font-weight-bold">woozeeePay</div>
                <div className="font-sm text-lg-nowrap">
                  Pay with your card through JumiaPay Easy and safe Payment
                </div>
                <div className="pt-4">
                  <DynamicButtonTwo
                    color="white"
                    height="2.5rem"
                    width="10rem"
                    backgroundColor="#043F7C"
                    boxShadow="none"
                    borderRadius="2.5rem"
                    border="none !important"
                    fontWeight="500"
                    fontSize="0.875rem"
                    hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                    type="submit"
                  >
                    Discover
                  </DynamicButtonTwo>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-auto pt-5 pt-sm-2 p-2 mb-3 d-flex flex-column align-items-center  justify-content-between">
              <div className="">
              <img
                src={payAcc}
                alt=""
                width="86px"
                height="64px"
                className="object-fit-contain"
              />
              </div>
              
              <div>
                  <div className="pb-2 pt-5 font-weight-bold">
                    PAY ON DELIVERY
                  </div>
                  <div className="font-sm">
                    No risk for you Shop like a store but at home!
                </div>
                <div className="pt-4">
                  <DynamicButtonTwo
                    color="white"
                    height="2.5rem"
                    width="10rem"
                    backgroundColor="#043F7C"
                    boxShadow="none"
                    borderRadius="2.5rem"
                    border="none !important"
                    fontWeight="500"
                    fontSize="0.875rem"
                    hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                    type="submit"
                  >
                    Discover
                  </DynamicButtonTwo>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-auto mt-0 mt-lg-n4 p-2 mb-3 d-flex flex-column align-items-center">
              {IconStore.voucherTicket}
              <div>
                <div className="py-2 font-weight-bold">VOUCHERS</div>
                <div className="font-sm">
                  You can use your voucher as a means of payment
                </div>
              </div>
              <div className="pt-4">
                <DynamicButtonTwo
                  color="white"
                  height="2.5rem"
                  width="10rem"
                  backgroundColor="#043F7C"
                  boxShadow="none"
                  borderRadius="2.5rem"
                  border="none !important"
                  fontWeight="500"
                  fontSize="0.875rem"
                  hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                  type="submit"
                >
                  Discover
                </DynamicButtonTwo>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <img src={payCheckout} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
