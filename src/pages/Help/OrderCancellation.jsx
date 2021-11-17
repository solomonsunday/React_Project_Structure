import React from "react";
import Header from "../../components/Header/Header";
import fakeVideo from "../../assets/images/help/photoshoped-video.png";
import Footer from "../../components/Footer/Footer";

export default function OrderCancellation() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="mt-5">
            <h5 className="font-weight-bold text-primary">
              HOW TO CANCEL YOUR ORDER
            </h5>

            <div className="row mt-3 align-items-center">
              <div className="col-12 col-lg-6 p-3">
                <div className="d-flex align-items-center">
                  <img src={fakeVideo} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-12 col-lg-6 text-left pt-0 px-3 pb-3 pt-sm-3 ">
                <p>
                  <strong>FREQUENTLY ASKED QUESTIONS</strong>
                </p>
                <div className="font-sm pt-2">
                  <p>
                    <strong> Can I cancel my order?</strong>
                  </p>
                  <div>
                    Yes, you can cancel your order when it is in waiting to be
                    shipped status and pending confirmation status. Please note
                    that orders in shipped status cannot be canceled.
                  </div>
                  <p className="pt-3">
                    <strong>
                      My order was prepaid, how will I get a refund?
                    </strong>
                  </p>
                  <p>
                    If you cancel your order online, you will receive a refund
                    in your woozeeePay wallet within 24hours. If you reject the
                    delivery of the order, your refund will be processed as soon
                    as the order is updated to the delivery failed within 48
                    hours
                  </p>
                  <p className="pt-3">
                    <strong>
                      My order has been shipped but I still want to cancel it.
                    </strong>
                  </p>
                  <p>
                    If your order has been shipped, not to worry, once you are
                    contacted by our delivery agent, kindly reject the delivery
                    of the shipped order.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="font-weight-bold text-primary">
                STEPS TO CANCEL YOUR ORDER
              </h5>
              <div className="row text-left pt-3">
                <div className="col-12 col-md-4 mt-3 mt-md-0  p-2 d-flex flex-column justify-content-between">
                  <div className="p-2">
                    1. From the list of Orders in your woozeee Account, Click See
                    Details in front of the order you wish to cancel.
                  </div>
                  <div className="">
                    <img src={fakeVideo} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-12 col-md-4 mt-3 mt-md-0  p-2 d-flex flex-column justify-content-between">
                  <div className="p-2">2. Click the Cancel Item button</div>
                  <div className="">
                    <img src={fakeVideo} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-12 col-md-4 mt-3 mt-md-0  p-2 d-flex flex-column justify-content-between">
                  <div className="p-2">
                    3. Select the right quantity and cancellation reason from
                    the drop-down list, and submit.
                  </div>
                  <div className="">
                    <img src={fakeVideo} alt="" className="w-100" />
                  </div>
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
