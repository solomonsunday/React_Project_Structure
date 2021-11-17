import React from "react";
import Header from "../../components/Header/Header";
import NewFooter from "../../components/Footer/Footer";
import DynamicButton from "../../components/Button/DynamicButton";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />

      <div className="body__wrapper putAtMiddle">
        {/* <div className="mt-4 bg-white"> */}
        <div className="prodWrapper mb-5">
          <div className="prodBigWrapper">
            <div className="text-center pt-3">
              <h3 className="text-primary">Privacy Policy</h3>
            </div>
            <div className="px-5 py-5">
              <ol type="1" className="ol_terms">
                <li>
                  <p className="text-2xl py-1 text-primary">About this Notice</p>
                  <p className="font-sm py-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit aspernatur nobis expedita repellendus at dolorem
                    dolores! Quibus dam expedita, esse commodi corrupti
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
                  <p className="text-2xl py-1 text-primary">The Data We Collect About You?</p>

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
                  <p className="text-2xl py-1 text-primary">Cookies and How We Use Them</p>

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
                  <p className="text-2xl py-1 text-primary">How We Use Your Personal Data</p>

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
                  <p className="text-2xl py-1 text-primary">How We Share Your Personal Data</p>

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
                  <p className="text-2xl py-1 text-primary">International Transfers</p>

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
                  Data Security
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
                  Your Legal Rights
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
                  <p className="text-2xl py-1 text-primary">Further Details</p>

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
