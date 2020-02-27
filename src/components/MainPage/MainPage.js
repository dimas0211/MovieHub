import React, { Component } from 'react';
import { MovieListPage } from '../MovieListPage';
import { MOVIE_LIST } from '../../constants/configurations';

class MainPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  componentDidUpdate(prevProps) {
    const { filtrationQueryParams, getMovies } = this.props;

    if (prevProps.filtrationQueryParams && prevProps.filtrationQueryParams !== filtrationQueryParams) {
      getMovies && getMovies(1, MOVIE_LIST, ...filtrationQueryParams);
    }
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={MOVIE_LIST} {...this.props} />;
  }
}

export default MainPage;
