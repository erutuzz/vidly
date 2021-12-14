import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Islike from "../common/isLike";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovie(movie) {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.zeroInfo}
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre._id}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Islike
                    onClick={() => this.handleLike(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Movies;
