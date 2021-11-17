import React from "react";
import PropTypes from "prop-types";
import IconStore from "../../../assets/icons/IconStore";

const BtnGroup = (props) => {
    
  return (
    <div className="btn-group">
      <span
        onClick={props.handleList}
        id="list"
        className={`btn btn-default btn-xs ${props.ListButton}`}
      >
        {IconStore.listIcon}
      </span>
      <span
        onClick={props.handleGrid}
        id="grid"
        className={`btn btn-default btn-xs ${props.GridButton}`}
      >
        {IconStore.gridIcon}
      </span>
    </div>
  );
};

BtnGroup.propTypes = {
  handleList: PropTypes.func,
  handleGrid: PropTypes.func,
};

export default BtnGroup;
