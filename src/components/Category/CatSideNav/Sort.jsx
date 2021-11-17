import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import IconStore from "../../../assets/icons/IconStore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Sort() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [sortValue, setsortValue] = useState("Popularity");
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenuItemClose = (dValue) => {
    setsortValue(dValue);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span className="option__lineOne">Sort by: {sortValue}</span>
          <span className="dropdown__icon">{IconStore.arrowDown}</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      value="Popularity"
                      onClick={(event) => {
                        handleClose(event);
                        handleMenuItemClose("Popularity");
                      }}
                    >
                      <span>Popularity</span>
                    </MenuItem>

                    <MenuItem
                      value="Newest Arrivals"
                      onClick={(event) => {
                        handleClose(event);
                        handleMenuItemClose("Newest Arrivals");
                      }}
                    >
                      <span>Newest Arrivals</span>
                    </MenuItem>
                    <MenuItem
                      value="Price: Low to High"
                      onClick={(event) => {
                        handleClose(event);
                        handleMenuItemClose("Price: Low to High");
                      }}                    >
                      <span>Price: Low to High</span>
                    </MenuItem>
                    <MenuItem
                      value="Product Rating"
                      onClick={(event) => {
                        handleClose(event);
                        handleMenuItemClose("Product Rating");
                      }}                     >
                      <span>Product Rating </span>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
