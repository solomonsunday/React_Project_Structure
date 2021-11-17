import React from "react";
import { Row } from "react-bootstrap";
// import * as Ai from "react-icons/ai";
import SmallSection from "./SmallSection";
import WoozHeaderLogo from "./WoozHeaderLogo";
import IconStore from "../../assets/icons/IconStore";

function HeaderThree() {
  return (
    <div className="header__container">
      <Row className="headerThirdRow body__wrapper">
        <div className="some__Container">
          <WoozHeaderLogo />

          <div className='smallSection_wrapr'>
          <SmallSection
            icon={IconStore.questionIcon}
            txt_headrOne="Need Help?"
            txt_headrTwo="Please fill the Contact Us form"
          />

          <SmallSection
            icon={IconStore.securePaymentIcon}
            txt_headrOne="Secure"
            txt_headrTwo="Payment"
          />

          <SmallSection
            icon={IconStore.questionIcon}
            txt_headrOne="Easy Returns"
          />
          </div>
         
        </div>
      </Row>
    </div>
  );
}

export default HeaderThree;
