import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ReactComponent as MasterCardIcon } from "../../assets/images/MasterCardIcon.svg";
import VisaCardIcon from "../../assets/images/VisaCardIcon.svg";
import { ReactComponent as CashIcon } from "../../assets/images/CashIcon.svg";
import { ReactComponent as VerveCardIcon } from "../../assets/images/VerveCardIcon.svg";
import { Button } from "@material-ui/core";

function PaymentCardComponent() {
  return (
    <div className="d-flex w-100 font-sm align-items-center gap-2">
      <span>
        <MasterCardIcon />
      </span>

      <span style={{ width: "40px" }}>
        <img src={VisaCardIcon} alt="" className="w-100" />
      </span>
      <span>
        <VerveCardIcon />
      </span>
    </div>
  );
}

function CashComponent() {
  return (
    <div className="font-sm font-weight-500">
      <CashIcon /> <span className="pl-3"> Payment on Delivery</span>
    </div>
  );
}

export default function MobilePayment() {
  const [value, setValue] = React.useState("door");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="mt-3">
        <div className="pl-3 pb-2 font-xs font-weight-500">
          CHOOSE YOUR PREFFERED PAYMENT
        </div>

        <div className="bg-white py-3 border-top scaleDownRadio shadow-sm">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="DeliveriesOptions"
              name="deliveriesOptions"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="door"
                control={<Radio />}
                label={PaymentCardComponent()}
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label={CashComponent()}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mx-auto font-xs py-2 pl-3 mt-2">
          Got a woozeee voucher code? use below
        </div>
      </div>

      <div className="py-3 px-3 bg-white border-top shadow-sm">
        <span className="font-sm font-weight-500">Enter Voucher Code</span>
        <input
          type="text"
          className="col-12 border-0 bg-light rounded py-2 mt-2 pl-4 font-sm"
        />
        <div className="d-flex">
          <Button
            className="text-capitalize  border-0 bg-woozBlue font-weight-500 font-sm text-white rounded py-2 mx-auto mt-3"
            style={{ width: "8rem" }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
