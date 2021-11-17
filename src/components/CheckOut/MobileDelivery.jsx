import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function DoorDeliveryComponent() {
  return (
    <div className="pt-2 pr-2  font-weight-500">
      <div className="font-sm ">Door Delivery</div>
      <div className="font-xs">Delivery between Tuesday 24 Dec and Tuesday 31 Dec for N600</div>
    </div>
  );
}

function PickupComponent() {
  return (
    <div className="font-sm pt-2 pr-2 font-weight-500">
      <div className="font-sm ">Pickup Station</div>
      <div className="font-xs ">
        Ready for Pickup between Tuesday 24 Dec and Tuesday 31 Dec for N600
      </div>
    </div>
  );
}

export default function MobileDelivery() {
  const [value, setValue] = React.useState("door");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between font-xs font-weight-500 mt-3 px-3 pb-2">
          <span>ADDRESS DETAILS</span>
          <span>CHANGE</span>
        </div>

        <div className="bg-white py-3 pl-3 font-weight-500 font-sm  border-top shadow-sm">
          <div>Agent Tony</div>
          <div>Street Name</div>
          <div>Local Govt</div>
          <div>Mobile Number</div>
        </div>
      </div>

      <div className="mt-3">
        <div className="pl-3 pb-2 font-xs font-weight-500">SELECT A DELIVERY METHOD</div>

        <div className="bg-white pt-3 scaleDownRadio border-top shadow-sm">
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
                label={DoorDeliveryComponent()}
                className="align-items-start mb-2"
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label={PickupComponent()}
                className="align-items-start"
              />
            </RadioGroup>
          </FormControl>

          <div className="text-center font-weight-500 text-woozRed py-3 bg-white font-sm">
          Select Station Nearest to you
        </div>
        </div>
        
       
      </div>
    </div>
  );
}
