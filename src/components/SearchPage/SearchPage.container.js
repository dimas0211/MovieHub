import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import SearchPage from './SearchPage';
import { clearSearchMode, clearSearchQuery } from '../../actions/searchMovies';
import connectWithIoC from '../../services/connectWithIoC';
import {
  getMoviesError,
  getMoviesSuccess,
  getGenresSuccess,
  getGenresError
} from '../../actions/actionsAPIcall';

const mapStateToProps = ({ ApiReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  query: setSearchModeReducer.searchQuery,
  searchMode: setSearchModeReducer.searchMode
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearSearchMode,
  clearSearchQuery,
  getMoviesSuccess,
  getMoviesError,
  getGenresSuccess,
  getGenresError
}, dispatch);

export const SearchPageContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchPage);
