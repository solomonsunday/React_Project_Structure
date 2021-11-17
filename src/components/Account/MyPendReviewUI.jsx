import React from "react";
import IconStore from "../../assets/icons/IconStore";
import NoDataUI from "./NoDataUI";

function MyPendReviewUI() {
  return (
    <div>
      <h3 className="titleHeader mbottom  d-none d-md-block">Pending Reviews</h3>

      <NoDataUI
        Image={IconStore.calendarIcon}
        Topic="You have no orders waiting for feedback"
        Explanation="After getting your products delivered, 
        you will be able to rate and review them. 
        Your feedback will be published on the product 
        page to help all woozeee's users get the best shopping experience!"
      />

    </div>
  );
}

export default MyPendReviewUI;
