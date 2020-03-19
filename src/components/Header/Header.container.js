import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import Header from './Header';
import { setSearchQuery, setSearchMode } from '../../actions/searchMovies';
import connectWithIoC from '../../services/connectWithIoC';
import { getMoviesError, getMoviesSuccess } from '../../actions/actionsAPIcall';

const mapStateToProps = ({ ApiReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  searchQuery: setSearchModeReducer.searchQuery
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMoviesSuccess,
  getMoviesError,
  setSearchQuery,
  setSearchMode
}, dispatch);

export const HeaderContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig', 'routingConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
