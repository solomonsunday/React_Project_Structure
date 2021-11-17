import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DynamicButton, { DynamicButtonTwo } from "../../Button/DynamicButton";
import { ReadOnlyRating } from "../../Rating/Rating";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../redux/actions/shopping";
import { priceFilter } from "../../../redux/actions/filters";
import useWindowDimensions from "../../../Hooks/UseWindowDimension";

const ProductRow = ({ addToCart, current, loadCurrentItem, ...props }) => {
  let btnClass = classNames("", {
    thumbnail: props.listView,
    " col-6 col-md-4 col-lg-3 thumbnail-grid": props.gridView,
  });

  let [
    listClass,
    withOne,
    withTwo,
    rowList,
    colFullList,
    col9List,
    col3List,
    listGridbtn,
    ratings_wrapOne,
    ratings_wrapTwo,
    addToCart_button,
    captionLG,
  ] = [
    classNames("", {
      sthToDo: props.listView,
    }),
    classNames("", {
      withOne: props.listView,
      withOneGrid: props.gridView,
    }),
    classNames("", {
      withTwo: props.listView,
      withTwoGrid: props.gridView,
    }),
    classNames("", {
      row: props.listView,
      rowGrid: props.gridView,
    }),
    classNames("", {
      "col-12": props.listView,
    }),
    classNames("", {
      "col-md-9 col-12": props.listView,
    }),
    classNames("", {
      "col-md-3 col-12 priceDisc": props.listView,
    }),
    classNames("", {
      "13rem": props.listView,
      "100%": props.gridView,
    }),
    classNames("", {
      "d-flex": props.listView,
      "d-none": props.gridView,
    }),
    classNames("", {
      "d-none": props.listView,
      "d-flex": props.gridView,
    }),
    classNames("", {
      addToCart_buttonList: props.listView,
      addToCart_buttonGrid: props.gridView,
    }),
    classNames("", {
      captionLG_List: props.listView,
      captionLG_Grid: props.gridView,
    }),
  ];
  const history = useHistory();
  const { width } = useWindowDimensions();

  function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);

      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces;

        // Handle special case where we round up to the next abbreviation
        if (number === 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }
        // Add the letter for the abbreviation
        number += abbrev[i];

        // We are done... stop
        break;
      }
    }
    return number;
  }

  return (
    <div className={btnClass}>
      <div className={`caption ${listClass} ${captionLG}`}>
        <Link
          to={`/product/phones/#${(props.data || []).id}`}
          onClick={() => loadCurrentItem(props.data)}
          className={`list_productImg ${withOne}  d-block`}
        >
          <img src={props.data.productImg} alt="productImage" />
        </Link>

        <div className={`${listClass} ${withTwo} ${rowList}`}>
          <div className={`${colFullList}`}>
            <div className={rowList}>
              <div className={`${col9List} prod__Desciption`}>
                <p className="productNameListGrid">{props.data.productName}</p>
                <div className={ratings_wrapOne}>
                  <span>
                    <ReadOnlyRating
                      size="small"
                      ratingCount={props.data.ratingsCount}
                    />
                  </span>

                  <span className="ratNum pl-2">
                    {width > 480
                      ? ` (${props.data.ratingsNumber})`
                      : abbrNum(props.data.ratingsNumber, 1)}
                  </span>
                </div>
              </div>

              <div className={`${col3List} py-1`}>
                <p className="font-weight-bold">
                  &#8358; {props.data.mainPrice?.toLocaleString()}
                </p>
                <span className="list_slashedPrice text-nowrap">
                  &#8358;{props.data.slashedPrice?.toLocaleString()}
                </span>
                <span className="percentDiscount2">
                  <span className="percentDiscount__text2">
                    {props.data.percentDiscount}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={`${colFullList} list__button`}>
            <div className={ratings_wrapTwo}>
              <span>
                <ReadOnlyRating
                  size="small"
                  ratingCount={props.data.ratingsCount}
                />
              </span>
              <span className="ratNum">
                {width > 480
                  ? ` (${props.data.ratingsNumber})`
                  : abbrNum(props.data.ratingsNumber, 1)}
              </span>
            </div>

            <DynamicButton
              color="white"
              height="1.5rem"
              width={width > 480 ? "8rem" : "6rem"}
              backgroundColor="var(--woozRed)"
              boxShadow="none"
              fontWeight="700"
              fontSize="0.75rem"
              hoverBoxShadow="none"
            >
              {width > 480 ? "COMPARE PRICES" : "COMPARE"}
            </DynamicButton>

            <span
              className={addToCart_button}
              onClick={() => {
                console.log("props.data from genericProductRow", props.data);
                loadCurrentItem(props.data);
                addToCart(props.data.id);
                history.push("/cart");
              }}
            >
              <DynamicButtonTwo
                color="white"
                height="2.5rem"
                width={listGridbtn}
                backgroundColor="var(--woozBlue)"
                boxShadow="none"
                borderRadius="5px"
                border="none !important"
                fontWeight="700"
                fontSize="0.875rem"
                hoverBoxShadow="none"
              >
                ADD TO CART
              </DynamicButtonTwo>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  listView: PropTypes.bool,
  gridView: PropTypes.bool,
};

// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//   };
// };
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    priceFilter: (products, price) => dispatch(priceFilter(products, price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
