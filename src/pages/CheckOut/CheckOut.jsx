import React from "react";
import CheckoutRowOne from "../../components/CheckOut/CheckoutRowOne";
import Footer from "../../components/Footer/Footer";
import HeaderThree from "../../components/Header/HeaderThree";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import MobileCheckout from "./MobileCheckout";

function CheckOut() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <HeaderThree />
      {width > 576 ? (
        <div className="body__wrapper putAtMiddle">
          <CheckoutRowOne />
        </div>
      ) : (
        <MobileCheckout />
      )}
      <Footer />
    </div>
  );
}

export default CheckOut;
