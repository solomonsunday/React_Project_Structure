import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import UpdateAddressModal from "./UpdateAddressModal";
import { connect } from "react-redux";
import {
  addUserContact,
  removeUserContact,
  updateUserContact,
  loadCurrentContact,
} from "../../redux/actions/contact";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paperTwo: {
    backgroundColor: "#fff",
    border: "2px solid #0000001c",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // minWidth: "850px",
    minWidth: "none",
    [theme.breakpoints.up("xl")]: {
      minWidth: "850px",
    },
    minHeight: "335px",
  },
  formControlLabel: {
    "& span": {
      fontSize: "0.875rem",
      fontWeight: "500",
    },
  },
  fieldset: {
    width: "100%",
  },
}));

function CheckAddressLink({ contact, removeUserContact, ...props }) {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const history = useHistory();

  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //returns an object
  const defaultContact = contact.find((obj) => obj.defaultAddress === true);

  //returns an array
  const otherContact = contact.filter((obj) => obj.defaultAddress === false);
  // console.log(otherContact);

  return (
    <div>
      <div className="bg-white shadow-sm mt-4">
        <div className="py-3">
          <div className="d-flex px-4 pb-2 border-bottom">
            <ArrowBackIosIcon fontSize="small" onClick={history.goBack} />

            <h5 className="pl-3">Address Book</h5>
          </div>

          <div className="d-flex p-3 pl-4 align-items-center border-bottom">
            {width > 576 ? (
              <UpdateAddressModal title="Add Address">
                <AddCircleRoundedIcon color="primary" />
                <span className="font-weight-500 text-primary pl-2 font-sm">
                  ADD A NEW ADDRESS
                </span>
              </UpdateAddressModal>
            ) : (
              <Link to="/updateAddress">
                <AddCircleRoundedIcon color="primary" />
                <span className="font-weight-500 text-primary pl-2 font-sm">
                  ADD A NEW ADDRESS
                </span>
              </Link>
            )}
          </div>

          <div className="p-3">
            <FormControl component="fieldset" className={classes.fieldset}>
              <RadioGroup
                aria-label="choice"
                name="choice1"
                value={value}
                onChange={handleChange}
              >
                <div className="">
                  <p className="font-xs pl-2 font-weight-600 text-secondary">
                    DEFAULT ADDRESS
                  </p>

                  {defaultContact && (
                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <FormControlLabel
                          value="firstChoice"
                          control={<Radio />}
                          label={`${defaultContact.firstName} ${defaultContact.lastName}`}
                          className={classes.formControlLabel}
                        />
                        <div className="pl-5 font-xs mt-n1">
                          <p className="">
                            {`${defaultContact.address}, ${defaultContact.town},${defaultContact.city}`}
                          </p>
                          <p className="">{`+${defaultContact.phonePrefix}${defaultContact.phoneNumber}`}</p>
                        </div>
                      </div>

                      <div className="font-xs font-weight-600 text-primary">
                        {width > 576 ? (
                          <UpdateAddressModal
                            title="Edit Address"
                            contact={defaultContact}
                          >
                            <div className="pr-2 font-xs font-weight-600  text-primary">
                              EDIT
                            </div>
                            <EditIcon className="font-sm" color="primary" />
                          </UpdateAddressModal>
                        ) : (
                          <Link
                            to={{
                              pathname: "/updateAddress",
                              state: {
                                title: "Edit Address",
                                contact: defaultContact,
                              },
                            }}
                          >
                            <div className="pr-2 font-xs font-weight-600  text-primary">
                              EDIT
                            </div>
                          </Link>
                        )}
                        <Button
                          className="px-2"
                          onClick={() =>
                            removeUserContact(defaultContact.userID)
                          }
                        >
                          <span className="pr-2 font-xs font-weight-600  text-primary">
                            REMOVE
                          </span>
                          <DeleteIcon className="font-sm" color="primary" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3">
                  <p className="font-xs pl-2 font-weight-600 text-secondary">
                    SAVED ADDRESSES
                  </p>
                  {otherContact.map((contact) => (
                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <FormControlLabel
                          value={contact.city}
                          control={<Radio />}
                          label={`${contact.firstName} ${contact.lastName}`}
                          className={classes.formControlLabel}
                        />
                        <div className="pl-5 font-xs mt-n1">
                          <p className="">
                            {`${contact.address}, ${contact.town},${contact.city}`}
                          </p>
                          <p className="">{`+${contact.phonePrefix}${contact.phoneNumber}`}</p>
                        </div>
                      </div>
                      <div className="font-xs font-weight-600 text-primary">
                        {width > 576 ? (
                          <UpdateAddressModal
                            title="Edit Address"
                            contact={contact}
                          >
                            <div className="pr-2 font-xs font-weight-600  text-primary">
                              EDIT
                            </div>
                            <EditIcon className="font-sm" color="primary" />
                          </UpdateAddressModal>
                        ) : (
                          <Link to="/updateAddress">
                            <div className="pr-2 font-xs font-weight-600  text-primary">
                              EDIT
                            </div>
                          </Link>
                        )}

                        <Button
                          className="px-2"
                          onClick={() => removeUserContact(contact.userID)}
                        >
                          <span className="pr-2 font-xs font-weight-600  text-primary">
                            REMOVE
                          </span>
                          <DeleteIcon className="font-sm" color="primary" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </FormControl>
          </div>
          <div className="px-3 py-4 mt-3 border-top">
            <DynamicButtonTwo
              color="white"
              width="100%"
              height="42px"
              backgroundColor="var(--woozBlue)"
              boxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
              borderRadius="4px"
              border="none !important"
              marginBottom=""
              fontWeight="600"
              fontSize="0.875rem"
              hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
            >
              USE THIS ADDRESS
            </DynamicButtonTwo>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserContact: (userID) => dispatch(addUserContact(userID)),
    removeUserContact: (userID) => dispatch(removeUserContact(userID)),
    updateUserContact: (userID, userContact) =>
      dispatch(updateUserContact(userID, userContact)),
    loadCurrentContact: (userID) => dispatch(loadCurrentContact(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAddressLink);
