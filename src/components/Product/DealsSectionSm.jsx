import React from "react";
import { Row } from "react-bootstrap";
import DealsSectionContentSm from "./DealsSectionContentSm";
import { connect } from "react-redux";
import CardGroupTitle from "../Cards/CardGroupTitle";

const DealsSectionSm = ({ products, ...props }) => {
  return (
      <div className="prodSmallWrapper mt-4">
        <CardGroupTitle titleText={props.titleText} />
        <div>
          <Row className="prodSmallRow">
              <DealsSectionContentSm
                productData={products}
                sliceFrom={props.sliceFrom}
                sliceTo={props.sliceTo}
              />
          </Row>
        </div>
      </div>
  );
};


const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(DealsSectionSm);
