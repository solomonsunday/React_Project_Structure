import React from "react";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import AccountRowOneNavLink from "./AccountRowOneNavLink";
import AccountRowOneLink from "./AccountRowOneLink";

function AccountRowOne() {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width >= 768 ? <AccountRowOneNavLink/> : <AccountRowOneLink/>}
    
    </div>
  );
}

export default AccountRowOne;
