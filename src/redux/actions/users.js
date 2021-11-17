import axios from 'axios'
import * as actionTypes from "./types";



export const handleGetUsers = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.user.accessToken;
  const url = 'https://scalable-commerce-backend.herokuapp.com/api/v1/users?pageSize=51&pageNumber=1'
  dispatch({
    type: actionTypes.LOADING_USERS
  })
  try {
    const response = await axios.get(url, {
      headers: {
        'x-access-token': token
      }
    })
    dispatch({
      type: actionTypes.GET_ALL_USERS,
      payload: response.data.users
    })
    return 'done'
  } catch(err) {
    console.log(err)
  }
}