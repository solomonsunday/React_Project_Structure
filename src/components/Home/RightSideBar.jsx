import React from "react";

function RightSideBar() {
  return (
    <div className="rightSidebar__container">
      <div className="rightSidebar__top">
        <div>
          <img
            src="/images/RightSideBar/qualityAssurance.svg"
            alt="icon"
            className="rightSideBar__icon"
          />
          <span className="rightSideBar__text1">QUALITY ASSURANCE</span>
          <br />
          <span className="rightSideBar__text2">Products you can trust</span>
        </div>

        <div>
          <img
            src="/images/RightSideBar/refundAssurance.svg"
            alt="icon"
            className="rightSideBar__icon"
          />
          <span className="rightSideBar__text1">REFUND ASSURANCE</span>
          <br />
          <span className="rightSideBar__text2">Quick Refund</span>
        </div>

        <div>
          <img
            src="/images/RightSideBar/sellerBadge.svg"
            alt="icon"
            className="rightSideBar__icon"
          />
          <span className="rightSideBar__text1">BECOME A SELLER</span>
          <br />
          <span className="rightSideBar__text2">Trade on the Platform</span>
        </div>
      </div>

      <div className="rightSidebar__bottom">
        <img
          src="/images/RightSideBar/animationSale.gif"
          className="rightSidebar__bottomImage"
          alt=""
        />
      </div>
    </div>
  );
}

export default RightSideBar;
