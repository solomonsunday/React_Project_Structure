import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperTwo: {
    backgroundColor: "#fff",
    border: "2px solid #0000001c",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "none",
    [theme.breakpoints.up("sm")]: {
      minWidth: "550px",
    },
    [theme.breakpoints.up("md")]: {
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

function CheckAddressModal({ contact, removeUserContact, ...props }) {
  const classes = useStyles();

  const anchorRef = React.useRef(null);

  const [openModal, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

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
    <div className={`${classes.root} d-none d-sm-block`}>
      <div>
        <Button ref={anchorRef} aria-haspopup="true" onClick={handleModalOpen}>
          {props.children}
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paperTwo}>
            <div className="py-3">
              <div className="d-flex justify-content-between px-4 pb-2 border-bottom">
                <h5>Address Book</h5>
                <CloseRoundedIcon onClick={handleModalClose} />
              </div>

              <div className="d-flex p-3 pl-4 align-items-center border-bottom">
                <UpdateAddressModal title="Add Address">
                  <AddCircleRoundedIcon color="primary" />
                  <span className="font-weight-500 text-primary pl-2 font-sm">
                    ADD A NEW ADDRESS
                  </span>
                </UpdateAddressModal>
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
                            <UpdateAddressModal title="Edit Address" contact={defaultContact}>
                              <span className="pr-2 font-xs font-weight-600  text-primary">
                                EDIT
                              </span>
                              <EditIcon className="font-sm" color="primary" />
                            </UpdateAddressModal>
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
                            <UpdateAddressModal title="Edit Address" contact={contact}>
                              <span className="pr-2 font-xs font-weight-600  text-primary">
                                EDIT
                              </span>
                              <EditIcon className="font-sm" color="primary" />
                            </UpdateAddressModal>
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
        </Fade>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckAddressModal);
