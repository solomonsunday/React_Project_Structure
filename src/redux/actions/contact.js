// import axios from "axios";
import * as actionTypes from "./types";

export const addUserContact = (userContact) => {
  return {
    type: actionTypes.ADD_USER_CONTACT,
    payload: {
      userContact,
    },
  };
};


export const removeUserContact = (userID) => {
  return {
    type: actionTypes.REMOVE_USER_CONTACT,
    payload: {
      id: userID,
    },
  };
};

export const updateUserContact = (userID, userContact) => {
  return {
    type: actionTypes.SET_USER_CONTACT,
    payload: {
      id: userID,
      userContact: userContact,
    },
  };
};

export const loadCurrentContact = (userID) => {
  return {
    type: actionTypes.GET_USER_CONTACT,
    payload: {
        id: userID,
      },
  };
};


// export const postUserContact = (data,id) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       `http://apis.woozeee.com:7200/api/v1/user/${id}`,
//        data,
//       {
//         headers: {
//           channel: "web",
//           Authorization: `Bearer ${process.env.REACT_APP_token}`,
//         },
//       }
//     );
//     dispatch({
//       type: actionTypes.SET_USER_CONTACT,
//       payload: response.data.data,
//     });
//   } catch (error) {}
// };
