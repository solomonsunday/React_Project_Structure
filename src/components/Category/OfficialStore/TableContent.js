import React from "react";

class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-2 col-xs-4 col-6">
          <div className="pse_card m-2">
            <img src={this.props.img} className="ps_card_img" alt="iphone 11" />
          </div>
          <br/>
        </div>
      </React.Fragment>
    );
  }
}
export default TableContent;
