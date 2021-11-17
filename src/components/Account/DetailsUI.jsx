import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Col, Row } from "react-bootstrap";
import { Input } from "@material-ui/core";
import LargeButton from "../Button/LargeButton";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  formControl: {
    minWidth: 120,
    width: "80%",
  },
  phoneSelect:{
    width: "8ch",
  },
  phoneNumberField:{
    width: "110% !important",
    minWidth: 120,
  },
  
}));

export default function DetailsUI() {
  const classes = useStyles();

  const [prefix, setPrefix] = React.useState("");
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div className="">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <h3 className="titleHeader d-none d-md-block">Details</h3>
          <Row className="detailsUI__row">
            <Col lg='6'>
              <TextField label="First Name" defaultValue="Bukky" />
              <br/><br/>
              <TextField
                label="E-mail"
                defaultValue="bukkytohgbesky@example.com"
              />
              <br/><br/>
              <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    Gender (optional)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={select}
                    onChange={handleChangeTwo}
                    displayEmpty
                    className=''
                  >
                    <MenuItem value=""><p>Please Select</p></MenuItem>
                    <MenuItem value={234}>Male</MenuItem>
                    <MenuItem value={235}>Female</MenuItem>
                    </Select>
                </FormControl>
            </Col>

            
            <Col lg='6'>
              <TextField label="Last Name" defaultValue="Owolabi" />
              <br/><br/>
              <Row>
                <Col>
                <span>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    Prefix
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={prefix}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.phoneSelect}
                  >
                    <MenuItem value=""><p>+234</p></MenuItem>
                    <MenuItem value={235}>+235</MenuItem>
                    <MenuItem value={236}>+236</MenuItem>
                  </Select>
                </FormControl>
              </span>
                </Col>
                
                <Col>
                <span className='phoneField__wrapper'><TextField label="Phone Number" className={classes.phoneNumberField} /></span>
                </Col>
            </Row>
              <br />
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label" shrink>Birthday (optional)</InputLabel>
                  <Input
                    type="date"
                    format="MM/dd/yyyy"
                    label="Phone Number"
                    defaultValue="Birthday (optional)"
                  />
                </FormControl>
              </span>
            </Col>
          </Row>
        </div>

        <div className="accButton__wrapper">
          <LargeButton buttonName="SAVE" />
        </div>
      </form>
    </div>
  );
}
