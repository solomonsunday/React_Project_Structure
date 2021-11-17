import React from "react";
import LeftSideItem from "./LeftSideItem";

export default function LeftSideBar() {
  return (
    <div className="leftSidebar__container">
      <LeftSideItem
        iconSource="/images/LeftSideBar/phone.svg"
        urlDirection="/phones-tablets"
        iconText={`Phone & Tablets`}
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/supermarket.svg"
        urlDirection="/supermarket"
        iconText="Supermarket"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/electronics.svg"
        urlDirection="/fashion"
        iconText="Fashion"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/phone.svg"
        urlDirection="/electronics"
        iconText="Electronics"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/Computing.svg"
        urlDirection="/computing"
        iconText="Computing"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/Home.svg"
        urlDirection="/home-office"
        iconText={`Home & Office`}
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/health.svg"
        urlDirection="/health-beauty"
        iconText={`Health & Beauty`}
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/Gaming.svg"
        urlDirection="/gaming"
        iconText="Gaming"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/Sports.svg"
        urlDirection="/sports"
        iconText="Sporting Goods"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/BabyProduct.svg"
        urlDirection="/baby-products"
        iconText="Baby Products"
      />
      <LeftSideItem
        iconSource="/images/LeftSideBar/others.svg"
        urlDirection=""
        iconText="Other Categories"
      />
    </div>
  );
}
