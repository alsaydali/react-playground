import React, { Component } from "react";
import MovieList from "../movies/movie-list";
const movies = [
  { id: 1, name: "starwar", gene: "pg" },
  { id: 2, name: "starwar2", gene: "pg" },
  { id: 3, name: "starwar3", gene: "pg" },
  { id: 4, name: "starwar4", gene: "pg" },
];
class Loop extends Component {
  render() {
    return (
      <>
        {movies.map((movie) => {
          return <MovieList key={movie.id} movie={movie}></MovieList>;
        })}
      </>
    );
  }
}

export default Loop;
