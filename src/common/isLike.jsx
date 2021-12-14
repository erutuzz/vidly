import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Islike extends React.Component {
  render() {
    let classes = "fa fa-heart";
    if (this.props.liked === false) classes += "-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Islike;
