import React from "react";
import LargeButton from "../Button/LargeButton";
import PasswordUI from "./PasswordUI";

function ChangePasswordUI() {
  return (
    <div className="changePassword__wrapper">
      <h3 className="titleHeader  d-none d-md-block">Change Password</h3>

      <form action="">
        <PasswordUI labelName="Current Password" />

        {[...Array(3)].map((e, i) => <br key={i}/>)}

        <PasswordUI labelName="New Password" />

        {[...Array(3)].map((e, i) => <br />)}

        <PasswordUI labelName="Retype New Password" />
      </form>

      <div className="passButton__wrapper">
        <LargeButton buttonName="SUBMIT" />
      </div>
    </div>
  );
}

export default ChangePasswordUI;
