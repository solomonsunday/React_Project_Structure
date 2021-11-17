import React from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedSection.module.css";

const FeaturedCard = (props) => {
  return (
    <Link
      to="/product"
      className="dealsProduct col-lg-2 col-md-4 col-sm-6 col-6"
    >
      <div className={styles.featuredImage}>
        <img src={props.featuredImage} alt="product" />
      </div>
      <div className={styles.featuredName}>
        <p className="">{props.featuredName} </p>
      </div>
    </Link>
  );
};

export default FeaturedCard;
