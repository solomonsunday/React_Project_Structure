import React from "react";
import { Row} from "react-bootstrap";
import DealsSectionSm from "./DealsSectionSm";


function ProductDetailRowFour() {
  return (
    <Row>
      <div className="prodDetailWrapper col-lg-9 col-12">
        
        <DealsSectionSm titleText="Customers who viewed this also viewed" sliceFrom={12} sliceTo={18}/>

        <DealsSectionSm titleText="Customers Also Bought" sliceFrom={12} sliceTo={18}/>

      </div>
    </Row>
  );
}

export default ProductDetailRowFour;
