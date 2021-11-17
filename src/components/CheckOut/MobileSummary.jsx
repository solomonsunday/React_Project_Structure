import React from "react";

export default function MobileSummary() {
  return (
    <div>
      <div className="mt-4 font-weight-500">
        <div className="font-xs pl-3 pb-1">YOUR ORDER</div>
        <div className="bg-white border-top shadow-sm">
          <div className="p-3">
            <div className="d-flex align-items-center justify-content-between font-sm">
              <div>Subtotal</div>
              <div> &#8358; {Number(220000).toLocaleString()}</div>
            </div>
            <div className="d-flex align-items-center justify-content-between font-sm pb-3">
              <div>Shipping Fee</div>
              <div>&#8358; {Number(700).toLocaleString()}</div>
            </div>
            <div className="font-weight-600 d-flex align-items-center justify-content-between pt-3 border-top">
              <div>Total</div>
              <div className="text-woozBlue">
                &#8358; {Number(700).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-between font-xs font-weight-500 mt-3 px-3 pb-2">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white py-3 pl-3 font-weight-500 font-sm border-top shadow-sm">
          <div>Agent Tony</div>
          <div>Street Name</div>
          <div>Local Govt</div>
          <div>Mobile Number</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="d-flex justify-content-between font-xs font-weight-500 mt-3 px-3 pb-2">
          <span>DELIVERY METHOD</span>
          <span>CHANGE</span>
        </div>
        <div className="bg-white py-3 pl-3 font-weight-500 font-sm border-top shadow-sm">
          <div>Door Delivery</div>
          <div>Delivery between Tuesday 24 Dec and Tuesday 31 Dec for N600</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="d-flex justify-content-between font-xs font-weight-500 mt-3 px-3 pb-2">
          <span>PAYMENT METHOD</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white py-3 pl-3 font-weight-500 font-sm border-top shadow-sm">
          Payment on Delivery
        </div>
      </div>
    </div>
  );
}
