import React from "react";
import { ReactComponent as ShoppingBag } from "../assets/images/shoppingBag.svg";
import { ReactComponent as CustomerSupport } from "../assets/images/customerSupport.svg";
import { ReactComponent as DeliveryTruck } from "../assets/images/deliveryTruck.svg";
import videoThumbnail from "../assets/images/VideoThumbnail1.svg";
import videoThumbnail2 from "../assets/images/VideoThumbnail2.svg";
import videoThumbnail3 from "../assets/images/VideoThumbnail3.svg";
import videoThumbnail4 from "../assets/images/VideoThumbnail4.svg";
import videoThumbnail5 from "../assets/images/VideoThumbnail5.svg";
import videoThumbnail6 from "../assets/images/VideoThumbnail6.svg";
import videoThumbnail7 from "../assets/images/VideoThumbnail7.svg";
import { ReactComponent as VideoPlayIcon } from "../assets/images/videoPlayIcon.svg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NiceImage from "../assets/images/niceImage.svg";
import useWindowDimensions from "../Hooks/UseWindowDimension";

export default function LandingPage() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Header />

      <div className="w-100 h-100 bg-white">
        <div className="body__wrapper putAtMiddle">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className={` ${width > 480 ? "pt-5" : "pt-3"} z-1 mt-3`}>
              <h2
                className={`${
                  width > 480 ? "text-4xl pt-5" : "font-xxl pb-3"
                } font-weight-bold`}
              >
                Make Money
              </h2>
              <h2
                className={`${
                  width > 480 ? "text-4xl" : "font-xxl pb-3"
                } font-weight-bold`}
              >
                <span className="text-woozRed">with </span> woozeee
              </h2>
              <p>It’s more than a market place, it’s a lifestyle...</p>
              <button
                className={`border-0 bg-woozBlue font-weight-bold text-white py-2 py-sm-3 px-4 px-md-5 mt-5  ${
                  width > 480 ? "font-md-xl" : "font-medium"
                } `}
                style={{ borderRadius: "8px" }}
              >
                Get Started
              </button>

              <div className="mt-5 font-weight-400">
                <div>
                  Or Call 0199374210 to have our customer adviser help you.
                </div>
                <div>Opened 9am to 6pm, Monday to Friday</div>
              </div>
            </div>

            {width > 576 ? (
              <div className="niceImageContainer">
                <img src={NiceImage} alt="" className="niceImageItem" />
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="text-center headingSpacer_2">
            <div className="">
              <h2 className="font-3xl font-weight-bold">
                {" "}
                Why woozeee is your best option
              </h2>
            </div>
            <div className="d-flex  flex-column flex-sm-row gap-3 justify-content-center pt-5">
              <div className="d-flex flex-column gap-2 max-w-md  mx-auto">
                <div>
                  <ShoppingBag />
                </div>
                <div>
                  <h5>More Buyers</h5>
                  <p>Link-up, sell to more buyers and increase your revenue</p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 max-w-md mx-auto">
                <div>
                  <CustomerSupport />
                </div>
                <h5>Customer Support</h5>

                <p>
                  We offer great customer support, online and offline training.
                </p>
              </div>
              <div className="d-flex flex-column gap-2 max-w-md mx-auto">
                <div>
                  <DeliveryTruck />
                </div>
                <h5>Impeccable product delivery</h5>
                <p>Delivery is prompt (same day delivery) and orders can </p>
              </div>
            </div>
          </div>

          <div className="text-center headingSpacer_1">
            <div className="">
              <h2 className="font-3xl font-weight-bold">Trying is Believing</h2>
              <p className="max-w-md-xl mx-auto mt-3">
                See what people are saying about our unique and effective
                Marketplace
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center pt-5">
              <div className="d-flex flex-column gap-2 max-w-md mx-auto">
                <div className="max-w-md position-relative">
                  <img src={videoThumbnail} alt="" className="w-100" />
                  <VideoPlayIcon className="position-absolute top-40p left-40p pointer" />
                </div>
                <div className="text-left">
                  <h5 className="pt-3 pb-1">Review by Michael Wazobia</h5>
                  <p className="font-sm">
                    Link-up, sell to more buyers and increase your revenue
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 max-w-md mx-auto">
                <div className="max-w-md position-relative">
                  <img src={videoThumbnail2} alt="" className="w-100" />
                  <VideoPlayIcon className="position-absolute top-40p left-40p pointer" />
                </div>
                <div className="text-left">
                  <h5 className="pt-3 pb-1">Review by Angie Wazobia</h5>

                  <p className="font-sm">
                    We offer great customer support, online and offline
                    training.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 max-w-md mx-auto">
                <div className="max-w-md position-relative">
                  <img src={videoThumbnail3} alt="" className="w-100" />
                  <VideoPlayIcon className="position-absolute top-40p left-40p pointer" />
                </div>
                <div className="text-left">
                  <h5 className="pt-3 pb-1">Review by Brittany Wazobia</h5>
                  <p className="font-sm">
                    Delivery is prompt (same day delivery) and orders can{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center headingSpacer_1">
            <div className="">
              <h2 className="font-3xl font-weight-bold">How it works</h2>
              <p className="max-w-md-xl mx-auto  mt-3">
                It's easy with woozeee
              </p>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center pt-5">
              <div className="d-flex flex-column gap-2 max-w-sm-md mx-auto">
                <div className="max-w-sm-md">
                  <img
                    src={videoThumbnail4}
                    alt=""
                    className="w-100 rounded-circle shadow"
                  />
                </div>
                <div>
                  <h1 className="font-weight-bold text-woozRed opacity-50">
                    1
                  </h1>
                  <h6 className="text-woozBlue">Register</h6>
                  <div className="pt-3 font-weight-lighter text-nowrap font-sm">
                    <p>Fill The Registration Form</p>
                    <p>Submit The Required Documents</p>
                    <p>(A) Business Registration</p>
                    <p>(B) Bank Account Details</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 max-w-sm-md mx-auto">
                <div className="max-w-sm-md">
                  <img
                    src={videoThumbnail5}
                    alt=""
                    className="w-100 rounded-circle shadow"
                  />
                </div>
                <h1 className="font-weight-bold text-woozRed opacity-50">2</h1>
                <h6 className="text-woozBlue">Marketplace Pro</h6>
                <div className="font-sm">
                  <p className="">
                    Complete The Dedicated New Seller Training, Activate Your
                    Seller Center Account To Manage Your Shop
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 max-w-sm-md mx-auto">
                <div className="max-w-sm-md">
                  <img
                    src={videoThumbnail6}
                    alt=""
                    className="w-100 rounded-circle shadow"
                  />
                </div>
                <h1 className="font-weight-bold text-woozRed opacity-50">3</h1>
                <h6 className="text-woozBlue">Start Selling</h6>
                <p className="font-sm">
                  Delivery is prompt (same day delivery) and orders can{" "}
                </p>
              </div>
              <div className="d-flex flex-column gap-2 max-w-sm-md mx-auto">
                <div className="max-w-sm-md">
                  <img
                    src={videoThumbnail7}
                    alt=""
                    className="w-100 rounded-circle shadow"
                  />
                </div>
                <h1 className="font-weight-bold text-woozRed opacity-50">4</h1>
                <h6 className="text-woozBlue">{`Have & Make Money`}</h6>
                <p className="font-sm">
                  Delivery is prompt (same day delivery) and orders can{" "}
                </p>
              </div>
            </div>

            <div className=" headingSpacer_1">
              <h1>Convinced beyond reason?</h1>
            </div>

            <div className="pb-5">
              <button
                className="border-0 bg-woozBlue font-weight-bold text-white py-3 px-5 my-5 font-md-xl"
                style={{ borderRadius: "8px" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
