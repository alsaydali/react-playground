import React, { Component } from "react";
import PropTypes from "prop-types";
class MovieList extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    desc: PropTypes.string,
  };
  static defaultProps = {
    desc: " Not available",
  };
  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

export default MovieList;
