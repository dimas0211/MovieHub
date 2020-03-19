import React, { Component } from 'react';
import { MovieListPage } from '../MovieListPage';

class SearchPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  componentDidUpdate(prevProps) {
    const {
      query,
      getDataService,
      getMoviesSuccess,
      getMoviesError,
      apiCallConfig: { movie },
      match: { params }
    } = this.props;

    if (prevProps.query !== query) {
      getDataService
        .searchMovies(1, movie, params.query)
        .then((data) => getMoviesSuccess(data))
        .catch((error) => getMoviesError(error));
    }
  }

  componentWillUnmount() {
    const { clearSearchMode, clearSearchQuery } = this.props;

    clearSearchMode && clearSearchMode();
    clearSearchQuery && clearSearchQuery();
  }

  loadMovieList() {
    const {
      getDataService,
      apiCallConfig: { movie },
      getMoviesSuccess,
      getMoviesError,
      getGenresSuccess,
      getGenresError,
      match: { params }
    } = this.props;

    getDataService
      .getGenres()
      .then((data) => getGenresSuccess(data))
      .catch((error) => getGenresError(error));

    getDataService
      .searchMovies(1, movie, params.query)
      .then((data) => getMoviesSuccess(data))
      .catch((error) => getMoviesError(error));
  }

  render() {
    const { apiCallConfig: { movie } } = this.props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={movie} {...this.props} />;
  }
}

export default SearchPage;
