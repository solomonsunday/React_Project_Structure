import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Col, Row } from "react-bootstrap";
import LargeButton from "../Button/LargeButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { addUserContact } from "../../redux/actions/contact";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperTwo: {
    backgroundColor: "#fff",
    outline: "none",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "850px",
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

  formControlr: {
    minWidth: 120,
    width: "100%",
    marginTop: "0.6rem !important",
    marginLeft: "0.6rem !important",
  },
  formContrl2: {
    minWidth: 120,
    width: "80%",
    // marginTop: "0.6rem !important",
    marginLeft: "0.6rem !important",
  },
  formContrl3: {
    minWidth: 120,
    width: "90%",
    // marginTop: "0.6rem !important",
    marginLeft: "0.6rem !important",
  },
  phoneSelectr: {
    width: "5.8ch",
  },
  phoneNumberFieldr: {
    width: "110% !important",
    minWidth: 120,
    whiteSpace: "nowrap",
  },
}));

function LogisticsPartnerForm({ contactProp, ...props }) {
  const classes = useStyles();

  console.log(contactProp);

  const [formValues, setformValues] = useState(
    contactProp
      ? { ...contactProp }
      : {
          userID: Date.now(),
          firstName: "",
          lastName: "",
          email: "",
          phonePrefix: 234,
          secondPhonePrefix: 234,
          phoneNumber: "",
          additionalPhoneNumber: "",
          address: "",
          city: "",
          region: "",
          country: "",
          defaultAddress: false,
        }
  );

  const handleFormChange = (prop) => (event) => {
    setformValues({ ...formValues, [prop]: event.target.value });
  };

  const handlePhoneNumber = (event) => {
    setformValues({
      ...formValues,
      phoneNumber: event.target.value.replace(/[^0-9]/g, ""),
    });
  };
  const handleAdditionalPhoneNumber = (event) => {
    setformValues({
      ...formValues,
      additionalPhoneNumber: event.target.value.replace(/[^0-9]/g, ""),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // postUserContact(formValues);
    addUserContact(formValues);
    console.log(formValues);
  };

  return (
    <div className="editAddressComp_wrap">
      <form
        className={`${classes.root} flex-column px-4`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <Row>
            <Col sm="6">
              <TextField
                label="First Name"
                defaultValue={props?.firstName}
                value={formValues?.firstName}
                onChange={handleFormChange("firstName")}
                name="name fname"
                autocomplete="given-name"
              />
            </Col>

            <Col sm="6">
              <TextField
                label="Last Name"
                value={formValues?.lastName}
                onChange={handleFormChange("lastName")}
                defaultValue={props?.lastName}
                name="name lname"
                autocomplete="family-name"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Row>
                <Col>
                  <span>
                    <FormControl
                      className={`prefixAdditionalStyle ${classes.formControlr}`}
                    >
                      <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Prefix
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={formValues?.secondPhonePrefix}
                        onChange={handleFormChange("secondPhonePrefix")}
                        displayEmpty
                        className={classes.phoneSelectr}
                      >
                        <MenuItem value={234}>
                          <p>+234</p>
                        </MenuItem>
                        <MenuItem value={235}>+235</MenuItem>
                        <MenuItem value={236}>+236</MenuItem>
                      </Select>
                    </FormControl>
                  </span>
                </Col>

                <Col>
                  <span className="phoneField__wrapper">
                    <TextField
                      label="Additional Phone Number"
                      className={classes.phoneNumberFieldr}
                      onChange={handleAdditionalPhoneNumber}
                      value={formValues?.additionalPhoneNumber}
                      inputProps={{ maxLength: 10 }}
                      defaultValue={props?.additionalPhoneNumber}
                    />
                  </span>
                </Col>
              </Row>
            </Col>

            <Col sm="6">
              <Row className="editAddressComp_rowOneInner">
                <Col>
                  <span>
                    <FormControl
                      className={`prefixAdditionalStyle ${classes.formControlr}`}
                    >
                      <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Prefix
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={formValues?.phonePrefix}
                        onChange={handleFormChange("phonePrefix")}
                        displayEmpty
                        className={classes.phoneSelectr}
                      >
                        <MenuItem value={234}>
                          <p>+234</p>
                        </MenuItem>
                        <MenuItem value={235}>+235</MenuItem>
                        <MenuItem value={236}>+236</MenuItem>
                      </Select>
                    </FormControl>
                  </span>
                </Col>

                <Col>
                  <span className="phoneField__wrapper">
                    <TextField
                      label="Phone Number"
                      className={classes.phoneNumberFieldr}
                      onChange={handlePhoneNumber}
                      value={formValues?.phoneNumber}
                      inputProps={{ maxLength: 10 }}
                      defaultValue={props?.phoneNumber}
                    />
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
         
          <Row>
            <TextField
              label="Email"
              value={formValues?.email}
              onChange={handleFormChange("email")}
              defaultValue={props?.email}
              className="txtField_edit"
            />
          </Row>
          <Row className="pt-2">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.country}
                onChange={handleFormChange("country")}
                displayEmpty
                defaultValue="Nigeria"
                className=""
              >
                <MenuItem value="">
                  <p>Nigeria</p>
                </MenuItem>
                <MenuItem value="ghn">Ghana</MenuItem>
                <MenuItem value="SA">South Africa</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="pt-2">
            <TextField
              label="Address"
              value={formValues?.address}
              onChange={handleFormChange("address")}
              defaultValue={props?.address}
              className="txtField_edit"
            />
          </Row>
          <Row className="pt-2">
            <Col sm="6">
              <FormControl className={classes.formContrl2}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={formValues?.region}
                  onChange={handleFormChange("region")}
                  displayEmpty
                  className=""
                  defaultValue={props?.region}
                >
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Ekiti">Ekiti</MenuItem>
                  <MenuItem value="Ibadan">Ibadan</MenuItem>
                </Select>
              </FormControl>
            </Col>

            <Col sm="6">
              <FormControl className={classes.formContrl2}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={formValues?.city}
                  onChange={handleFormChange("city")}
                  displayEmpty
                  defaultValue={props?.city}
                  className=""
                >
                  <MenuItem value="Victoria Island">Victoria Island</MenuItem>
                  <MenuItem value="Yaba">Yaba</MenuItem>
                  <MenuItem value="Ketu">Ketu</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row className="pt-3 mt-3">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Do you have prior experience in logistics?
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.region}
                onChange={handleFormChange("region")}
                displayEmpty
                className=""
                defaultValue={props?.region}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="pt-3 mt-3">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Have you managed e-commerce logistics in the past?
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.region}
                onChange={handleFormChange("region")}
                displayEmpty
                className=""
                defaultValue={props?.region}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="pt-3 mt-3">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Is your company registered with a courier licence as per the statutory requirement in your country?
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.region}
                onChange={handleFormChange("region")}
                displayEmpty
                className="pt-3"
                defaultValue={props?.region}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="pt-3 mt-3">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                How much capital are you willing to invest in your business with us?
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.region}
                onChange={handleFormChange("region")}
                displayEmpty
                className=""
                defaultValue={props?.region}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="pt-3 mt-3">
            <FormControl className={classes.formContrl3}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                How much capital are you willing to invest in your business with us?
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={formValues?.region}
                onChange={handleFormChange("region")}
                displayEmpty
                className=""
                defaultValue={props?.region}
              >
                <MenuItem value="Yes">USD 0 - 5,000</MenuItem>
                <MenuItem value="No">USD 0 - 5,000</MenuItem>
              </Select>
            </FormControl>
          </Row>
          <Row className="mt-2">
            <TextField
              label="Additional Information you want to share with us?"
              value={formValues?.additionalInformation}
              onChange={handleFormChange("additionalInformation")}
              defaultValue={props?.additionalInformation}
              // className="txtField_edit"
              className={`${classes.formContrl3} py-3 py-md-0`}
            />
          </Row>
        </div>

        <div className="accButton__wrapper2">
          <LargeButton buttonName="Submit Form" type="submit" onClick={""} />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserContact: (userContact) => dispatch(addUserContact(userContact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogisticsPartnerForm);
