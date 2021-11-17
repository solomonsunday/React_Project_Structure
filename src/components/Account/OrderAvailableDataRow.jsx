import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DynamicButton from "../Button/DynamicButton";

function OrderAvailableDataRow(props) {
  return (
    <Row className='orderAvailableDataRow justify-content-between'>
      <Link to="/product" className="col-lg-2 col-3">
        <img
          src={props.itemImage}
          className="orderImage"
          alt="productImage"
        />
      </Link>

      <div className='orderAvailDetail col-lg-8 col-7 pl-lg-3'>
        <p className='orderedProdName'>
          Notebook, intel Celeron N3060 (4GB RAM, 500GB HDD) 15.6 inch
          Display...
        </p>

        <p className='orderedProdNumber'> Order 348765433</p>
        <span className="orderDataRowBtn d-none d-sm-inline-block">
        <DynamicButton
          color="white"
          height="1.5rem"
          width="13.3rem"
          backgroundColor={props.bgColor}
          boxShadow="none"
          fontWeight="700"
          fontSize="12px"
          hoverBoxShadow="none"
        >
          <span className="d-none d-md-inline-block">STARTED -</span> <span className="">PAYMENT SUCCESSFUL</span> 
        </DynamicButton>
        </span>
        
        <p className='orderedProdDate'>On 12-11-2020</p>
      </div>

      <Link to='#' className='seeDetailsLink col-lg-2 col-2 text-right d-none d-md-block'>SEE DETAILS</Link>

    </Row>
  );
}

export default OrderAvailableDataRow;
