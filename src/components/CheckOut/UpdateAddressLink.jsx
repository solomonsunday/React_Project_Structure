import React from "react";
import AddressForm from "../Form/AddressForm";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router";

export default function UpdateAddressLink(props) {
  const history = useHistory();
  const title = props?.location?.state.title;
  const contact = props?.location?.state.contact;

  return (
    <div className="bg-white shadow-sm mt-4">
      <div className="py-3">
        <div className="d-flex  px-4 pb-2 border-bottom">
          <ArrowBackIosIcon fontSize="small" onClick={history.goBack} />
          <h5 className="pl-3">{title}</h5>
          {props.children}
        </div>
        <AddressForm contactProp={contact} />
      </div>
    </div>
  );
}
