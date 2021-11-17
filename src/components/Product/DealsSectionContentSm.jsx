import React from "react";
import { Link } from "react-router-dom";
import DiscountPercent from "../DiscountPercent/DiscountPercent";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";

const DealsSectionContentSm = ({
  productData,
  addToCart,
  loadCurrentItem,
  ...props
}) => {
  

  return (productData || [])
    .slice(props.sliceFrom, props.sliceTo)
    .map((data, index) => {
      return (
        <Link
          key={index}
          to={`/product/${(data || []).id}`}
          onClick={() => {
            loadCurrentItem(data);
          }}
          className="prodSmallCol col-6 col-sm-4 col-lg-2"
        >
          <div className="productDetailCard  w-100 px-2">
            <div className="discAlign">
              <DiscountPercent DiscountText={data?.percentDiscount} />
            </div>

            <div className="productCardImg">
              <img src={data?.productImg} alt="product" className="w-100" />
            </div>
            <div className="productName productName__sm pt-2 pt-lg-0">
              <p className="">{data?.productName} </p>
            </div>
            <div className="currentProductPrice">
              <p>&#8358; {data?.mainPrice?.toLocaleString()}</p>
            </div>
            <div className="previousProductPrice">
              <p>&#8358; {data?.slashedPrice?.toLocaleString()}</p>
            </div>
          </div>
        </Link>
      );
    });
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(DealsSectionContentSm);
