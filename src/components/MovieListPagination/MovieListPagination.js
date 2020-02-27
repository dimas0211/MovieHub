import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { withStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { MOVIE_LIST } from '../../constants/configurations';

const StyledMovieListPagination = withStyles({
  root: {
    background: '#282D2D',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 3,
    border: '1px solid #404040',
    height: 48,
    width: '100%'
  },
  ul: {
    height: '100%',

    '&> li>button, div': {
      color: 'white',
      margin: 0,
      padding: 0
    }
  }
})(Pagination);

class MovieListPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    autoBind(this);
  }

  handleChange = (event, value) => {
    const { scrollToTop } = this.props;

    this.setState({ page: value });
    this.movieListOrMovieSearchApiCall(value);

    scrollToTop && scrollToTop();
  };

  movieListOrMovieSearchApiCall(page) {
    const {
      searchMovies,
      searchMode,
      query,
      movieOrShow,
      pageParams,
      getMovies,
      filtrationQueryParams
    } = this.props;

    searchMode === true
      ? searchMovies && searchMovies(page, MOVIE_LIST, query)
      : getMovies && getMovies(page, movieOrShow, pageParams, ...filtrationQueryParams);
  }

  render() {
    const { page } = this.state;
    const { pagesCount } = this.props;

    return (
      <div>
        <StyledMovieListPagination color="secondary" count={pagesCount} page={page} onChange={this.handleChange} />
      </div>
    );
  }
}

export default MovieListPagination;
