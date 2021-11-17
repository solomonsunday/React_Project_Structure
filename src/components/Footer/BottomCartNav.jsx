import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
// import { Link } from "react-router-dom";
import { DynamicButtonTwo } from "../Button/DynamicButton";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../redux/actions/shopping";
import { useHistory } from "react-router";
import { ReactComponent as AddToCartIcon } from "../../assets/images/AddToCartIcon.svg";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

function BottomCartNav(props) {
  const history = useHistory();
  const { width } = useWindowDimensions();
  // console.log("current id:", props.current.id, "\n", "current:", props.current);

  return (
    <div className="px-2 bg-white col-12 cartStickyBottom">
      <div className="py-3 d-flex">
        <a href="tel: 911" className="call bx-call rounded mr-2">
          <PhoneIcon color="primary" />
        </a>

        <DynamicButtonTwo
          width="100%"
          backgroundColor="var(--woozBlue)"
          boxShadow="0px 0px 10px rgb(0 0 0 / 25%)"
          borderRadius="0.313rem"
          fontWeight="bold"
          fontSize="0.875rem"
          color="white"
          border="none !important"
          onClick={() => {
            console.log("props.current.id fom cart btn", props.current.id)
            props.addToCart(props.current.id);
            history.push("/cart");
          }}
          className="d-flex align-items-center justify-content-center"
        >
          {/* <Link to="/cart"> */}
          <AddToCartIcon />
          <span
            className={`${width > 300 ? "px-5" : "px-3"} text-center text-nowrap`}
          >
            
            {width >= 400 ? "ADD TO CART" : "Add to Cart"}
          </span>
          {/* </Link> */}
        </DynamicButtonTwo>
      </div>
    </div>
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
      console.log(id);
      dispatch(addToCart(id));
    },
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomCartNav);
