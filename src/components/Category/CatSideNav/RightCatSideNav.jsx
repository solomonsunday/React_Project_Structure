import React, { useContext } from "react";
import CategoryContext from "../../../Contexts/CategoryContext";
import CatApp from "./CatApp";
import Sort from "./Sort";

export default function RIGHTCATSIDENAV({ products }) {
  const category = useContext(CategoryContext);

  return (
    <div className="mainer">
      <div className="d-flex">
        <span className="listGridTopic text-nowrap">{category.catName}</span>

        <span className="lefter">
          <Sort/>
        </span>
        
      </div>
      <div className="listGrid__header">
        <CatApp products={products} />
      </div>
    </div>
  );
}
