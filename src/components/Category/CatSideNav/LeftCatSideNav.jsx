import React, { useContext } from "react";
import { ReadOnlyRating } from "../../Rating/Rating";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import SideCatCheckBox from "./SideCatCheckBox";
import { CategorySideSearch } from "../../Search/Search";
import RangeSlider from "./RangeSlider";
import CategoryContext from "../../../Contexts/CategoryContext";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../redux/actions/shopping";
import { priceFilter,ratingsFilter } from "../../../redux/actions/filters";

function LEFTCATSIDENAV(props) {
  const category = useContext(CategoryContext);

  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // console.log('props from LEFTCATSIDENAV', props.shop.products) //An array of 58 products

  return (
    <div className="sidenav">
      <p className="some_Category_Text">CATEGORY</p>

      <p className="catName">{category.catName}</p>
      <div>
        <ul className="cs_section">
          <li>Mobile Phone Accessories</li>
          <li>Mobile Phones</li>
          <li>Tablet Accessories</li>
          <li>Tablets</li>
          <li>{`Telephones & Accessories`}</li>
        </ul>
        <hr className="s_hr" />
      </div>

      <div>
        <p className="subCategory_Text">PRODUCT RATING</p>

        <div className="cs_section_inner">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="choice"
              name="choice1"
              value={value}
              // onChange={handleChange}
              onChange={(event) => {
                handleChange(event);
                ratingsFilter(props.shop.products, event.target.value);
              }}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={
                  <div className="formgroup__wrap">
                    <ReadOnlyRating size="small" ratingCount={4} />
                    <span className="ratingText">{`& above`} </span>
                  </div>
                }
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={
                  <div className="formgroup__wrap">
                    <ReadOnlyRating size="small" ratingCount={3} />
                    <span className="ratingText">{`& above`} </span>
                  </div>
                }
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={
                  <div className="formgroup__wrap">
                    <ReadOnlyRating size="small" ratingCount={2} />
                    <span className="ratingText">{`& above`} </span>
                  </div>
                }
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={
                  <div className="formgroup__wrap">
                    <ReadOnlyRating size="small" ratingCount={1} />
                    <span className="ratingText">{`& above`} </span>
                  </div>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <hr className="s_hr" />

      <div className="brend">
        <p className="subCategory_Text">BRAND</p>
        <div className="catSearch_Wrap">
          <CategorySideSearch />
        </div>
        <SideCatCheckBox productCatName="A1" />
        <SideCatCheckBox productCatName="AEC" />
        <SideCatCheckBox productCatName="Amazon" />
        <SideCatCheckBox productCatName="Anker" />
        <SideCatCheckBox productCatName="Apple" />
      </div>
      <br />
      <hr className="s_hr" />
      <br />

      <div>
        <RangeSlider rangeSliderName="Price ( ₦ )" />
        <br />
        <div className="rangeSlideInput__wrap">
          <input className="rangeSlideInput" placeholder="Minimum" />{" "}
          <span className="dashIcon">-</span>
          <input className="rangeSlideInput" placeholder="Maximum" />
        </div>
        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">OPERATING SYSTEM</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="iOS" />
          <SideCatCheckBox productCatName="NOKIA OS" />
          <SideCatCheckBox productCatName="Android" />
          <SideCatCheckBox productCatName="Blackberry 10 " />
          <SideCatCheckBox productCatName="BlackberrYears 10" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">COLOR</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="Black" />
          <SideCatCheckBox productCatName="Blue" />
          <SideCatCheckBox productCatName="Green" />
          <SideCatCheckBox productCatName="Grey" />
          <SideCatCheckBox productCatName="Orange" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">HARD DISK (GB)</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="0" />
          <SideCatCheckBox productCatName="1" />
          <SideCatCheckBox productCatName="1GB" />
          <SideCatCheckBox productCatName="1TB" />
          <SideCatCheckBox productCatName="2" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">RAM</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="0" />
          <SideCatCheckBox productCatName="1" />
          <SideCatCheckBox productCatName="1GB" />
          <SideCatCheckBox productCatName="1TB" />
          <SideCatCheckBox productCatName="2" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">MEGAPIXELS</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="0" />
          <SideCatCheckBox productCatName="1" />
          <SideCatCheckBox productCatName="1GB" />
          <SideCatCheckBox productCatName="1TB" />
          <SideCatCheckBox productCatName="2" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">OPTICAL ZOOM</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="0" />
          <SideCatCheckBox productCatName="1" />
          <SideCatCheckBox productCatName="1GB" />
          <SideCatCheckBox productCatName="1TB" />
          <SideCatCheckBox productCatName="2" />
        </div>

        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">SCREEN SIZE</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="0" />
          <SideCatCheckBox productCatName="1" />
          <SideCatCheckBox productCatName="1GB" />
          <SideCatCheckBox productCatName="1TB" />
          <SideCatCheckBox productCatName="2" />
        </div>
        <br />
        <hr className="s_hr" />

        <div className="brend">
          <p className="subCategory_Text">SHIPPED FROM</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <SideCatCheckBox productCatName="Shipped from abroad" />
          <SideCatCheckBox productCatName="Shipped from Nigeria" />
        </div>
        <br />
        <hr className="s_hr" />

        <div>
          <p className="subCategory_Text">DISCOUNT PERCENTAGE</p>
          <div className="catSearch_Wrap">
            <CategorySideSearch />
          </div>
          <div>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="choice"
                name="choice1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <span className="ratingText">50% or more </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <span className="ratingText">40% or more </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <span className="ratingText">30% or more </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <span className="ratingText">20% or more </span>
                    </div>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    ratingsFilter: (products, ratings) => dispatch(ratingsFilter(products, ratings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LEFTCATSIDENAV);
