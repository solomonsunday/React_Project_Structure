import axios from 'axios'
import * as actionTypes from "./types";


export const handleCreateCategory = (data) => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token;
  const config = {
    method: 'post',
    url: `https://apis.woozeee.com/api/v1/categories/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken
    },
    data: JSON.stringify(data)
  }
  try {
    const response = await axios(config)
    console.log(response)
    dispatch({
      type: actionTypes.CREATE_CATEGORY,
      payload: response.data.data
    })
    console.log('', 'Category created successfully')
    return 'success';
  } catch (error) {
    console.log(error.response);
    if (error.response.data.message === 'category already exists') {
      console.log('', `Category already exists`)
      return;
    }
    console.log(`${error.response.data.message}`)
    return
  }
}

export const handleGetCategories = () => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token;
  const config = {
    method: 'get',
    url: `https://apis.woozeee.com/api/v1/categories?pageNumber=1&pageSize=50`,
    headers: {
      'Authorization': accessToken
    },
  }
  try {
    const response = await axios(config)
    console.log(response)
    dispatch({
      type: actionTypes.GET_CATEGORIES,
      payload: response.data.data
    })
    return;
  } catch (error) {
    console.log(error.response);
    console.log(`An error occured getting the categorues`)
    return
  }
}


// to handle delete an hashtag
export const handleDeleteCategory = (data) => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token;
  const config = {
    method: 'delete',
    url: `https://apis.woozeee.com/api/v1/categories/${data}`,
    headers: {
      'Authorization': accessToken,
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios(config)
    console.log(data)
    dispatch({
      type: actionTypes.DELETE_CATEGORY,
      payload: data
    })
    console.log('', 'Category deleted successfully')
    return;
  } catch (error) {
    console.log(error.response);
    console.log(`An error occured in deleting category`)
    return
  }
}


export const handleEditcategory = (data, id) => async (dispatch, getState) => {
  const state = getState();
  const accessToken = state.auth.token;
  const config = {
    method: 'put',
    url: `https://apis.woozeee.com/api/v1/categories/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken
    },
    data: JSON.stringify(data)
  }
  try {
    const response = await axios(config)
    console.log(response)
    dispatch({
      type: actionTypes.EDIT_CATEGORY,
      payload: response.data.data
    })
    console.log('', 'Hashtag edited successfully')
    return 'success';
  } catch (error) {
    console.log(error.response);
    console.log(`An error occured editing the hashtag`)
    return
  }
}


