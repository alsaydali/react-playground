import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <h1>{props.movie.name}</h1>
      <h5>{props.movie.gene}</h5>
    </div>
  );
};

export default MovieList;
