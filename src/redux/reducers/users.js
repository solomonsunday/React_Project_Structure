import * as actionTypes from "../actions/types";

const initialState = {
  loadingUsers: false,
  users: []
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        loadingUsers: false,
        users: [...state.users, ...action.payload]
      }
    case actionTypes.LOADING_USERS: 
      return {
        ...state,
        loadingUsers: true
      }
    default:
      return state
  }
}


export default users