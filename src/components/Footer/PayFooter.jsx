import React from "react";
import { Link } from "react-router-dom";

export default function PayFooter() {
  return (
    <div className="text-center pb-3 font-sm">
      <div>
        <strong>Please note: </strong>
        woozeeePay will never ask you for your password, PIN, CVV or full card
        details over the phone or via email.
      </div>
      <div className="py-2">
        <span> Need help? Contact us on </span>
        <Link to="/contact" className="text-primary">
          https://www.woozeee.com/contact/
        </Link>
      </div>
    </div>
  );
}
