import React from "react";
import classes from "./LoadMoreButton.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button className={classes["load-more-btn"]} onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
