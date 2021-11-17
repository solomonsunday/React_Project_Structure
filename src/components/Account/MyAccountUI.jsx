import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IconStore from "../../assets/icons/IconStore";

function MyAccountUI({ contact }) {
  const defaultContact = contact?.find((obj) => obj.defaultAddress === true);

  return (
    <div>
      <h3 className="titleHeader d-none d-md-block">My Account</h3>
      <Row>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <span className="accBox__title">ACCOUNT DETAILS </span>
              <Link to="/details" className="editIcon">
                {IconStore?.editSolid}
              </Link>
            </div>

            <div className="accBox__content">
              <p className="text1">{`${defaultContact?.firstName} ${defaultContact?.lastName}`}</p>
              <p className="text2 text-black-50">bukkytohgbesky@example.com</p>
              <p className="detailText">ACCOUNT DETAILS</p>
            </div>
          </div>
        </Col>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <span className="accBox__title">ADDRESS </span>
              <Link
                to={{
                  pathname: "/editAddress",
                  defaultContact: defaultContact,
                }}
                className="editIcon"
              >
                {IconStore?.editSolid}
              </Link>
            </div>
            <div className="accBox__content">
              <p className="text1">Your default shipping address:</p>

              {defaultContact ? (
                <div>
                  <p className="text-black-50">{`${defaultContact?.firstName} ${defaultContact?.lastName}`}</p>
                  <p className="text-black-50">{defaultContact?.address}</p>
                  <p className="text-black-50">{`${defaultContact?.town} ${defaultContact?.city}`}</p>
                  <p className="text-black-50">
                    {`+${defaultContact?.phonePrefix} ${defaultContact?.phoneNumber}`}
                  </p>
                </div>
              ) : (
                "You have no default address"
              )}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <h6 className="accBox__title">NEWSLETTER PREFERENCES</h6>
            </div>

            <div className="accBox__content">
              <p className="subscribText">
                You are currently not subscribed to any of our newsletters.
              </p>
              <p className="detailText">EDIT NEWSLETTER PREFERENCES</p>
            </div>
          </div>
        </Col>

        <Col md="6" className="aColContainer">
          <div className="accBox__wrapper h-100">
            <div className="accBox__head">
              <h6 className="accBox__title">woozeee Balance</h6>
            </div>

            <div className="accBox__content">
              <span>{IconStore.accWallet}</span>
              <span className="woozBalance">₦ 19,650</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact.contacts,
  };
};

export default connect(mapStateToProps)(MyAccountUI);
