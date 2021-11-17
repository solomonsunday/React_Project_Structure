import { usersData } from "../../DB/UserData";
import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  contacts: [...usersData], //{userID, contact, address details,}
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.ADD_USER_CONTACT:
      //TO FIX, NOT WORKING YET
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case actionTypes.REMOVE_USER_CONTACT:
      const isDefaultExist = state.contacts
        .filter((user) => user.userID !== action.payload.id)
        .some((contact) => contact.defaultAddress === true);
    //   console.log(isDefaultExist); //returns true or false

      return {
        ...state,
        // Here, After removing a contact by userID, if at least one of the contact is default (default of true),
        // Just leave the contact as is, if not, set just the first contact to have default to true
        contacts: state.contacts
          .filter((user) => user.userID !== action.payload.id)
          .map((contact, index) => {
            return isDefaultExist
              ? contact
              : index === 0
              ? { ...contact, defaultAddress: true }
              : contact;
          }),
      };
    case actionTypes.SET_USER_CONTACT:
      return {
        ...state,
      };

    case actionTypes.GET_USER_CONTACT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default contactReducer;