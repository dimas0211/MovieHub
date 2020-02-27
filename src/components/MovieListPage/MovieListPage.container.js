import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import MovieListPage from './MovieListPage';
import getGenres from '../../actions/getGenres';
import getMovies from '../../actions/getMovies';
import { searchMovies } from '../../actions/searchMovies';

const mapStateToProps = ({ ApiReducer, setFiltrationParamsReducer, setSearchModeReducer }) => ({
  error: ApiReducer.error,
  movieList: ApiReducer.movieListInfo,
  genres: ApiReducer.genresList.genres,
  filtrationQueryParams: setFiltrationParamsReducer.filtrationQueryParams,
  query: setSearchModeReducer.searchQuery,
  searchMode: setSearchModeReducer.searchMode
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenres,
  getMovies,
  searchMovies
}, dispatch);

export const MovieListPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieListPage);
