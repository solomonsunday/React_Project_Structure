import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import IconStore from "../../assets/icons/IconStore";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
  updateTotalPrice,
  // loadCurrentItem,
  // addToCart,
} from "../../redux/actions/shopping";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
// import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
// import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
// import { HeartRating } from "../Rating/Rating";
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  numberSelect: {
    width: "8ch",
    paddingRight: "0.8rem !important",
  },
  menuPaper: {
    maxHeight: 100,
  },
}));

function CartMainItem({
  cart,
  totalPrice,
  itemData,
  adjustQty,
  removeFromCart,
  setTPrice,
  ...props
}) {
  const classes = useStyles();
  const [itemNumber, setitemNumber] = useState(itemData.qty);

  // CALCULATION
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.mainPrice;
    });

    setTotalItems(items);
    setTPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTPrice]);

  const { width } = useWindowDimensions();
  const singleItemTotal = itemNumber * itemData.mainPrice;
  const savedAmount = itemData.mainPrice - itemData.slashedPrice;
  // END OF CALCULATION

  const handleChange = (event) => {
    setitemNumber(event.target.value);
    adjustQty(itemData.id, event.target.value);
  };

  const incrementItemNumber = () => {
    let itemNumberPlus = itemNumber + 1;
    setitemNumber(itemNumberPlus);
    adjustQty(itemData.id, itemNumberPlus);
  };

  const decrementItemNumber = () => {
    let itemNumberMinus = itemNumber - 1;
    setitemNumber(itemNumberMinus);
    adjustQty(itemData.id, itemNumberMinus);
  };

  return (
    <div>
      <Row className="ctop__row">
        <div className="col-12 col-md-6">
          {width > 576 ? (
            <Row className="prodDescrptGrp">
              <div className="col-2 pImage__wrapper">
                <img
                  src={itemData?.productImg}
                  alt="productImage"
                  className="pImage w-100 object-fit-contain"
                />
              </div>

              <div className="col-10 pText__wrapper">
                <p className="selrText">Seller: {itemData?.sellerName}</p>
                <p className="prodDescrpt"> {itemData?.productName}</p>
                <div className="productPrice__Wrap">
                  <span className="iconDescrpt__wrapper mainPrice">
                    &#8358; {itemData?.mainPrice.toLocaleString()}
                  </span>
                  <span className="slashedPrice">
                    &#8358; {itemData?.slashedPrice.toLocaleString()}
                  </span>
                </div>
                <div className="iconWithText__wrap">
                <span>
                  <button className="iconDescrpt__wrapper bg-white border-0">
                    <span>{IconStore.loveIconSmall}</span>
                    {/* <span><HeartRating/></span> */}
                    {/* <span><DeleteIcon color="secondary"/></span> */}
                    <span className="iconDescrpt">MOVE TO SAVED ITEMS</span>
                  </button>
                  <button
                    className="iconDescrpt__wrapper bg-white border-0"
                    onClick={() => removeFromCart(itemData.id)}
                  >
                    <span>{IconStore.deleteIconSmall}</span>
                    <span className="pl-2 font-xs text-woozBlue font-weight-600">
                      REMOVE
                    </span>
                  </button>
                </span>
                <span className="mobilePlusMinusGrp">
                  <button
                    className="minusCircleIcon border-0 bg-transparent"
                    onClick={decrementItemNumber}
                  >
                    {IconStore.minusCircleIcon}
                  </button>
                  <span>{itemNumber}</span>
                  <button
                    className="plusCircleIcon border-0 bg-transparent"
                    onClick={incrementItemNumber}
                  >
                    {IconStore.plusCircleIcon}
                  </button>
                </span>
                </div>
              </div>
            </Row>
          ) : (
            <Row className="prodDescrptGrp">
              <div className="col-2 ">
                <img
                  src={itemData?.productImg}
                  alt="productImage"
                  className="pImage w-100 object-fit-contain"
                />
              </div>

              <div className="col-10 pText__wrapper">
                <p className="selrText">Seller: {itemData?.sellerName}</p>
                <p className="prodDescrpt three-line-text"> {itemData?.productName}</p>
                <div className="productPrice__Wrap pt-1">
                  <span className="iconDescrpt__wrapper font-weight-600 text-woozBlue">
                    &#8358;{itemData?.mainPrice.toLocaleString()}
                  </span>
                  <span className="slashedPrice">
                    &#8358;{itemData?.slashedPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="col-12 iconWithText__wrap pt-2">
                <span>
                  <button className="iconDescrpt__wrapper bg-white border-0">
                   <span><FavoriteBorderIcon color="primary" /></span>
                    <span className="iconDescrpt">MOVE TO SAVED ITEMS</span>
                  </button>
                  
                  <button
                    className="iconDescrpt__wrapper bg-white border-0"
                    onClick={() => removeFromCart(itemData.id)}
                  >
                    <span><DeleteIcon color="primary"/></span>
                    <span className="pl-2 font-xs text-woozBlue font-weight-600">
                      REMOVE
                    </span>
                  </button>
                </span>
                <span className="mobilePlusMinusGrp align-items-center">
                  <button
                    className="minusCircleIcon border-0 bg-transparent"
                    onClick={decrementItemNumber}
                  >
                    {IconStore.minusCircleIcon}
                  </button>
                  <span>{itemNumber}</span>
                  <button
                    className="plusCircleIcon border-0 bg-transparent"
                    onClick={incrementItemNumber}
                  >
                    {IconStore.plusCircleIcon}
                  </button>
                </span>
              </div>
            </Row>
          )}
        </div>

        <div className="col-2 txt__contentgrp gr1">
          <div className="text-center">
            <FormControl>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={itemNumber}
                onChange={handleChange}
                displayEmpty
                className={classes.numberSelect}
                MenuProps={{ classes: { paper: classes.menuPaper } }}
              >
                {/* THIS ONE-LINER JUST REPEATS FROM 1-10 */}
                {[...Array(11)]
                  .map((e, i) => (
                    <MenuItem value={i} key={i}>
                      {i}
                    </MenuItem>
                  ))
                  .slice(1)}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr2 text-center">
          <p className="font-weight-bold">
            &#8358; {itemData?.mainPrice?.toLocaleString()}
          </p>
          <p className="previousUnitPrice">
            &#8358; {itemData?.slashedPrice?.toLocaleString()}
          </p>
          <div className="savdAmount">
            <span className="savdAmountText"> {props.savedAmountText}</span>
            <span>Savings &#8358; {savedAmount?.toLocaleString()}</span>
          </div>
        </div>

        <div className="col-2 txt__contentgrp gr3 text-center ">
          <p className="font-weight-bold">
            &#8358; {singleItemTotal?.toLocaleString()}
          </p>
        </div>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    totalPrice: state.shop.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    setTPrice: (price) => dispatch(updateTotalPrice(price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartMainItem);
