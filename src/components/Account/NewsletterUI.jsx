import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import LargeButton from "../Button/LargeButton";
import DynamicButton from "../Button/DynamicButton";

function NewsletterUI() {
  const [value, setValue] = React.useState("firstChoice");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h3 className="titleHeader d-none d-md-block">Newsletter Preferences</h3>

      <div className="addressBookDetail__wrapper">
        <div className="Subsc">SUBSCRIBE TO</div>

        <div className="addresstext_detail">
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
                label="daily newsletters for her"
              />
              <FormControlLabel
                value="secondChoice"
                control={<Radio />}
                label="daily newsletters for him"
              />
              <FormControlLabel
                value="thirdChioce"
                control={<Radio />}
                label="I don’t want to recieve daily newsletters"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="newsButton__wrapper">
        <LargeButton buttonName="SAVE" />
        <DynamicButton
          type="button"
          color="var(--woozBlue)"
          width="100%"
          fontWeight="500"
          fontSize="16px"
          height="52px"
          backgroundColor="white"
          boxShadow="none"
          hoverBoxShadow="none"
        >
          UNSUBSCRIBE FROM ALL COMMUNICATIONS
        </DynamicButton>
      </div>
    </div>
  );
}

export default NewsletterUI;
