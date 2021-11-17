import React from "react";

//TO UPDATE VERSION - From Fixed style, dynamic button text to dynamic style and button using props.className

const LargeButton = (props) => {
  return (
    <React.Fragment>
      <button type={props.type} onClick={props.onClick} className="largeButton">
        {props.buttonName}
      </button>
    </React.Fragment>
  );
};

export default LargeButton;
