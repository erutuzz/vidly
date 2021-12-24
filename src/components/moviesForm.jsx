import React from "react";

const MoviesForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form{match.params.id}</h1>
      <button
        className=" btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
      {console.log(match.params.id)}
    </div>
  );
};

export default MoviesForm;
