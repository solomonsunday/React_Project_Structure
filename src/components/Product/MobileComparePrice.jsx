import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";
// import ScrollToTop from "../../Hooks/ScrollToTop";
// import MobileComparePriceContent from "./MobileComparePriceContent";

const MobileComparePrice = ({
  productData,
  addToCart,
  loadCurrentItem,
  ...props
}) => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`d-flex ${props.paddingLeft}`}>
      {/* SWIPPER DISAPEARS WHEN CLICKED FROM ANY OTHER PLACE, BUT SHOW WHEN COMING FROM HOMEPAGE  */}
      <Swiper {...params}>
        {(productData || [])
          .slice(props.sliceFrom, props.sliceTo)
          .map((data, index) => {
            return (
              <Link
                key={index}
                to={`/product/${(data || []).id}`}
                onClick={() => {
                  loadCurrentItem(data);
                  scrollToTop();
                }}
                className="bg-white mr-2 rounded d-block"
                style={{ width: "50%" }}
              >
                <div style={{ height: "135px" }}>
                  <img
                    src={data?.productImg}
                    alt=""
                    className="d-block w-100 h-100 py-2 object-fit-contain"
                  />
                </div>

                <div className="productName productName__sm">
                  <p className="pl-3">{data?.productName}</p>
                </div>
                <div className="font-sm pl-3">
                  <p className="ml-1">Brand: Slot</p>
                </div>
                <div className="font-sm font-weight-bolder pl-3">
                  <p className="ml-1">
                    &#8358; {data?.mainPrice?.toLocaleString()}
                  </p>
                </div>
                <div className="previousProductPrice">
                  <p>&#8358; {data?.slashedPrice?.toLocaleString()}</p>
                </div>
              </Link>
            );
          })}
      </Swiper>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MobileComparePrice);
