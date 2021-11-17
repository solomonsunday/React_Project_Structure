import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconStore from "../../assets/icons/IconStore";
import { Link } from "react-router-dom";

function CheckListItem(props) {
  return (
    <React.Fragment>
      <FormControlLabel
        value={props.choiceNumber}
        control={<Radio />}
        label={props.labelName}
      />
      <div className="deliveryDateTxt pt-2">
        <span>{props.txt1}</span>
        <span className="checkListItem__deliveryDate1">
          {props.deliveryDate1}
        </span>
        <span>{props.txt2}</span>
        <span className="checkListItem__deliveryDate2">
          {props.deliveryDate2}
        </span>
        <span className="checkListItem__txt3">{props.txt3}</span>
      </div>

      <div className="listInfoSection">
        <div className="listInfoSection__infoIconGrp">
          <span className="listInfoSection__infoIcon">{IconStore.infoIcon}</span>
          <span className='iconNote'>Note:</span>
        </div>
        <div>
          <ul className="checkout_ul">
            <li>{props.data1}</li>
            <li>
              <span>{props.data2a}</span>
              <span className="listInfoSection__data2b">{props.data2b}</span>
              <span>{props.data2c}</span>
            </li>
            <li>{props.data3} </li>
            <li>{props.data4}</li>
            <li>{props.data5}</li>
            <p>
              <span>{props.data6a}</span>
              <Link to="" className="listInfoSection__data6b">{props.data6b}</Link>
              <span>{props.data6c}</span>
            </p>
            <p className="listInfoSection__data7">{props.data7}</p>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckListItem;
