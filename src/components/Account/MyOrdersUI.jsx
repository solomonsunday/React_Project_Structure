// import { IconButton } from '@material-ui/core'
import React from "react";
import IconStore from "../../assets/icons/IconStore";
import ClosedOrderData from "./ClosedOrderData";
import NoDataUI from "./NoDataUI";
import OpenOrderData from "./OpenOrderData";

function MyOrdersUI() {
  const openOrderNumber = 3;
  const closedOrderNumber = 0;

  return (
    <div>
      <h3 className="titleHeader  d-none d-md-block">Orders</h3>

      <div className="titleHeader">
        <div className="orderToggle__wrapper">
          <div className="OpenClosedNav">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active orderToggle"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  OPEN ORDERS ({openOrderNumber})
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link orderToggle closedOrdr"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  CLOSED ORDERS ({closedOrderNumber})
                </a>
              </li>
            </ul>
          </div>
          <hr className="newSeperator" />
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {openOrderNumber !== 0 ? (
              <OpenOrderData />
            ) : (
              <NoDataUI
                Image={IconStore.orderShopBag}
                Topic="You have placed no orders yet!"
                Explanation=" All your orders will be saved here for you to access their state
              anytime"
              />
            )}
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {closedOrderNumber !== 0 ? (
              <ClosedOrderData />
            ) : (
              <NoDataUI
                Image={IconStore.orderShopBag}
                Topic="You have placed no orders yet!"
                Explanation=" All your orders will be saved here for you to access their state
              anytime"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrdersUI;
