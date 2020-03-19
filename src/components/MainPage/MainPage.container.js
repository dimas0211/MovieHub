import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';
import connectWithIoC from '../../services/connectWithIoC';

import MainPage from './MainPage';
import {
  getMoviesSuccess,
  getMoviesError,
  getGenresSuccess,
  getGenresError

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
  getGenresError
}, dispatch);

export const MainPageContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainPage);
