import React from "react";
import { Row } from "react-bootstrap";
import WoozHeaderLogo from "./WoozHeaderLogo";

function HeaderPay() {
  return (
    <div className="header__container">
      <Row className="headerThirdRow body__wrapper">
        <div className="some__Container">
          <WoozHeaderLogo />

        </div>
      </Row>
    </div>
  );
}

export default HeaderPay;
