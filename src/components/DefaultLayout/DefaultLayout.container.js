import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import getDataAction from '../../actions/getData';
import { getMoviesPending, getMovies, getMoviesError } from '../../reducers/reducerAPIcall';
import connectWithViewport from '../../services/connectWithViewport';

import DefaultLayout from './DefaultLayout';

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  pending: getMoviesPending(state),
  movieList: state.moviesReducer.movies
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData: getDataAction
}, dispatch);

export const DefaultLayoutContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DefaultLayout);
