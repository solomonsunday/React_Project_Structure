import React from "react";
import LEFTCATSIDENAV from "./LeftCatSideNav";
import RIGHTCATSIDENAV from "./RightCatSideNav";

export default function CATSIDENAV({ products }) {
  return (
    <div className="catSideNav__group">
      <LEFTCATSIDENAV />
      <RIGHTCATSIDENAV products={products} />
    </div>
  );
}
