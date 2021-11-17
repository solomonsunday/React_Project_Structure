import React from "react";
import  {OrderTable}  from "../../components/Category/OrderTable";
import { OrderTableI } from "../../components/Category/OrderTableI";
import { OrderTableII } from "../../components/Category/OrderTableII";
import  PriceSlash  from "../../components/Category/PriceSlash";
import  PriceSlashI  from "../../components/Category/PriceSlashI";
import  PriceSlashII  from "../../components/Category/PriceSlashII";
import  PriceSlashIII  from "../../components/Category/PriceSlashIII";
import  PriceSlashIV  from "../../components/Category/PriceSlashIV";
import  PriceSlashV  from "../../components/Category/PriceSlashV";
import  {OfficialStoreI}  from "../../components/Category/OfficialStoreI";
import { CatBannerImageI, CatBannerImageII } from "../../components/Category/CatBannerImage";
import CategoryDirection from "../../components/Category/CategoryDirection";
import CategoryAdvert from "../../components/Category/CategoryAdvert";
import OfficialStore from "../../components/Category/OfficialStore";

const CategoryDisplay = ({
  categoryDirectionProps,
  catBannerImageIProps,
  orderTableProps,
  priceSlashProps,
  priceSlashIProps,
  categoryAdvertProps,
  priceSlashIIProps,
  orderTableIProps,
  priceSlashIIIProps,
  priceSlashIVProps,
  orderTableIIProps,
  catBannerImageIIProps,
  officialStoreProps,
  officialStoreIProps,
  priceSlashVProps,
}) => {
  return (
    <>
      <CategoryDirection {...categoryDirectionProps} />

      <CatBannerImageI {...catBannerImageIProps} />

      <OrderTable {...orderTableProps} />

      <PriceSlash {...priceSlashProps} />

      <PriceSlashI {...priceSlashIProps} />

      <CategoryAdvert {...categoryAdvertProps} />

      <PriceSlashII {...priceSlashIIProps} />

      <OrderTableI {...orderTableIProps} />

      <PriceSlashIII {...priceSlashIIIProps} />

      <PriceSlashIV {...priceSlashIVProps} />

      <OrderTableII {...orderTableIIProps} />

      <CatBannerImageII {...catBannerImageIIProps} />

      <OfficialStore {...officialStoreProps} />

      <OfficialStoreI {...officialStoreIProps} />

      <PriceSlashV {...priceSlashVProps} />
    </>
  );
};

export default CategoryDisplay;
