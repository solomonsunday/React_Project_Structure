import React from "react";
import AddressBookUI from "./AddressBookUI";
import ChangePasswordUI from "./ChangePasswordUI";
import DetailsUI from "./DetailsUI";
import MyAccountUI from "./MyAccountUI";
import MyOrdersUI from "./MyOrdersUI";
import MyPendReviewUI from "./MyPendReviewUI";
import MySavedItemsUI from "./MySavedItemsUI";
import MyVoucherUI from "./MyVoucherUI";
import NewsletterUI from "./NewsletterUI";
import IconStore from "../../assets/icons/IconStore";
import { Route, NavLink, HashRouter } from "react-router-dom";
import EditAddressComp from "./EditAddressComp";
import * as FaIcon from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function AccountRowOneNavLink() {
  const history = useHistory();
  return (
    <HashRouter>
      <div className="row accRowOne__wrapper">
        <div className="col-md-4 col-lg-3 accLeftRow__wrapper fixedHeight">
          <div className="nav flex-column nav-p">
            <NavLink to="/" className="nav-link d-flex justify-content-between">
              <span>
                {IconStore.bxUser}
                <span className="adjacentIcon__text">My Account</span>
              </span>

              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/orders"
              className="nav-link d-flex justify-content-between"
            >
              <span>
                {IconStore.bxBox}
                <span className="adjacentIcon__text">Orders</span>
              </span>

              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/reviews"
              className="nav-link  d-flex justify-content-between"
            >
              <span>
                {IconStore.bxCommentEdit}
                <span className="adjacentIcon__text">Pending Reviews</span>
              </span>

              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/vouchers"
              className="nav-link d-flex justify-content-between"
            >
              <span>
                {IconStore.ulTicket}
                <span className="adjacentIcon__text">Voucher Credit</span>
              </span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/saved"
              className="nav-link d-flex justify-content-between"
            >
              <span>
                {IconStore.heart}
                <span className="adjacentIcon__text">Saved Items</span>
              </span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <a
              href="/recentlyViewed"
              onClick={(e) => {
                e.preventDefault();
                history.push("/recentlyViewed");
              }}
              className="nav-link  d-flex justify-content-between"
            >
              <span>
                {IconStore.baselineHistory}
                <span className="adjacentIcon__text">Recently Viewed</span>
              </span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </a>

            <hr className="hrSeparator" />
            <NavLink
              to="/details"
              className="nav-link d-flex justify-content-between"
            >
              <span>Details</span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/addressBook"
              className="nav-link  d-flex justify-content-between"
            >
              <span>Address Book</span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/changePassword"
              className="nav-link d-flex justify-content-between"
            >
              <span>Change Password</span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <NavLink
              to="/newsletter"
              className="nav-link d-flex justify-content-between"
            >
              <span>Newsletter Preferences</span>
              <span className="d-inline-block d-md-none pr-2 rightIconMobile">
                <FaIcon.FaChevronRight />
              </span>
            </NavLink>

            <hr className="hrSeparator" />

            <a href="/" className="nav-link text-center logoutTxt">
              <span>LOG OUT</span>
            </a>
          </div>
        </div>

        <div className="col-md-8 col-lg-9 rightr ">
          <div className="right__wrapper d-none d-md-block h-100 ">
            <Route exact path="/" component={MyAccountUI} />
            <Route path="/orders" component={MyOrdersUI} />
            <Route path="/reviews" component={MyPendReviewUI} />
            <Route path="/vouchers" component={MyVoucherUI} />
            <Route path="/saved" component={MySavedItemsUI} />
            <Route path="/details" component={DetailsUI} />
            <Route path="/addressBook" component={AddressBookUI} />
            <Route path="/changePassword" component={ChangePasswordUI} />
            <Route path="/newsletter" component={NewsletterUI} />
            <Route path="/editAddress" component={EditAddressComp} />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
