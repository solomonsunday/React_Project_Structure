import React from "react";
import PayFooter from "../components/Footer/PayFooter";
import HeaderPay from "../components/Header/HeaderPay";
import PayBody from "../components/Pay/PayBody";

export default function Pay() {
  return (
    <div>
      <HeaderPay />

      <div className="min-vh-100 d-flex flex-column justify-content-between">
        <div>
          <div className="body__wrapper putAtMiddle">
            <PayBody />
          </div>
        </div>
        <div>
          <div className="body__wrapper putAtMiddle">
            <PayFooter />
          </div>
          <hr className="help_footer_hr" />
          <p className="text-primary text-center py-4 font-weight-500">
            Back to woozeee
          </p>
        </div>
      </div>
    </div>
  );
}
