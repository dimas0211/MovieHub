import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import SearchPage from './SearchPage';
import getGenres from '../../actions/getGenres';
import { searchMovies, clearSearchMode, clearSearchQuery } from '../../actions/searchMovies';

const mapStateToProps = ({ ApiReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  query: setSearchModeReducer.searchQuery,
  searchMode: setSearchModeReducer.searchMode
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  searchMovies,
  clearSearchMode,
  clearSearchQuery
}, dispatch);

export const SearchPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchPage);
