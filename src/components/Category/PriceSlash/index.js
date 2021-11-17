import React from "react";
// import TableContent from "./TableContent";
import * as FaIcon from "react-icons/fa";
import { connect } from "react-redux";
import DealsSectionContent from "../../Product/DealsSectionContent";

function PriceSlash({ products, ...props }) {
  return (
    <React.Fragment>
      <div className="conatine">
        <div className="bp-span">
          <span>SEE ALL</span> <FaIcon.FaAngleRight />
        </div>

        <h3 className="heading__Title">{props.headingTitle}</h3>

        {/* <div class="griddd-container row">
          {props.PriceSlashData.map((e, i) => {
            return (
              <TableContent
                key={i}
                img={e.img}
                info={e.info}
                price={e.price}
                slashed={e.slashed}
                percentage={e.percentage}
              />
            );
          })}
        </div> */}

        <div className="row  w-100">
          <DealsSectionContent
            productData={products}
            sliceFrom={6}
            sliceTo={12}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(PriceSlash);
