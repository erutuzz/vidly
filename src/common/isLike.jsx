import React from "react";

const Islike = (props) => {
  let classes = "fa fa-heart";
  if (props.liked === false) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Islike;
