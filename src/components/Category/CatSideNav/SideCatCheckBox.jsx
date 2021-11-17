import React from 'react'
import Checkbox from "@material-ui/core/Checkbox";

function SideCatCheckBox(prop) {
    const [checked, setChecked] = React.useState(false);

    const handleCheckChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <div className="check_section">
        <Checkbox
          checked={checked}
          color="primary"
          onChange={handleCheckChange}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span className="">{prop.productCatName}</span>
      </div>
    )
}

export default SideCatCheckBox
