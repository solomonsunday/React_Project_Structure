import * as actionTypes from "./types";

export const createMessage = msg => {
  return {
    type: actionTypes.CREATE_MESSAGE,
    payload: msg
  }
}

export const returnErrors = (msg, status) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { msg,status }
  }
}