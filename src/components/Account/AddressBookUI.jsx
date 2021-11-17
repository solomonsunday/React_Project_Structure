import React, { useState } from "react";
import { Route, HashRouter } from "react-router-dom";
import EditAddressComp from "./EditAddressComp";
import DisplayAddress from "./DisplayAddress";

function AddressBookUI() {
  const [showForm] = useState(false);

  return (
    <div className="addressbookUI_wrapper">
      <HashRouter>
        {showForm ? <EditAddressComp /> : <DisplayAddress />}

        <Route exact path="/" component={DisplayAddress} />
        <Route path="/editAddress" component={EditAddressComp} />
      </HashRouter>
    </div>
  );
}

export default AddressBookUI;