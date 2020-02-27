import React, { Component } from 'react';
import { MovieListPage } from '../MovieListPage';
import { MOVIE_LIST } from '../../constants/configurations';

class SearchPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  componentWillUnmount() {
    const { clearSearchMode, clearSearchQuery } = this.props;

    clearSearchMode && clearSearchMode();
    clearSearchQuery && clearSearchQuery();
  }

  loadMovieList() {
    const { getGenres, searchMovies, query } = this.props;

    getGenres && getGenres();
    searchMovies && searchMovies(1, MOVIE_LIST, query);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={MOVIE_LIST} {...this.props} />;
  }
}

export default SearchPage;
