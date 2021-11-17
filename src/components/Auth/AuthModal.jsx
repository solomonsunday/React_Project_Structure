import React from "react";
import { HashRouter } from "react-router-dom";
import AuthModalSignUp from "./AuthModalSignUp";
import AuthModalLogin from "./AuthModalLogin";
import { Divider } from "@material-ui/core";

export default function AuthModal(props) {
  
  return (
    <HashRouter>
      {/* Careful editing 
          classes here in the css, 
          coz they're used in  MyOrdersUI  
      */}

      <div className="authModal">
        <div className="OpenClosedNav my-3  d-flex justify-content-center">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                to="/"
                className="nav-link active orderToggle bg_toggle"
                id="login-tab"
                data-toggle="tab"
                href="#login"
                role="tab"
                aria-controls="login"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <Divider orientation="vertical" flexItem className="Mui__divider"/>
            <li className="nav-item" role="presentation">
              <a
                to="/signup"
                className="nav-link orderToggle bg_toggle"
                id="signup-tab"
                data-toggle="tab"
                href="#signup"
                role="tab"
                aria-controls="signup"
                aria-selected="false"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <AuthModalLogin onLoginSuccess={props.onLoginSuccess}/>
            </div>
            <div
              className="tab-pane fade"
              id="signup"
              role="tabpanel"
              aria-labelledby="signup-tab"
            >
              <AuthModalSignUp />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
