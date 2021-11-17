import React from "react";
import TableContent from "./TableContent";

export function OrderTable({ ...props }) {
  return (
    <React.Fragment>
      <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>

        <div className="gridd-container row">
          {props.OrderTableData.map((e, i) => {
            return <TableContent key={i} img={e.img} info={e.info} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
