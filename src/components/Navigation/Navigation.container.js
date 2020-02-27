import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import Navigation from './Navigation';
import getGenres from '../../actions/getGenres';
import getMovies from '../../actions/getMovies';

const mapStateToProps = ({ ApiReducer, setFiltrationParamsReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  filtrationQueryParams: setFiltrationParamsReducer.filtrationQueryParams
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  getMovies
}, dispatch);

export const NavigationContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navigation);
