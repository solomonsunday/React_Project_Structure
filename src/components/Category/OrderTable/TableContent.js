import React from "react";

const TableContent = (props) => {
  return (
    <React.Fragment>
      <div className='col-lg-2 col-sm-4 col-6 mb-3'>
        <div className="ps_card">
          <img src={props.img} className="ps_card_img" alt="iphone 11" />
        </div>
        <b>
          <p>{props.info}</p>
        </b>
      </div>
    </React.Fragment>
  );
};

export default TableContent;

