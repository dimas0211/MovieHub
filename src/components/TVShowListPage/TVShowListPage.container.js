import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import TVShowListPage from './TVShowListPage';
import getGenres from '../../actions/getGenres';
import getMovies from '../../actions/getMovies';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movies,
  genres: ApiReducer.genres,
  moviesPages: ApiReducer.moviesPages
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  getMovies
}, dispatch);

export const TVShowListPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TVShowListPage);
