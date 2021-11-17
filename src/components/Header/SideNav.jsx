import React from "react";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import LeftSideItem from "../Home/LeftSideItem";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";


export default function SideNav() {
  const [open, setOpen] = React.useState(false);
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
    <>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className="ml-n3"
        >
          <div className="faIconBar">
            <FaIcon.FaBars />
          </div>
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
                    <Link to="/phones-tablets">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/phone.svg"
                          urlDirection="/phones-tablets"
                          iconText={`Phone & Tablets`}
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/supermarket">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/supermarket.svg"
                          urlDirection="/supermarket"
                          iconText="Supermarket"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/fashion">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/electronics.svg"
                          urlDirection="/fashion"
                          iconText="Fashion"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/electronics">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/phone.svg"
                          urlDirection="/electronics"
                          iconText="Electronics"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/computing">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/Computing.svg"
                          urlDirection="/computing"
                          iconText="Computing"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="#">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/Home.svg"
                          urlDirection="/home-office"
                          iconText={`Home & Office`}
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/health-beauty">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/health.svg"
                          urlDirection="/health-beauty"
                          iconText={`Health & Beauty`}
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/gaming">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/Gaming.svg"
                          urlDirection="/gaming"
                          iconText="Gaming"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/sports">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/Sports.svg"
                          urlDirection="/sports"
                          iconText="Sporting Goods"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="/baby-products">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/BabyProduct.svg"
                          urlDirection="/baby-products"
                          iconText="Baby Products"
                        />
                      </MenuItem>
                    </Link>
                    <Link to="#">
                      <MenuItem onClick={handleClose}>
                        <LeftSideItem
                          iconSource="/images/LeftSideBar/others.svg"
                          urlDirection=""
                          iconText="Other Categories"
                        />
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
   </>
  );
}
