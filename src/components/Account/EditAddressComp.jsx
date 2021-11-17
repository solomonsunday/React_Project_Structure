import React from "react";
import { useHistory } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";
import AddressForm from "../Form/AddressForm";

export default function EditAddressComp(props) {
  const history = useHistory();
  const defaultContact  = props.location.defaultContact;

  return (
    <div>
      <div className="addressBook_btnGrp">
        <button
          className="addressBook__backButton"
          onClick={() => {
            history.goBack();
          }}
        >
          {IconStore.bxArrowBack}
        </button>
        <span className="titleHeader2">Add a new Address</span>
      </div>

      <AddressForm
        handleModalClose={history.goBack}
        contactProp={defaultContact}
      />
    </div>
  );
}
