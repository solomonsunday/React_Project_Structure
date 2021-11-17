import React from "react";
import Header from "../../components/Header/Header";
import placeOrder from "../../assets/images/cb-place-order-d.jpg";
import findproduct from "../../assets/images/help/how-to-find-a-product-v2.png";
import deliveryTimeline from "../../assets/images/help/delivery-timelines.png";
import trackOrder from "../../assets/images/help/track-order.png";
import fakeVideo from "../../assets/images/help/photoshoped-video.png";
import blurHomeCategory from "../../assets/images/help/blur-homepage-category.png";
import addToCartHelp from "../../assets/images/help/addToCart-help.png";
import PlaceOrderSteps from "../../components/Help/PlaceOrderSteps";
import proceedToCheckout from "../../assets/images/help/proceedToCheckout-help.png";
import deliveryDetails from "../../assets/images/help/deliveryDetails.png";
import innerBanner from "../../assets/images/help/innerBanner-unblured.png";
import searchHelp from "../../assets/images/help/search__help.png";
import Footer from "../../components/Footer/Footer";

export default function PlacenTrackOrder() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <div className="text-center d-flex flex-column align-items-center justify-content-center">
          <div className="my-3">
            <img
              src={placeOrder}
              alt=""
              className="rounded w-100 help__banner__img min-height-xs object-fit-cover"
            />
            <div className="d-flex flex-column flex-sm-row bg-white rounded-bottom shadow-sm align-items-center py-3 ">
              <div className="text-left font-weight-500 pl-md-5 pl-2 text-nowrap">
                <p>Need help placing an order?</p>
                <strong className="font-xl">Call: 01 699 6969</strong>
              </div>
              <div className="d-flex w-100">
                <div className="col">
                  <div className="trackHeader__img mx-auto p-3 bg-white rounded-circle">
                    <img src={findproduct} alt="" className="w-100" />
                  </div>
                  <p className="font-sm">Place Order</p>
                </div>
                <div className="col">
                  <div className="trackHeader__img mx-auto p-3 bg-white rounded-circle">
                    <img src={deliveryTimeline} className="w-100" alt="" />
                  </div>
                  <p className="font-sm">Delivery Timelines</p>
                </div>
                <div className="col">
                  <div className="trackHeader__img mx-auto p-3 bg-white rounded-circle">
                    <img src={trackOrder} className="w-100" alt="" />
                  </div>
                  <p className=" font-sm">Track Order</p>
                </div>
              </div>
              <div className="col d-none d-md-flex"></div>
            </div>
          </div>
          <div className="d-flex second__section__wrap mx-auto justify-content-center">
            <div className="col-12 col-md-9 col-lg-6 py-3">
              <div className="">
                <img src={fakeVideo} alt="" className="w-100" />
              </div>
              <div className="text-left">
                <h5 className="pt-1 pt-sm-3 mt-5 pb-3">
                  <strong>
                    You can find a product by following these steps:
                  </strong>
                </h5>
              </div>
              <PlaceOrderSteps
                text1="1. Using the"
                strongText="Product Catalog"
                text2=", select a category"
                imgUrl={blurHomeCategory}
              />
              <PlaceOrderSteps
                text1="2. Using"
                strongText=" Search Function"
                text2=", if you already have something
                specific in mind type what you are looking for in the search
                field at the top of the page. You will find all related products"
                imgUrl={searchHelp}
              />

              <PlaceOrderSteps
                text1="3. Using"
                strongText=" Featured Campaigns"
                text2=", if one of the campaigns
                interest you, click on one of the banners to discover a wide
                range of products. Once you find the item that interest you
                click on it to access it's details"
                imgUrl={innerBanner}
              />

              <PlaceOrderSteps
                text1="4. Click "
                strongText="Add to Cart."
                text2="Delivery estimation date is displayed under delivery information"
                imgUrl={addToCartHelp}
              />
              <PlaceOrderSteps
                text1="5. Based on the item, click the "
                strongText=" View Cart and Checkout"
                text2="button, or the Cart Iconat the top right of your screen"
                imgUrl={proceedToCheckout}
              />
              <PlaceOrderSteps
                text1="6. Complete the payment steps"
                strongText=""
                text2=""
                imgUrl={deliveryDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
