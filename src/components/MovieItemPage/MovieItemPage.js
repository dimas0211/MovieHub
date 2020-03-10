import React, { Component } from 'react';
import MovieItem from '../MovieItem';

import './MovieItemPage.scss';

class MovieItemPage extends Component {
  componentDidMount() {
    const {
      getDataService,
      getOneMovieSuccess,
      getOneMovieError,
      getVideosSuccess,
      getVideosError,
      match: { params }
    } = this.props;

    getDataService
      .getOneMovie(params.id, this.returnMoviePath())
      .then((data) => getOneMovieSuccess(data))
      .catch((error) => getOneMovieError(error));

    getDataService
      .getVideos(params.id, this.returnMoviePath())
      .then((data) => getVideosSuccess(data))
      .catch((error) => getVideosError(error));
  }

  returnMoviePath() {
    const { match: { path }, routingConfig: { movie } } = this.props;

    return (path.includes(movie.moviePath)) && movie.moviePath;
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <MovieItem {...this.props} />
    );
  }
}

export default MovieItemPage;
