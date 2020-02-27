import React, { Component } from 'react';
import MovieListPage from '../MovieListPage/MovieListPage';

import { TV_SHOW_LIST, TV_SHOW_GENRES } from '../../constants/configurations';

class TVShowListPage extends Component {
  componentDidMount() {
    this.loadShowList();
  }

  componentDidUpdate(prevProps) {
    const { filtrationQueryParams, getMovies } = this.props;

    if (prevProps.filtrationQueryParams && prevProps.filtrationQueryParams !== filtrationQueryParams) {
      getMovies && getMovies(1, TV_SHOW_LIST, ...filtrationQueryParams);
    }
  }

  loadShowList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres(TV_SHOW_GENRES);
    getMovies && getMovies(1, TV_SHOW_LIST);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={TV_SHOW_LIST} {...this.props} />;
  }
}

export default TVShowListPage;
