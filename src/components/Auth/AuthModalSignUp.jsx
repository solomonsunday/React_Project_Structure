import React from "react";

export default function AuthModalSignUp() {
  return (
    <div>
      <h5 className="m-4 mt-5 text-center"> Download the App</h5>
      <div className="m-4 mt-5 d-flex">
        <span className="googlePlay2 mr-4 shadow rounded-lg">
          <img src="/images/GooglePlay.svg" alt="google play" />
        </span>
        <span className="appStore2 shadow rounded-lg">
          <img src="/images/AppStore.svg" alt="apple store" />
        </span>
      </div>
    </div>
  );
}
