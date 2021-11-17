import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebookImg from "../../assets/images/footer/facebook.png";
import instaImg from "../../assets/images/footer/instagram.png";
import twitterImg from "../../assets/images/footer/twitter.png";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import woozImg from "../../assets/images/footer/wooz.png";
import GPlay from "../../assets/images/GooglePlay.svg";
import AStore from "../../assets/images/AppStore.svg";
import econnectWhite from "../../assets/images/econnect-white.svg";
import entertainImg from "../../assets/images/footer/entertainment.png";
import eleganceImg from "../../assets/images/footer/elegance.png";
import excellenceImg from "../../assets/images/footer/excellence.png";
import getInTouchImg from "../../assets/images/footer/get-intouch.png";
import { DynamicButtonTwo } from "../Button/DynamicButton";
import ScrollToTop from "react-scroll-to-top";
import IconStore from "../../assets/icons/IconStore";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import Divider from "@material-ui/core/Divider";

function NewFooter() {
  const { width } = useWindowDimensions();

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <React.Fragment>
      {width > 576 ? (
        <footer className="mt-5">
          <div className="footer-red">
            <div className="body__wrapper mx-auto position-relative">
              {/* <div className="move-up mr-3 mr-sm-5">
              <img src={upImg} alt="Move up" />
            </div> */}
              <div className="d-none d-sm-block">
                <ScrollToTop
                  smooth
                  component={<ExpandLessRoundedIcon color="primary" />}
                />
              </div>
            </div>
          </div>
          <div className="affirmation-block text-white">
            <div className="body__wrapper mx-auto position-relative pt-4 pb-5 pb-lg-2">
              <div className="small-circle affirm-circle"></div>
              <img
                src={woozImg}
                alt="Woozeee logo"
                className="affirm-logo mx-auto"
              />
              <div className="col-12 col-lg-9 mx-auto pt-3 pl-lg-9">
                <Row className="mt-3">
                  <Col md={4}>
                    <div className="affirmation py-3 py-md-0">
                      <img src={entertainImg} alt="Entertainment" />
                      <p className="white">Entertainment</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="affirmation py-3 py-md-0">
                      <img src={eleganceImg} alt="Entertainment" />
                      <p className="white">Elegance</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="affirmation py-3 py-md-0">
                      <img src={excellenceImg} alt="Entertainment" />
                      <p className="white">Excellence</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="footer-wrap position-relative text-white">
            <div className="body__wrapper mx-auto">
              <img src={getInTouchImg} alt="Get in touch" className="intouch" />
              <div>
                <Row className="mb-5 justify-content-between">
                  <Col md={3} className="pr-3">
                    <h3 className="white font-weight-bold mt-4 mt-md-0">
                      CONTACT INFO
                    </h3>
                    <div className="mt-3">
                      <h4 className="white w-bold mt-4 mt-md-0 font-sm mb-0">
                        ADDRESS:
                      </h4>
                      <address className="white font-xs pt-2">
                        60 Landbridge Avenue, Oniru, VI
                      </address>
                    </div>
                    <div className="mt-3">
                      <h4 className="white w-bold mt-4 mt-md-0 font-sm mb-0">
                        PHONE:
                      </h4>
                      <p className="white font-xs pt-2">09088877765</p>
                    </div>
                    <div className="mt-3">
                      <h4 className="white w-bold mt-4 mt-md-0 font-sm mb-0">
                        EMAIL:
                      </h4>
                      <p className="white font-xs pt-2">info@woozeee.com</p>
                    </div>
                    <div className="mt-3">
                      <h4 className="white w-bold mt-4 mt-md-0 font-xs pt-2 mb-0">
                        WORKING DAYS/HOUR:
                      </h4>
                      <p className="white font-xs pt-2">
                        Mon - Fri / 9:00AM - 5:00PM
                      </p>
                    </div>
                  </Col>
                  <Col md={2} className="pr-3">
                    <h3 className="white font-weight-bold mt-4 mt-md-0">
                      WHO WE ARE
                    </h3>
                    <div className="quick-links">
                      <Link to="/about" className="white d-block">
                        About
                      </Link>
                      <Link to="/careers" className="white d-block">
                        Work With Us
                      </Link>
                      <Link to="/dispatch" className="white d-block">
                        woozeee Dispatch
                      </Link>
                    </div>
                  </Col>
                  <Col md={3} className="pr-3">
                    <h3 className="white font-weight-bold mt-4 mt-md-0">
                      MORE INFORMATION
                    </h3>
                    <div className="quick-links">
                      <Link to="/sell-on-woozeee" className="white d-block">
                        Sell on woozeee
                      </Link>
                      <Link to="/" className="white d-block">
                        Participate in challenges
                      </Link>
                      <Link to="/" className="white d-block">
                        Become an Affiliate Partner
                      </Link>
                      <Link to="/logistics-partner" className="white d-block">
                        Become a Logistics Service Partner
                      </Link>
                      <Link to="/" className="white d-block">
                        Become a Vendor Service Provider
                      </Link>
                      <Link to="/" className="white d-block">
                        Refer a Friend
                      </Link>
                    </div>
                  </Col>
                  <Col md={2} className="pr-3">
                    <h3 className="white font-weight-bold mt-4 mt-md-0">
                      SUPPORT
                    </h3>
                    <div className="quick-links">
                      <Link to="/help" className="white d-block">
                        Help & FAQS
                      </Link>
                      <Link to="/privacy" className="white d-block">
                        Privacy Policy
                      </Link>
                      <Link to="/terms-of-use" className="white d-block">
                        Terms and Conditions
                      </Link>
                    </div>
                  </Col>
                  <Col md={2} className="">
                    <h3 className="white font-weight-bold mt-4 mt-md-0">
                      SUBSCRIBE NEWSLETTER
                    </h3>
                    <p className="white font-xs white">
                      Get all the latest information on events, sales,
                      challenges and offers. Sign up for newsletter:
                    </p>
                    <form className="mt-3">
                      <Form.Group>
                        <Form.Control
                          type="email"
                          placeholder="Email address"
                          className="w-100 px-2 font-sm "
                        />
                      </Form.Group>
                      <div className="mt-2">
                        <DynamicButtonTwo
                          color="white"
                          height="2.5rem"
                          width="8rem"
                          backgroundColor="var(--woozRed)"
                          boxShadow="none"
                          borderRadius="5px"
                          border="none !important"
                          fontWeight="500"
                          fontSize="0.875rem"
                          hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                        >
                          Subscribe
                        </DynamicButtonTwo>
                      </div>
                    </form>
                  </Col>
                </Row>
                <div className="footer-apps pt-5 pb-4 d-flex flex-wrap">
                  <div className="col-lg-6"></div>
                  <div className="col-12 col-sm-6 col-lg-2 text-left text-md-right">
                    <img src={econnectWhite} alt="econnect logo" />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 text-left text-md-right">
                    <img src={GPlay} alt="app" className="pr-4" />
                    <img src={AStore} alt="app" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="body__wrapper mx-auto">
              <div className="social-feeds row">
                <div className="social-media-icons col-12 col-md-6">
                  <Link to="/">
                    <img src={twitterImg} alt="Twitter" />
                  </Link>
                  <Link to="/">
                    <img src={facebookImg} alt="facebook" />
                  </Link>
                  <Link to="/">{IconStore.youtubeIcon}</Link>
                  <Link to="/">
                    <img src={instaImg} alt="instagram" />
                  </Link>
                </div>
                <div className="col-12 col-md-6 pt-3 pt-md-0">
                  <p className="copyright font-sm">
                    COPYRIGHT woozeee {new Date().getFullYear()} -
                    <Link to="/terms-of-use" className="black px-2 underline ">
                      TERMS & CONDITIONS
                    </Link>
                    <Link to="/privacy" className="black underline">
                      PRIVACY POLICY
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer
          className="mt-5 font-xxs font-weight-500 text-center text-white bg-dark"
          style={{
            background: "linear-gradient(180deg, #0D3A69 35.61%, #0C1723 100%)",
          }}
        >
          <div className="pb-2" style={{background: "#053F7C"}} onClick={scrollToTop}>
            <div className="w-50 mx-auto">
              <ExpandLessRoundedIcon />
            </div>
            <div className="w-50 mx-auto"> BACK TO TOP</div>         
          </div>

          <Divider style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }} />

          <div className="d-flex justify-content-around py-3">
            <div><Link to="/"> SUPPORT</Link></div>
            <div><Link to="/"> CONTACT US</Link></div>
          </div>
          <div className="d-flex justify-content-around pb-3">
            <div><Link to="/">{`TERMS & CONDITIONS`}</Link></div>
            <div><Link to="/"> BECOME A SELLER</Link></div>
          </div>
          <div className="d-flex justify-content-around pb-3">
            <div><Link to="/"> REPORT A PRODUCT</Link></div>
          </div>
          <Divider style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }} />

          <div className="pt-2 pb-3 font-xs" style={{ opacity: 0.5 }}>
            All right Reserved
          </div>
        </footer>
      )}
    </React.Fragment>
  );
}
export default NewFooter;
