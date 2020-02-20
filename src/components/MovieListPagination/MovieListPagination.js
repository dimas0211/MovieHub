import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { withStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

class MovieListPagination extends Component {
  StyledMovieListPagination = withStyles({
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

  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    autoBind(this);
  }

  handleChange = (event, value) => {
    const { getMovies, scrollToTop, listTVShow } = this.props;

    this.setState({ page: value });

    listTVShow
      ? getMovies && getMovies(value, listTVShow)
      : getMovies && getMovies(value);

    scrollToTop && scrollToTop();
  }

  render() {
    const { page } = this.state;
    const { pagesCount } = this.props;

    return (
      <div>
        <this.StyledMovieListPagination color="secondary" count={pagesCount} page={page} onChange={this.handleChange} />
      </div>
    );
  }
}

export default MovieListPagination;
