import React from "react";
import CardGroupTitle from "../components/Cards/CardGroupTitle";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import DealsSectionContent from "../components/Product/DealsSectionContent";
import { connect } from "react-redux";

function RecentlyViewed({ products}) {
  return (
    <div>
      <Header showHamburger={true} />

      <div className="body__wrapper putAtMiddle">
        <div className="prodWrapper">
          <div className="prodBigWrapper">
            <CardGroupTitle titleText="Recently Viewed" />
            <hr className="Separator2" />
            <div>
              <div className="mt-4 row">
                <DealsSectionContent
                  productData={products}
                  sliceFrom={6}
                  sliceTo={12}
                />
              </div>
              <div className="mt-4 row">
                <DealsSectionContent
                  productData={products}
                  sliceFrom={6}
                  sliceTo={12}
                />
              </div>
              <div className="mt-4 row">
                <DealsSectionContent
                  productData={products}
                  sliceFrom={6}
                  sliceTo={12}
                />
              </div>
              <div className="mt-4 row">
                <DealsSectionContent
                  productData={products}
                  sliceFrom={6}
                  sliceTo={12}
                />
              </div>
              <div className="mt-4 row">
                <DealsSectionContent
                  productData={products}
                  sliceFrom={6}
                  sliceTo={12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(RecentlyViewed);
