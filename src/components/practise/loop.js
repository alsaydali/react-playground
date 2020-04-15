import React, { Component } from "react";
import MovieList from "../movies/movie-list";
const movies = [
  { id: 1, name: "Tizi", gene: "pg" },
  { id: 2, name: "starwar2", gene: "pg" },
  { id: 3, name: "starwar3", gene: "pg", desc: "" },
  { id: 4, name: "starwar4", gene: "pg", desc: "adult" },
];
class Loop extends Component {
  render() {
    return (
      <>
        {movies.map((movie) => {
          return (
            <MovieList
              key={movie.id}
              movie={movie}
              desc={movie.desc}
            ></MovieList>
          );
        })}
      </>
    );
  }
}

export default Loop;
