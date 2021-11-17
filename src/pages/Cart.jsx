import React from "react";
import StandaloneBtnGrp from "../components/Button/StandaloneBtnGrp";
import CartOtherRows from "../components/Cart/CartOtherRows";
import CartRowOne from "../components/Cart/CartRowOne";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import Footer from "../components/Footer/Footer";
import LargeButton from "../components/Button/LargeButton";
import { Link } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimension";

function Cart({ products }) {
  const { width } = useWindowDimensions();
  return (
    <div>
      <Header showHamburger={true} />

      <div className="body__wrapper putAtMiddle">
        <CartRowOne />
      </div>
      
      {width > 576 ? (
        <>
        <StandaloneBtnGrp>
          <Link
            to="/"
            className="continuebtn col-sm-auto mr-3 d-none d-sm-inline-block"
          >
            <LargeButton buttonName="CONTINUE SHOPPING" />
          </Link>

          <Link to="/checkout" className="proceedbtn col-sm-auto">
            <LargeButton buttonName="PROCEED TO CHECKOUT" />
          </Link>
        </StandaloneBtnGrp>
         <div className="body__wrapper putAtMiddle">
         <CartOtherRows />
       </div>
        </>
        
      ) : (
        ""
      )}
     

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Cart);
