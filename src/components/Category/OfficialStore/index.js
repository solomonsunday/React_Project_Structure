import React from "react";
// import DealsSectionContent from "../../Product/DealsSectionContent";
import TableContent from "./TableContent";
import { connect } from "react-redux";

function OfficialStore({ products, ...props }) {
  return (
    <React.Fragment>
      <div className="conatine">
        <h3 className="heading__Title text-center">{props.headingTitle}</h3>
        <br />
        <div className="gridd-container row">
          {props.OfficialStoreData.map((e, i) => {
            return <TableContent key={i} img={e.img} info={e.info} />;
          })}
        </div>
        {/* <div className="row">
          <DealsSectionContent
            productData={products}
            sliceFrom={6}
            sliceTo={12}
          />
        </div> */}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(OfficialStore);
