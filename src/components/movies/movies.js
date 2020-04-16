import React, { Component } from "react";
import PropTypes from "prop-types";

class Movies extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  };

  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

export default Movies;
