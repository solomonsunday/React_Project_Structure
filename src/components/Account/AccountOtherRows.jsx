import React from "react";
import DealsSection from "../Product/DealsSection";

function AccountOtherRows() {
  return (
    <div>
      <div className="mt-4">
        <DealsSection
          title="Recommended for you"
          className1=""
          className2="bgWhite"
          sliceFrom={6}
          sliceTo={12}
        />
      </div>
      <div className="mt-4">
        <DealsSection
          title="Recommended for you"
          className1=""
          className2="bgWhite"
          sliceFrom={6}
          sliceTo={12}
        />
      </div>
    </div>
  );
}

export default AccountOtherRows;
