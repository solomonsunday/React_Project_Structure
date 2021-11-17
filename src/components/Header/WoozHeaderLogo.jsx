import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

function WoozHeaderLogo() {
  const { width } = useWindowDimensions();
  return (
      <Link to="/" > 
        {width > 480 ? (
          <img src="/images/woozeeeLogo.svg" alt="" className="header__logo" />
        ) : (
          <img src="/images/logoNoBasket.svg" alt="" className="header__logo" />
        )}
      </Link>
  );
}

export default WoozHeaderLogo;
