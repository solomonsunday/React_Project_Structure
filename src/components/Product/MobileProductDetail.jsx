import React from "react";
import { Row, Col } from "react-bootstrap";
import DiscountPercent from "../DiscountPercent/DiscountPercent";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
// import LargeButton from "../Button/LargeButton";
import { ReactComponent as UploadIcon } from "../../assets/images/upload.svg";
import { HeartRating, ReadOnlyRating } from "../Rating/Rating";
import IconStore from "../../assets/icons/IconStore";
import MobileProductImageCarousel from "./MobileProductImageCarousel";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";
import BottomCartNav from "../Footer/BottomCartNav";
import MobileComparePrice from "./MobileComparePrice";

function MobileProductDetail({ current, products, addToCart }) {
  //   const history = useHistory();
  return (
    <Row className="rowOne__wrapper">
      <Col lg="9">
        <div className="ml-2 mb-2 rounded-0">
          <MobileProductImageCarousel current={current} />
        </div>

        <div className="p-3 bg-white rounded-0">
          <div>
            <div className="">
              <span className="textBig w-100">{current?.productName}</span>
            </div>

            <div className="font-xs py-2">
              <span className="textSmallOne">Brand: </span>
              <span className="textSmallTwo">{`Samsung | Similar products from Samsung`}</span>
            </div>
          </div>

          <div className="originalPrice">
            &#8358; {current?.mainPrice?.toLocaleString()}
          </div>
          <div>
            <span className="discountedPrice slashedText text-black-50">
              &#8358; {current?.slashedPrice?.toLocaleString()}
            </span>
            <DiscountPercent DiscountText="-10%" />
          </div>
          <div className="mt-2">
            <ReadOnlyRating size="small" ratingCount={current?.rating} />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <span className="textSmallThree">({current?.rating} ratings)</span>
            <div className="d-flex">
              <UploadIcon className="mr-3 svgUploadColor" />

              <HeartRating className="svgUploadColor" />
            </div>
          </div>

            </div>

        <div className="mt-2">
          <div className="font-xs font-weight-500 pt-3 pb-2 pl-3">CUSTOMERS ALSO VIEWED</div>
            <MobileComparePrice current={current} productData={products} sliceFrom={0} sliceTo={6} paddingLeft="pl-2"/>
          </div>


        <div className="promotionsWrapper pb-3 pt-0 bg-white mb-3 border-0">
          <p className="rightSectionTitle"> PROMOTIONS</p>
          <div className="px-3">
            <div className="promotionLineOne">
              <span className="font-medium pr-2">{IconStore.promoIcon}</span>
              <span>
                Buy airtime {`&`} data on woozeee and get up to &#8358; 19,650
              </span>
            </div>
            <div className="promotionLineTwo">
              <span className="font-medium pr-2">{IconStore.promoIcon}</span>

              <span>
                woozeee prime: Enjoy Free Delivery on all local orders
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col lg="3" className="rightSide">
        <div className="rightSectionOne  rounded-0 shadow-none">
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
                    See more
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
                    See more
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

        <div className="sellerInfo rounded-0 shadow-none">
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

        <div className="toSell shadow-none rounded-0 align-items-center justify-content-between">
          <div>
            <p>Have one to Sell?</p>
            <p>Click here to list your product</p>
          </div>
          <div>
            <FaIcon.FaChevronRight />
          </div>
        </div>
      </Col>
      <BottomCartNav current={current} />
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      console.log(id);
      dispatch(addToCart(id));
    },
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileProductDetail);
