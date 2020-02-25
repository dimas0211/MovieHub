import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import PopularMoviesListPage from './PopularMoviesListPage';
import getGenres from '../../actions/getGenres';
import getMovies from '../../actions/getMovies';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  getMovies
}, dispatch);

export const PopularMoviesListPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PopularMoviesListPage);
