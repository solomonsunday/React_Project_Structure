import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";



export const HeartRating=(props)=> {

    const StyledRating = withStyles({
        iconFilled: {
          color: "var(--woozRed)",
        },
        iconHover: {
          color: "#ff3d47",
        },
      })(Rating);
      
  return (
    <div className={props.className} style={props.style}>
      <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        max={1}
      />
    </div>
  );
}

export const ControlledRating = () => {
  const [value, setValue] = React.useState(2);
  return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

  );
};

export const ReadOnlyRating = (prop) => {
  const [value] = React.useState(prop);
  return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value.ratingCount} readOnly size={value.size}/>
      </Box>

  );
};

export const DisabledRating = () => {
  const [value] = React.useState(2);
  return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="disabled" value={value} disabled />
      </Box>

  );
};
