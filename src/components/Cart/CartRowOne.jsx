import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CartMainItem from "./CartMainItem";
import { connect } from "react-redux";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import MobileComparePrice from "../Product/MobileComparePrice";
import { Link } from "react-router-dom";
// import { DynamicButtonTwo } from "../Button/DynamicButton";

function CartRowOne({ totalPrice, cart, products, current }) {
  const { width } = useWindowDimensions();
  const [cartCount, setCartCount] = useState(0);
  const fee = 100;
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="crt_grp">
      <div className="topcartSecOne">
        <h5 className="d-none d-sm-block">Cart ({cartCount} items)</h5>
        {/* <div>
            <img src="" alt="woozeeLogo" />
            <img src="" alt="dispatchImg" />
            <span>Dispatch</span>
            <span>items on your Cart are eligible for Free Shipping.</span>
          </div> */}

        <p className="eligiblTxt d-none d-sm-block">
          Items on your Cart are eligible for Free Shipping.
        </p>
      </div>

      <Row className="tableHead">
        <div className="col-6">
          <p className="th_td">ITEM</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">QUANTITY</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">UNIT PRICE</p>
        </div>

        <div className="col-2">
          <p className="text-center th_td">SUBTOTAL</p>
        </div>
      </Row>

      {cart.map((item) => (
        <CartMainItem key={item.id} itemData={item} />
      ))}

      {width > 576 ? (
        <div className="priceTotl">
          <div>
            <span className="totlText">Total:</span>
            <span className="amount">
              &#8358; {totalPrice?.toLocaleString()}
            </span>
            <p className="delFee">Delivery fee not included yet</p>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="py-3 bg-white mt-3 mb-3 mx-n3 mx-sm-0">
            <div className="d-flex justify-content-between align-items-center mx-3 pb-2 border-bottom">
              <span className="font-sm font-weight-600">Subtotal</span>
              <span className="font-sm font-weight-600">
                &#8358; {totalPrice?.toLocaleString()}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mx-3 pb-3 pt-2">
              <span className="font-sm font-weight-600">Total</span>
              <span className="font-medium font-weight-600 text-woozBlue">
                &#8358; {(fee + totalPrice)?.toLocaleString()}
              </span>
            </div>
            <div className=" mx-3 font-xs text-right text-secondary font-weight-500  pb-3">
              <div>International shipping and Customs fee not included yet</div>
              <div>(NON-REFUNDABLE in case of a return)</div>
            </div>
            <div className=" mx-3">
              <Link to="/checkout" className="d-flex py-2 col-12 rounded-lg border-0 bg-woozBlue text-white font-weight-500">
                <span className="mx-auto">CHECKOUT</span>
              </Link>
              <Link to="" className="d-flex mt-2 py-2 col-12 rounded-lg bg-white border border-woozBlue font-weight-500 shadow-sm">
                <span className="mx-auto  text-woozBlue">CALL TO ORDER</span>
            </Link>
            </div>
          </div>

          <div className="font-xs font-weight-500 pt-3 pb-2 pl-3">
            RECENTLY VIEWED
          </div>
          <MobileComparePrice
            current={current}
            productData={products}
            sliceFrom={0}
            sliceTo={6}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    current: state.shop.currentItem,
    products: state.shop.products,
    totalPrice: state.shop.totalPrice,
  };
};

export default connect(mapStateToProps)(CartRowOne);

// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//     products: state.shop.products,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => {
//       console.log(id);
//       dispatch(addToCart(id));
//     },
//     loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MobileProductDetail);
