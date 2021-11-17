import React from "react";
import TableContent from "../OfficialStore/TableContent";

export function OfficialStoreI({ ...props }) {
  return (
    <React.Fragment>
      <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
        <br />

        <div className="gridd-container row">
          {props.OfficialStoreDataI.map((e, i) => {
            return <TableContent key={i} img={e.img} info={e.info} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
