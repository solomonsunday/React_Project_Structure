import React from "react";
import classNames from "classnames";
import BtnGroup from "./BtnGroup";
import ProductRow from "./GenericProductRow";
import { makeStyles, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

export default function CatApp({ products }) {
  const _products = products || [];
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    paginator: {
      justifyContent: "center",
      padding: "0.5rem!important",
      paddingTop: "5.2rem!important",
    },
  }));

  const classes = useStyles();
  const itemsPerPage = 20;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(_products.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [listView, setlistView] = React.useState(true);
  const [gridView, setgridView] = React.useState(false);

  const handleList = () => {
    setlistView(true);
    setgridView(false);
  };
  const handleGrid = () => {
    setlistView(false);
    setgridView(true);
  };

  let btnClass = classNames("item", {
    "list-group-item": listView,
    "grid-group-item": gridView,
  });
  let [listButton, gridButton] = [
    classNames("", {
      listButton: listView,
    }),
    classNames("", {
      gridButton: gridView,
    }),
  ];

  let rows = _products
    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    .map((product) => {
      return (
        <ProductRow
          key={product.id}
          data={product}
          listView={listView}
          gridView={gridView}
        />
      );
    });

  return (
    <div className="">
      <div className="row row-eq-height gray-bg">
        <div className="col col-xs-12 col-md-12 main-container">
          <div className="row rowCatApp_wrap">
            <div className="col align-self-center">18637 products found</div>
            <div className="col-sm-offset-8 col-sm-4 col text-right grid-space">
              <BtnGroup
                handleList={handleList}
                handleGrid={handleGrid}
                ListButton={listButton}
                GridButton={gridButton}
              />
            </div>
          </div>

          <div className={btnClass}>
            <div className="row auto-clear">{rows}</div>
          </div>
        </div>
      </div>

      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="secondary"
          size="large"
          showFirstButton
          showLastButton
          variant="outlined"
          shape="rounded"
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
}
