import React, { Component } from 'react';
import MovieItem from '../MovieItem';

class TVShowItemPage extends Component {
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
    const { match: { path }, routingConfig: { tvShow } } = this.props;

    return (path.includes(tvShow.showPath)) && tvShow.showPath;
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <MovieItem {...this.props} />
    );
  }
}

export default TVShowItemPage;
