import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CategoryContext from "../../Contexts/CategoryContext";

function CategoryDirection(props) {
  const category = useContext(CategoryContext);

  return (
    <div className="link_dirGroup">
      <Link to="/">
        <span className="link_dir1">Home</span>
      </Link>

      <span className="dir">
        <b>{`>`}</b>
      </span>
        <span className="link_dir2 active">{category.catName}</span>
    </div>
  );
}

export default CategoryDirection;
