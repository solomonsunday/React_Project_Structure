import React from "react";
import Header from "../../components/Header/Header";
import NewFooter from "../../components/Footer/Footer";
import DynamicButton from "../../components/Button/DynamicButton";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div>
      <Header />

      <div className="body__wrapper putAtMiddle">
        {/* <div className="mt-4 bg-white"> */}
        <div className="prodWrapper mb-5">
          <div className="prodBigWrapper">
            <div className="text-center pt-3">
              <h3 className="text-primary">Terms of Service</h3>
            </div>
            <div className="px-5 py-5">
              <ol type="1" className="ol_terms">
                <li>
                  <p className="text-2xl py-1 text-primary">Introduction</p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Registration and Account</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Terms and conditions of sale</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>{" "}
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Returns and refunds</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Payment</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Rules about your content</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    Our rights to use your content
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    Use of website and mobile applications
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Copyright and trademarks</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary"> Data Privacy</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    Due diligence and audit rights
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    woozeee’s role as a marketplace
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    Limitations and exclusions of liability
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Indemnification</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">
                    Breaches of these general terms and conditions
                  </p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Entire Agreement</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Hierarchy</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Variation</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Severability</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Assignment</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Third party rights</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Law and jurisdiction</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
                <li className="pt-4">
                  <p className="text-2xl py-1 text-primary">Our company details</p>

                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibusdam expedita, esse commodi corrupti
                    voluptatum, ullam eaque, facere excepturi itaque officia
                    culpa officiis.
                  </p>
                </li>
              </ol>

              <div className="pt-5 text-center">
                <p>Ready to Start Shopping?</p>

                <div className="pt-3">
                  <Link to="/">
                    <DynamicButton
                      type="button"
                      color="white"
                      width="8rem"
                      fontWeight="500"
                      fontSize="16px"
                      height="40px"
                      backgroundColor="var(--woozBlue)"
                      boxShadow="none"
                      hoverBoxShadow="none"
                    >
                      Shop now
                    </DynamicButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}
