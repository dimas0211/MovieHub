import React, { Component } from 'react';
import MovieListPage from '../MovieListPage/MovieListPage';

import { MOVIE_LIST, PARAMS_FOR_NEW_MOVIES } from '../../constants/configurations';

class NewMoviesListPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1, MOVIE_LIST, PARAMS_FOR_NEW_MOVIES);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage {...this.props} />;
  }
}

export default NewMoviesListPage;
