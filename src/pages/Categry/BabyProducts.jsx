import React from "react";
import CategoryDisplay from ".";
import Header from "../../components/Header/Header";
import CATSIDENAV from "../../components/Category/CatSideNav/Index";
import { CategoryProvider } from "../../Contexts/CategoryContext";
import {
  OfficialStoreData,
  OfficialStoreDataI,
  OrderTableData ,
  OrderTableDataI,
  OrderTableDataII,
  PriceSlashData,
  PriceSlashDataI,
  PriceSlashDataII,
  PriceSlashDataIII,
  PriceSlashDataIV,
  PriceSlashDataV,
  ProductOrders ,
  bannerImage,
} from "../../DB/Categories/BabyProductsData";
import Footer from "../../components/Footer/Footer";

export default function BabyProducts() {
  const category = { catName: "BabyProducts" };

  return (
    <React.Fragment>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">
        <CategoryProvider value={category}>
          <CategoryDisplay
            categoryDirectionProps={{}}
            catBannerImageIProps={{ bannerImage}}
            catBannerImageIIProps={{bannerImage}}
            categoryAdvertProps={{}}
            orderTableProps={{
              headingTitle: `Baby Products`,
              OrderTableData:OrderTableData,
            }}
            orderTableIProps={{
              headingTitle: "Phone Accessories",
              OrderTableDataI:OrderTableDataI,
            }}
            orderTableIIProps={{
              headingTitle: "Tablet Accessories",
              OrderTableDataII:OrderTableDataII,
            }}
            priceSlashProps={{
              headingTitle: "Budget Smartphones",
              PriceSlashData:PriceSlashData,
            }}
            priceSlashIProps={{
              headingTitle: "Large Screen Phones",
              PriceSlashDataI:PriceSlashDataI,
            }}
            priceSlashIIProps={{
              headingTitle: "Top Picks for you",
              PriceSlashDataII:PriceSlashDataII,
            }}
            priceSlashIIIProps={{
              headingTitle: "Landline Phones",
              PriceSlashDataIII:PriceSlashDataIII,
            }}
            priceSlashIVProps={{
              headingTitle: "Mobile Game Controllers",
              PriceSlashDataIV:PriceSlashDataIV,
            }}
            priceSlashVProps={{
              headingTitle: "Mobile Game Controllers",
              PriceSlashDataV:PriceSlashDataV,
            }}
            officialStoreProps={{
              headingTitle: "Official Stores",
              OfficialStoreData:OfficialStoreData,
            }}
            officialStoreIProps={{
              headingTitle: "Tablet Accessories",
              OfficialStoreDataI:OfficialStoreDataI,
            }}
          />

          <CATSIDENAV products={ProductOrders} />
        </CategoryProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}
