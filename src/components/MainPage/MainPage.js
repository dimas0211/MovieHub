import React, { Component } from 'react';
import MovieListPage from '../MovieListPage';

class MainPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage {...this.props} />;
  }
}

export default MainPage;
