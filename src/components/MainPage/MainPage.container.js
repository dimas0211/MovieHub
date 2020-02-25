import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import MainPage from './MainPage';
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

export const MainPageContainer = compose(
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainPage);
