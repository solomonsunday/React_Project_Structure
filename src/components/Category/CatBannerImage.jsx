import React from "react";

export function CatBannerImageI({...props}) {
  return (
    <div className="top_badge">
      {props.bannerImage.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CatBannerImageII({...props}) {
  return (
    <div className="top_badge">
      {props.bannerImage.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}
