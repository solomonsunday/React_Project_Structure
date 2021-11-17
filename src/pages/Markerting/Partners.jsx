import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import DynamicButton from "../../components/Button/DynamicButton";
// import { Link } from "react-router-dom";
import LogisticsPartnerForm from "../../components/Form/LogisticsPartnerForm";

export default function Partners() {
  return (
    <div>
      <Header />

      <div className="body__wrapper putAtMiddle">
        {/* <div className="mt-4 bg-white"> */}
        <div className="prodWrapper mb-5 col-12 col-lg-9 mx-auto">
          <div className="bg-white rounded shadow-sm">
            <div className="text-center pt-3 bg-woozBlue rounded-top text-white">
              <h3 className="text-white font-sm-">
                Want to Become a woozeee Partner?
              </h3>
              <div className="py-4 font-sm col-9 mx-auto">
                Jumia has multifold opportunities in field of express logistics
                in last mile delivery and line haul. If you are willing to
                partner with us, please fill the following form to register your
                interest.
              </div>
            </div>
            <div className="mt-4">
            <LogisticsPartnerForm />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
