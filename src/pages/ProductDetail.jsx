import React from "react";
import Header from "../components/Header/Header";
import ProductLocation from "../components/Product/ProductLocation";
import ProductDetailRowOne from "../components/Product/ProductDetailRowOne";
import ProductDetailRowTwo from "../components/Product/ProductDetailRowTwo";
import ProductDetailRowThree from "../components/Product/ProductDetailRowThree";
import ProductDetailRowFour from "../components/Product/ProductDetailRowFour";
import ProductDetailRowFive from "../components/Product/ProductDetailRowFive";
import MobileProductDetail from "../components/Product/MobileProductDetail";
import { connect } from "react-redux";
import Footer from "../components/Footer/Footer";
import useWindowDimensions from "../Hooks/UseWindowDimension";

function ProductDetail({ products }) {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Header showHamburger={true} />
      {width > 576 ? (
        <div className="body__wrapper putAtMiddle">
          <ProductLocation />
          <ProductDetailRowOne product={products} />
          <ProductDetailRowTwo />
          <ProductDetailRowThree />
          <ProductDetailRowFour />
          <ProductDetailRowFive />
        </div>
      ) : (
        <MobileProductDetail/>
      )}
      <Footer />
    </div>
  );
}
//TO BE CONTINUED...

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductDetail);
