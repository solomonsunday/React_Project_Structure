import * as actionTypes from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log({ payload: action.payload });
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
      };
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("persist:root");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}
