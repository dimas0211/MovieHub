import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import connectWithViewport from '../../services/connectWithViewport';

import MovieItemPage from './MovieItemPage';
import connectWithIoC from '../../services/connectWithIoC';
import {
  getGenresError,
  getGenresSuccess,
  getOneMovieSuccess,
  getOneMovieError,
  getVideosSuccess,
  getVideosError
} from '../../actions/actionsAPIcall';

const mapStateToProps = ({ ApiReducer }) => ({
  error: ApiReducer.error,
  movie: ApiReducer.movie,
  genres: ApiReducer.genresList.genres,
  videos: ApiReducer.videos,
  oneMovieId: ApiReducer.oneMovieId,
  movieOrShow: ApiReducer.movieOrShow
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGenresSuccess,
  getGenresError,
  getOneMovieSuccess,
  getOneMovieError,
  getVideosSuccess,
  getVideosError
}, dispatch);

export const MovieItemPageContainer = compose(
  connectWithIoC(['getDataService', 'apiCallConfig', 'routingConfig']),
  connectWithViewport(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MovieItemPage);
