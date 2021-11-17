import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DealsSectionContent from "./DealsSectionContent";
import { connect } from "react-redux";

function DealsSection({ products, ...props }) {
  return (
    <div className={props.className1}>
      <Container fluid className="dealsSectionContainer">
        <Row>
          <Col md="12" className="dealsSectionTitle__container">
            <div className={`dealsSectionTitle ${props.className2}`}>
              <p>{props.title}</p>
            </div>
          </Col>

          <DealsSectionContent productData={products} sliceFrom={props.sliceFrom} sliceTo={props.sliceTo}/>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(DealsSection);
