import React from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleBar from "./MiddleBar";
import RightSideBar from "./RightSideBar";
import MobileMiddleBar from "./MobileMiddleBar";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

function HomeBodyTop() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <div className="hmbcontainer">
          <div className="grid__Container">
            <div className="griditem">
              <LeftSideBar className="leftSideBar" />
            </div>

            <div className="griditem">
              <MiddleBar className="middleBar" />
            </div>

            <div className="griditem">
              <RightSideBar className="rightSideBar" />
            </div>
          </div>
        </div>
      ) : (
        <div className="hmbcontainer">
        <MobileMiddleBar />
        </div>
      )}
    </>
  );
}

export default HomeBodyTop;
