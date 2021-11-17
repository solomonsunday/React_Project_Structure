import * as actionTypes from "../actions/types";


const initialState = {};


const messages = function (state = initialState, action){
  switch (action.type) {
    case actionTypes.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}


export default messages;