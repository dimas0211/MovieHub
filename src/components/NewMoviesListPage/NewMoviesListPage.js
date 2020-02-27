import React, { Component } from 'react';
import { MovieListPage } from '../MovieListPage';

import { MOVIE_LIST, PARAMS_FOR_NEW_MOVIES } from '../../constants/configurations';

class NewMoviesListPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  componentDidUpdate(prevProps) {
    const { filtrationQueryParams, getMovies } = this.props;

    if (prevProps.filtrationQueryParams && prevProps.filtrationQueryParams !== filtrationQueryParams) {
      getMovies && getMovies(1, MOVIE_LIST, PARAMS_FOR_NEW_MOVIES, ...filtrationQueryParams);
    }
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1, MOVIE_LIST, PARAMS_FOR_NEW_MOVIES);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={MOVIE_LIST} pageParams={PARAMS_FOR_NEW_MOVIES} {...this.props} />;
  }
}

export default NewMoviesListPage;
