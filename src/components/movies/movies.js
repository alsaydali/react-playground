import React from "react";
import PropTypes from "prop-types";

const Movies = (props) => (
  <div>
    <h1>{props.movie.title}</h1>
  </div>
);

export default Movies;

Movies.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
