import React from "react";
import Header from "../../components/Header/Header";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HelpSearch } from "../../components/Search/Search";
import placenTrackOrder from "../../assets/images/help-with-my-orders.png";
import cancellations from "../../assets/images/cancellationss.png";
import paymentAccount from "../../assets/images/payment-account-related---otherss.png";
import returnRefunds from "../../assets/images/returns---refunds.png";
import HelpCard from "../../components/Help/HelpCard";
import wpay from "../../assets/images/help/wpay.png";
import wprime from "../../assets/images/help/wprime.png";
import wglobal from "../../assets/images/help/wglobal.png";
import official_Stores from "../../assets/images/help/official-stores.png";
import Footer from "../../components/Footer/Footer";

export default function HelpCenter() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex py-3 align-items-center">
            <RiCustomerService2Fill className="customer_img_icon mr-3" />
            <div className="text-left">
              <p className="font-weight-bold">HELP</p>
              <p>CENTER</p>
            </div>
          </div>
          <div className="py-3 customer_h2_txt text-primary font-weight-bold">
            woozeee Customer Care
          </div>
          <p className="py-3">How can we help you?</p>
          <div className="w-100 py-1 search_Icon_text ">
            <HelpSearch/>
            <div className="row justify-content-between font-sm mt-5">
              <div className="col-6 col-sm-3 text-center">
                <img
                  src={placenTrackOrder}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Place and Track Order</p>
              </div>
              <div className="col-6 col-sm-3 text-center">
                <img
                  src={cancellations}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Order Cancellation</p>
              </div>
              <div className="col-6 col-sm-3 text-center">
                <img
                  src={paymentAccount}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Return and Refunds</p>
              </div>
              <div className="col-6 col-sm-3 text-center">
                <img
                  src={returnRefunds}
                  alt=""
                  className="helpCenter__images p-2"
                />
                <p className="p-2">Payment and woozeee Account</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row my-5 helpcard__wrapper mx-auto justify-content-center">
            <HelpCard text="Get millions of products coming from abroad at incredible prices" imgUrl={wpay}/>
            <HelpCard text="A free payment solution tailored for you. Simply the safest & easiest way to pay on woozeee" imgUrl={wprime}/>
            <HelpCard text=" A loyalty program which allows its members to benefit from free delivery on their woozeee Express and woozeee Food orders" imgUrl={wglobal}/>
            <HelpCard text="Home of brands with: 100% authentic products, Warranty available, Easy Return & Faster Delivery with woozeee Express" imgUrl={official_Stores}/>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
