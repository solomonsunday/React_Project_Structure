import * as actionTypes from "../actions/types";
import { dealsData } from "../../DB/HomePage/HomePageData";
import { ProductOrders } from "../../DB/Categories/PhonenTabletData";

const initialState = {
  products: [...dealsData, ...ProductOrders],
  filteredItems: [],
  generalSpecs: {
    rating: "",
    brand: "",
    price: "",
  },
  phoneTabletSpecs: {
    operatingSytem: "",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    //GENERAL SPECS
    case actionTypes.FILTER_BY_RATING:
      return {
        ...state,
        filteredItems: action.payload.items,
        rating: action.payload.rating,
      };

    case actionTypes.FILTER_BY_BRAND:
      return {
        ...state,
        filteredItems: action.payload.items,
        brand: action.payload.brand,
      };

    case actionTypes.FILTER_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        price: action.payload.price,
      };

    case actionTypes.FILTER_BY_COLOR:
      return {
        ...state,
        filteredItems: action.payload.items,
        color: action.payload.color,
      };

    case actionTypes.FILTER_BY_SHIPPED_FROM:
      return {
        ...state,
        filteredItems: action.payload.items,
        shippedFrom: action.payload.shippedFrom,
      };

    case actionTypes.FILTER_BY_SELLER_SCORE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sellerScore: action.payload.sellerScore,
      };

    case actionTypes.FILTER_BY_DISCOUNT_PERCENTAGE:
      return {
        ...state,
        filteredItems: action.payload.items,
        discountPercentage: action.payload.discountPercentage,
      };

    //PHONETABLET SPECS
    case actionTypes.FILTER_BY_OPERATING_SYSTEM:
      return {
        ...state,
        filteredItems: action.payload.items,
        operatingSytem: action.payload.operatingSytem,
      };

    case actionTypes.FILTER_BY_HARD_DISK:
      return {
        ...state,
        filteredItems: action.payload.items,
        hardDisk: action.payload.hardDisk,
      };

    case actionTypes.FILTER_BY_RAM:
      return {
        ...state,
        filteredItems: action.payload.items,
        ram: action.payload.ram,
      };

    case actionTypes.FILTER_BY_MEGAPIXELS:
      return {
        ...state,
        filteredItems: action.payload.items,
        megapixels: action.payload.megapixels,
      };

    case actionTypes.FILTER_BY_SCREEN_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        screenSize: action.payload.screenSize,
      };

    case actionTypes.FILTER_BY_OPTICAL_ZOOM:
      return {
        ...state,
        filteredItems: action.payload.items,
        opticalZoom: action.payload.opticalZoom,
      };

    default:
      return state;
  }
};

export default filterReducer;
