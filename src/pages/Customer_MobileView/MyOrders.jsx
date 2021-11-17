import React from 'react'
import AccountOtherRows from "../../components/Account/AccountOtherRows";
import Header from "../../components/Header/Header";
import IconStore from "../../assets/icons/IconStore";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { Link, Redirect } from "react-router-dom";
import MyOrdersUI from '../../components/Account/MyOrdersUI';
import Footer from '../../components/Footer/Footer';

export default function MyOrders() {
    const { width } = useWindowDimensions();

    if (width < 768) {
        return (
          <div className="d-block d-md-none">
            <Header showHamburger={true} />
            <div className="body__wrapper putAtMiddle ">
              <div className="rightr">
                <div className="right__wrapper">
                  <Link to="/customer" className="addressBook_btnGrp d-flex mb-3">
                    <button className="addressBook__backButton">
                      {IconStore.bxArrowBack}
                    </button>
                    <span className="titleHeader align-self-center">My Orders</span>
                  </Link>
                  <MyOrdersUI />
                </div>
              </div>
              <AccountOtherRows />
            </div>
            <Footer />
          </div>
        );
      }
      return <Redirect to="/customer#/orders" />
}
