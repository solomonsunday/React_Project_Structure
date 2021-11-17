import React from "react";
import { Row, Col } from "react-bootstrap";
import RightSideCard from "./RightSideCard";
import samsungGalaxyA70 from "../../assets/images/samsungGalaxyA70.png";
import samsungFrontBack from "../../assets/images/samsungFrontBack.png";
import { HashRouter, NavLink, Route } from "react-router-dom";
import DetailSection from "./ProductDetailSection";
import SpecificationSection from "./SpecificationSection";
import ReviewSection from "./ReviewSection";

function ProductDetailRowThree() {
  return (
    <HashRouter>
      <div className="productDetailRowThree">
        <Row className="Descriptions">
          <Col className="navGrp">
            <NavLink to="/">
              <span className="text-nowrap">PRODUCT DETAILS</span>
            </NavLink>
            <NavLink to="/productReview">
              <span>REVIEWS</span>
            </NavLink>
            <NavLink to="/productSpecification">
              <span className="text-nowrap"> PRODUCT SPECIFICATION</span>
            </NavLink>
          </Col>
        </Row>

        <Row>
          <Col lg="9">
            <div className="productDescription tab-content" id="myTabContent">
              <Route exact path="/" component={DetailSection} />
              <Route path="/productReview" component={ReviewSection} />
              <Route
                path="/productSpecification"
                component={SpecificationSection}
              />
            </div>
          </Col>

          <Col lg="3" className="RightSide2">
            <div className="sponsoredRight">
              <p className="sponsoredTitle">Sponsored Product</p>
              <div className=" row">
                <RightSideCard productImage={samsungGalaxyA70} />
                <RightSideCard productImage={samsungFrontBack} />
                <RightSideCard productImage={samsungFrontBack} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </HashRouter>
  );
}

export default ProductDetailRowThree;
