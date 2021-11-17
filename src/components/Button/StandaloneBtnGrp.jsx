import React from "react";

function StandaloneBtnGrp(props) {
  return (
    <div className="btnGrp__wrapr">
      <div className="body__wrapper putAtMiddle">
        <div className="btnwrap row justify-content-md-end justify-content-sm-center crt_grp">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default StandaloneBtnGrp;
