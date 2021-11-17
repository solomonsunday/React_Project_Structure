import React from "react";
import IconStore from "../../assets/icons/IconStore";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import { Link } from "react-router-dom";
import { VoucherInput } from "../Search/VoucherInput";
import { connect } from "react-redux";

function CheckPayment({  totalPrice }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const subTotal = totalPrice;
  const deliveryPrice = 586;
  const finalTotalPrice = subTotal + deliveryPrice;
  
console.log(totalPrice)
  return (
    <div className="addressCheckout_leftBottom mt-3">
      <div className="check__deliveryTitle">
        <span className="listInfoSection__infoIcon">
          {IconStore.greyedCheckMark}
        </span>
        <span className="checktitle__numbr">3. </span>
        <span className="checktitle__name">PAYMENT METHOD</span>
      </div>
      <div className="deliveryMethod__details">
        <p className="deliveryMethod__descrip pl-3">
          How do you want to pay for your order?
        </p>

        <div className="check_formcontrol">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="choice"
              name="choice1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="firstChoice"
                control={<Radio />}
                label="New customers get a 20% discount capped at 2000 NGN when you shop with your MasterCard."
                className="mt-2 mb-3"
              />

              <div className="pl-5">
                <ul className="pb-3">{`Your security is our priority. Enjoy quick & easy payment.`}</ul>
                <ol>
                  - Pay securely via your Mastercard, Visa and Verve cards of
                  all banks.
                </ol>
                <ol>
                  - Paypal payment is accepted for Nigerian Paypal account only.
                </ol>
                <ol>- Enjoy faster refund with woozeeepay.</ol>
                <ol>
                  - New customers get a 20% discount capped at 2000 NGN when you
                  shop with your MasterCard. Campaign dates: 1st March to 7th
                  March 2021.
                </ol>
              </div>
              <hr className="listItem_seperator" />

              <FormControlLabel
                value="secondChoice"
                control={<Radio />}
                label="Cash On Delivery"
                className="my-2"
              />

              <div className="pl-3 pl-sm-5">
                <div className="font-sm ">
                  <strong>
                    Got a woozeee voucher / SureGifts voucher? Use it below:
                  </strong>
                  <div className="d-flex my-3">
                    <VoucherInput />
                  </div>
                </div>

                <div>
                  <div className="d-flex align-items-center justify-content-between font-sm font-weight-500">
                    <div className="pb-2">Subtotal</div>
                    <div>
                      <span className="" data-currencyiso="NGN">
                      &#8358;
                      </span>
                      <span data-price="">{subTotal.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between font-sm font-weight-500">
                    <div className="">Delivery Fee</div>
                    <div>
                      <strong className="" data-currencyiso="NGN">
                      &#8358;
                      </strong>
                      <strong data-price="">{deliveryPrice.toLocaleString()}</strong>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex align-items-center justify-content-between font-medium font-weight-500">
                    <div className="">Total</div>
                    <div>
                      <strong className="" data-currencyiso="NGN">
                      &#8358;
                      </strong>
                      <strong data-price="">{finalTotalPrice.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <Link to="/pay">
                  <div className="mt-5 mb-3">
                    <DynamicButtonTwo
                      color="white"
                      width="100%"
                      height="42px"
                      backgroundColor="var(--woozBlue)"
                      boxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
                      borderRadius="4px"
                      border="none !important"
                      marginBottom=""
                      fontWeight="500"
                      fontSize="0.875rem"
                      hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 15%)"
                    >
                      CONFIRM ORDER
                    </DynamicButtonTwo>
                  </div>
                </Link>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.shop.totalPrice,
    };
};

export default connect(mapStateToProps)(CheckPayment);
