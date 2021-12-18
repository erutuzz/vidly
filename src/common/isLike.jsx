import React from "react";

const Islike = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (liked === false) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Islike;
