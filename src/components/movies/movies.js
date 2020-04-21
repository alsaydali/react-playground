import React from "react";
import PropTypes from "prop-types";
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movies = (props) => (
  <div>
    <img src={`${POSTER_PATH}${props.movie.poster_path}`} />
    <h1>{props.movie.title}</h1>
  </div>
);

export default Movies;

Movies.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
