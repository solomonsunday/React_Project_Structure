import React from "react";
import IconStore from "../../assets/icons/IconStore";
import NoDataUI from "./NoDataUI";

function MySavedItemsUI() {
  return (
    <div>
      <h3 className="titleHeader mbottom  d-none d-md-block">Saved Items</h3>
      <NoDataUI
        Image={IconStore.orderShopBag}
        Topic="You haven’t saved an item yet!"
        Explanation="Found something you like? 
        Tap on the heart shaped icon next to the item to add it to your wishlist!
        All your saved items will appear here."
      />
    </div>
  );
}

export default MySavedItemsUI;
