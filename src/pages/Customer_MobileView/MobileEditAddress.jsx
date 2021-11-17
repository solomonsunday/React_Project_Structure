import React from "react";
import AccountOtherRows from "../../components/Account/AccountOtherRows";
import Header from "../../components/Header/Header";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { Redirect } from "react-router-dom";
import EditAddressComp from "../../components/Account/EditAddressComp";
import Footer from "../../components/Footer/Footer";

export default function MobileEditAddress() {
  const { width } = useWindowDimensions();

  if (width < 768) {
    return (
      <div className="d-block d-md-none">
        <Header showHamburger={true} />
        <div className="body__wrapper putAtMiddle ">
          <div className="rightr">
            <div className="right__wrapper">
              <EditAddressComp />
            </div>
          </div>
          <AccountOtherRows />
        </div>
        <Footer />
      </div>
    );
  }
  return <Redirect to="/customer#/changePassword" />;
}
