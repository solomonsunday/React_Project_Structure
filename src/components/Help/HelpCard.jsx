import React from "react";
import { DynamicButtonTwo } from "../Button/DynamicButton";

export default function HelpCard(props) {
  return (
    <div className="col-6 col-md-3 text-left d-flex flex-column my-5">
      <div>
        <img src={props.imgUrl} alt="" className="help_descript_image" />
      </div>
      <p className="py-3 pr-3 md:pr-5 font-sm">{props.text}</p>
      
      <DynamicButtonTwo
        color="white"
        height="1.5rem"
        width="5.625rem"
        backgroundColor="#FF5757"
        boxShadow="none"
        borderRadius="5px"
        border="none !important"
        fontWeight="500"
        fontSize="0.875rem"
        hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
        type="submit"
        className="mt-auto"
      >
        Learn More
      </DynamicButtonTwo>
    </div>
  );
}
