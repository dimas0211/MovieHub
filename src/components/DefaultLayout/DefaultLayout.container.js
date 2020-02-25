import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import getMovies from '../../actions/getMovies';
import getGenres from '../../actions/getGenres';
import connectWithViewport from '../../services/connectWithViewport';

import DefaultLayout from './DefaultLayout';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movies: ApiReducer.movieList,
  genres: ApiReducer.genres
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
  getGenres
}, dispatch);

export const DefaultLayoutContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DefaultLayout);
