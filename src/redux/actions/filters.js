import * as actionTypes from "./types";

export const priceFilter = (products, price) => {
  return {
    type: actionTypes.FILTER_BY_PRICE,
    payload: {
        price,
      items:
        price === "" ? products : products.filter( (a) => a.availablePrices.indexOf(price.toUpperCase()) >= 0 ),
    },
  };
};

//products an array of 58 items
export const ratingsFilter = (products, ratings) => {
    return {
      type: actionTypes.FILTER_BY_RATING,
      payload: {
          ratings,
        items:
          ratings === "" ? products : products.filter( item => item.rating === parseInt(ratings) ),
      },
    };
  };

export const percentDiscountFilter = (products, discountPercentage) => {
    return {
      type: actionTypes.FILTER_BY_DISCOUNT_PERCENTAGE,
      payload: {
        discountPercentage,
        items:
          discountPercentage === "" ? products : products.filter( (a) => a.availableDiscountPercentage.indexOf(discountPercentage.toUpperCase()) >= 0 ),
      },
    };
  };