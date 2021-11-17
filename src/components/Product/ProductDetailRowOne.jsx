import React from "react";
import { Row, Col } from "react-bootstrap";
import DiscountPercent from "../DiscountPercent/DiscountPercent";
import { Link, useHistory } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import LargeButton from "../Button/LargeButton";
import { HeartRating, ReadOnlyRating } from "../Rating/Rating";
import IconStore from "../../assets/icons/IconStore";
import ProductCarousel from "./ProductCarousel";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";

function ProductDetailRowOne({ current, product, addToCart }) {
  const history = useHistory();

  return (
    <Row className="rowOne__wrapper">
      <Col lg="9">
        <Row className="rows__wrapper">
          <Col md="4">
            <div className="productImageDisplay_wrap px-3">
              <img
                src={current?.productImg}
                alt="phone"
                className="productImageDisplay w-100"
              />
            </div>

            <div className="prevNext mr-4">
              <ProductCarousel count={10} />
            </div>

            <hr className="separator" />

            <div className="product__share pb-3 d-none d-md-block">
              <p className="shareProduct">SHARE THIS PRODUCT</p>
              <span className="socialFacebook">{IconStore.facebookIcon}</span>
              <span className="socialTwitter">{IconStore.twitterIcon}</span>
            </div>
          </Col>
          <Col md="8">
            <div>
              <div className="topSec">
                <span className="textBig">{current?.productName}</span>
                <HeartRating />
              </div>

              <span className="textSmallOne">Brand: </span>
              <span className="textSmallTwo">{`Samsung | Similar products from Samsung`}</span>
            </div>

            <div className="ratings__wrapper">
              <span>
                <ReadOnlyRating size="small" ratingCount={current?.rating} />
              </span>
              <span className="textSmallThree">
                {" "}
                ({current?.rating} ratings){" "}
              </span>
            </div>

            <p className="originalPrice">
              &#8358; {current?.mainPrice?.toLocaleString()}
            </p>
            <span className="discountedPrice">
              &#8358; {current?.slashedPrice?.toLocaleString()}
            </span>
            <DiscountPercent DiscountText="-10%" />
            <div className="largeButton__wrapper">
              {/* THIS IS WHERE I'M STUCK, LOADING CURRENT ITEM TO REDUX  */}
              <LargeButton
                buttonName="ADD TO CART"
                onClick={() => {
                  addToCart(current.id);
                  history.push("/cart");
                }}
              />
            </div>
            <div className="offers">
              <span>3 offers starting from &#8358;124,990</span>
              <Link to="" className="textLink">
                See More Offers
              </Link>
            </div>
            <div className="offers2">
              <span>YOU CAN ALSO BUY:</span>
              <Link to="" className="textLink">
                Details
              </Link>
            </div>
            <Row className="borderWrapperOne">
              <Col sm="1">
                <img src="/images/econnectProtect.svg" alt="" />
              </Col>
              <Col sm="11" className="protectPolicy">
                <span>Econnect Protect - Device Insurance </span>
                <p>+ &#8358; 19,650 </p>
              </Col>
            </Row>
            <div className="borderWrapperTwo">
              <div>
                <p className="totalPriceText">Total Price: </p>
                <p className="totalPriceFig">+ &#8358; 19,650 </p>
              </div>
              <div>
                <button type="button" className="smallButton">
                  BUY BOTH
                </button>
              </div>
            </div>

            <div className="promotionsWrapper">
              <p className="promotionTitle"> PROMOTIONS</p>
              <div className="promotionLineOne">
                <img
                  src="/images/promotionsBadge.svg"
                  alt="promotionsBadge"
                  className="promotionIcon"
                />
                <span>
                  Buy airtime {`&`} data on woozeee and get up to &#8358; 19,650
                </span>
              </div>
              <div className="promotionLineTwo">
                <img
                  src="/images/starBadge.svg"
                  alt="starBadge"
                  className="promotionIcon"
                />
                <span>
                  woozeee prime: Enjoy Free Delivery on all local orders{" "}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg="3" className="rightSide">
        <div className="rightSectionOne">
          <p className="rightSectionTitle">DELIVERY AND RETURNS</p>
          <Row className="newRowWrap">
            <div className="rightSectionWrapper col">
              <div className="rightSelGrp">
                <img
                  src="/images/deliveryBus.svg"
                  alt="delivery Bus"
                  className="topRightImgIcon"
                />
                <div>
                  <span className="smallTextHeadr">Delivery Information</span>
                  <p className="smallText">
                    Shipped from abroad. Delivered between Thursday 19 Dec and
                    Thursday 26 Dec.
                  </p>
                  <Link to="" className="smallText textLink">
                    See more{" "}
                  </Link>
                </div>
              </div>

              <div className="rightSelGrp">
                <img
                  src="/images/returnPolicyIcon.svg"
                  alt="returnPolicy Icon"
                  className="topRightImgIcon"
                />
                <div>
                  <span className="smallTextHeadr">Return Policy</span>
                  <p className="smallText">
                    Free return within 15 days for Jumia Mall items and 7 days
                    for other eligible items.
                  </p>
                  <Link to="" className="smallText textLink">
                    See more{" "}
                  </Link>
                </div>
              </div>

              <div className="rightSelGrp">
                <img
                  src="/images/warantyIcon.svg"
                  alt="warantyIcon"
                  className="topRightImgIcon"
                />
                <div>
                  <span className="smallTextHeadr">Warranty</span>
                  <p className="smallText">24 Months</p>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <div className="sellerInfo">
          <div>
            <p className="rightSectionTitle">SELLER INFORMATION</p>
          </div>
          <div className="woozStoreWrapper">
            <div className="woozSell">
              <p>woozeee store</p>
              <p>90% Seller score</p>
            </div>
            <hr className="horizontalLine" />
            <div className="sellerGroup">
              <p className="sellerText">Seller Performance</p>
              <div className="sellerTwo">
                <img
                  src="/images/greenStar.svg"
                  alt="green star"
                  className="starIcon"
                />
                <span>Order Fulfillment Rate: Excellent</span>
              </div>
              <div>
                <img
                  src="/images/greenStar.svg"
                  alt="green star"
                  className="starIcon"
                />
                <span>Quality Score: Excellent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="toSell align-items-center justify-content-between">
          <div>
            <p>Have one to Sell?</p>
            <p>Click here to list your product</p>
          </div>
          <div>
            <FaIcon.FaChevronRight />
          </div>
        </div>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailRowOne);
