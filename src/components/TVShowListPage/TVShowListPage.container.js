import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';
import connectWithIoC from '../../services/connectWithIoC';

import TVShowListPage from './TVShowListPage';
import {
  getMoviesSuccess,
  getMoviesError,
  getGenresSuccess,
  getGenresError,
  setOneMovieType
} from '../../actions/actionsAPIcall';

const mapStateToProps = ({ ApiReducer, setFiltrationParamsReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  filtrationQueryParams: setFiltrationParamsReducer.filtrationQueryParams
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMoviesSuccess,
  getMoviesError,
  getGenresSuccess,
  getGenresError,
  setOneMovieType
}, dispatch);

export const TVShowListPageContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig', 'routingConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TVShowListPage);
