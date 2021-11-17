import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SlimCard.css";

const SlimCard = (props) => {
  return (
    <Row className="slimRow">
      <div className="slimLogo ml-auto">
        <img className="img-fluid" src={props.companyLogo} alt="slim logo" />
      </div>

      <Col xs="12" lg="auto">
        <Row className="flex-wrap">
          <Col className="slimImage">
            <img src={props.productImg} alt="phone" />
          </Col>
          <Col className="slimText">
            <Row className='flex-wrap flex-lg-nowrap'>
            <Col xs='auto' md='5' className='slimTextContainer'>
              <p className="slimTextBig text-nowrap">&#8358; 99,500</p>
              <p className="slimTextSmall">
                Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM)
              </p>
            </Col>

            <div className="slimButton">
              <Link to="/cart">
              <button type="button" className="mediumButton">
                Buy Now
              </button>
              </Link>
             
            </div>
            </Row>
            
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SlimCard;
