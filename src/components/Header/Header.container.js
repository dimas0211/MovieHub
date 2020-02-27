import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import Header from './Header';
import { searchMovies, setSearchQuery, setSearchMode } from '../../actions/searchMovies';

const mapStateToProps = ({ ApiReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  searchQuery: setSearchModeReducer.searchQuery
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchMovies,
  setSearchQuery,
  setSearchMode
}, dispatch);

export const HeaderContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
