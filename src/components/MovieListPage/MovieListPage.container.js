import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import MovieListPage from './MovieListPage';
import {
  getMoviesSuccess,
  getMoviesError,
  setOneMovieType
} from '../../actions/actionsAPIcall';
import { setFiltrationParams } from '../../actions/setFiltrationParams';
import connectWithIoC from '../../services/connectWithIoC';

const mapStateToProps = ({ ApiReducer, setFiltrationParamsReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  filtrationQueryParams: setFiltrationParamsReducer.filtrationQueryParams,
  query: setSearchModeReducer.searchQuery,
  searchMode: setSearchModeReducer.searchMode,
  oneMovieId: ApiReducer.oneMovieId
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMoviesSuccess,
  getMoviesError,
  setOneMovieType,
  setFiltrationParams
}, dispatch);

export const MovieListPageContainer = compose(
  connectWithViewport(),
  connectWithIoC(['getDataService', 'routingConfig', 'apiCallConfig']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieListPage);
