import * as actionTypes from "./types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, value) => {
  return {
    type: actionTypes.EDIT_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.GET_CURRENT_ITEM,
    payload: item,
  };
};

export const updateTotalPrice = (totalPrice) => {
  return {
    type: actionTypes.SET_TOTAL_PRICE,
    payload: totalPrice,
  };
};

