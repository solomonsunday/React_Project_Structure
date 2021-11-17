import * as actionTypes from "../actions/types";
import { dealsData } from "../../DB/HomePage/HomePageData";
import {ProductOrders} from "../../DB/Categories/PhonenTabletData";

const INITIAL_STATE = {
  products: [...dealsData,...ProductOrders], //{id, title, price, descr, img}
  cart: [], //{id, title, price, descr, img, qty}
  currentItem: null,
  totalPrice: 0,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  let inCart;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Create Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log(item);
      // Check if Item is in cart already
      inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      console.log(inCart);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
              },
            ],
        totalPrice: state.totalPrice,
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalPrice: inCart ? state.totalPrice : 0,
      };
    case actionTypes.EDIT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
        totalPrice: state.totalPrice,
      };
    case actionTypes.GET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
