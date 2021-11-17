import React from "react";

export default function CheckRightSection({ itemData }) {
  return (
    <div className="row p-3">
      <div className="col-3">
        <img
          src={itemData?.productImg}
          alt="productImage"
          className="pImage pt-1 pr-2 w-100 object-fit-contain"
        />
      </div>

      <div className="col-9">
        <p className="selrText">Seller: {itemData?.sellerName}</p>
        <p className="prodDescrpt2">{itemData?.productName}</p>
      </div>
    </div>
  );
}
