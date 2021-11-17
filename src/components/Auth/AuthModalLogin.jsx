import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import { Checkbox } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, socialLogin } from "../../redux/actions/auth";
import Loader from "react-loader-spinner";
import { FaTwitter } from "react-icons/fa";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import GoogleLogin from "./GoogleLogin";
import FaceBookSignIn from "./FaceBookLogin";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: (propz) => propz.width,
  },
  inputField: {
    paddingTop: "0.5rem !important",
    paddingBottom: "0.5rem !important",
    fontSize: "0.875rem",
    border: "1px solid #E1E1E1",
    backgroundColor: "#F9F9F9",
    borderWidth: "1px",
  },
}));

function AuthModalLogin(props) {

  //Modal size on small screen
  const { width } = useWindowDimensions();
  const modalWidth = width < 468 ? width - 40 : "38ch";
  const propz = { width: modalWidth };

  //Styled component classes
  const classes = useStyles(propz);

  //Handle Email
  const [email, setEmail] = useState("");
  const [validationError, setvalidationError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //Handle Password
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const password = values.password;

  //Handle Spin
  const [spin, setSpin] = useState(false);
  const [timeout, settimeout] = useState();

  //Handle Checked
  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const [isMakingRequest, setIsMakingRequest] = React.useState(false);

  //Handle Submit
  const { history, loginUser, socialLoginUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMakingRequest((prevState) => ({
      isMakingRequest: !prevState.isMakingRequest,
    }));

    //User Mail and Password
    if (!email || !password) return;

    loginUser({ email, password }, history).then((res) => {
      setIsMakingRequest((prevState) => ({
        isMakingRequest: !prevState.isMakingRequest,
      }));

      if (props.token) {
        props.onLoginSuccess();
      } else {
        setvalidationError(true);
      }
    });
  };

  
  //Social login - Google
  function handleGoogleClick(newDataToBackend) {

    console.log("handleGoogleClick", newDataToBackend);

    socialLoginUser(newDataToBackend).then((res) => {
      if (res?.token) {
        props.onLoginSuccess();
      }
      console.log('response is :', res);
    });

  }

  function handleFacebookClick(facebookDataToBackend) {

    console.log("handleFacebookClick", facebookDataToBackend);

    socialLoginUser(facebookDataToBackend).then((res) => {
      if (res?.token) {
        props.onLoginSuccess();
      }
      console.log('response is :', res);
    });

  }

  const handleLoginClick = () => {
    setSpin(true);
    settimeout(500);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className="m-3 d-flex flex-column justify-content-around">
          <p className="font-sm text-dark pb-2 font-weight-500">Email</p>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Email"
              className={`${classes.inputField} loginInputCls pl-3`}
            />
          </FormControl>

          <br />
          <p className="font-sm text-dark pb-2 font-weight-500">Password</p>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handlePasswordChange("password")}
              placeholder="Enter Password"
              className={`${classes.inputField} loginInputCls pl-3`}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {validationError ? (
            <div className="font-sm text-danger pt-3">
              * Email or password incorrect
            </div>
          ) : (
            ``
          )}

          <div className="mb-2 mt-3 text-black-50 d-flex align-items-center">
            <Checkbox
              checked={checked}
              color="primary"
              onChange={handleCheckChange}
              inputProps={{ "aria-label": "secondary checkbox" }}
              className="text-black-50"
            />
            <span className="checkboxAddress__txt font-sm text-nowrap">
              Remember Me
            </span>
            <div className="font-sm d-flex text-primary w-100">
              <Link to="/" className="ml-auto font-sm">
                Forgot Password?
              </Link>
            </div>
          </div>

          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor={
              (!isMakingRequest, !email, !password)
                ? "rgba(255,87,87,0.7)"
                : "var(--woozRed)"
            }
            boxShadow="none"
            borderRadius="5px"
            border="none !important"
            fontWeight="700"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
            onClick={handleLoginClick}
            disabled={!isMakingRequest && !email && !password}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div>LOGIN</div>
              {spin && (
                <span className="ml-4">
                  <Loader
                    type="TailSpin"
                    color="#fff"
                    height={14}
                    width={14}
                    timeout={timeout}
                  />
                </span>
              )}
            </div>
          </DynamicButtonTwo>

          <p className="text-center my-4 font-sm horizontal_Line">
            Or continue with
          </p>

          <GoogleLogin
            onClick={handleGoogleClick}
          />

          <div className="my-1"></div>
          {/* <FaceBookSignIn /> */}

          <FaceBookSignIn  onClick={handleFacebookClick}/>
          <div className="my-1"></div>
          <DynamicButtonTwo
            color="white"
            height="2.5rem"
            width="100%"
            backgroundColor="#55ACEE"
            boxShadow="none"
            borderRadius="5px"
            border="none !important"
            fontWeight="500"
            fontSize="0.875rem"
            hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
            type="submit"
          >
            <div className="d-flex justify-content-center align-items-center">
              <FaTwitter />
              <div className="pl-3">Twitter Account</div>
            </div>
          </DynamicButtonTwo>
          <div className="pb-2"></div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = ({ auth: { token } }) => ({
  token,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userObject, history) => dispatch(login(userObject, history)),
  socialLoginUser: (userObject) => dispatch(socialLogin(userObject)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthModalLogin)
);
