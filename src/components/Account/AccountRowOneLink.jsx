import React from "react";
import IconStore from "../../assets/icons/IconStore";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";

export default function AccountRowOneLink() {
  return (
    <div className="row accRowOne__wrapper">
      <div className="col-md-4 accLeftRow__wrapper fixedHeight">
        <div className="nav flex-column nav-p">
          <Link
            to="/account"
            className="nav-link d-flex justify-content-between"
          >
            <span>
              {IconStore.bxUser}
              <span className="adjacentIcon__text">My Account</span>
            </span>

            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <Link
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
          </Link>

          <Link
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
          </Link>

          <Link
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
          </Link>

          <Link to="/saved" className="nav-link d-flex justify-content-between">
            <span>
              {IconStore.heart}
              <span className="adjacentIcon__text">Saved Items</span>
            </span>
            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <a
            href="/recentlyViewed"
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
          <Link
            to="/details"
            className="nav-link d-flex justify-content-between"
          >
            <span>Details</span>
            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <Link
            to="/addressBook"
            className="nav-link  d-flex justify-content-between"
          >
            <span>Address Book</span>
            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <Link
            to="/changePassword"
            className="nav-link d-flex justify-content-between"
          >
            <span>Change Password</span>
            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <Link
            to="/newsletter"
            className="nav-link d-flex justify-content-between"
          >
            <span>Newsletter Preferences</span>
            <span className="d-inline-block d-md-none pr-2 rightIconMobile">
              <FaIcon.FaChevronRight />
            </span>
          </Link>

          <hr className="hrSeparator" />

          <a href="/" className="nav-link text-center logoutTxt">
            <span>LOG OUT</span>
          </a>
        </div>
      </div>
    </div>
  );
}
