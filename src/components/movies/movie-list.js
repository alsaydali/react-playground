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
        <h1>{this.props.movie.name}</h1>
        <h3>{this.props.desc}</h3>
        <h5>{this.props.movie.gene}</h5>
      </div>
    );
  }
}

export default MovieList;
