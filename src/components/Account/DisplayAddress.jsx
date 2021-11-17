import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";
import LargeButton from "../Button/LargeButton";

function DisplayAddress({ contact }) {
  const defaultContact = contact.find((obj) => obj.defaultAddress === true);

  return (
    <div>
      <NavLink to="/editAddress" className="button__wrap2 d-none d-md-flex">
        <LargeButton buttonName="ADD NEW ADDRESS" />
      </NavLink>

      <div className="addressbookUI_wrapper">
        <h3 className="titleHeader address_newHeadr d-none d-md-block">
          Address Book
        </h3>
        <div className="addressBookDetail__wrapper">
          <div className="addresstext_detail">
            {defaultContact ? (
              <div>
                <h6 className="nameOf">{`${defaultContact?.firstName} ${defaultContact?.lastName}`}</h6>
                <p>{defaultContact?.address}, </p>
                <p>{`${defaultContact?.town}, ${defaultContact?.city}`}</p>
                <h6 className="defaultAdress">Default Address</h6>
              </div>
            ) : (
              <div>You have no Addresses</div>
            )}
          </div>
          <div className="reEdit">
            SET AS DEFAULT
            <Link 
            to={{
              pathname: "/editAddress",
              defaultContact: defaultContact,
            }}
            className="editIcon">
              {IconStore.editSolid}
            </Link>
          </div>
        </div>
      </div>

      <NavLink
        to="/editAddress_m"
        className="button__wrap2 mx-auto mt-4 mb-1 d-flex d-md-none"
      >
        <LargeButton buttonName="ADD NEW ADDRESS" />
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact.contacts,
  };
};

export default connect(mapStateToProps)(DisplayAddress);
