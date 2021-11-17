import React from "react";
import { Link } from "react-router-dom";

function LeftSideItem(props) {
  return (
    <div className="leftSideBar__grp">
      <img src={props.iconSource} alt="icon" className="leftSideBar__icon" />
      <Link to={props.urlDirection}>
        <span className="leftSideBar__text text-nowrap">{props.iconText} </span>
      </Link>
    </div>
  );
}

export default LeftSideItem;
